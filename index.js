const toggleButton = document.getElementById("toggle-button");
const closeButton = document.getElementById("close-button");
const navList = document.getElementById("nav-list");

if(toggleButton)
{
    toggleButton.addEventListener("click", ()=>{
    navList.classList.add("show")
    })
}
if(closeButton)
{
    closeButton.addEventListener("click", ()=>{
        navList.classList.remove("show");
    })
}
const navItems = document.querySelectorAll(".navItem");
for(var i=0;i<navItems.length;i++)
{
    navItems[i].addEventListener("click", ()=>{
        navList.classList.remove("show");
    })
}

const weHelpButton= document.getElementById("weHelp");
weHelpButton.addEventListener("click", ()=>{
    const furtherOption= document.getElementById("further");
    furtherOption.classList.add("showDrop");
});
const navItem_1 = document.querySelectorAll(".dropList");
for(var i=0;i<navItem_1.length;i++)
{
    navItem_1[i].addEventListener("click", ()=>{
        navList.classList.remove("show");
    })
}
