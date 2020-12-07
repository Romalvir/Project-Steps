// lets reference the buttons 
const progress = document.getElementById("proress")
const prev = document.getElementById("pre")
const next = document.getElementById("next")
//since selecting all the node list
const circles = document.querySelectorAll(".circle")

//index represesnts active state.

let currentActive = 0

next.addEventListener("click", () => {
	//increment the current active by 1, test by console.log
	currentActive++
	//stays at 4 but does not go past 5
	if(currentActive > circles.length){
		currentActive = circles.length
	}

	update()
})


prev.addEventListener("click" , () => {
		//increment the current active by 1, test by console.log
	currentActive--
	//stays at 4 but does not go past 5
	if(currentActive < 1){
		currentActive = 1
	}
	//call a function called update
	update()
})


//update funtion that messes with the DOM

function update(){
	//loop through the node list
	circles.forEach((circle, idx) => {
		if (idx < currentActive){
			circle.classList.add("active")
		} else {
			circle.classList.remove("active")
		}
	})

	const actives = document.querySelectorAll(".active")


}