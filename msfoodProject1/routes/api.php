<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CartController ;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/categories', [CategorieController::class,'getCategories']);
Route::get('/menu/{categoryId}', [CategorieController::class, 'getMenuByCategory'])->name('menu');
Route::get('/check-email-availability', [ClientController::class, 'checkEmailAvailability']);

Route::get('/categories/menu', [CategorieController::class, 'getMenuByCategory'])->name('menu');

Auth::routes();
Route::get('/role',[ClientController::class, 'role'])->middleware('auth:clients');

Route::get('/password',[ClientController::class, 'password']);

Route::get('/dashboard',function(){
    return view('dashboard');
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/test', function(){
    $user = auth()->user();
    $role = $user->role;
    return $role ;
});

Route::get('contact', [ContactController::class, 'index']);
Route::post('contact', [ContactController::class, 'store']);
Route::get('contact/{id}', [ContactController::class, 'show']);
Route::put('contact/{id}', [ContactController::class, 'update']);
Route::delete('contact/{contact}', [ContactController::class, 'destroy']);


Route::get('/laravel-routes', function () {
    return [
        'indexCategory' => route('indexCategory'),
        'createCategory' => route('createCategory'),
        'menuindex' => route('menuindex'),
        'menuCreate' => route('menuCreate'),

    ];
});
Route::get('/cartAdmin', [CartController::class, 'cartAdmin']);


