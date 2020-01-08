console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dataArray = " "
let breedList = ""

//function showDogs () {}

// fetch(imgUrl)
// .then(res => res.json())
// //.then(data => showDogs(data));  
// .then(console.log)  

// fetch(breedUrl)
// .then(res => res.json())
// .then(json => console.log(json["message"]))   



fetch(imgUrl)
.then(res => res.json())
//.then(data => showDogs(data));  
.then(json => showDogs(json["message"]))   

function makeDogs(imgUrl) {
   let dogList = document.getElementById("dog-image-container")
   let newImg = document.createElement("img")
   newImg.src = imgUrl  
   dogList.appendChild(newImg) 
}


function showDogs(dogArray) {
    dogArray.map(dog => {
        makeDogs(dog) 
    })
}

fetch(breedUrl)
.then(res => res.json())
.then(json => showBreeds(json["message"])) 

function showBreeds(data) {
    // console.log(data)
    dataArray = Object.keys(data)
    // console.log(dataArray)  
    dataArray.map(breed => {
        makeBreed(breed) 
    }) 
}

function showNewBreeds(breedStringArray) {
    breedStringArray.map(breed => {
        makeBreed(breed)
    })
}

function makeBreed(name) {
    breedList = document.getElementById("dog-breeds") 
    let newLi = document.createElement("li") 
    newLi.innerText = name
    newLi.addEventListener("click", function () {
        newLi.style.color = "aqua" 
    }) 
    breedList.appendChild(newLi) 
}

// let breedSelection = document.querySelector("#breed-dropdown")
// console.log(breedSelection)  
// breedSelection.addEventListener("change", (e) => {
//     console.log(e) 
//     //if( e)
// }) 

document.addEventListener("DOMContentLoaded", function() {
    breedSelection = document.querySelector("#breed-dropdown")
    let breedList = document.getElementById("dog-breeds")
    let filteredBreeds = ""
//console.log(breedSelection)  
breedSelection.addEventListener("change", (e) => {
    let choice = e.target.value 
    //console.log(choice) 
    //console.log(dataArray) 
    function breedFilter(letter) {
        filteredBreeds = dataArray.filter(function(breed) {
                return breed[0] === `${letter}` 
            })
            return filteredBreeds
        }
      breedFilter(choice)
      breedList.innerHTML = ""
      showNewBreeds(filteredBreeds)


    }) 
})


