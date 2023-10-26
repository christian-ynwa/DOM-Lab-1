
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

const mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")
console.dir(mainEl)

const topMenuEl = document.querySelector("#top-menu")
topMenuEl.style.height="100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")
console.log(topMenuEl.classList.contains("flex-around"))

menuLinks.forEach(link =>{
   //const newMenuLinks= document.createElement("a")
   const newMenuLinks= document.createElement("a")
   //newMenuLinks.setAttribute("href", link.href)
   newMenuLinks.setAttribute("href",link.href)
   newMenuLinks.innerText= link.text
    topMenuEl.appendChild( newMenuLinks)
    
})
// END OF EXCERCISE PART 1
const subMenuEl = document.querySelector("#sub-menu")
subMenuEl.style.height="100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList.add("flex-around")
subMenuEl.style.position = "absolute"
subMenuEl.style.top= "0"

const topMenuLinks = topMenuEl.querySelectorAll("a")
console.dir(topMenuLinks)


// 
topMenuEl.addEventListener("click",(event) =>{
   event.preventDefault()
   console.log(event.target.textContent)
    if (event.target.tagName!=="A"){
        console.log("A")
        

        return
    }
//5.5
    event.target.classList.add("active")
// end 5.5 
    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
        showingSubMenu="false"
        subMenuEl.style.top="0"
        return;

    }
    // end of 5.3
    // 5.4
   topMenuLinks.forEach((link) => {
    link.classList.remove('active');

   });
// end 5.4
showingSubMenu = menuLinks[topMenuLinks.indexOf(event.target)].hasOwnProperty("subLinks")
console.log(showingSubMenu)
} )

//let showingSubMenu = false
//subMenuEl.style.top="0"