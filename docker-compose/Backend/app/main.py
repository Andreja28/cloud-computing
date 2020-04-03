from flask import Flask, request, Response
from database.db import initialize_db
from database.models import Movie
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://root:rootpassword@localhost/movies?authSource=admin',
}

initialize_db(app)


@app.route('/movies')
def get_movies():
    movies = Movie.objects().to_json()
    return Response(movies, mimetype="application/json", status=200)

@app.route('/movie/<id>')
def get_movie():
    movie = Movie.objects(id=id)
    return movie, 200

@app.route('/movies', methods=['POST'])
def add_movie():
    body = request.get_json()
    movie = Movie(**body).save()
    id = movie.id
    return {'id': str(id)}, {'Access-Control-Allow-Origin': '*'}


@app.route('/movies/<id>', methods=['PUT'])
def update_movie(id):
    body = request.get_json()
    Movie.objects.get(id=id).update(**body)
    return '',{'Access-Control-Allow-Origin': '*'}


@app.route('/movies/<id>', methods=['DELETE'])
def delete_movie(id):
    Movie.objects.get(id=id).delete()
    return '', {'Access-Control-Allow-Origin': '*'}

app.run(host="0.0.0.0")