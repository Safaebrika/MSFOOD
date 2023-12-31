<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function role(Request $request){
    //     $user = Auth::user(); // Récupère l'utilisateur authentifié

    //     return response()->json([
    //         'role' => $user->role,
    //     ]);

    // }
    public function register(Request $request)
     {
        $validator = Validator::make($request->all(), [
             'name' => 'required|string',
             'email' => 'required|email|unique:users',
             'password' => 'required|string|confirmed',
         ]);
         if ($validator->fails()) {
            return redirect('admin/register')
                        ->withErrors($validator)
                        ->withInput();
        }
         $user = Client::create([
             'name' => $request->name,
             'email' => $request->email,
             'password' => Hash::make($request->input('password')),
         ]);

         Auth::guard('clients')->login($user);

         return redirect('/user/dashboard')->with('register', 'Bienvenue');
     }

//      public function login(Request $request)
//      {
//         $credentials = $request->validate([
//             'email' => 'required|email',
//             'password' => 'required|string',
//         ]);

//         $user = Client::where('email', $credentials['email'])->first();

//         if ($user && Hash::check($credentials['password'], $user->password)) {
//             Auth::guard('clients')->login($user);
//             return redirect('/admin/dashboard');
//         } else {
//             return redirect('/login')->with('error', 'L\'email ou le mot de passe est incorrect');
//         }
//    }
public function password(Request $request){
    $client = Client::first(); // Remplacez cette ligne par la logique pour récupérer le client approprié
    return $client->password;

}
     public function logout(Request $request)
    {
        if (Auth::check()) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerate();
            return redirect('/home');

        }

    }}

