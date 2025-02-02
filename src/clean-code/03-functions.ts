(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorById(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película
  interface MovieDetails {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie(movieDetails: MovieDetails) {
    console.log(
      movieDetails.title,
      movieDetails.description,
      movieDetails.rating,
      movieDetails.cast
    );
  }

  // Crea un nuevo actor
  function createNewActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;
  }
})();
