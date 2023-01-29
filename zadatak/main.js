let btn = document.getElementById("btn");
let poluprecnik = document.getElementById("poluprecnik");
let visina = document.getElementById("visina");

btn.addEventListener("click", () => {
    let summ = document.getElementById("rezultat");
    summ.value = Math.PI * poluprecnik.value * poluprecnik.value * visina.value;
    Forms("Order Entry").Modal = document.getElementById("rezultat");
})