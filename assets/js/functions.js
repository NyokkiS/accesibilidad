//contraste de texto
//usos del color
//links
//texto alt
//labels
//radio buttons
//HTML semántico
//listas
//tamaño de texto
//headings
//ARIA
//skip nav
const botones = document.getElementsByClassName("solucionador"),
    articulos = document.getElementsByTagName("article")


botones[0].addEventListener("click", () => {
    document.getElementById("problema0").style.width = "6em"
    document.getElementById("problema0").style.marginBottom = "0"
    botones[0].setAttribute("disabled", "")
})

botones[1].addEventListener("click", () => {
    const alts = ["Grano de café arábico", "Grano de café Moka", "Grano de café Tarrazú", "Grano de café Robusto"]
    for (i = 0; i < articulos.length; i++) {
        const imagen = articulos[i].getElementsByTagName("img")
        imagen[0].setAttribute("alt", alts[i])

    }
    botones[1].setAttribute("disabled", "")
})

botones[2].addEventListener("click", () => {
    for (i = 0; i < articulos.length; i++) {
        const links = articulos[i].getElementsByTagName("a")

        links[0].className = "sosoLink"
    }
    botones[2].setAttribute("disabled", "")
    botones[3].style.display = "block"
})

botones[3].addEventListener("click", () => {
    for (i = 0; i < articulos.length; i++) {
        const links = articulos[i].getElementsByTagName("a")
        links[0].className = "goodLink"
    }
    botones[3].setAttribute("disabled", "")
})

botones[4].addEventListener("click", () => {
    const temp = [
        '<p>No es solo uno de los dos principales tipos de cafetos que adornan nuestro planeta, es, de hecho, el protagonista indiscutible en el mundo del café. <a class="goodLink" target="_blank" href="https://incapto.com/blog/tipos-de-cafe-en-grano#h-cafe-arabica">Para más información sobre el grano arábico toque aquí</a></p>',
        '<p>Entre las joyas ocultas del mundo del café, en concreto dentro de la variedad arábica, el Moka brilla con luz propia. <a class="goodLink" target="_blank" href="https://incapto.com/blog/tipos-de-cafe-en-grano#h-moka">Para más información sobre el grano Moka toque aquí</a></p>',
        '<p>Variedad de café en grano arábica originaria de Costa Rica, donde el suelo volcánico enriquece cada semilla que toca. <a class="goodLink" target="_blank" href="https://incapto.com/blog/tipos-de-cafe-en-grano#h-tarrazu">Para más información sobre el grano terrazú toque aquí</a></p>',
        '<p>Este tipo de café se caracteriza por la robustez de sus semillas, una cualidad que le permite adaptarse y prosperar en una amplia gama de terrenos. <a class="goodLink" target="_blank" href="https://incapto.com/blog/tipos-de-cafe-en-grano#h-cafe-robusta">Para más información sobre el grano robusto toque aquí</a></p>'
    ]
    for (i = 0; i < articulos.length; i++) {
        const parr = articulos[i].getElementsByTagName("p")
        parr[0].innerHTML = temp[i]
    }
    botones[4].setAttribute("disabled", "")
})

botones[5].addEventListener("click", () => {
    document.getElementById("formulario").innerHTML = '<label for="nombre">Nombre Completo</label><input type="text" id="nombre" placeholder="Pepe Ramirez"><label for="direccion">Direccion</label><input type="text" id="direccion" placeholder=" Av. Lope de Vega 2973"><label for="email">Email</label><input type="email" id="email" placeholder="pepe.ramirez@hotmail.com"><fieldset><legend>Cuál prefiere?</legend><input type="radio" name="gustos" value="cafe" id="cafe"><label for="cafe">Café</label><input type="radio" name="gustos" value="te" id="te"><label for="te">Té</label></fieldset><input type="button"  id="comprobar" value="Enviar"></input>'
    botones[5].setAttribute("disabled", "")

    document.getElementById("comprobar").addEventListener("click", () => {
        document.getElementById("nombre").style.borderColor = "red"
        document.getElementById("direccion").style.borderColor = "red"
        document.getElementById("email").style.borderColor = "red"
        botones[6].style.display = "block"
    });
})

botones[6].addEventListener("click", () => {
    document.getElementById("formulario").innerHTML = '<label for="nombre">Nombre Completo</label><input type="text" id="nombre" aria-describedby="nombreError" placeholder="Pepe Ramirez"><p class="error" role="alert" id="nombreError"> Debe ingresar su nombre completo</p><label for="direccion">Direccion</label><input type="text" id="direccion" aria-describedby="direccionError" placeholder=" Av. Lope de Vega 2973"><p class="error" role="alert" id="direccionError"> Debe ingresar una dirección válida</p><label for="email">Email</label><input type="email" id="email" aria-describedby="emailError" placeholder="pepe.ramirez@hotmail.com"><p class="error" role="alert" id="emailError"> Debe ingresar una dirección de correo válida</p><fieldset><legend>Cuál prefiere?</legend><input type="radio" name="gustos" value="cafe" id="cafe"><label for="cafe">Café</label><input type="radio" name="gustos" value="te" id="te"><label for="te">Té</label></fieldset><input type="button"  id="comprobar" value="Enviar"></input>'
    document.getElementById("nombre").style.borderColor = "red"
    document.getElementById("direccion").style.borderColor = "red"
    document.getElementById("email").style.borderColor = "red"
    botones[6].setAttribute("disabled", "")
    document.getElementById("comprobar").addEventListener("click", () => {
        document.getElementById("nombre").style.borderColor = "transparent"
        document.getElementById("direccion").style.borderColor = "transparent"
        document.getElementById("email").style.borderColor = "transparent"
        const errores = document.getElementsByClassName("error")
        for (i = 0; i < errores.length; i++) {
            errores[i].style.display = "none"
        }

        document.getElementById("comprobar").outerHTML = '<p id="comprobado" aria-live="polite">Enviado</p>'
        document.getElementById("homeLink").focus()
    });
})



document.getElementById("lightMode").addEventListener("click", () => {

    const interruptor = document.getElementById("lightMode")
    if (interruptor.ariaChecked === "false") {
        document.getElementsByTagName("body")[0].id = "dark"
        interruptor.ariaChecked = "true"
    } else {
        document.getElementsByTagName("body")[0].id = "light"
        interruptor.ariaChecked = "false"
    }


})