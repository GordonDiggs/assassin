(function($){
  $('.log-kill-link').live('click', function(){
    $('.log-kill').slideDown(200);
    $(this).slideUp(200);
  });

  $('.log-kill form').live('submit', function(e){
    $form = $(this);
    e.preventDefault();

    $.ajax({
      url: $form.attr('action'),
      type: 'post',
      data: $form.serialize(),
      dataType: 'json',
      success: function(){
        window.location.reload();
      }
    });

    return false;
  });


  $('#game_num_players').live('change', function(e){
    // get the last item and clear it
    $toAppend = $('.player:last').clone();
    $toAppend.addClass('hidden');
    $toAppend.find('input').val('');

    // get the values
    oldValue = parseInt($('.old-number').val());
    newValue = parseInt($(this).val());

    // if we need to add some fields
    if(newValue > oldValue){

      for(i=0; i<newValue-oldValue; i++){
        // update the new one and append it
        $toAppend.find('.player-num').html(oldValue+i+1);
        $toAppend.attr('name', 'game[players][player_'+ parseInt(oldValue+i+1) +'][name]');
        $toAppend.find("input").attr('name', 'game[players][player_'+ parseInt(oldValue+i+1) +'][name]').attr('id', 'game_players_player_'+ parseInt(oldValue+i+1) +'_name');
        $toAppend.clone().appendTo('.players');
        $('.player').slideDown(200);
      }

    } else if(newValue < oldValue){
      if(confirm("This will delete some players below. Do you want to continue?")){
        for(i=0; i<oldValue - newValue; i++){
          var diff = (oldValue - newValue)*-1
          $('.player').slice(diff).slideUp(200, function(){ $(this).remove(); });
        }
      } else {
        alert("ok, cool.");
        $(this).val(oldValue);
        return;
      }

    }

    // update the old value
    $('.old-number').val(newValue);

  });

  $('.new-game form').live('submit', function(e){
    e.preventDefault();
    $form = $(this);

    $.ajax({
      url: $form.attr('action'),
      type: 'post',
      data: $form.serialize(),
      dataType: 'json',
      success: function(response){
        window.location = response.url;
      }
    });
    return false;
  });
  
  $('.show-player-tree').live('click', function(){
    if($(this).is('.on')){
      $('.player-tree').slideUp(200);
      $(this).removeClass('on').html("Show Player Tree");
    } else {
      $('.player-tree').slideDown(200);
      $(this).addClass('on').html("Hide Player Tree");
    }
  });

})(jQuery);