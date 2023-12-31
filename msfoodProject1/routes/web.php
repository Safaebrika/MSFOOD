<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\MenuController ;
use App\Http\Controllers\CartController ;
use App\Http\Controllers\CategorieController ;
use App\Http\Controllers\ContactController;
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
// Route::post('/api/login', ClientController::class , 'login');
Route::get('{any}', function (){
    return view('homereact');
})->where('any', '^(?!api|password|role|dashboard|test|menu|logout|GetRole|category|AdminName).*');
Route::middleware(['auth:clients'])->group(function () {
    Route::prefix('/api')->group(function(){
        Route::get('/cart', [CartController::class, 'index']);
        Route::patch('/cart/{itemId}', [CartController::class, 'update']);
        Route::delete('/cart/{itemId}', [CartController::class, 'destroy']);
    });
});

Route::prefix('/menu')->group(function(){

    Route::get('/', [MenuController::class, 'index'])->name('menuindex');
    Route::get('/create', [MenuController::class, 'create'])->name('menuCreate');
    Route::post('/', [MenuController::class, 'store'])->name('menuStore');
    Route::get('/{id}/edit', [MenuController::class, 'edit'])->name('menuEdit');
    Route::put('/{id}', [MenuController::class, 'update'])->name('menuUpdate');
    Route::delete('/{id}', [MenuController::class, 'destroy'])->name('menuDestroy');

});

Route::prefix('/category')->group(function(){

    Route::get('/', [CategorieController::class, 'indexCategory'])->name('indexCategory');
    Route::get('/create', [CategorieController::class, 'createCategory'])->name('createCategory');
    Route::post('/', [CategorieController::class, 'storeCategory']);
    Route::get('/{id}/edit', [CategorieController::class, 'editCategory'])->name('editCategory');
    Route::put('/{id}', [CategorieController::class, 'updateCategory'])->name('updateCategory');
    Route::delete('/{id}', [CategorieController::class, 'destroyCategory'])->name('destroyCategory');
    // Route::get('/cartAdmin', [CartController::class, 'cartAdmin']);


});
//  Auth Routes

Route::post('/register/client', [ClientController::class, 'register'])->name('register');
Route::post('/logout', [ClientController::class, 'logout'])->name('logout')->middleware('auth:clients');
// Route::post('/logout', function () {
//     Auth::logout();
//     return redirect('/login/client');
// });
Auth::routes();
Route::get('/role',[ClientController::class, 'role'])->middleware('auth:clients');

Route::get('/password',[ClientController::class, 'password']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/login/client', [ClientController::class, 'login'])->middleware('auth:clients')->name('loginclient');
// Route::get('/GetRole', function(){
//     $user = auth()->user();
//     $role = $user->role;
//         return $role ;
// })->middleware('auth:clients');
Route::get('/GetRole', [ClientController::class, 'GetRole'])->middleware('auth:clients');

// Route::post('/addToCart1', [CartController::class, 'addToCart']);
Route::middleware(['auth:clients'])->group(function () {
    Route::post('/addToCart', [CartController::class, 'addToCart']);
});
Route::get('/AdminName', function () {
    $user = auth()->user();
    $role = $user->role;
   if($role =='admin'){
    return $AdminName=$user->name ;
   }
})->middleware('auth:clients');

Route::middleware('web')->group(function () {
    Route::get('/sanctum/csrf-cookie', function () {
        return response()->json(['message' => 'CSRF cookie set']);
    });
});
// Route::middleware(['auth:clients'])->group(function () {
    // Route::get('/api/contact', [ContactController::class, 'index']);
    // Route::post('/api/contact', [ContactController::class, 'store']);
    // Route::get('/api/contact/{id}', [ContactController::class, 'show']);
    // Route::put('/api/contact/{id}', [ContactController::class, 'update']);
    // Route::delete('/api/contact/{contact}', [ContactController::class, 'destroy']);
// });
