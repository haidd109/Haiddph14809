const menuList = ["menu 1", "menu 2", "menu 3"];

//b1: Selector
//b2: vong lap(loop)
//b3: render
const menuElement = document.querySelector('#menu');
  if(menuElement){
    for(let i = 0; i < menuList.length; i++){
      menuElement.innerHTML += `<li>${menuList[i]}</li>`;
  }
}
// template string