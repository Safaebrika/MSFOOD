<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categories = Categorie::all();
        $menus = Menu::all();

        return view('menu.index', ['categories'=>$categories,'menus'=>$menus]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $categories = Categorie::all();

        return view('menu.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $validatedData = $request->validate([
            // Add validation rules for other fields...
            'image' => 'required',
        ]);
        $menu = new Menu;
        $menu->title = $request->title;
        $menu->description = $request->description;
        $menu->price = $request->price;
        $menu->qteStock = $request->qteStock;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $filename);
            $menu->image = $filename;
        }
        $menu->categorie_id = $request->categorie_id;
        $menu->save();

        return redirect(route('menuindex'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $categories = Categorie::all();
        $menu = Menu::find($id);

        return view('menu.edit',['categories'=>$categories,'menu'=>$menu]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $validatedData = $request->validate([
            // Add validation rules for other fields...
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $menu =Menu::find($id);
        $menu->title = $request->title;
        $menu->description = $request->description;
        $menu->price = $request->price;
        $menu->qteStock = $request->qteStock;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $filename);
            $menu->image = $filename;
        }
        $menu->categorie_id = $request->categorie_id;
        $menu->save();

        return redirect(route('menuindex'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $menu = Menu::find($id);
        $menu->delete();

        return redirect(route('menuindex'));
    }
}
