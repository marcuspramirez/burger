$('.burger-submit').click(function(e){
    e.preventDefault();
    // console.log($('.burger-input').val())
    $.post('/',{ burger_name: $('.burger-input').val()}, function(err, res){

    })
})