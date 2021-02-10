
                        // not a good way
// var input1 = document.querySelector(".color1")
// var input2 = document.querySelector(".color2")
// var body = document.getElementById("gradient")



// input1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right,"
//     + input1.value
//     + ", "
//     + input2.value
//     + ")"
// })

// input2.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right,"
//     + input1.value
//     + ","
//     + input2.value
//     + ")"
// })


                //   good way of coding
// var input1 = document.querySelector(".color1")
// var input2 = document.querySelector(".color2")
// var body = document.getElementById("gradient")
// var css = document.querySelector("h3")


// function setColor(){
//         body.style.background = "linear-gradient(to right,"
//         + input1.value
//         + ", "
//         + input2.value
//         + ")"
//         css.textContent = body.style.background + ";";
// }
// input1.addEventListener("input", setColor)

// input2.addEventListener("input", setColor)


var input1 = document.querySelector(".color1")
var input2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var h3 = document.querySelector("h3")

function setColor(){
            body.style.background = "linear-gradient(to right,"
            + input1.value
            + ","
            + input2.value
            + ")"
            h3.textContent = body.style.background + ";"
}

input1.addEventListener("input", setColor)

input2.addEventListener("input", setColor)