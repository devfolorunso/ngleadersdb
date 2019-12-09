@extends('layouts.homelayout')

@section('content')
    <div class="container space-top">
        
        <div class="row justify-content-center">
            
            <div class="col-md-8 px-2">
               
                <div class="text-center">
                    
                    <H1 class="welcome-note">Welcome to <SPAN style="color:#76BA1B;">NG</SPAN>leaders<SPAN style="color:#76BA1B;">DB</SPAN>
                    </H1>
                    
                    <p class="mt-4 about-text">An Open, free, and crowd-sourced database of Information about leaders from Nigeria. We also provide a free and almost a no-brainer JSON API for all developers wanting to use it. <br/>Currently supporting Information in the following sectors: </p>
                    
                    <div class="container support-gallery d-flex justify-content-center" width="100%">
                        {{-- <marquee> --}}

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Seal_of_the_House_of_Representatives_of_Nigeria.svg/2000px-Seal_of_the_House_of_Representatives_of_Nigeria.svg.png" alt="" width="80" height="80" class="mr-2">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Seal_of_the_Senate_of_Nigeria.svg/1200px-Seal_of_the_Senate_of_Nigeria.svg.png" alt="" width="80" height="80" class="mr-2">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Seal_of_the_President_of_Nigeria.svg/2000px-Seal_of_the_President_of_Nigeria.svg.png" alt="" width="80" height="80" class="mr-2">

                        {{-- </marquee> --}}

                    </div>

                </div>

            </div>

        </div>
    </div>
@endsection
