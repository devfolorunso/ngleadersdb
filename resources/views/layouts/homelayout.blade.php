<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>NGLeadersDB</title>

    <!-- Scripts -->

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    <script  src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

    <!-- Styles -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
</head>
<body>
    <div id="app">

        <nav class="navbar navbar-expand-lg navbar-dark bg-black py-4 px-4">
        <div class="container">                
          <a class="navbar-brand" href="/">NGLeadersDB</a>
          <button class="navbar-toggler bars" style="border: none;" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars fa-2x" style="color:#76BA1B;"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active space-right">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item space-right">
                <a class="nav-link" href="/api">API</a>
              </li>
            </ul>
            <form class="my-2 my-lg-0">
                   <div class="search">
                      <input type="text" class="searchTerm" placeholder="What are you looking for?">
                      <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                     </button>
                   </div>
            </form>
          </div>

        </div>
        </nav>

        <main class="py-4" style="margin-bottom: 6em;">
            @yield('content')
        </main>

        <div class="py-3 container-fluid fixed-bottom bg-black text-white">
          <p class="p-4"> &copy; Copyright <script> document.write( new Date().getFullYear());</script>. Built by Devs 💻 for Devs.</p>
        </div>
    
    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
