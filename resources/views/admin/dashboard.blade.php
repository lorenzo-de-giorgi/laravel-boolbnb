@extends('layouts.app')

<div id="loader">
@section('content')
<div class="container vh-100">
    <header class="py-3 mb-4 border-bottom">
        <h1>Dashboard</h1>
    </header>
    <nav>
        
    </nav>
    <main>
        ciao
        @foreach ($views as $view )
        <p>{{$view->ip_address}}</p>
        
        @endforeach
    </main>
</div>
</div>
@endsection
</div>