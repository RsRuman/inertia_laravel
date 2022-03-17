<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home',[
        'name' => 'RsRuman'
    ]);
});

Route::get('/users', function () {
    sleep(2);
    return Inertia::render('User');
});

Route::get('/setting', function () {
    return Inertia::render('Setting');
});

Route::post('/logout', function () {
    return '<h1 style="text-align: center">logout</h1>';
});
