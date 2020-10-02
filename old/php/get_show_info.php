<?php

echo "18";
echo "</br>";
// $showID = "7uarSUYpISt1SBIGGitQFi";
// $api_endpoint = "https://api.spotify.com/v1/shows/" + $showID;

$api_get_token = "https://accounts.spotify.com/api/token";

$spoti_clientID = "2a60908b0251403b80c879545dd2380c";
$spoti_clientSecret = "98dbbaf458704a55b079755544280db1";
// $concat = $spoti_clientID . ":" . $spoti_clientSecret;
$concat = $spoti_clientID . ":" . $spoti_clientSecret;
// $concat = "37c5340f31d44bc1a3ebc139f3b58e8d:4261fb84177c48cababaff1b47f934e5";
// $encoded = $concat;
$encoded = base64_encode($concat);
$spoti_auth = "Authorization: Basic " . $encoded;
// echo $concat;
// echo "</br>";
// echo $spoti_auth;
// echo "</br>";
echo $spoti_auth;

$post_data = array("grant_type" => "client_credentials");
// $post_data = ["grant_type" => "client_credentials"];

// use key 'http' even if you send the request to https://...
// $options = array(
//     'http' => array(
//         'header'  => array(
//             "Content-type: application/x-www-form-urlencoded",
//             "Autorization: " . $spoti_auth),
//         'method'  => 'POST',
//         'content' => http_build_query($post_data)
//     )
// );
// $context  = stream_context_create($options);
// $result = file_get_contents($api_get_token, false, $context);
// if ($result === FALSE) { /* Handle error */ }

// var_dump($result);

$cURL = curl_init($api_get_token);

$setopt_array = array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        "Authorization" => $spoti_auth
    ),
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($post_data)
);
// CURLOPT_POSTFIELDS => $post_data
curl_setopt_array($cURL, $setopt_array);
$json_response_data = curl_exec($cURL);
print_r($json_response_data);
$test = json_decode($json_response_data);
// echo $test->access_token;
curl_close($cURL);

?>