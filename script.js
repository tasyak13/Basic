'use strict';

// 1. В js объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. 
//При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. 
//Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.

const images = ['./1.jpg', './2.jpg', './3.jpg'];
const smallImages = document.querySelectorAll('.small-images img');
const bigImage = document.querySelector('.big-image img');

smallImages.forEach((img, index) => {
    img.src = images[index];
  });

smallImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    bigImage.src = images[index];
  });
});

// 2. Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст 
//должен меняться на звездочки. При повторном клике заменяться обратно на текст

const paragraphs = ["string1", "string2", "string3", "string4", "string5", "string6",];

const divP = document.createElement('div');
document.body.prepend(divP);
console.log(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    let newP = document.createElement('p');
    newP.innerText = paragraphs[i];
    divP.append(newP);    
}

let classButton = document.querySelectorAll('p');
    
for(let i = 0; i < classButton.length; i++)
        classButton[i].addEventListener("click", () => {
            classButton[i].classList.toggle("text");
 })

// 3. Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

for (let i = 0; i <= 25; i++) {
    const red = 128;
    const green = 128;
    const blue = 5 * i;
    const color = `rgb(${red}, ${green}, ${blue})`;
  
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    document.body.appendChild(div);
  }

// 4. Создать список дел (to-do list). При вводе с клавиатуры (рекомендую попробовать тег input и event change) 
//введенное значение записывается в переменную. Затем, при нажатии на кнопку "Добавить" создается элемент списка с этим 
//значением (можно добавить какую-то базовую стилизацию). Добавить можно неограниченное количество значений. Дополнительно: при нажатии на
//элемент списка он меняет свой фоновый цвет. Если снова нажать на него, цвет пропадает.

const todoList = document.createElement('ul');
document.body.prepend(todoList);

const anotherButtonToClick = document.querySelector('#submitInToDoList');

const handleAnotherButtonClick = () => {
    let todoListItem = document.createElement('li');
    todoListItem.innerText = toDo.value;
    todoList.append(todoListItem);
}

anotherButtonToClick.addEventListener("click", handleAnotherButtonClick);


