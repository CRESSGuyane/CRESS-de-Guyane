<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/views/index.php';
        break;
    case '' :
        require __DIR__ . '/views/index.php';
        break;
    case '/contact' :
        require __DIR__ . '/views/contact.php';
        break;

    case ('/inscription') :
        require __DIR__ . '/views/register.php';
        break;
    case ('/register') :
        require __DIR__ . '/views/register.php';
        break;
    case '/apropos' :
        require __DIR__ . '/views/about.php';
        break;
    case '/about' :
            require __DIR__ . '/views/about.php';
            break;

    case '/annuaire' :
        require __DIR__ . '/views/annuaire.php';
        break;
    
    case '/gouvernance' :
        require __DIR__ . '/views/gouvernance.php';
        break;
    case '/cartographie' :
        require __DIR__ . '/views/cartographie.php';
        break;

    case '/cress-about' :
        require __DIR__ . '/views/cress-about.php';
        break;
    case '/cress-team' :
        require __DIR__ . '/views/cress-team.php';
        break;
    case '/nos-dispositifs' :
        require __DIR__ . '/views/nos-dispositifs.php';
        break;
    case '/nos-missions' :
        require __DIR__ . '/views/nos-missions.php';
        break;
    
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}