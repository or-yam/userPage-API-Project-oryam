class Renderer {
  appendUserData(data) {
    $('.user-container').empty();
    const source = $('#user-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.user-container').append(newHTML);
  }

  appendKenyaData(data) {
    $('.quote-container').empty();
    const source = $('#quote-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.quote-container').append(newHTML);
  }

  appendPokemonData(data) {
    $('.pokemon-container').empty();
    const source = $('#pokemon-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.pokemon-container').append(newHTML);
  }
  appendBaconData(data) {
    $('.meat-container').empty();
    const source = $('#meat-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.meat-container').append(newHTML);
  }
  appendFriends(data) {
    $('.friends-container').empty();
    const source = $('#friends-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.friends-container').append(newHTML);
  }
}
