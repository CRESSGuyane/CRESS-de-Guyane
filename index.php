<?php 
// based on original work from the PHP Laravel framework
if (!function_exists('str_contains')) {
    function str_contains($haystack, $needle) {
        return $needle !== '' && mb_strpos($haystack, $needle) !== false;
    }
}
 function adressToGPS($adress){
    if($adress){
        $ladress =urlencode($adress);
        $url ="https://api-adresse.data.gouv.fr/search/?q=$ladress&type=housenumber&autocomplete=1";
        var_dump($url);
        $response;
        try {
            $ch = curl_init();
        
            // Check if initialization had gone wrong*    
            if ($ch === false) {
                throw new Exception('failed to initialize');
            }
        
            // Better to explicitly set URL
            curl_setopt($ch, CURLOPT_URL, $url);
            // That needs to be set; content will spill to STDOUT otherwise
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            // Set more options
            curl_setopt_array($ch, array(
                CURLOPT_URL =>$url ,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
              ));
            
            $content = curl_exec($ch);
        
            // Check the return value of curl_exec(), too
            if ($content === false) {
                throw new Exception(curl_error($ch), curl_errno($ch));
            }
        
            // Check HTTP return code, too; might be something else than 200
            $httpReturnCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $response = json_decode($content,true);
            /* Process $content here */
        
        } catch(Exception $e) {
        
            trigger_error(sprintf(
                'Curl failed with error #%d: %s',
                $e->getCode(), $e->getMessage()),
                E_USER_ERROR);
        
        } finally {
            // Close curl handle unless it failed to initialize
            if (is_resource($ch)) {
                curl_close($ch);
            }
        }
       
    return $response["features"][0]["geometry"]["coordinates"];
        }else{
            return;
        }
 }

 function statut($statut){
    if(str_contains($statut,"Association")||str_contains($statut,"association")||str_contains($statut,"Associations")||str_contains($statut,"associations")){
        return 1;
    }elseif(str_contains($statut,"Mutuelle")||str_contains($statut,"mutuelle")){
        return 3;
    }elseif(str_contains($statut,"Fondation")||str_contains($statut,"fondation")){
        return 4;
    }elseif(str_contains($statut,"Coopérative")||str_contains($statut,"coopérative")||str_contains($statut,"Cooperative")||str_contains($statut,"cooperative")){
        return 2;
    }else{
        return 5;
    }
 }
 function effectif($effectif){
    if($effectif==0){
        return 1;

    }elseif($effectif<=9 && $effectif>=1){
        return 2;
    }elseif($effectif<=19 && $effectif>9){
        return 3;
    }elseif($effectif<=29 && $effectif>19){
        return 4;
    }elseif($effectif<=49 && $effectif>29){
        return 5;
    }elseif($effectif>=50){
        return 6;
    }
    
 }

?>

<?php
$strJsonFileContents = json_decode(file_get_contents("entreprise.json"));
$data = $strJsonFileContents;
$lesStructes = array();
//var_dump($strJsonFileContents);

foreach($data as $lastructure){
    $structure =(array)$lastructure;
    $tmpEntre = array();
    if(isset($structure["sigle_structure"])){$tmpEntre["sigle_structure"] =$structure["sigle_structure"]; }
    $tmpEntre["nom_structure"] =$structure["denominationUniteLegale"] ;
    //$tmpEntre["interlocuteur_structure"] =$structure[] ;
    //$tmpEntre["poste_interlocuteur"] = $structure[];
    //$tmpEntre[ "email_interlocuteur"] =$structure[] ;
    if(isset($structure["ADRESSE"])){$tmpEntre["adresse_siege"] =$structure["ADRESSE"] ;}
    //$tmpEntre["tel_interlocuteur"] =$structure[] ;
    if(isset($structure["Site"])){$tmpEntre["website_structure"] =$structure["Site"] ;}
    //$tmpEntre["social_media_structure"] =$structure[] ;
    if(isset($structure["ESS ou non"])){
        $tmpEntre["statut_juridique_structure"] =statut($structure["ESS ou non"]) ;
    }
    if(isset($structure["trancheEffectifsUniteLegale"])){
        $tmpEntre["effectif"] = effectif($structure["trancheEffectifsUniteLegale"]);
    }
    if(isset($structure["Horaires"])){
        $horaires= $structure["Horaires"];
    }else{
        $horaires ='';
    }
    if(isset($structure['code_naf'])){
        $code_naf = $structure['code_naf'];
    }else{
        $code_naf ='';
    }
    

    $tmpEntre["description_structure"] ="$code_naf $horaires" ;
   // $tmpEntre["logo_structure"] = $structure[] ;
    //$tmpEntre["membre_cress"] =$structure[] ;
   // $tmpEntre["adherent_cress"] =$structure[] ;
    //$tmpEntre["partner_cress"] =$structure[] ;
    if(isset($structure["ADRESSE"])){
        $tmpEntre["coordonnees"] =json_encode(adressToGPS($structure["ADRESSE"])) ;
    }
    
    //$tmpEntre["domaine_activite_structure"] =$structure[] ;
    // if(isset($structure["codePostalEtablissement"])){
    //     $tmpEntre["epci_structure"] = epci($structure["codePostalEtablissement"]) ;
    // }
    //$tmpEntre["volet_intervention_structure"] = ;
    //$tmpEntre["commune_intervention_structure"] = ;
    array_push($lesStructes,json_encode($tmpEntre,JSON_FORCE_OBJECT));
    
}

foreach($lesStructes as $item){
    echo '<pre>';
    echo "$item, ";
    echo '</pre>';
}