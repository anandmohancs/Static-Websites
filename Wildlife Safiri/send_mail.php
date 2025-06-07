<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "hello@anandsir.online"; // Replace with your email
    $subject = "New Contact Form Submission";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $mailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message. Try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
