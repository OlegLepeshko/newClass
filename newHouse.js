class myHouse  {
    constructor(area, cost) {
        this.area = area
        this.cost = cost
        this.myCost = []
        this.color = ""
    }
    myPrivate() {
        this.myCost.push(this.area * this.cost)
    }

}
class NewHouse extends myHouse {
    constructor(area, cost) {
        super(area, cost)
    }
    superAction() {
        this.myPrivate()
        if (this.myCost[0] >= 100) {
            return this.color = "white"
        }else {
            return this.color = "black"
        }

    }

}
const myArea = new NewHouse(10, 20)
console.log(myArea.superAction())
const myNewArea = new NewHouse(10, 5)
console.log(myNewArea.superAction())
const mySuperNewArea = new NewHouse(10, 25)
console.log(mySuperNewArea.superAction())