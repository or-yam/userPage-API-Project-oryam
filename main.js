let apis;
let savedUsers = [];

//load data from apis
$('#data-btn').on('click', function () {
  apis = new APIManager();
  apis.getAll();
  $('#display-btn').removeClass('invisible');
});

//show loaded user
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

//save user to local storage
$('#save-btn').on('click', function () {
  const rend = new Renderer();
  savedUsers.push(apis.data);
  localStorage.savedUsers = JSON.stringify(savedUsers);
  const allUserFromStorage = JSON.parse(localStorage.savedUsers || '[]');
  rend.appendDropdown(allUserFromStorage);
  $('#load-btn').removeClass('invisible');
});

//load last user from local storage
$('#load-btn').on('click', function () {
  const rend = new Renderer();
  const allUserFromStorage = JSON.parse(localStorage.savedUsers || '[]');
  const lastUser = allUserFromStorage[allUserFromStorage.length - 1];
  const friends = [];
  for (i = 1; i < lastUser.userData.length; i++) {
    friends.push(lastUser.userData[i]);
  }

  rend.appendUserData(lastUser.userData[0]);
  rend.appendBaconData(lastUser.baconData);
  rend.appendKenyaData(lastUser.kenyaData);
  rend.appendPokemonData(lastUser.pokemonData);
  rend.appendFriends(friends);
});

//get selected user from dropdown menu
$('.saved-users').on('click', '#getSavedUser', function () {
  const rend = new Renderer();
  const allUserFromStorage = JSON.parse(localStorage.savedUsers || '[]');
  const wantedUser = allUserFromStorage[$('#drop-down').val()];
  const friends = [];
  for (i = 1; i < wantedUser.userData.length; i++) {
    friends.push(wantedUser.userData[i]);
  }
  rend.appendUserData(wantedUser.userData[0]);
  rend.appendBaconData(wantedUser.baconData);
  rend.appendKenyaData(wantedUser.kenyaData);
  rend.appendPokemonData(wantedUser.pokemonData);
  rend.appendFriends(friends);
});
