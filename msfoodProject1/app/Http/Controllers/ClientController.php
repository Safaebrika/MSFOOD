<?php

namespace App\Http\Controllers;

use App\Models\Client;
// use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    use AuthenticatesUsers;
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $user = Client::where('email', $request->input('email'))->first();
        if ($user && Hash::check($request->input('password'), $user->password)) {
            Auth::guard('clients')->login($user); //authentification avec la table clients
            $user = Auth::user();
            return response()->json([
                'message' => 'Login successful',
                'user' => $user,
                'role' => $user->role //nous envoyons aussi le role d'utilisateur qui en train de conection
            ]);
        }
        return response()->json(['errors' => ['email' => ['These credentials do not match our records.']]], 422);
    }




    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function checkEmailAvailability(Request $request)
     {
         $email = $request->query('email');
         $user = Client::where('email', $email)->first();
         $available = !$user;

         return response()->json(['available' => $available]);
     }



public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6|confirmed',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }
    $client = new Client;
    $client->name = $request->name;
    $client->email = $request->email;
    $client->password = Hash::make($request->password);
    $client->role = 'client';
    $client->save();
    Auth::guard('clients')->login($client);
    return  $client;
}


   public function GetRole(Request $request)
   {
    $user = auth()->user();
    $role = $user->role;
        return $role ;

   }



public function password(Request $request){
    $client = Client::first();
    return $client->password;

}
     public function logout(Request $request)
    {
        Auth::logout();
        return redirect('/');

    }

    
}
