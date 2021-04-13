let mealname,year,month,day,dotw;
const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
today = new Date();
year = today.getFullYear();
dotw = today.getDay();
nextday = document.getElementsByClassName("next")[0];
yesterday = document.getElementsByClassName("before")[0];  
console.log(today);
day = today.getDate();
day = String(day);
day = "00" + day;
day = day.slice(-2);
month = today.getMonth() + 1;
month = String(month);
month = "00" + month;
month = month.slice(-2);
let todayd = week[dotw];

const eachday = document.getElementsByClassName("eachday")[0];
eachday.innerHTML = day;
const eachmonth = document.getElementsByClassName("eachmonth")[0];
eachmonth.innerHTML = month;
const eachyear = document.getElementsByClassName("eachyear")[0];
eachyear.innerHTML = year;
const eachdotw = document.getElementsByClassName("dotw")[0];
eachdotw.innerHTML = todayd;
let dayfn;

// console.log(today.getDate());
yesterday.onclick = function(){
    day -= 1;
    if(day < 1){
        month-=1;
        day = 30;
    }
    dotw -= 1;
    if(dotw < 0){
        dotw = 6;
    }
    day = String(day);
    day = "00" + day;
    day = day.slice(-2);
    month = String(month);
    month = "00" + month;
    month = month.slice(-2);
    dayfn = `${year}-${month}-${day}`
    getMeal();
    day = String(day);
    month = String(month);
    eachday.innerHTML = day;
    eachmonth.innerHTML = month;
    eachyear.innerHTML = year;
    eachdotw.innerHTML = week[dotw];
    console.log(dotw)
    // console.log(day);
}
nextday.onclick = function(){
    month = Number(month);
    day = Number(day);
    day += 1;
    if(day >= 30){
        month += 1;
        day = 1;
    }
    dotw += 1;
    if(dotw > 6){
        dotw = 0;
    }
    day = String(day);
    day = "00" + day;
    day = day.slice(-2);
    month = String(month);
    month = "00" + month;
    month = month.slice(-2);
    dayfn = `${year}-${month}-${day}`
    getMeal();
    day = String(day);
    month = String(month);
    eachday.innerHTML = day;
    eachmonth.innerHTML = month;
    eachyear.innerHTML = year;
    eachdotw.innerHTML = week[dotw];
    console.log(dotw)
    // console.log(day);
}
dayfn=`${year}-${month}-${day}`;
const getMeal = ()=>  {
    const mealbox=document.getElementsByClassName('mealbox');
    for(let i=0;i<mealbox.length;i++){
        mealbox[i].innerHTML="";
    }
    // console.log(dayfn);
    fetch('https://api.dsm-dms.com/meal/'+dayfn)
    .then( response => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
    .then (json => {
        const bob=json[dayfn]
        const key=Object.keys(json[dayfn]);
        for(let i=0;i<key.length;i++){
            // for(let j=0;i<json[dayfn][key[i]])

            for(let j = 0;j<bob[key[i]].length;j++){
                const tempelement = document.createElement('span');
                tempelement.classList.add("mealname");
                tempelement.innerHTML = bob[key[i]][j];
                mealbox[i].appendChild(tempelement);
                // console.log(key);
            }
        }
    })
    .catch(error=>alert(error))
}
getMeal();
var modal = document.getElementById('mymodal');
var modalcontent = document.getElementsByClassName("modalcontent")[0];

// Get the button that opens the modal
var btn = document.getElementsByClassName("loginbtn")[0];
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modalclose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modalcontent.style.display = "block";
    modal.style.display = "block";
    modal.style.backgroundColor ="rgba(0,0,0,.2)";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
