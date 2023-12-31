<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Categorie;
use App\Models\Menu;
use Illuminate\Http\Request;
use Iliminate\Support\Facades\Log ;
class CategorieController extends Controller
{
    public function indexCategory(){
        $categories = Categorie::all();
        return view('categoriesAdmin.categoryIndex', compact('categories'));
    }

    public function createCategory(){
        return view('categoriesAdmin.categoryCreate');
    }
    public function storeCategory(Request $request){
        $validatedData = $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $category = new Categorie;
        $category->type= $request->type ;
        $category->description = $request->description;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $filename);
            $category->image = $filename;
        }
        $category->save();
        return redirect(route('indexCategory'));
    }

    public function editCategory($id){
        $category = Categorie::find($id);
        return view('categoriesAdmin.categoryEdit', compact('category'));
    }
    public function updateCategory(Request $request){
        $validatedData = $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $category = Categorie::find($request->id);
        $category->type= $request->type ;
        $category->description = $request->description;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $filename);
            $category->image = $filename;
        }
        $category->save();
        return redirect(route('indexCategory'));

    }

    public function destroyCategory($id){
        $category = Categorie::find($id);
        $category->delete();

        return redirect(route('indexCategory'));
    }
   public function getCategories(){
     $categories = Categorie::all();
     return $categories;
   }
   public function getMenuByCategory(Request $request)
   {
       $categories = Categorie::all();
       $categories->load('menus');

       return $categories;
   }

}
