<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>menu create</title>
    <style>
        *{
            font-family: serif;
        }
        input, textarea, select{
            border: 1.5px solid orangered !important;
        }
        h1{
            color: orangered
        }
        .btn{
            background-color: orangered;
        }
    </style>
</head>
<body>
    <div class="container">
        <div>

            <div >

                    <h1 class="text-center">Modify New Item</h1>
               <hr>
            </div>
            <div>

                <form action="/menu/{{$menu->id}}" method="POST" enctype="multipart/form-data" >
                    @csrf
                    @method('put')
                    <div>

                        <label for="title" class="form-label">Title</label>
                        <input type="text" name="title" id="title" class="form-control" value="{{ $menu->title }}" required>


                    </div>

                    <div>
                        <label for="description" class="form-label">Description</label>
                        <textarea name="description" id="description" class="form-control"  rows="4" required>{{$menu->description}}</textarea>
                    </div>

                    <div>
                        <label for="price" class="form-label">Price</label>
                        <input type="number" name="price" id="price" class="form-control" value="{{$menu->price}}" step="0.01" required>
                    </div>

                    <div>
                        <label for="qteStock" class="form-label">Quantity in Stock</label>
                        <input type="number" name="qteStock" class="form-control" id="qteStock" value="{{$menu->qteStock}}" required>
                    </div>

                    <div>
                        <label for="image" class="form-label">Image</label>
                        <input type="file" name="image" class="form-control"  id="image" required>
                    </div>

                    <div>
                        <label for="categorie_id" class="form-label">Category</label>
                        <select name="categorie_id" id="categorie_id" class="form-control"  required>
                            @foreach ($categories as $category)
                                <option value="{{ $category->id }}">{{ $category->type }}</option>
                            @endforeach
                        </select>
                    </div>

                    <button type="submit" class="btn btn-warning px-5 text-white my-4">Modify</button>
                </form>
            </div>

        </div>
    </div>
</body>
</html>
