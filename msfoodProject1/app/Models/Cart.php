<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['product_name', 'qte', 'menu_id', 'client_id'];

   public function menu(){
    return $this->belongsTo(Menu::class);
   }

   public function client(){
    return $this->belongsTo(Client::class);
   }
}
