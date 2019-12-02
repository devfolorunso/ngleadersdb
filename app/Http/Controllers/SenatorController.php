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

        $filteredSenator = Senator::where('state', '=', $state)->get();

        if($filteredSenator->count() > 0){
            return new SenatorResourceCollection($filteredSenator);
        }
        else{

            return response()->json(['error' => "No record found for $state", 'status' => '404']);
        }

    }

      /**
     * Display a listing Senators by geo zone.
     *
     * @return \Illuminate\Http\Response
     */

    public function filterZone($geozone)
    {

        $filterZone = Senator::where('sen_zone', '=', $geozone)->get();

        if($filterZone->count() > 0){

            return new SenatorResourceCollection($filterZone);
        }
        else{

            return response()->json(['error' => "No record found for senators whose geo zone is $geozone", 'status' => '404']);
        }

    }

      /**
     * Display a listing Senators by alphabet.
     *
     * @return \Illuminate\Http\Response
     */

    public function filterByAlphabet($alphabet)
    {

        $filterByAlphabet = Senator::where("sen_name", "like", "$alphabet%")->get();
        // dd($filterByAlphabet);

        if($filterByAlphabet->count() > 0){
            return new SenatorResourceCollection($filterByAlphabet);
        }
        else{

            return response()->json(['error' => "No record found for senators whose name starts with $alphabet", 'status' => '404']);
        }

    }


      /**
     * Display a listing Senators by Name.
     *
     * @return \Illuminate\Http\Response
     */
    public function filterByName($senname)
    {

        $filterByName = Senator::where('sen_name', '=', $senname)->get();

        if($filterByName->count() > 0){

            return new SenatorResourceCollection($filterByName);
        }
        else{

            return response()->json(['error' => "No record found for senators whose name is $senname", 'status' => '404']);
        }

    }



      /**
     * Display a listing Senators by Political party.
     *
     * @return \Illuminate\Http\Response
     */
    public function filterByParty($party)
    {

        $filterByParty = Senator::where('political_party', '=', $party)->get();

        if($filterByParty->count() > 0){

            return new SenatorResourceCollection($filterByParty);
        }
        else{

            return response()->json(['error' => "No record found for senator whose political party is $party", 'status' => '404']);
        }

    }

      /**
     * Display a listing Senators by Elected Year.
     *
     * @return \Illuminate\Http\Response
     */
    public function filterByYear($year)
    {

        $filterByYear = Senator::where('year_elected', '=', $year)->get();

        if($filterByYear->count() > 0){

            return new SenatorResourceCollection($filterByYear);
        }
        else{

            return response()->json(['error' => "No record found for senator whose elected year is $year", 'status' => '404']);
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
        $data=  $request->validate([
            'sen_name' => 'required',
            'sen_phone' => 'required',
            'sen_zone' => 'required',
            'sen_email' => 'required',
            'state' => 'required',
            'district' => 'required',
            'year_elected' => 'required',
            'political_party' => 'required',
            'sen_pic' => 'required|mimes:png,jpg,jpeg',
        ]);

        $image = $request->file('sen_pic');

        $name = $request->file('sen_pic')->getClientOriginalName();

        $image_name = $request->file('sen_pic')->getRealPath();;

        /* Store image on cloudinary*/
        Cloudder::upload($image_name, null);
        list($width, $height) = getimagesize($image_name);

        $image_url= Cloudder::show(Cloudder::getPublicId(), ["width" => $width, "height"=>$height]);

        $senator = Senator::create([
            'sen_name' => $data['sen_name'],
            'sen_phone' => $data['sen_phone'],
            'sen_zone' => $data['sen_zone'],
            'sen_email' => $data['sen_email'],
            'state' => $data['state'],
            'year_elected' => $data['year_elected'],
            'political_party' => $data['political_party'],
            'district' => $data['district'],
            'sen_pic' =>  $image_url
            ]);

            if($senator){
                return response()->json(['success' => "Senator ".$data['sen_name']." Added successfully", 'status' => 201]);
                // return new SenatorResource($senator);
            }else{
                return response()->json(['Success' => "Something went wrong! Ensure that you fill all fields", 'status' => 422]);
            }

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
        $senator->delete($senator);
        return new SenatorResource($senator->all());
    }
}
