var turno = "O";
var numTurn = 0;
    function turn(id){
        document.getElementById(id).innerHTML = turno;
        document.getElementById(id).disabled = true;
        if(numTurn > 3)
            check(id, turno);
            turno = (turno == "O") ? "X" : "O";
            document.getElementById('turno').innerHTML = "Turno: " + turno;
            numTurn++;
    }

    function restart(){
      turno = "O";
      numTurn = 0;
      document.getElementById('turno').innerHTML = "Turno: " + turno;
      for (var i = 1; i <= 9; i++){
        document.getElementById('c'+ i).disabled = false;
        document.getElementById('c'+i).innerHTML = '';
      }
      document.getElementById('ganador').innerHTML = "";
    }

    function disabledcell(){
      for (var i = 1; i <= 9; i++){
        document.getElementById('c'+ i).disabled = true;
      }
    }

    function check(id, val){
      var c1 = document.getElementById('c1').innerHTML;
      var c2 = document.getElementById('c2').innerHTML;
      var c3 = document.getElementById('c3').innerHTML;
      var c4 = document.getElementById('c4').innerHTML;
      var c5 = document.getElementById('c5').innerHTML;
      var c6 = document.getElementById('c6').innerHTML;
      var c7 = document.getElementById('c7').innerHTML;
      var c8 = document.getElementById('c8').innerHTML;
      var c9 = document.getElementById('c9').innerHTML;

      
      if((c1 == val && c2 == val && c3 == val) || (c4 == val && c5 == val && c6 == val) || (c7 == val && c8 == val && c9 == val))
      {
        document.getElementById('ganador').innerHTML = "El ganador es: " + val;
        disabledcell();
      }
      else if((c1 == val && c4 == val && c7 == val) || (c2 == val && c5 == val && c8 == val) || (c3 == val && c6 == val && c7 == val))
      {
        document.getElementById('ganador').innerHTML = "El ganador es: " + val;
        disabledcell();
      }
      else if((c1 == val && c5 == val && c9 == val) || (c3 == val && c5 == val && c7 == val))
      {
        document.getElementById('ganador').innerHTML = "El ganador es: " + val;
        disabledcell();
      }
    }