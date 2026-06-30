<?php
session_start();
$host = 'localhost';
$dbname = 'userdata';
$dbuser = 'root';
$password = '';

if (!isset($_SESSION['userID']) && isset($_COOKIE['token'])) {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $dbuser, $password);
    $pdo->setAttribute(PDO:: ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("
        SELECT *
        FROM userdata
        WHERE token = ?
    ");

    $stmt->execute([$_COOKIE['token']]);

    $user = $stmt->fetch();

    if ($user) {
        $_SESSION['userID'] = $user['id'];
        $_SESSION['username'] = $user['username'];
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacking Website</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <script src="./script.js" type="module"></script>
    <h3>Welcome <?= $_SESSION['username'] ?></h3>

    <div class="menu-left">
        <h3>Cheats:</h3>

        <button class="button-green" id="btn"> Get Free Robux ⏣</button>
        <button class="button-green" id="btn">Get Free V-Bucks Ⓥ</button>
        <button class="button-green" id="btn">Get Free Minecoins 🪙</button>

        <button-placeholder></button-placeholder>

        <button class="button-blue" id="btn">Get Free Cash 💰</button>
        <button class="button-blue" id="btn">Unlimited RAM</button>
        <button class="button-blue" id="btn">Unlimited Storage</button>

        <button-placeholder></button-placeholder>

        <button class="button-red" id="btn">Download cool Cheat</button>
        <button class="button-red" id="btn">Secret Goverment Files</button>
        <button class="button-red" id="btn">Install Windows 12</button>
    </div>

    <div class="pop-up load">
        <div class="top">Loading Box</div>
        <p class="stage">process...</p>
        <div class="loading-bar">
            <div class="loading-progress"></div>
        </div>
    </div>

    <div class="pop-up input">
        <div class="top">Input Box</div>
        <div class="middle-Box">
            <p class="desc">input:</p>
            <input type="text">
            <p class="err"></p>
        </div>
        <div class="next">Next >></div>
    </div>
</body>
</html>
