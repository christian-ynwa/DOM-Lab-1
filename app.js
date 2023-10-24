const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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
console.dir(menuLinks)