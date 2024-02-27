<?php

    require_once "connection.php";

    $server =$_SERVER['REQUEST_METHOD'];

    function getUser(){
        $sql = "SELECT * FROM users";
        $result = mysqli_query($GLOBALS['conn'], $sql);
        $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($users);
    }
    if ($server == "GET"){
        getUser();
    }else if($server == "POST"){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $sql = "INSERT INTO users (name, email, address) VALUES ('$name', '$email', '$address')";
        if (mysqli_query($conn, $sql)){
            echo "User added successfully";
        }else{
            echo "Error: data not added";
        }
    }else if($server=="DELETE"){
        $myEntireBody = file_get_contents('php://input'); 
        $myBody = json_decode($myEntireBody);
        $id = $myBody->id;
        $sql = "DELETE FROM users WHERE id = $id";
        if (mysqli_query($conn, $sql)){
            echo "User deleted successfully";
        }else{
            echo "Error: data not deleted";
        }
    
    }else if($server=="PUT"){
        $myEntireBody = file_get_contents('php://input');
        $myBody = json_decode($myEntireBody);
        $id = $myBody->id;
        $name = $myBody->name;
        $address = $myBody->address;
        $sql = "UPDATE users SET name = '$name', address = '$address' where id = $id";
        if(mysqli_query($conn, $sql)){
            echo "User updated successfully";
        }else{
            echo "Error: Data not updated";
        }
    }else{
        echo "Invalid request";
    }

?>