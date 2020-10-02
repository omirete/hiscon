<?php

$filename_log = "lahistoriadelaconcha-env/cron_log.txt";

$aux = file_get_contents($filename_log);
if ($aux == false) {
    $aux = date("c", time()) . " - No log file detected. A new one was created.";
}

$start_time = date("c", time());
file_put_contents($filename_log, $aux . "\n" . $start_time . " - Started script execution.");

// Get access token-------------------------------------------------------------
$api_get_token = "https://accounts.spotify.com/api/token";

$spoti_clientID = "2a60908b0251403b80c879545dd2380c";
$spoti_clientSecret = "98dbbaf458704a55b079755544280db1";
$concat = $spoti_clientID . ":" . $spoti_clientSecret;
$encoded = base64_encode($concat);
$spoti_auth = "Authorization: Basic " . $encoded;

$post_data = array("grant_type" => "client_credentials");

$cURL = curl_init($api_get_token);

$setopt_array = array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        "Authorization" => $spoti_auth
    ),
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($post_data)
);

curl_setopt_array($cURL, $setopt_array);

$res = curl_exec($cURL);
$access_token = json_decode($res)->access_token;
curl_close($cURL);

$filename_save_to = "lahistoriadelaconcha-env/spoti_token.json";
file_put_contents($filename_save_to, $res);

// Get access token-------------------------------------------------------------




// Get show---------------------------------------------------------------------
$id_show = "7uarSUYpISt1SBIGGitQFi?market=AR";
// $id_show = "7uarSUYpISt1SBIGGitQFi";
// https://developer.spotify.com/documentation/web-api/reference/shows/get-a-show/
// GET https://api.spotify.com/v1/shows/{id}
$api_get_show = "https://api.spotify.com/v1/shows/" . $id_show;
$req_header_for_get_show = "Authorization: Bearer " . $access_token;

// $post_data = array("grant_type" => "client_credentials");

$cURL = curl_init($api_get_show);

$setopt_array = array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        "Authorization" => $req_header_for_get_show
    )
);

curl_setopt_array($cURL, $setopt_array);

$res = curl_exec($cURL);
curl_close($cURL);

$filename_save_to = "lahistoriadelaconcha/spoti/hiscon.json";
file_put_contents($filename_save_to, $res);

// Get show---------------------------------------------------------------------
$end_time = date("c", time());
$aux = file_get_contents($filename_log);
file_put_contents($filename_log, $aux . "\n" . $end_time . " - Finished script execution.");

?>