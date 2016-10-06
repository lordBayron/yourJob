<?php

if(isset($_POST['userName']) && isset($_POST['userPassword'])) {
    $username = $_POST['userName'];
    $password = $_POST['userPassword'];

    // connecting to server and database //
    $mysql_host = 'localhost';
    $mysql_userName = 'root';
    $mysql_password = 'riverdeerDb12';
    $my_database = 'yourjob';
    $server_connection = mysqli_connect($mysql_host, $mysql_userName, $mysql_password);
    $database_connection = mysqli_select_db($server_connection, $my_database);

    $query = "SELECT * FROM userAccount WHERE username='$username' AND  password='$password'";
    $query_run = mysqli_query($server_connection, $query);

    $rows_number = mysqli_num_rows($query_run);

    if($rows_number !=0){

        while($row = mysqli_fetch_assoc($query_run));{
            $db_username = $row['username'];
            $db_password = $row['password'];
        }

        if($username == $db_username && $password == $db_password){

        }

    }else{
        echo "<script type='text/javascript'> window.location = 'index.html' </script>";
    }
}

?>



