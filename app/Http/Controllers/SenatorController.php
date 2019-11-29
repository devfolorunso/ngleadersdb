<?php

namespace App\Http\Controllers;

use App\Http\Resources\SenatorResource;
use App\Http\Resources\SenatorResourceCollection;
use JD\Cloudder\Facades\Cloudder;
use App\Senator;
use Illuminate\Http\Request;


class SenatorController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index():SenatorResourceCollection
    {
        return new SenatorResourceCollection(Senator::paginate());
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all():SenatorResourceCollection
    {
        return new SenatorResourceCollection(Senator::all());
    }


    /**
     * Display a listing Senatorsby state.
     *
     * @return \Illuminate\Http\Response
     */
    public function filterState($state)
    {
        // dd('Here');

        $filteredSenator = Senator::where('state', '=', $state)->get();

        if($filteredSenator->count() > 0){
            return new SenatorResourceCollection($filteredSenator);
        }
        else{

            return response()->json(['error' => "No record found for $state", 'status' => '404']);
        }

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data=  $request->validate([
            'sen_name' => 'required',
            'sen_phone' => 'required',
            'sen_zone' => 'required',
            'sen_email' => 'required',
            'sen_pic' => 'required|mimes:jpeg,bmp,jpg,png',
        ]);
        $image = $request->file('sen_pic');

        $name = $request->file('sen_pic')->getClientOriginalName();

        $image_name = $request->file('sen_pic')->getRealPath();;

        Cloudder::upload($image_name, null);
        list($width, $height) = getimagesize($image_name);

        $image_url= Cloudder::show(Cloudder::getPublicId(), ["width" => $width, "height"=>$height]);

        $image->move(public_path("uploads"), $name);

        $senator = Senator::create([
            'sen_name' => $data['sen_name'],
            'sen_phone' => $data['sen_phone'],
            'sen_zone' => $data['sen_zone'],
            'sen_email' => $data['sen_email'],
            'sen_pic' =>  $image_url
            ]);

        return new SenatorResource($senator);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Senator  $senator
     * @return SenatorResource

     */
    public function show(Senator $senator): SenatorResource
    {
        return new SenatorResource($senator);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Senator  $senator
     * @return \Illuminate\Http\Response
     */
    public function edit(Senator $senator)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Senator  $senator
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Senator $senator)
    {
        //
        $senator->update($request->all());
        return new SenatorResource($senator);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Senator  $senator
     * @return \Illuminate\Http\Response
     */
    public function destroy(Senator $senator)
    {
        //
        $senator->delete($senator);
        return new SenatorResource($senator->all());
    }
}
