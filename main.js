let apis;
let savedUsers = [];

$('#data-btn').on('click', function () {
  apis = new APIManager();
  apis.getAll();
  $('#display-btn').removeClass('invisible');
});

$('#display-btn').on('click', function () {
  const rend = new Renderer();

  const friends = [];
  for (i = 1; i < apis.data.userData.length; i++) {
    friends.push(apis.data.userData[i]);
  }

  rend.appendUserData(apis.data.userData[0]);
  rend.appendBaconData(apis.data.baconData);
  rend.appendKenyaData(apis.data.kenyaData);
  rend.appendPokemonData(apis.data.pokemonData);
  rend.appendFriends(friends);
  $('#save-btn').removeClass('invisible');
});

$('#save-btn').on('click', function () {
  savedUsers.push(apis.data);
  console.log(apis.data);
  localStorage.savedUsers = JSON.stringify(savedUsers);
  $('#load-btn').removeClass('invisible');
});

$('#load-btn').on('click', function () {
  const allUserFromStorage = JSON.parse(localStorage.savedUsers || '[]');
  const lastUser = allUserFromStorage[allUserFromStorage.length - 1];
  const rend = new Renderer();

  const friends = [];
  for (i = 1; i < apis.data.userData.length; i++) {
    friends.push(apis.data.userData[i]);
  }

  rend.appendUserData(lastUser.userData[0]);
  rend.appendBaconData(lastUser.baconData);
  rend.appendKenyaData(lastUser.kenyaData);
  rend.appendPokemonData(lastUser.pokemonData);
  rend.appendFriends(friends);
});
