window.addEventListener('DOMContentLoaded', () => {

    let menu = document.querySelector(".slide-block"),
    left = document.querySelector(".left-side");

    menu.addEventListener("click",function(){
        if(open){
          left.classList.add("close");
        }else{
          left.classList.remove("close");
        }
        open=!open;
      });
  
  })