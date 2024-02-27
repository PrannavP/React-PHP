<?php

    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "bca4sem";

    $conn = mysqli_connect($host, $user, $password, $database);

    if(!$conn){
        echo "Database connection failed";
    }

?>