let apis;

$('#data-btn').on('click', function () {
  apis = new APIManager();
  apis.getAll();
});

$('#display-btn').on('click', function () {
  console.log(apis.data);
  const rend = new Renderer();
  const friends = apis.data.userData.splice(1, 6);
  rend.appendUserData(apis.data.userData[0]);
  rend.appendBaconData(apis.data.baconData);
  rend.appendKenyaData(apis.data.kenyaData);
  rend.appendPokemonData(apis.data.pokemonData);
  rend.appendFriends(friends);
});
