
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded",ready)
}else{
  ready()
}

function ready(){
  const responsiveBar = document.getElementsByClassName("harmburger")[0];
  responsiveBar.addEventListener('click',opensidebar);

  const responsvivecancle = document.getElementsByClassName("fa fa-remove")[0];
  responsvivecancle.addEventListener("click",closesidebar);



  function opensidebar(){
  const openBar = document.querySelector(".sidebar");
  openBar.classList.remove("close")
  }

  function closesidebar(){
    const closebar = document.querySelector(".sidebar")
    
    closebar.classList.add("close")
  }
}