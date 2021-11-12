
class myCar {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
        this.gasTank = 100
        this.zapravka = [];


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
setTimeout(() => lexus.drive(), 1000)
setTimeout(() => lexus.autoPark(), 1000)
async function fun()  {
    try {
        let response = await setTimeout(() =>
            (lada.getGas()), 0)
    } catch (err) {
        console.log(err)
    }


}
fun()