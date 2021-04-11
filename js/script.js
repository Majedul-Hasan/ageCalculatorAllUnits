const date = document.getElementById('day')
const call = document.getElementById('call')
const dob = document.getElementById('dob')
const month = document.getElementById('month')
const year = document.getElementById('year')
const result = document.getElementById('result')
var dateBd
let monthe
var millSocnd
var dateNow = Date.now()
document.getElementById('dateBdt').innerText= Date()


call.addEventListener('click', ()=>{
    switch(Number(month.value)){
        case 1:
            monthe = "January";
            break;
        case 2:
            monthe = "february";
            break;
        case 3:
            monthe = "March";
            break;
        case 4:
            monthe = "April"
            break;
        case 5:
            monthe = "May";
            break;
        case 6:
            monthe = "June";
            break;
        case 7:
            monthe = "July";
            break;
        case 8:
            monthe = "August";
            break;
        case 9:
            monthe = "September";
            break;
        case 10:
            monthe = "Octobor";
            break;
        case 11:
            monthe = "November";
            break;
        case 12:
            monthe = "December";
            break;
        default:
            monthe = "<span style=\"color:red\">hey, have you ever born? Please inpute your Date of Birth </span>";
       
    }
    dob.innerHTML=` Your Date Of birth is :<span id="dateBd"> ${monthe} ${day.value}, ${year.value} </span>`;
     dateBd = `${monthe} ${day.value}, ${year.value}`
     millSocnd = Date.parse(dateBd)
console.log(millSocnd);
let ageInMiliSecond = dateNow- millSocnd 
let ageInSecond =  ageInMiliSecond /1000
let ageInMint =  ageInSecond /60
let ageInHour =  ageInMint /60
let ageInDay =  ageInHour /24
let ageInYear =  ageInDay /365
let ageday = ageInDay %365
let ageMonth =ageday/30
let daysRem =ageday%30
if(date.value==''|| year.value=='' || month.value=='' ){
    result.innerHTML= '<p class="text-danger"> hey, have you ever born? Please inpute your Date of Birth' 
}else{
    result.innerHTML=   `
    <p>your age in mili Second : ${ageInMiliSecond} </p>
    <p>your age in Second : ${ageInSecond.toFixed(0)} </p>
    <p>your age in Minute : ${ageInMint.toFixed(0)} </p>
    <p>your age in Hours : ${ageInHour.toFixed(0)} </p>
    <p>your age in days : ${ageInDay.toFixed(0)} </p>
    <p>your age is ${Math.floor(ageInYear)} years ${Math.floor(ageMonth)} month ${daysRem.toFixed(0)} days  z</p>
    `}
})


