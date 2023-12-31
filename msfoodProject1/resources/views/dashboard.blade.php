<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>dash</title>
</head>
<body>

   @if (session('register'))
<div class="alert alert-primary">
    {{session('register')}}
</div>
<h1 style="margin-top: 100px">Dashboard admin</h1>
   @endif
</body>
</html>

