let input = document.querySelector('.input');
let result = document.querySelector('.result');
let outputBox = document.querySelector('.output');
let width = document.querySelector('.width');
let height = document.querySelector('.height');
let resultHeight = document.querySelector('.result-height');
let resultWidth = document.querySelector('.result-width');

input.addEventListener('input', function () {
    result.innerText = input.value + "%";
    outputBox.style.borderRadius = input.value + '%';
})

width.addEventListener('input', function () {
    resultWidth.innerText = width.value + "px";
    outputBox.style.width = width.value + 'px';
})

height.addEventListener('input', function () {
    resultHeight.innerText = height.value + "px";
    outputBox.style.height = height.value + 'px';
})