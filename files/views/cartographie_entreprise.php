<?php 
    require_once('./Actions/services.php');
    
    $listeDomaine = getDomaines();
    $listeStatut = getStatuts();
    $filtreDomaine= "";
    $filtreRecherche="";
    $filtreCommunes="";
    $liste_structures="";
    $filtreStatut="";
    if( isset( $_GET['domaine'])|| isset( $_GET['statut'])||isset( $_GET['query'])){
        $filtreDomaine = $_GET['domaine'] ?? null;
        $filtreStatut = $_GET['statut']?? null;
        $filtreRecherche= $_GET['query']??null;
        $filtreCommunes = $_GET['communes']??null;
        $liste_structures = filtres($filtreStatut,$filtreDomaine,$filtreCommunes,$filtreRecherche);
        $seleted = "";
       
    }else{
        $liste_structures = getStructures();
        $seleted = "selected";
       
    }
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Annuaire || CRESS Guyane || Le réseau Guyanais de l'ESS</title>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/cressguyane-180x180-removebg-preview.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/logo-cressguyane-32x32-removebg-preview.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/logo-cressguyane-16x16-removebg-preview.png">
    <!--<link rel="icon" href="assets/images/favicons/cress-favicon.ico" />-->
    <link rel="manifest" href="assets/images/favicons/site.webmanifest">

    <!-- Fonts-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">



    <!-- Css-->
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="assets/css/jarallax.css">

    <link rel="stylesheet" href="assets/css/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="assets/css/vegas.min.css">
    <link rel="stylesheet" href="assets/css/nouislider.min.css">
    <link rel="stylesheet" href="assets/css/nouislider.pips.css">
    <link rel="stylesheet" href="assets/css/asting.css">
    <!-- Template styles -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link href='https://api.mapbox.com/mapbox.js/v3.2.1/mapbox.css' rel='stylesheet' />
    <style>
  * {
    box-sizing: border-box;
  }
  
  body {
    color: #404040;
    font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 22px;
    margin: 0;
    font-weight: 400;
    line-height: 20px;
    padding: 20px 2px;
  }

  a {
    color: #404040;
    text-decoration: none;
  }

  a:hover {
    color: #101010;
  }

  /* The page is split between map and sidebar - the sidebar gets 1/3, map
  gets 2/3 of the page. You can adjust this to your personal liking. */
  .sidebar {
    position: absolute;
    width: 33.3333%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    border-right: 1px solid rgba(0, 0, 0, 0.25);
  }

  .map {
    position: absolute;
    left: 33.3333%;
    width: 66.6666%;
    top: 0;
    bottom: 0;
  }

  .heading {
    background: #fff;
    border-bottom: 1px solid #eee;
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
  }
</style>  
</head>

<body>

    <div class="preloader">
        <img src="assets/images/cressloader.png" class="preloader__image" alt="logo CRESS">
    </div><!-- /.preloader -->

    <div class="page-wrapper">

        <div class="site-header__header-one-wrap clearfix">
            <div class="container">

                <div class="site-header__logo-box float-left">
                    <div class="site-header__logo">
                        <a href="index.php"><img src="assets/images/resources/cress-logo.png" alt="logo CRESS Guyane"></a>
                    </div>
                </div>

                <header class="main-nav__header-one">
                    <div class="main-nav__header-one__top clearfix">
                        <div class="main-nav__header-one__top-left">
                            <ul class="list-unstyled">
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-phone-square-alt"></i>
                                    </div>
                                    <div class="text">
                                        <p><a href="tel:0594 20 76 70">0594 20 76 70</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:contact@cress-guyane.org">contact@cress-guyane.org</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="main-nav__header-one__top-right">
                            <div class="main-nav__header-one__top-social">
                                <a href="https://www.facebook.com/cressguyane/"><i class="fab fa-facebook-square"></i></a>
                                <a href="https://twitter.com/CRESSGuyane"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/cressdeguyane/"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/cress-guyane/"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="header-navigation stricky">
                        <div class="container clearfix">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="main-nav__left main-nav__left-one float-left">
                                <a href="#" class="side-menu__toggler">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="main-nav__main-navigation clearfix">
                                    <ul class=" main-nav__navigation-box float-left">
                                        <li class="dropdown current">
                                            <a href="index.php">Accueil</a>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">L'ESS</a>
                                            <ul>
                                                <li><a href="about.html">C'est quoi ?</a></li>
                                                <li><a href="volunteer.html">Gouvernance</a></li>
                                                <li><a href="become-volunteer.html">Cartographie</a></li>
                                            </ul><!-- /.sub-menu --> 
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">CRESS Guyane</a>
                                            <ul>
                                                <li><a href="cress-about.html">Qui sommes-nous ?</a></li>
                                                <li><a href="campaign-details.html">Nos missions</a></li>
                                                <li><a href="campaign-details.html">Nos dispositifs</a></li>
                                                <li><a href="cress-team.html">Notre équipe</a></li>
                                                <li><a href="campaign-details.html">Adhésion</a></li>
                                            </ul><!-- /.sub-menu -->
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Ressources</a>
                                            <ul>
                                                <li><a href="event.html">Outils</a></li>
                                                <li><a href="annuaire.php">Annuaire</a></li>
                                                <li><a href="event-details.html">Cartographie</a></li>
                                            </ul><!-- /.sub-menu -->
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Actualités</a>
                                            <ul>
                                                <li><a href="news.html">Evénements</a></li>
                                                <li><a href="news-details.html">Blog</a></li>
                                                <li><a href="news-details.html">Appels à projets</a></li>
                                            </ul><!-- /.sub-menu -->
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Contact</a>
                                            <ul>
                                                <li><a href="contact.html">Formulaire</a></li>
                                                <li><a href="news-details.html">Numéros utiles</a></li>
                                            </ul><!-- /.sub-menu -->
                                        </li>
                                    </ul>
                                </div><!-- /.navbar-collapse -->
                            </div>
                            <div class="main-nav__right main-nav__right-one float-right">
                                <div class="main-nav__right__btn-one">
                                    <a href="https://forms.office.com/pages/responsepage.aspx?id=lwE60sUzf0Ou_MMX03b1svQYg2EOyrdPkJUfDw0AiPNUMkdSVkFBRkhTNVBOS1BCNVYyVjZGNzlZNi4u&fbclid=IwAR3Fcr5WYNCjMHtk-mmHUpOzRpf06VKhbmyHRPkmzGCk-B6-9zd-BM81ztI"><i class="fas fa-handshake"></i>Adhérez</a>
                                </div>
                                <!--<div class="main-nav__right__icon-cart-box">
                                    <a href="#">
                                        <span class="icon-shopping-cart"></span>
                                    </a>
                                </div>-->
                                <div class="main-nav__right__icon-search-box">
                                    <a href="#" class="main-nav__search search-popup__toggler">
                                        <i class="icon-magnifying-glass"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>

        <!--Page Header Start-->
        <section class="page-header" style="background-image: url(assets/images/backgrounds/page-header-bg.jpg);">
            <div class="container">
                <div class="page-header__inner">
                    <h2>Annuaire</h2>
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.php">Accueil</a></li>
                        <li><span>/</span></li>
                        <li>Annauire</li>
                    </ul>
                    <form class="form-group">
                <div class="form-row align-items-center">
                    <div class="col my-1">
                        <select class="custom-select" id="inlineFormCustomSelect" name="statut">
                            <option selected value="">Statut</option>
                            <?php
                    foreach($listeStatut as $statut) :
                       
                     
                
                ?>
                            <option value="<?php echo $statut['id'];?>" <?php  if($statut['id']==$filtreStatut){echo "selected";}?>><?php echo $statut['statut'];?></option>
                <?php endforeach ?>
                        </select>
                    </div>
                    <div class="col my-1">

                        <select class="custom-select" id="inlineFormCustomSelect" name="domaine">
                            <option selected value="">Domaine</option>
                            <?php
                        foreach($listeDomaine as $domaine) :
                        ?>
                            <option value="<?php echo $domaine['id'];?>" <?php  if($domaine['id']==$filtreDomaine){echo "selected";}?>> <?php echo $domaine['domaine'];?> </option>
                        <?php endforeach ?>
                        </select>
                    </div>
                    <div class="col my-1">

                        <select class="custom-select" id="inlineFormCustomSelect" name="communes">
                            <option selected value="">Communes</option>
                            <?php
                        foreach($listeCommunes as $communes) :
                        ?>
                            <option value="<?php echo $communes['id'];?>" <?php  if($communes['id']==$filtreCommunes){echo "selected";}?>> <?php echo $communes['communes'];?> </option>
                        <?php endforeach ?>
                        </select>
                    </div>
                    <div class="col">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-search"></i>
                            </div>
                            </div> 
                            <input id="query" name="query" placeholder="Recherche..." type="text"  class="form-control">
                        </div>
                 </div>
                    <div class="col-auto my-1">
                    <button type="submit" class="btn btn-primary" >Recherche</button>
                    </div>
                </div>
        </form>
                </div>
            </div>
        </section>
        <!--Page Header End-->

        <!--Event Page Start-->
        <section class="event-page">
            
            <div class="container">
           
           
            
              
                <div class='sidebar'>
  <div class='heading'>
    <h1>Structure de l'ESS en Guyane</h1>
  </div>
  <div id='listings' class='listings'></div>
</div>
<div id="map" class="map"></div>
                <!-- /.text-center -->
            </div>
        </section>
        <!--Event Page End-->

       <!--Site Footer One Start-->
       <footer class="site-footer" style="background-image: url(assets/images/backgrounds/cress-site_footer_bg.png)">
        <div class="container">
            <div class="site-footer__one-top">
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                        <div class="footer-widget__column footer-widget__about">
                            <div class="footer-widget__logo">
                                <a href="index.html"><img src="assets/images/resources/logo cress blanc.png" alt="logo CRESS Guyane en pied de page"></a>
                            </div>
                            <p class="footer-widget__text">Suivez-nous sur les réseaux sociaux et recevez les
                               dernières actualités de l'ESS en Guyane.</p>
                            <div class="site-footer__social">
                                <a href="https://twitter.com/CRESSGuyane" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/cressguyane" target="_blank" class="clr-fb"><i class="fab fa-facebook-square"></i></a>
                                <a href="https://www.linkedin.com/company/cress-guyane/" target="_blank" class="clr-dri"><i class="fab fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/cressdeguyane/" target="_blank" class="clr-ins"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div class="footer-widget__column footer-widget__explore clearfix">
                            <h3 class="footer-widget__title">Menu</h3>
                            <ul class="footer-widget__explore-list list-unstyled">
                                <li><a href="#">Donate</a></li>
                                <li><a href="#">Campaigns</a></li>
                                <li><a href="#">Fundraise</a></li>
                                <li><a href="#">Porteurs</a></li>
                                <li><a href="#">Partenaires</a></li>
                            </ul>
                            <ul class="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                                <li><a href="#">Fundraising</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Faqs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div class="footer-widget__column footer-widget__contact">
                            <h3 class="footer-widget__title">Contact</h3>
                            <ul class="list-unstyled footer-widget__contact-list">
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-phone-square-alt"></i>
                                    </div>
                                    <div class="text">
                                        <p><a href="tel:0594207670">0594 20 76 70</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:contact@cress-guyane.org">contact@cress-guyane.org</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="text">
                                        <p>10, rue des Remparts <br>97300 CAYENNE</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div class="footer-widget__column footer-widget__support">
                            <h3 class="footer-widget__title">Devenez membre</h3>
                            <p class="footer-widget__support-text">Bénéficiez d'une représentation
                                auprès des partenaires institutionnels grâce aux actions de plaidoyer menées.</p>
                            <div class="footer-widget__support-btn">
                                <a href="https://forms.office.com/pages/responsepage.aspx?id=lwE60sUzf0Ou_MMX03b1svQYg2EOyrdPkJUfDw0AiPNUMkdSVkFBRkhTNVBOS1BCNVYyVjZGNzlZNi4u&fbclid=IwAR3Fcr5WYNCjMHtk-mmHUpOzRpf06VKhbmyHRPkmzGCk-B6-9zd-BM81ztI" target="_blank"><i class="fas fa-handshake"></i>Adhérez</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--Site Footer One End-->

    <!--Site Footer Bottom Start-->
    <div class="site-footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="site-footer-bottom__inner">
                        <div class="site-footer-bottom__left">
                            <p>© 2022 CRESS-Guyane. Tous droits réservés - Conçu avec <i class="fa fa-heart text-danger"></i> par Anansi Writes & Andréna Solution<!--<a href="http://www.anansi-writes.com/">Anansi Writes--></a></p>
                        </div>
                        <ul class="site-footer-bottom__menu list-unstyled">
                            <li><a href="#">Politique de confidentialité</a></li>
                            <li><span>/</span></li>
                            <li><a href="#">CGU</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Site Footer Bottom End-->















    </div><!-- /.page-wrapper -->

    <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>




    <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay side-menu__toggler mobile-nav__toggler"></div>
        <div class="mobile-nav__content">
            <span class="mobile-nav__close side-menu__toggler mobile-nav__toggler">
                <i class="fa fa-times"></i>
            </span>
            <div class="logo-box">
                <a href="index.html" aria-label="logo image">
                    <img src="assets/images/resources/logo-2.png" alt="" />
                </a>
            </div>
            <!-- /.logo-box -->
            <div class="mobile-nav__container clearfix"></div>
            <!-- /.mobile-nav__container -->
            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:contact@cress-guyane.org">contact@cress-guyane.org</a>
                </li>
                <li>
                    <i class="fas fa-phone-square-alt"></i>
                    <a href="tel:0594 20 76 70">0594 20 76 70</a>
                </li>
            </ul><!-- /.mobile-nav__contact -->
            <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                    <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
                    <a href="#" aria-label="pinterest"><i class="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
                </div><!-- /.mobile-nav__social -->
            </div><!-- /.mobile-nav__top -->
        </div>
    </div>



    <div class="search-popup">
        <div class="search-popup__overlay custom-cursor__overlay">
            <div class="cursor"></div>
            <div class="cursor-follower"></div>
        </div><!-- /.search-popup__overlay -->
        <div class="search-popup__inner">
            <form action="#" class="search-popup__form">
                <input type="text" name="search" placeholder="Tapez pour rechercher...">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div>


    
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    <script src="assets/js/TweenMax.min.js"></script>
    <script src="assets/js/wow.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/jquery.ajaxchimp.min.js"></script>
    <script src="assets/js/swiper.min.js"></script>
    <script src="assets/js/typed-2.0.11.js"></script>
    <script src="assets/js/vegas.min.js"></script>
    <script src="assets/js/jquery.validate.min.js"></script>
    <script src="assets/js/bootstrap-select.min.js"></script>
    <script src="assets/js/countdown.min.js"></script>
    <script src="assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="assets/js/bootstrap-datepicker.min.js"></script>
    <script src="assets/js/nouislider.min.js"></script>
    <script src="assets/js/isotope.js"></script>
    <script src="assets/js/appear.js"></script>
    <script src="assets/js/jarallax.js"></script>
    <script src='https://api.mapbox.com/mapbox.js/v3.2.1/mapbox.js'></script>
    <script src="assets/js/map.js"></script>
    <!-- template scripts -->
    <script src="assets/js/theme.js"></script>


</body>

</html>