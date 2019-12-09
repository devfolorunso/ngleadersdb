@extends('layouts.homelayout')

@section('content')
    <div class="container">
       <ul class="list p-2 px-4" style="font-size: 16px;">
           
          {{-- 1st End Point --}}
          <li>List all Senators</li>
          <p class="jumbotron p-4"><code class="code"><a href="api/senator/all">https://ngleadersdb.com.ng/api/senator/all</a></code></p>

          {{-- 1st End Point --}}
          <li>Filter Senators by State</li>
          <p class="jumbotron p-4"><code class="code"><a href="api/senator/state/lagos">https://ngleadersdb.com.ng/api/senator/state/{state}</a></code></p>

          {{-- 1st End Point --}}
          <li>Shortlist Senators to any number</li>
          <p class="jumbotron p-4"><code class="code"><a href="api/senator/limit/4">https://ngleadersdb.com.ng/api/senator/limit/{limit}</a></code></p>

          {{-- 1st End Point --}}
          <li>Filter Senators by Geo-political zones</li>
          <p class="jumbotron p-4"><code class="code"><a href="api/senator/geozone/south-west">https://ngleadersdb.com.ng/api/senator/geozone/{geozone}</a></code></p>

          {{-- 1st End Point --}}
          <li>List Senators with Names Prefixed by any Alphabet</li>
          <p class="jumbotron p-4"><code class="code"><a href="api/senator/nameprefix/b">https://ngleadersdb.com.ng/api/senator/nameprefix/{alphabet}</a></code></p>

          {{-- 1st End Point --}}
          <li>Do you know his/her Name? Get 'em</li>
          <p class="jumbotron p-4"><code class="code"><a href="api/senator/name/OmoAgege">https://ngleadersdb.com.ng/api/senator/name/{name}</a></code></p>

          {{-- 1st End Point --}}
          <li>Filter Senators by Political Party</li>
          <p class="jumbotron p-4"><code class="code"><a href="api/senator/party/apc">https://ngleadersdb.com.ng/api/senator/party/{party}</a></code></p>

       </ul>
    </div>
@endsection
