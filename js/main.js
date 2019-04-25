$('input').keypress(function(event){
    if(event.which === 13){
      var novaTarefa = $(this).val();
      $(this).val("");
      $('ul').append('<li>' + novaTarefa + '<span><i class = "fa fa-trash"</i></span>');
    }
});
$('ul').on('click', "span" , function(event){
  $(this).parent().fadeOut(100,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
$('ul').on('click', 'li', function(){
  $(this).toggleClass('concluido');
});
