// let menssage: string = "help me, obi-wan kenobi. yo're my only hope!"
// console.log(menssage)

// let episode: number= 4
// console.log("this is epsode"+ 4)
// episode= episode +1
// console.log ("Next episode is" + episode)
 
// let favoriteDroid: string
// favoriteDroid= 'BB-8'
// console.log ("My favorite droid is"+ favoriteDroid)

// let isEnoughToBeatMF = function (parsecs: number): boolean{
//     return parsecs < 12
// }
//  let distance = 11 
//   console.log (`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance)? 'YES': 'NO'}`)
// let call= (nome: string)=> console.log(`Do you copy, ${nome}?`)
// call(`R2`)

// function inc (speed: number, inc:number= 1): number{
//     return speed + inc

// }


//     console.log (`inc (5, 1) = $ {inc (5, 1)}`)
//     console.log (`inc (5) = $ {inc (5)}`)



// NAVE SPACE!!

class Spacecraft {
  
    constructor (public propulsor: string) {}
    jumpIntoHyperspace(){
        console.log (`Entering hyperspace with $ {this.populsor}`)
    }

}
     let ship = new Spacecraft (`hyperdrive`)
     ship. jumpIntoHyperspace()

      class MillenniumFalcon extends Spacecraft{
        constructor(){
            super( `hyperdrive`)

        }
        jumpIntoHyperspace(){
            if(Math.random() >= 0.5){
                super.jumpIntoHyperspace()
            }else{console.log(`Failed to jump into hyperspace`)}
            
        }
      }
      let Falcon = new MillenniumFalcon()
      Falcon.jumpIntoHyperspace()