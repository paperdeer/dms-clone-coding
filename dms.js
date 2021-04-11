var mealname;
var text;
var nextday = document.getElementsByClassName("next")[0];
var yesterday = document.getElementsByClassName("before")[0];
nextday.onclick = function(){
    dayfn="08";
}
var dayfn = "08";
var day="2021-"+"04-"+dayfn;
var breakfast = function ()  {
    fetch("https://api.dsm-dms.com/meal/2021-04-08") 
    .then( response => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
    .then (json => breakfast=json[day]['breakfast'])
    .then(function(breakfast){
        const {length} = breakfast;
        console.log(length);
        // var i;
        for(let i = 0;i<length;i++){
            const tempelement = document.createElement('span');
            // tempelement.setAttribute("class", "mealname");
            tempelement.classList.add("mealname");
            tempelement.innerHTML = breakfast[i];   
            document.getElementsByClassName('mealbox')[0].appendChild(tempelement);
        }
        // text.forEach(text => {
        //     const tempelement = document.createElement('span');
        //     // tempelement.setAttribute("class", "mealname");
        //     tempelement.classList.add("mealname");
        //     tempelement.innerHTML = text;   
        //     document.getElementsByClassName('infobox')[0].appendChild(tempelement);
        // });
        console.log(text);
        // document.write(text);
        
    },function(error){
        console.log(error);
    });
}
breakfast();
var lunch = function ()  {
    fetch("https://api.dsm-dms.com/meal/2021-04-08") 
    .then( response => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
    .then (json => lunch=json[day]['lunch'])
    .then(function(lunch){
        const {length} = lunch;
        console.log(length);
        // var i;
        for(let i = 0;i<length;i++){
            const tempelement = document.createElement('span');
            // tempelement.setAttribute("class", "mealname");
            tempelement.classList.add("mealname");
            tempelement.innerHTML = lunch[i];   
            document.getElementsByClassName('mealbox')[1].appendChild(tempelement);
        }
        // text.forEach(text => {
        //     const tempelement = document.createElement('span');
        //     // tempelement.setAttribute("class", "mealname");
        //     tempelement.classList.add("mealname");
        //     tempelement.innerHTML = text;   
        //     document.getElementsByClassName('infobox')[0].appendChild(tempelement);
        // });
        console.log(text);
        // document.write(text);
        
    },function(error){
        console.log(error);
    });
}
lunch();
var dinner = function ()  {
    fetch("https://api.dsm-dms.com/meal/2021-04-08") 
    .then( response => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
    .then (json => breakfast=json[day]['dinner'])
    .then(function(dinner){
        const {length} = dinner;
        console.log(length);
        // var i;
        for(let i = 0;i<length;i++){
            const tempelement = document.createElement('span');
            // tempelement.setAttribute("class", "mealname");
            tempelement.classList.add("mealname");
            tempelement.innerHTML = dinner[i];   
            document.getElementsByClassName('mealbox')[2].appendChild(tempelement);
        }
        // text.forEach(text => {
        //     const tempelement = document.createElement('span');
        //     // tempelement.setAttribute("class", "mealname");
        //     tempelement.classList.add("mealname");
        //     tempelement.innerHTML = text;   
        //     document.getElementsByClassName('infobox')[0].appendChild(tempelement);
        // });
        console.log(text);
        // document.write(text);
        
    },function(error){
        console.log(error);
    });
}
dinner();

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
