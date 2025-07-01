<?php

namespace Database\Seeders;

use App\Models\Source;
use Illuminate\Database\Seeder;

class SourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Source::create([
            'source_name' => 'World Health Organization',
            'source_description' => 'Données officielles de l\'Organisation mondiale de la santé',
            'url' => 'https://covid19.who.int/data'
        ]);
        
        Source::create([
            'source_name' => 'Johns Hopkins University',
            'source_description' => 'Centre de science et d\'ingénierie des systèmes de l\'Université Johns Hopkins',
            'url' => 'https://coronavirus.jhu.edu/map.html'
        ]);
        
        Source::create([
            'source_name' => 'Santé Publique France',
            'source_description' => 'Agence nationale de santé publique française',
            'url' => 'https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19'
        ]);
    }
}
