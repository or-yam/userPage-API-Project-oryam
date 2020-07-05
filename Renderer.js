class Renderer {
  appendUserData(data) {
    const source = $('#user-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.user-container').append(newHTML);
  }

  appendKenyaData(data) {
    const source = $('#quote-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.quote-container').append(newHTML);
  }

  appendPokemonData(data) {
    const source = $('#pokemon-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.pokemon-container').append(newHTML);
  }
  appendBaconData(data) {
    const source = $('#meat-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.meat-container').append(newHTML);
  }
}
