var mealname;
var mealinfo = function ()  {
    fetch("https://api.dsm-dms.com/meal/2021-04-09") 
    .then( response => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
    .then (json => breakfast=json['2021-04-09']['breakfast'])
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
mealinfo();
// var lunchinfo = function ()  {
//     fetch("https://api.dsm-dms.com/meal/2021-04-09")
//     .then( response => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
//     .then (json => breakfast=json['2021-04-09']['lunch'])
//     .then(function(breakfast){

//     }
// }