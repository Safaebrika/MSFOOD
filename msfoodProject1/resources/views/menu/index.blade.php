<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>index</title>
    <style>
        *{
            font-family: serif;
        }
        h1{
            color: orangered;
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="text-center">
            <h1>Menu</h1>
            <hr>
        </div>
        <div>
            <table class="table table-bordered text-center shadow p-3 mb-5 bg-body-tertiary rounded"   >
                <thead>
                  <tr class="text-center text-light" style="background-color: orangered; color:white;">

                    <th scope="col">  Title   </th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col"> Quantite stock  </th>
                    <th scope="col"> Image  </th>
                    <th scope="col"> Category </th>
                    <th scope="col">actions</th>
                  </tr>
                </thead>
                <tbody>

                    @foreach ($menus as $menu )
                        <tr>

                            <td scope="row">{{$menu->title}}</td>
                            <td scope="row">{{$menu->description}}</td>
                            <td scope="row">{{$menu->price}}</td>
                            <td scope="row">{{$menu->qteStock}}</td>
                            <td scope="row">
                                <img src="{{ asset('storage/images/' . $menu->image) }}" alt="{{ $menu->title }}" width="100">
                            </td>
                            <td>
                                @foreach ($categories as $category )
                                    @if ($menu->categorie_id == $category->id)
                                        {{$category->type}}
                                    @endif
                                @endforeach

                            </td>
                            <td scope="row" class="d-flex mb-0" >
                                <a href="menu/{{$menu->id}}/edit" class="text-center"><button style="font-size: 17px; margin-right: 20px; " class="btn btn-success mb-2"> Update</button></a>
                                <form action="menu/{{$menu->id}}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-danger" style="margin-right: 20px; font-size: 17px;"  >delete</button>
                                </form>
                            </td>
                    </tr>
                    @endforeach

        </div>
    </div>
</body>
</html>
