<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
    </script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>menu create</title>
    <style>
        * {
            font-family: serif;
        }

        input,
        textarea,
        select {
            border: 1.5px solid orangered !important;
        }

        h1 {
            color: orangered
        }

        .btn {
            background-color: orangered;
        }
    </style>
</head>

<body>
    <div class="container">
        <div>

            <div>

                <h1 class="text-center">Update new category</h1>
                <hr>
            </div>
            <div>

                <form action="{{ route('updateCategory', $category->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div>
                        <label for="type" class="form-label">Type</label>
                        <input type="text" name="type" id="type" class="form-control" required
                            value="{{ $category->type }}">
                    </div>

                    <div>
                        <label for="description" class="form-label">Description</label>
                        <textarea name="description" id="description" class="form-control" rows="4" required value="{{ $category->description }}">{{ old('description', $category->description) }}
                        </textarea>
                    </div>

                    <div class="form-group my-2">
                        <label for="image">Image</label>
                        @if ($category->image)
                            <div>
                                <img src="/storage/images/{{$category->image}}" alt="{{ $category->title }}" width="100">
                            </div>
                        @endif
                        <input type="file" class="form-control-file" name="image" id="image" value="{{ $category->image }}">
                    </div>

                    <button type="submit" class="btn btn-warning px-5 text-white my-4">Modify</button>
                </form>
            </div>

        </div>
    </div>
</body>

</html>








