$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var fly = $('input:radio[name=fly]:checked').val();
      var howFly = $('input:radio[name=how-fly]:checked').val();
    var earth = $('input:radio[name=earth]:checked').val();
    var gender = $('input:radio[name=gender]:checked').val();
    var cape = $('input:radio[name=cape]:checked').val();
    var god = $('input:radio[name=god]:checked').val();
    var mask = $('input:radio[name=mask]:checked').val();
      var fullMask = $('input:radio[name=full-mask]:checked').val();
    var doctor = $('input:radio[name=doctor]:checked').val();
    var rich = $('input:radio[name=rich]:checked').val();
    var death = $('input:radio[name=death]:checked').val();
    var strong = $('input:radio[name=strong]:checked').val();

    $('.results').empty();

    if (fly === 'yes'
        && howFly === 'skill'
        && earth === 'yes'
        && gender === 'female'
        && cape === 'no'
        && god === 'no'
        && mask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'yes') {
      $('.results').append('<h4>You are Wonder Woman</h4>');
    } else if (fly === 'yes'
        && howFly === 'item'
        && earth === 'no'
        && gender === 'male'
        && cape === 'yes'
        && god === 'yes'
        && mask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'yes') {
      $('.results').append('<h4>You are Thor</h4>');
    } else if (fly === 'yes'
        && howFly === 'item'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'yes'
        && doctor === 'no'
        && rich === 'yes'
        && death === 'yes'
        && strong === 'yes') {
      $('.results').append('<h4>You are Iron Man</h4>');
    } else if (fly === 'yes'
        && howFly === 'skill'
        && earth === 'no'
        && gender === 'male'
        && cape === 'yes'
        && god === 'no'
        && mask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'yes'
        && strong === 'yes') {
      $('.results').append('<h4>You are Superman</h4>');
    } else if (fly === 'yes'
        && howFly === 'item'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'yes') {
      $('.results').append('<h4>You are Green Lantern</h4>');
    } else if (fly === 'yes'
        && howFly === 'skill'
        && earth === 'no'
        && gender === 'male'
        && cape === 'yes'
        && god === 'no'
        && mask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'yes') {
      $('.results').append('<h4>You are Martian Manhunter</h4>');
    } else if (fly === 'yes'
        && howFly === 'skill'
        && earth === 'yes'
        && gender === 'female'
        && cape === 'yes'
        && god === 'no'
        && mask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'no') {
      $('.results').append('<h4>You are Scarlet Witch</h4>');
    } else if (fly === 'yes'
        && howFly === 'item'
        && earth === 'no'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'yes') {
      $('.results').append('<h4>You are Silver Surfer</h4>');
    } else if (fly === 'yes'
        && howFly === 'skill'
        && earth === 'no'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'yes') {
      $('.results').append('<h4>You are Galactus</h4>');
    } else if (fly === 'yes'
        && howFly === 'item'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'yes'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'yes'
        && doctor === 'yes'
        && rich === 'yes'
        && death === 'yes'
        && strong === 'yes') {
      $('.results').append('<h4>You are Dr. Doom</h4>');
    } else if (fly === 'yes'
        && howFly === 'skill'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'yes'
        && god === 'no'
        && mask === 'no'
        // && fullMask === 'yes'
        && doctor === 'yes'
        && rich === 'no'
        && death === 'no'
        && strong === 'no') {
      $('.results').append('<h4>You are Dr. Strange</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'yes'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'no'
        && doctor === 'no'
        && rich === 'yes'
        && death === 'yes'
        && strong === 'no') {
      $('.results').append('<h4>You are Batman</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'yes'
        && doctor === 'no'
        && rich === 'no'
        && death === 'yes'
        && strong === 'yes') {
      $('.results').append('<h4>You are Spider-Man</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'yes') {
      $('.results').append('<h4>You are Wolverine</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'no') {
      $('.results').append('<h4>You are Cyclops</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'yes'
        && doctor === 'no'
        && rich === 'yes'
        && death === 'no'
        && strong === 'no') {
      $('.results').append('<h4>You are Black Panther</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'female'
        && cape === 'no'
        && god === 'no'
        && mask === 'no'
        // && fullMask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'no'
        && strong === 'no') {
      $('.results').append('<h4>You are Black Widow</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'no'
        && doctor === 'yes'
        && rich === 'no'
        && death === 'no'
        && strong === 'no') {
      $('.results').append('<h4>You are The Hulk</h4>');
    } else if (fly === 'no'
        && earth === 'yes'
        && gender === 'male'
        && cape === 'no'
        && god === 'no'
        && mask === 'yes'
        && fullMask === 'no'
        && doctor === 'no'
        && rich === 'no'
        && death === 'yes'
        && strong === 'no') {
      $('.results').append('<h4>You are The Flash</h4>');
    } else {
      $('.results').append('<h4>You are Ant Man</h4>');
    }


  });



// Jumbotron image
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });
});
