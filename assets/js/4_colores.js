//Ejercicio clic black
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const color4 = document.getElementById('color4')

//doy el black para pintar
const pintarNegro = (elemento) => elemento.style.backgroundColor = 'black'

//al clic cambiara de color
color1.addEventListener('click', () => pintarNegro(color1))

color2.addEventListener('click', () => pintarNegro(color2))

color3.addEventListener('click', () => pintarNegro(color3))

color4.addEventListener('click', () => pintarNegro(color4))


//Ejercicios con Keydown
const cajaKey = document.getElementById('key')

const pintarDiv = (color) => {
    cajaKey.style.backgroundColor = color
}

const crearDiv = (color) => {
    const nuevoDiv = document.createElement('div')
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.width = '200px'
    nuevoDiv.style.height = '200px'
    document.body.appendChild(nuevoDiv)
}

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'a'){
        pintarDiv('pink')
    } else if (evento.key === 's'){
        pintarDiv('orange')
    } else if (evento.key === 'd'){
        pintarDiv('skyblue')
    } else if (evento.key === 'q'){
        crearDiv('purple')
    } else if(evento.key === 'w'){
        crearDiv('gray')
    } else if (evento.key === 'e'){
        crearDiv('brown')
    }
})