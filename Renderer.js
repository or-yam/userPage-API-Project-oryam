class Renderer {
  appendUserData(data) {
    const source = $('#user-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.user-container').empty().append(newHTML);
  }

  appendKenyaData(data) {
    const source = $('#quote-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.quote-container').empty().append(newHTML);
  }

  appendPokemonData(data) {
    const source = $('#pokemon-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.pokemon-container').empty().append(newHTML);
  }

  appendBaconData(data) {
    const source = $('#meat-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.meat-container').empty().append(newHTML);
  }

  appendFriends(data) {
    const source = $('#friends-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.friends-container').empty().append(newHTML);
  }

  appendDropdown(data) {
    const source = $('#dropdown-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $('.saved-users').empty().append(newHTML);
  }
}
