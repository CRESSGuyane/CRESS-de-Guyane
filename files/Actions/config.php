<?php
$base_url = "http://localhost:8055";
if( empty(session_id()) ) session_start();
function getUserInfo($token){
    
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_PORT => "8055",
  CURLOPT_URL => "http://localhost:8055/users/me",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer ".$token
  ],
]);

$response = json_decode(curl_exec($curl),true);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  $erroMsg = "cURL Error #:" . $err;
  return;
} else {
    
    return $response['data'];
}
    
    
}
