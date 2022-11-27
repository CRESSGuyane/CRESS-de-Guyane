
<?php require('actions/Aclogin.php'); ?>
<?php require_once('./inc/header.php'); ?>
<!DOCTYPE html>
<html lang="fr" class="h-100" id="login-page1">


<body class="h-100">

    <div class="login-bg h-100 m-5 m-5">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card">
                            <div class="card-body">
                                <div class="logo text-center">
                                    <a href="/">
                                        <img src="#" alt="logo">
                                    </a>
                                </div>
                                <h4 class="text-center m-t-15">Connexion</h4>
                                <?php if(isset($errorMsg)){echo "<p> $errorMsg </p>";}?>
                                <form class="m-t-30 m-b-30" method="POST" action="">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" placeholder="Email" name="email">
                                    </div>
                                    <div class="form-group">
                                        <label>Mot de passe</label>
                                        <input type="password" class="form-control" placeholder="Mot de passe" name="password">
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <div class="form-check p-l-0">
                                                <input class="form-check-input" type="checkbox" id="basic_checkbox_1">
                                                <label class="form-check-label" for="basic_checkbox_1">Je confirme</label>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6 text-right"><a href="#">Mot de passe oublié ?</a>
                                        </div>
                                    </div>
                                    <div class="text-center m-b-15 m-t-15">
                                        <button type="submit" class="btn btn-primary" name="validate" >Connexion</button>
                                    </div>
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once('./inc/footer.php'); ?>
    <!-- #/ container -->
    <!-- Common JS -->
    
</body>

</html>