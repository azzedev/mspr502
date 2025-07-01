<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Location::create([
            'country_name' => 'France',
            'province_state' => 'Île-de-France',
            'iso_code' => 'FR-IDF',
            'latitude' => 48.8566,
            'longitude' => 2.3522,
            'who_region' => 'EURO'
        ]);

        Location::create([
            'country_name' => 'France', 
            'province_state' => 'Auvergne-Rhône-Alpes',
            'iso_code' => 'FR-ARA',
            'latitude' => 45.7578,
            'longitude' => 4.8320,
            'who_region' => 'EURO'
        ]);

        Location::create([
            'country_name' => 'États-Unis',
            'province_state' => 'New York',
            'iso_code' => 'US-NY',
            'latitude' => 40.7128,
            'longitude' => -74.0060,
            'who_region' => 'AMRO'
        ]);

        Location::create([
            'country_name' => 'Japon',
            'province_state' => 'Tokyo',
            'iso_code' => 'JP-13',
            'latitude' => 35.6762,
            'longitude' => 139.6503,
            'who_region' => 'WPRO'
        ]);

        Location::create([
            'country_name' => 'Brésil',
            'province_state' => 'São Paulo',
            'iso_code' => 'BR-SP',
            'latitude' => -23.5505,
            'longitude' => -46.6333,
            'who_region' => 'PAHO'
        ]);
    }
}
