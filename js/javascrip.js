var hh1 = document.getElementsByClassName('top-bar')
window.addEventListener("scroll",function(){
    y = window.pageYOffset;
    // console.log(y);
    if(y>100){
        hh1[0].style.display ='none';
    }
    else{
        hh1[0].style.display ='block';
    }
})