<?php

namespace App\Http\Controllers;

use App\Http\Resources\SenatorResource;
use App\Http\Resources\SenatorResourceCollection;
use App\Senator;
use Faker\Provider\Person;
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
        $request->validate([
            'sen_name' => 'required',
            'sen_phone' => 'required',
            'sen_zone' => 'required',
            'sen_email' => 'required',
        ]);

        $senator = Senator::create($request->all());
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
        //
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
        //
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
