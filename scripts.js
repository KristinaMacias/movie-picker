let availMovies = [
  {
    name: "Hocus Pocus",
    description:
      "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century",
    dateReleased: 1993,
    genre: ["comedy", "family", "fantasy"],
    ageRating: "PG",
  },
  {
    name: "Independence Day",
    description:
      "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
    dateReleased: 1996,
    genre: ["action", "adventure", "sci-fi"],
    ageRating: "PG-13",
  },
  {
    name: "E.T. the Extra-Terrestrial",
    description:
      "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
    dateReleased: 1982,
    genre: ["adventure", "family", "sci-fi"],
    ageRating: "PG",
  },
  {
    name: "The Goonies",
    description:
      "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
    dateReleased: 1985,
    genre: ["adventure", "comedy", "family"],
    ageRating: "PG",
  },
  {
    name: "Back to the Future",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    dateReleased: 1985,
    genre: ["adventure", "comedy", "sci-fi"],
    ageRating: "PG",
  },
  {
    name: "Jurassic Park",
    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    dateReleased: 1993,
    genre: ["action", "adventure", "sci-fi"],
    ageRating: "PG-13",
  },
  {
    name: "Toy Story",
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom.",
    dateReleased: 1995,
    genre: ["animation", "adventure", "comedy"],
    ageRating: "G",
  },
  {
    name: "The Land Before Time",
    description:
      "An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.",
    dateReleased: 1988,
    genre: ["animation", "adventure", "drama"],
    ageRating: "G",
  },
  {
    name: "Labyrinth",
    description:
      "Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.",
    dateReleased: 1986,
    genre: ["adventure", "family", "family"],
    ageRating: "PG",
  },
  {
    name: "Cool Runnings",
    description:
      "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
    dateReleased: 1993,
    genre: ["adventure", "comedy", "family"],
    ageRating: "PG",
  },
];

let people = [];

class Person {
  constructor(name, favoriteGenre) {
    this.name = name;
    this.favoriteGenre = favoriteGenre;
  }
  createPerson() {
    let namePrompt1 = prompt("First Person: Please enter your first name");
    let genrePrompt1 = prompt(
      `${namePrompt1}: Please enter a genre from the list:

      comedy
      family
      fantasy
      action
      adventure
      sci-fi
      animation
      drama
  `
    ).toLocaleLowerCase();

    let namePrompt2 = prompt("Second Person: Please enter your first name");
    let genrePrompt2 = prompt(
      `${namePrompt2}: Please enter a genre from the list:
      
      comedy
      family
      fantasy
      action
      adventure
      sci-fi
      animation
      drama`
    ).toLocaleLowerCase();

    //creating objects
    let person1 = new Person(namePrompt1, genrePrompt1);
    let person2 = new Person(namePrompt2, genrePrompt2);

    people.push(person1, person2);

    //testing code above
    // console.log("printing person1 object: ", person1);
    // console.log("printing person2 object: ", person2);
    // console.log("printing people array: ", people);
  }
}


let personBuilder = new Person();
personBuilder.createPerson();

class MovieService {
  constructor() {
    this.selectedMovies = [];
    this.remainingCatalog = [];
  }
  findOptions() {
    let person1Genre = people[0].favoriteGenre;
    let person2Genre = people[1].favoriteGenre;

    for (let movie of availMovies) {
      if (
        movie.genre.includes(person1Genre) ||
        movie.genre.includes(person2Genre)
      ) {
        this.selectedMovies.push(movie);
      } else {
        this.remainingCatalog.push(movie);
      }
    }
    //printing movie search results to console
    console.log(
      `${people[0].name} and ${people[1].name} selected ${person1Genre} and ${person2Genre} genres. Here our recommended movies: `,
      this.selectedMovies
    );
    console.log(
      "catalog options that did not match criteria: ",
      this.remainingCatalog
    );
  }

  //this is extra - all these results are already printed to the console
  mapRecommendations() {
    document.getElementById("map-movies").innerHTML = this.selectedMovies
      .map(
        (movie) =>
          `<div class="card m-4">
                <div class="card-header bg-secondary text-light">
                    <div>Name: ${movie.name}</div>
                </div>
                <div class="card-body p-4">
                    <div class="mb-4">Description: ${movie.description}</div>
                    <div class="mb-2 border-bottom ">Release Date: ${movie.dateReleased}</div>
                    <div class="mb-2 border-bottom">Genre(s): ${movie.genre}</div>
                    <div class="mb-2 border-bottom">Rating: ${movie.ageRating}</div>
                </div>
            </div>`
      )
      .join(" ");
  }
  mapPeople() {
    document.getElementById('map-people').innerHTML = people.map(
        (person) =>
        `<div class='p-4'>
            <div class="mb-1">
                <h1 class=""display-3>${person.name}</h1>
            </div>
            <div>
                <h2>
                Selected Genre: ${person.favoriteGenre}</div>
                </h2>
        </div>`
    )
    .join(' ');
  }
}

let movieApp = new MovieService();
movieApp.findOptions();

movieApp.mapRecommendations();
movieApp.mapPeople();