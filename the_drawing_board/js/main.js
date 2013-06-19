$( document ).ready(function() {
    console.log( );
});


        function add() {
            var num = document.getElementById("mynum").value;
            if(num == '0') num = 0;
            document.getElementById("mynum").value = parseInt(num ,10) + 1;
            }

