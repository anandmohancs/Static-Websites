<?php
$to = "hello@anandsir.online"; // your inbox
$subject = "Test Mail from VPS";
$message = "This is a test email sent using PHP mail() function.";
$headers = "From: no_reply@virtualwildlifesafari.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully!";
} else {
    echo "Mail failed to send!";
}
?>
