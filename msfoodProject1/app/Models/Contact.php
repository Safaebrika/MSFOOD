<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $fillable =['username','email' ,'message' ,'client_id'];
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
