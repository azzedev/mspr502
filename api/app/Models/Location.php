<?php

namespace App\Models;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Put(),
        new Delete(),
    ]
)]
class Location extends Model
{
    protected $fillable = [
        'country_name', 
        'province_state', 
        'iso_code', 
        'latitude', 
        'longitude', 
        'who_region'
    ];

    public function pandemicStats(): HasMany
    {
        return $this->hasMany(PandemicStat::class);
    }
}
