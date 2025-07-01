<?php

namespace Database\Seeders;

use App\Models\Date;
use App\Models\Disease;
use App\Models\Location;
use App\Models\PandemicStat;
use App\Models\Source;
use Illuminate\Database\Seeder;

class PandemicStatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $locations = Location::all();
        $dates = Date::all();
        $covid = Disease::where('disease_name', 'COVID-19')->first();
        $who = Source::where('source_name', 'World Health Organization')->first();
        
        // Pour chaque emplacement
        foreach ($locations as $location) {
            $casesBase = rand(1000, 5000);
            $deathsBase = rand(50, 200);
            $recoveredBase = rand(500, 3000);
            
            // Pour chaque date
            $dateIndex = 0;
            foreach ($dates as $date) {
                // Augmentation progressive des cas/décès/récupérations
                $dailyNewCases = rand(100, 500);
                $cumulativeCases = $casesBase + ($dateIndex * $dailyNewCases);
                
                $dailyNewDeaths = rand(5, 20);
                $cumulativeDeaths = $deathsBase + ($dateIndex * $dailyNewDeaths);
                
                $dailyNewRecovered = rand(50, 300);
                $cumulativeRecovered = $recoveredBase + ($dateIndex * $dailyNewRecovered);
                
                $activeCases = $cumulativeCases - $cumulativeDeaths - $cumulativeRecovered;
                
                // Calculs de ratios
                $deathsPerHundred = $cumulativeCases > 0 ? round(($cumulativeDeaths / $cumulativeCases) * 100, 2) : 0;
                $recoveredPerHundred = $cumulativeCases > 0 ? round(($cumulativeRecovered / $cumulativeCases) * 100, 2) : 0;
                
                // Estimations
                $newCasesPerMillion = round($dailyNewCases / 10, 4); // Simulation
                $newCasesSmoothed = round($dailyNewCases * 0.9, 4); // Simulation
                $newDeathsSmoothed = round($dailyNewDeaths * 0.9, 4); // Simulation
                
                PandemicStat::create([
                    'location_id' => $location->id,
                    'date_id' => $date->id,
                    'disease_id' => $covid->id,
                    'source_id' => $who->id,
                    'cumulative_cases' => $cumulativeCases,
                    'daily_new_cases' => $dailyNewCases,
                    'active_cases' => $activeCases,
                    'cumulative_deaths' => $cumulativeDeaths,
                    'daily_new_deaths' => $dailyNewDeaths,
                    'cumulative_recovered' => $cumulativeRecovered,
                    'daily_new_recovered' => $dailyNewRecovered,
                    'deaths_per_100_cases' => $deathsPerHundred,
                    'recovered_per_100_cases' => $recoveredPerHundred,
                    'new_cases_per_million' => $newCasesPerMillion,
                    'new_cases_smoothed' => $newCasesSmoothed,
                    'new_deaths_smoothed' => $newDeathsSmoothed,
                ]);
                
                $dateIndex++;
            }
        }
    }
}
