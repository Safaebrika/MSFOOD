<?php
namespace App\Http\Controllers;
use App\Models\Cart;
use App\Models\Menu;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class CartController extends Controller
{
    public function index()
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }
        $user = Auth::user();
        $username = $user->name;
        $userId = $user->id;
        $cartItems = Cart::where('client_id', $userId)->with('menu')->get();
        $responseData = [
            'username' => $username,
            'cartItems' => $cartItems
        ];
        return response()->json($responseData);
    }
    public function addToCart(Request $request){
        $user_id = Auth::id() ;
        // $user_id = 28;
        $menu_id = $request->menu_id;
        $product_name = $request->product_name;
        $quantity = $request->qte;
        $cartItem = new Cart;
        $cartItem->menu_id = $menu_id;
        $cartItem->client_id = $user_id;
        $cartItem->product_name = $product_name;
        $cartItem->qte = $quantity;
        $cartItem->save();
        return response()->json([
            "status" => 201,
            "message" => "The item was added to the cart successfully.",
        ]);
    }
    public function destroy($itemId)
    {
        $cartItem = Cart::findOrFail($itemId);
        $cartItem->delete();
        $cartItems = Cart::with('menu', "client")->get();
        return response()->json($cartItems);
    }
    public function cartAdmin ()
    {
        $cartItems = Cart::with('menu', "client")->get();
        $groupedCartItems = $cartItems->groupBy('client_id');
        return $groupedCartItems;

    }
}
