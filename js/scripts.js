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
