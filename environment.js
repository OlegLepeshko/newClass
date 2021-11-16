function environment () {
  let count = 0
  return function (){
    return count++
 }
}

let counter = environment()
let counter1 = environment()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter1())

class Mycount {
  constructor(sum, profit) {
    this.sum = sum
    this.profit = profit 
  }
  multiply() {
   return  (this.sum * this.profit)
     
  }
  divide() {
  return this.sum / this.profit
  }

}
class NewMycount extends Mycount {
  constructor(sum, profit) {
    super(sum, profit)
  }
  plus() {
  return this.sum + this.profit 
  }
  minus() {
  return this.sum - this.profit
  }
}
 let mySum = new Mycount (10, 20)
 let mySuperSum = new NewMycount (20, 20)

  
 console.log(mySum.divide())
 console.log(mySuperSum.divide())
 console.log(mySuperSum.plus())
 console.log(mySuperSum.minus())
 console.log(mySuperSum.multiply())
 getCount()
 async function getCount() {
  try {
      let response = await setTimeout(() => console.log(mySum.multiply()), 3000)
      return response
  } catch (err) {
    console.log (err)
  }
  
}
