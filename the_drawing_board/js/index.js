$( document ).ready(function() {
    console.log( );
});

$(".slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.slideshow > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('.slideshow');
},  5000);






(function(){
    var words = [
        'remix',
        'interpretation',
        'iteration',
        'impression'
        ], i = 0;
    setInterval(function(){
        $('#changetext').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
        
})();