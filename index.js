// gets all the necessary components
const dropdownButtons = document.querySelectorAll("[data-menu-target]");
const dropdownItems = document.querySelectorAll(".dropdown__items");

// event listeners

dropdownButtons.forEach(button =>{
  // adds a click even listener to each dropdown menu
  button.addEventListener('click',()=>{

    // gets the menu associated with the button just clicked
    const menu = document.querySelector(button.dataset.menuTarget);

    // checks if this menu is already open
    if(!menu.classList.contains("show")){

      // closes any open menus
      closeAllMenus()

      // opens the menu clicked on
      openMenu(menu);
    }
    else{
      // this closes the menu if it is showing
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

function closeAllMenus(){
  // checks for any open menus and closes them
  dropdownItems.forEach((menuItem)=>{
    if(menuItem.classList.contains("show")){
      closeMenu(menuItem);
    }
  }) 
}