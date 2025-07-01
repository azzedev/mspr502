<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pandemic_stats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('location_id')->constrained();
            $table->foreignId('disease_id')->constrained();
            $table->foreignId('source_id')
                  ->constrained()
                  ->onDelete('cascade');
            $table->date('date')->index();
            $table->integer('cumulative_cases')->nullable();
            $table->integer('daily_new_cases')->nullable();
            $table->integer('active_cases')->nullable();
            $table->integer('cumulative_deaths')->nullable();
            $table->integer('daily_new_deaths')->nullable();
            $table->integer('cumulative_recovered')->nullable();
            $table->integer('daily_new_recovered')->nullable();;
            $table->decimal('new_cases_per_million', 12, 4)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pandemic_stats');
    }
};
