<?php 
    require_once('./Actions/services.php');
    $structures = getStructure($_GET['id']);
    //$descriptions = getDescription($_GET['description_structure']);


?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Détails structure ESS || CRESS Guyane || Le réseau Guyanais de l'ESS</title>
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
                        <a href="index.php"><img src="assets/images/resources/logo.png" alt=""></a>
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
                                            <a href="index.html">Accueil</a>
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
                    <h2><?php echo $structures['nom_structure'] ?> </h2>
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Accueil</a></li>
                        <li><span>/</span></li>
                        <li>Détails de la structure</li>
                    </ul>
                </div>
            </div>
        </section>
        <!--Page Header End-->

        <!--Event Details Top Start-->
        <section class="event-details-top">
            <div class="container">
                <div class="row">
                    <!-- <div class="col-xl-6 col-lg-6">
                        <div class="event-details-top__image">
                            <img src="assets/images/event/event-detials-img-1.jpg" alt="">
                        </div>
                    </div> -->
                    <div class="col-xl col-lg">
                        <div class="event-details-top__contant">
                            <h3 class="event-details-top__title"><?php echo $structures['nom_structure'] ?></h3>
                            <p class="event-details-top__text-one"><?php echo $structures['description_structure'] ?></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Event Details Top End-->

        <!--Event Details Bottom Start-->
        <section class="event-details-bottom">
            <div class="container">
                <div class="row">
                     <div class="col-xl-4 col-lg-4">
                        <div class="event-details-bottom__venue">
                        <div class="event-details-bottom-shape-1" style="background-image: url(assets/images/shapes/event-details-bottom-shape.png)"></div>
                            <h3 class="event-details-bottom__venue-title">Siège</h3>
                            <p class="event-details-bottom__venue-text"><?php echo $structures['adresse_siege'] ?></p>
                            <ul class="list-unstyled">
                                <li>9:00am 02:00pm</li>
                                <li>New York</li>
                            </ul>
                            <div class="event-details-bottom__venue-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="clr-fb"><i class="fab fa-facebook-square"></i></a>
                                <a href="#" class="clr-dri"><i class="fab fa-dribbble"></i></a>
                                <a href="#" class="clr-ins"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div> 
                    <div class="col-xl-4 col-lg-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" class="event-details-bottom__map" allowfullscreen></iframe>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="event-details-bottom__organizer">
                        <div class="event-details-bottom-shape-2" style="background-image: url(assets/images/shapes/event-details-bottom-shape.png)"></div>
                            <h3 class="event-details-bottom__organizer-title">Contact privilégié</h3>
                            <p class="event-details-bottom__organizer-text">Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet adipisci veli sed quiae.</p>
                            <ul class="list-unstyled event-details-bottom__organizer-contact-info">
                                <li>
                                    <div class="event-details-bottom__organizer__icon">
                                        <i class="fas fa-phone-square-alt"></i>
                                    </div>
                                    <div class="event-details-bottom__organizer__content">
                                        <p><a href="tel:666-888-0000"> <?php echo $structures['tel_interlocuteur'] ?></a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="event-details-bottom__organizer__icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="event-details-bottom__organizer__content">
                                        <p><a href="mailto:info@company.com"> <?php echo $structures['email_interlocuteur'] ?></a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="event-details-bottom__organizer__icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="event-details-bottom__organizer__content">
                                        <p> <?php echo $structures['adresse_siege'] ?></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Event Details Bottom End-->







        <!--Site Footer One Start-->
        <footer class="site-footer" style="background-image: url(assets/images/backgrounds/site_footer_bg.jpg)">
            <div class="container">
                <div class="site-footer__one-top">
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div class="footer-widget__column footer-widget__about">
                                <div class="footer-widget__logo">
                                    <a href="index.html"><img src="assets/images/resources/footer-logo.png" alt=""></a>
                                </div>
                                <p class="footer-widget__text">Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                <div class="site-footer__social">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="clr-fb"><i class="fab fa-facebook-square"></i></a>
                                    <a href="#" class="clr-dri"><i class="fab fa-dribbble"></i></a>
                                    <a href="#" class="clr-ins"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="footer-widget__column footer-widget__explore clearfix">
                                <h3 class="footer-widget__title">Explore</h3>
                                <ul class="footer-widget__explore-list list-unstyled">
                                    <li><a href="#">Donate</a></li>
                                    <li><a href="#">Campaigns</a></li>
                                    <li><a href="#">Fundraise</a></li>
                                    <li><a href="#">Volunteers</a></li>
                                    <li><a href="#">Sponsors</a></li>
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
                                            <p><a href="tel:666-888-0000">666 888 0000</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div class="text">
                                            <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div class="text">
                                            <p>666 road, broklyn street new york 600</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div class="footer-widget__column footer-widget__support">
                                <h3 class="footer-widget__title">Support</h3>
                                <p class="footer-widget__support-text">Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                <div class="footer-widget__support-btn">
                                    <a href="campaigns.html"><i class="fas fa-heart"></i>Donate</a>
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
                                <p>© Copyright 2021 by <a href="#">Layerdrops.com</a></p>
                            </div>
                            <ul class="site-footer-bottom__menu list-unstyled">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><span>/</span></li>
                                <li><a href="#">Terms of Condition</a></li>
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
                    <img src="assets/images/resources/logo-2.png" alt=""/>
                </a>
            </div>
            <!-- /.logo-box -->
            <div class="mobile-nav__container clearfix"></div>
            <!-- /.mobile-nav__container -->
            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:needhelp@asting.com">needhelp@asting.com</a>
                </li>
                <li>
                    <i class="fas fa-phone-square-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul><!-- /.mobile-nav__contact -->
            <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                    <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
                    <a href="#" aria-label="pinterest"><i class="fab fa-pinterest-p"></i></a>
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
                <input type="text" name="search" placeholder="Type here to Search....">
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


    <!-- template scripts -->
    <script src="assets/js/theme.js"></script>


</body>

</html>