<?php

use Illuminate\Database\Seeder;
use App\Senator;
class SenatorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(Senator::class, 36)->create();
    }
}
