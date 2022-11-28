<?php
$strJsonFileContents = json_decode(file_get_contents("entreprise.json"));
$data = $strJsonFileContents;
var_dump ($data);
//var_dump($strJsonFileContents);