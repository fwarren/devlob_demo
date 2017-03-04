<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return response()->json([
        'user' => [ 'first_name' => 'Fred', 'last_name' => 'Warren' ]
    ]);
});

