<?php

namespace Database\Seeders;

use App\Models\Date;
use Illuminate\Database\Seeder;

class DateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Création de dates pour les 10 derniers jours
        $startDate = now()->subDays(10);

        for ($i = 0; $i <= 10; $i++) {
            $date = $startDate->copy()->addDays($i);
            
            Date::create([
                'date_value' => $date->format('Y-m-d'),
                'year' => $date->year,
                'month' => $date->month,
                'day' => $date->day
            ]);
        }
    }
}
