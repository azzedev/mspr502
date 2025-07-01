<?php

namespace Database\Seeders;

use App\Models\Disease;
use Illuminate\Database\Seeder;

class DiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Disease::create(['disease_name' => 'COVID-19']);
        Disease::create(['disease_name' => 'Grippe H1N1']);
        Disease::create(['disease_name' => 'SARS']);
        Disease::create(['disease_name' => 'MERS']);
        Disease::create(['disease_name' => 'Ebola']);
    }
}
