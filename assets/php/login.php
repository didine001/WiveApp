<?php

// Start a session to store user data
session_start();

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the email and password from the form
    $email = $_POST['mail'];
    $password = $_POST['password'];

    // Connect to the database
    $db = new PDO('mysql:host=localhost;dbname=swki8708_wive', 'username', 'password');

    // Query the database for the user with the matching email
    $stmt = $db->prepare('SELECT * FROM users WHERE email = :email');
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $user = $stmt->fetch();

    // If a user was found, check the password
    if ($user) {
        // Verify the password using the password_verify function
        if (password_verify($password, $user['password'])) {
            // Set a session variable to indicate that the user is logged in
            $_SESSION['logged_in'] = true;
            // Redirect the user to the homepage
            header('Location: home.html');
            exit;
        }
        // If the password is incorrect, display an error message
        else {
            $error = 'Invalid email or password';
        }
    }
    // If no user was found, display an error message
    else {
        $error = 'Invalid email or password';
    }
}

?>