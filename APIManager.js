class APIManager {
  constructor() {
    this.data = {
      userData: '',
      baconData: '',
      kenyaData: '',
      pokemonData: '',
    };
  }

  randomUsers() {
    const getData = (response) => {
      this.data.userData = response.results;
    };
    $.ajax({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=7',
      dataType: 'json',
      success: getData,
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  randomBacon() {
    const getData = (response) => {
      this.data.baconData = response;
    };
    $.ajax({
      method: 'GET',
      url:
        'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1',
      dataType: 'json',
      success: getData,
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  randomKenya() {
    const getData = (response) => {
      this.data.kenyaData = response;
    };
    $.ajax({
      method: 'GET',
      url: 'https://api.kanye.rest',
      dataType: 'json',
      success: getData,
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  randomPokemon() {
    const getData = (response) => {
      this.data.pokemonData = response;
    };
    $.ajax({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * (151 - 1) + 1
      )}`,
      dataType: 'json',
      success: getData,
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  getAll() {
    this.randomBacon();
    this.randomKenya();
    this.randomPokemon();
    this.randomUsers();
  }
}
