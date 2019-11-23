<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Senator;
use Faker\Generator as Faker;

$factory->define(Senator::class, function (Faker $faker) {
    return [
        //
        'sen_name' => $faker->firstName,
        'sen_phone' => $faker->phoneNumber,
        'sen_email' => $faker->safeEmail,
        'sen_zone' => $faker->city,
    ];
});
