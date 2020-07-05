let apis;

$('#data-btn').on('click', function () {
  apis = new APIManager();
  apis.getAll();
});

$('#display-btn').on('click', function () {
  console.log(apis.data);
  const rend = new Renderer();
  rend.appendUserData(apis.data.userData);
  rend.appendUserData(apis.data.baconData);
  rend.appendUserData(apis.data.kenyaData);
  rend.appendUserData(apis.data.pokemonData);
});
