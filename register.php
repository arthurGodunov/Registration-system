<?php
session_start();;

$Email = $_POST['Email'];
$passwordHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
$username = $_POST['username'];
echo 'E-mail: ' . $Email . '<br>password Hash: ' . $passwordHash;

$host = 'localhost';
$dbname = 'userdata';
$user = 'root';
$password = '';
$token = bin2hex(random_bytes(32));

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO:: ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo '<br>connected!';
} catch (PDOException $e) {
    die($e->getMessage());
}

$pdo->prepare('INSERT INTO userdata (username, Email, passwordHash, token) VALUES (:username, :Email, :passwordHash, :token)')->execute([
    ':username' => $username,
    ':Email' => $Email,
    ':passwordHash' => $passwordHash,
    ':token' => $token
]);

setcookie('token', $token, time() + 60 * 60 * 24 * 365, '/', '', true, true);

$user_id = $pdo->lastInsertId();


$_SESSION['userID'] = $user_id;
$_SESSION['username'] = $username;
header("Location: index.php");
exit;
?>
