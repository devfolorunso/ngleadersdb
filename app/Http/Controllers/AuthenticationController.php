<?php

namespace App\Http\Controllers;


class AuthenticationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function loginPage()
    {
        //
        return view('login');
    }

    public function registerationPage()
    {
        //
        return view('register');
    }

}
