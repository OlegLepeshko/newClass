
class myCar {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
        this.gasTank = 100
        this.zapravka = []


    }
    getCarTime() {
        return new Date(Date.now())
    }

    getGas() {
        this.gasTank += 10
        this.time = this.getCarTime()
        this.zapravka.push(this.gasTank.toString())
        console.log(this.gasTank.toString())
        console.log(this.brand.toString(), this.model.toString())

    }
    drive() {
        this.gasTank -= 10
        console.log(this.gasTank.toString())

    }
}
class HybridCar extends myCar {
    constructor(brand, model) {
        super(brand, model)

    }
    autoPark () {
        console.log("it's okey")
    }
}
const lexus = new HybridCar("lexus", "rx")
const lada = new myCar ("lada", "vesta")

lexus.autoPark()
lexus.drive()
async  function autoPark () {
    try {
        let response = await setTimeout(() =>
            lexus.autoPark(), 1000)
    } catch (err) {
        console.log(err)
    }
}
async  function drive () {
  try {
      let response = await setTimeout(() =>
          lexus.drive(), 2000)
  } catch (err) {
      console.log(err)
  }
}
async function getGas()  {
    try {
        let response = await setTimeout(() =>
            (lada.getGas()), 3000)
    } catch (err) {
        console.log(err)
    }


}
getGas()
drive()
autoPark()