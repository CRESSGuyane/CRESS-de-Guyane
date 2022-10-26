<?php

function getStructures(){
    

            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://localhost:8055/items/fiches_entreprises',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            ));

            $response = json_decode(curl_exec($curl),true) ;

            curl_close($curl);
            return $response['data'];
            
}
function getStatuts(){
    

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://localhost:8055/items/statuts_juridiques',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = json_decode(curl_exec($curl),true) ;

    curl_close($curl);
    return $response['data'];
    
}
function getDomaines(){
    

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://localhost:8055/items/domaines_activites',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = json_decode(curl_exec($curl),true) ;

    curl_close($curl);
    return $response['data'];
    
}

function getStructure($id){
    

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => "http://localhost:8055/items/fiches_entreprises/$id",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = json_decode(curl_exec($curl),true) ;

    curl_close($curl);
    return $response['data'];
    
}

function getDescription($description_structure){
    

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => "http://localhost:8055/items/fiches_entreprises/$description_structure",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = json_decode(curl_exec($curl),true) ;

    curl_close($curl);
    return $response['data'];
    
}
function filtres($statutId=null,$domaineId=null,$query=null){
    if((!$statutId || $statutId == "")&&(!$query || $query =="")&&(!$domaineId || $domaineId == "")){
        $curl = curl_init();

curl_setopt_array($curl, array(
        CURLOPT_URL => "http://localhost:8055/items/fiches_entreprises",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        ));

            $response = json_decode(curl_exec($curl),true) ;

            curl_close($curl);
            return $response['data'];
    }
    if($statutId && $statutId != ""){
        $argStatut = "filter%5Bstatut_juridique_structure%5D%5Bid%5D%5B_in%5D=$statutId";
       
    }else{
        $argStatut = "";
    }

    if($domaineId && $domaineId != "" ){
        if ($statutId && $statutId != ""){
            $argDomaine = "&filter%5Bdomaine_activite_structure%5D%5Bid%5D%5B_in%5D=$domaineId";
        }else{
            $argDomaine = "filter%5Bdomaine_activite_structure%5D%5Bid%5D%5B_in%5D=$domaineId";
        }
       
    }else{
        $argDomaine = "";
    }

    if($query && $query !=""){
        if(($domaineId && $domaineId != "" ) || ($statutId && $statutId != "")){
            $argQuery ="&search=$query";
        }else{
            $argQuery ="search=$query";
        }
        
    }else{
        $argQuery ="";
    }

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://localhost:8055/items/fiches_entreprises?$argStatut$argDomaine$argQuery",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));
    
    $response = json_decode(curl_exec($curl),true) ;
    curl_close($curl);
    return $response['data'];

}