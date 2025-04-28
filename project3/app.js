var main = function() {
  var volume;

  $('#play').click(function() {
    $('#message').text("Playing track.");
    $('#player').trigger("play");
  });

  $('#pause').click(function() {
    $('#message').text("Pausing track.");
    $('#player').trigger("pause");
  });

  $('#mute').click(function() {
    $('#player').prop('muted', true);
    $('#message').text("Muted.");
  });

  $('#unmute').click(function() {
    $('#player').prop('muted', false);
    $('#message').text("Unmuted.");
  });

  $('#stop').click(function() {
    $('#message').text("Track stopped.");
    $('#player').trigger("pause");
    $('#player').prop("currentTime", 0);
  });

  $('#volUp').click(function() {
    volume = $('#player').prop('volume');
    if (volume < 1.0) {
      $('#player').prop('volume', volume + 0.1);
      $('#message').text("Volume increased.");
    } else {
      $('#message').text("Volume is already at maximum.");
    }
  }); 

  $('#volDown').click(function() {
    volume = $('#player').prop('volume');
    if (volume > 0.0) {
      $('#player').prop('volume', volume - 0.1);
      $('#message').text("Volume decreased.");
    } else {
      $('#message').text("Volume is already at minimum.");
    }
  });
};

$(document).ready(main);

