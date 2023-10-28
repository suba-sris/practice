function callMeBack (x,y) {
   return x * y
}
function iCallYou (me){
  
  return callMeBack(2,2) + me 
}
console.log(iCallYou("\ti called him!"))


const array = [1,2,3,5]
const map = array.map(function call (value){
    return value *2
})
console.log(map)

const arrow = (time) => {return time}
console.log(arrow(new Date().getTime()))

class car {
  constructor(company ,model,year) {
    this.car_company = company,
    this.car_model = model,
    this.car_year = year
  }
}
const myCar = new car("TATA","version-1","2001");
console.log(myCar.car_year)