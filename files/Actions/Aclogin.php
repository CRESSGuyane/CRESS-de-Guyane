<?php
require_once('config.php');
if(isset($_SESSION['auth'])){
    header("Location: dashboard");
            exit;
}
if(isset($_POST['validate'])){
    if(!empty($_POST['email']) AND !empty($_POST['password'])){
        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['password']);

        $curl = curl_init();

        curl_setopt_array($curl, [
          CURLOPT_PORT => "8055",
          CURLOPT_URL => $base_url."/auth/login",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS => "{\n\t\"email\": \"$email\",\n\t\"password\": \"$password\"\n}",
          CURLOPT_HTTPHEADER => [
            "Content-Type: application/json"
          ],
        ]);
        
        $response = json_decode (curl_exec($curl),true);
        $err = curl_error($curl);
        
        curl_close($curl);
        
        if ($err) {
            $errorMsg = "cURL Error #:" . $err;
        } else {
            $access_token = $response['data']['access_token'] ;
            $expires = $response['data']['expires'];
            $refresh_token = $response['data']['refresh_token'];
            $user_info = getUserInfo($access_token);
            $_SESSION['auth']= true;
            $_SESSION['id']= $user_info['id'];
            $_SESSION['first_name'] = $user_info['first_name'];
            $_SESSION['last_name'] = $user_info['last_name'];
            $_SESSION['access_token'] = $access_token;
            $_SESSION['expires'] = $expires;
            $_SESSION['refresh_token'] = $refresh_token;
            header("Location: dashboard");
            
        }
          
    }else{
        $errorMsg = "probleme lors de la connexion";
    }
    
}
