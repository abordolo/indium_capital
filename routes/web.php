<?php

use App\Http\Controllers\ContactUsPageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesPageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/test', function () {
//     return Inertia::render('Test/Index');
// });
Route::get('/', [HomePageController::class, 'index'])->name('home');
Route::get('/contact', [ContactUsPageController::class, 'index'])->name('contact');
Route::get('/services', [ServicesPageController::class, 'index'])->name('services');
