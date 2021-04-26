const dropdownButtons = document.querySelectorAll("[data-menu-target]");
const dropdownItems = document.querySelectorAll(".dropdown__items");

console.log(dropdownItems);

// event listeners
dropdownButtons.forEach(button =>{
  button.addEventListener('click',()=>{
    const menu = document.querySelector(button.dataset.menuTarget);
    if(!menu.classList.contains("show")){
      dropdownItems.forEach((menuItem)=>{
        if(menuItem.classList.contains("show")){
          menuItem.classList.remove("show");
        }
      })

      openMenu(menu);
    }
    else{
      closeMenu(menu);
    }
  })
})


// helper functions

function openMenu(menu){
  menu.classList.add("show");
}

function closeMenu(menu){
  menu.classList.remove("show");
}