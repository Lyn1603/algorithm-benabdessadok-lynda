class Player {
    
    constructor(name,allumette) { 
    this.name = name;
    this.allumette =allumette;
    }
  }



let player1 = new Player("player1", 0);
let player2 = new Player("player2", 0);
let parents = document.querySelector('.spans');
let joueurs = document.querySelector('#joueurs');
let child = document.querySelectorAll('.l1');


function player () {
      
  let jeu = document.querySelector("#joueurs").value;
  let tour = 0 

  for(let i = 0; i < jeu ; i++){
      tour++
  }

  if (tour == 0){
            alert ('Le player 1 commence ')
        }

  if (tour == 1){
            alert ('Le player 2 commence ')
    }
      

}

function RemoveChild () {

  let al = document.querySelector("#allumettes").value;
        
  for(let i = 0; i < al; i++){

    if (i < al){
      parents.removeChild(document.querySelector(".l1"))
      alert ("C'est au tour du " + " " + player1.name)
    }else{
      document.write("Le jeu est terminée ")
    }
    
    }

    }
       

     

           




   



 









