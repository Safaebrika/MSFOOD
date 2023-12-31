<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'price', 'qteStock', 'categorie_id','image'];

    public function categorie(){

        return $this->belongsTo(Categorie::class, 'categorie_id');

    }

    public function carts(){

        return $this->belongsToMany(Client::class, 'carts')
                    ->withPivot('product_name', 'qte');

    }
}
