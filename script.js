
const navitems = document.querySelectorAll(".list-item")
const mobile =document.querySelector(".mobile")
const webb = document.querySelector(".webb")
const movingDiv = document.querySelector(".moving-div")
const slider = document.querySelector('.slider')
const backgroundColor = document.querySelector('.color')




navitems.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        navitems.forEach((i)=>{
            i.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})



mobile.addEventListener('click',()=>{
    movingDiv.classList.remove("right")
    mobile.style.color = "rgb(83, 49, 156)"
    webb.style.color = "white"
})


webb.addEventListener('click',()=>{
    webb.style.color = "rgb(83, 49, 156)"
    mobile.style.color = "white"
    movingDiv.classList.add("right")
})


slider.oninput = function(){
    backgroundColor.style.width = this.value + '%'
}

