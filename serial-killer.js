class Killer {
    
    constructor(name,health) { 
    this.name = name;
    this.health =health; 
    }
    
  }


  class Caractéristique {
    
    constructor(name,pb_m,pb_d, pb_d_m) { 
    this.name = name;
    this.pb_m = pb_m; 
    this.pb_d =pb_d;
    this.pb_d_m =pb_d_m;
    }


    Caractéristiques(ns){
    return Math.floor(Math.random() * ns)
 } 
    combat(ns){
    return Math.random()
 }   
  }

  let killer = new Killer("jason", "100")

  survivors = [

    survivor1 = new Caractéristique("Billy", "0.1", "0.8", "0.1"),

    survivor2 = new Caractéristique("Jennifer", "0.2", "0.3","0.5"),

    survivor3 = new Caractéristique("Alice", "0.3", "0.5","0.2" ),

    survivor4 = new Caractéristique("Troy", "0.4", "0.3","0.3"),
    
    survivor5 = new Caractéristique("Mia", "0.2", "0.2", "0.6"),
    
  ]
    
    
  while(killer.health > 0 && survivors.length > 0 ){
    let CS = survivors.Caractéristiques();
    let survivant = survivors[CS]
    let proba = survivant.combat();
    if( proba <= survivant.pb_m){
        console.log("Jason a tué " + survivor.name)
        
    }else if( proba > survivant.pb_d + survivant.pb_m ){
        killer.health -= 10
        console(survivant.name + "a esquivé et a infligé" + survivant.pb_d )
    }else{
        killer.health -= 15 
        console.log("les survivants ont gagné mais RIP à " + survivant.name)
    
    }

  }