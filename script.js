// let arr=[
//     {vdo:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"},
// ]
// var clutter="";
// arr.forEach(element => {
//     clutter=clutter+` <video src=${element.vdo} autoplay loop muted id="main1_video"></video>`
// });

let obj={vdo:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"}

var clutter="";
clutter=clutter+` <video src=${obj.vdo} autoplay loop muted id="main1_video"></video>`

document.querySelector(".main1-video").innerHTML=clutter;


let obj2={vdo:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"}

var clutter2="";
clutter2=clutter2+` <video src=${obj2.vdo} autoplay loop muted id="main1_video"></video>`

document.querySelector(".main3-video").innerHTML=clutter2;


// var pluse=document.querySelector("svg");
// var content=document.querySelector(".main5-content");
// var flag=false;



// pluse.addEventListener("click",function(){
//     if(flag==false){
//         content.style.display="block";
//         flag=true;
//         pluse.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
//         <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
//       </svg>`;
//     }
//     else{
//         content.style.display="none";
//         flag=false;
//         pluse.innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`
//     }
   
// })

var pluse=document.querySelectorAll("svg");
var content=document.querySelectorAll(".main5-content");
var flag=false;

pluse[0].addEventListener("click",function(){
    if(flag==false){
        content[0].style.display="block"
        flag=true;
        pluse[0].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[0].style.display="none";
        flag=false;
        pluse[0].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`
    }
});

pluse[1].addEventListener("click",function(){
    if(flag==false){
        content[1].style.display="block"
        flag=true;
        pluse[1].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[1].style.display="none";
        flag=false;
        pluse[1].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`  
    }
});

pluse[2].addEventListener("click",function(){
    if(flag==false){
        content[2].style.display="block"
        flag=true;
        pluse[2].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[2].style.display="none";
        flag=false;
        pluse[2].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`  
    }
});

pluse[3].addEventListener("click",function(){
    if(flag==false){
        content[3].style.display="block"
        flag=true;
        pluse[3].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[3].style.display="none";
        flag=false;
        pluse[3].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`  
    }
});

pluse[4].addEventListener("click",function(){
    if(flag==false){
        content[4].style.display="block"
        flag=true;
        pluse[4].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[4].style.display="none";
        flag=false;
        pluse[4].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`  
    }
});

pluse[5].addEventListener("click",function(){
    if(flag==false){
        content[5].style.display="block"
        flag=true;
        pluse[5].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[5].style.display="none";
        flag=false;
        pluse[5].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`  
    }
});
pluse[6].addEventListener("click",function(){
    if(flag==false){
        content[6].style.display="block"
        flag=true;
        pluse[6].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[6].style.display="none";
        flag=false;
        pluse[6].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`  
    }
});

pluse[7].addEventListener("click",function(){
    if(flag==false){
        content[7].style.display="block"
        flag=true;
        pluse[7].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
    }
    else{
        content[7].style.display="none";
        flag=false;
        pluse[7].innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`  
    }
});




                        // This Is Done with the loop
// pluse.forEach(dets => {

//     dets.addEventListener("click",function(){
//         if(flag==false){
//             content.forEach(element2 => {
//                 element2.style.display="block"
//                 flag=true;
//                 dets.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
//                 <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
//                </svg>`;
//                });

          

//         }
//         else{
//             content.forEach(element2 => {
//                 element2.style.display="none"
//                 flag=false;
//                 dets.innerHTML=` <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>`
//                });
               
//         }

       
//     })
// });