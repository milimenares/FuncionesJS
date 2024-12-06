//Funcion original

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


//Funcion modificada

//declarando elemento por ID
const ele = document.getElementById("ele1")

//funcion color de fondo green
const pintar = (elemento, color) => {
    elemento.style.backgroundColor = color
}

pintar(ele, 'green')

//evento para pintar yellow al clickear
ele.addEventListener('click', () => {
    pintar(ele, 'yellow')
})

