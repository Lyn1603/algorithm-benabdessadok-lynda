class Personnage {
    
    constructor(name,mentalhealth) { 
    this.name = name;
    this.mentalhealth = mentalhealth; 
    }
    
    Songs(){
      return Math.floor(Math.random() * 4)
    }  
  }

  

  let passenger = new Personnage("jean" , 10)
  let taxi = 0

  let songs = [
                'Wejdene - Anissa',
                'Lisa -Homura ',
                'Not your barbie girl - Ava Max',
                'Break my heart myself - Bebe Rexah',
                'You make me feel like a natural woman - Jennifer Houdson',  
              ]



  
for( i= 0 ; i < 30 ; i++){
 console.log(i)
 console.log(songs[passenger.Songs()])
 if(songs[passenger.Songs()] == "Wejdene - Anissa"){
  passenger.mentalhealth -= 1
  taxi += 1
  console.log(passenger)
 }
 if( passenger.mentalhealth == 0 ){
  console.log("explosion !")
  
 }

}


  