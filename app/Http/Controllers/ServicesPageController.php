<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServicesPageController extends Controller
{
    public function index()
    {
        return inertia('Services/Index');
    }
}
