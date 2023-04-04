let elForm = document.querySelector(`.js-form`);
let elInput = document.querySelector(`.js-input`);
let elList = document.querySelector(`.js-list`);
let allToDos = [];

let onRender = (arr) => {
    elList.innerHTML = null; 

    arr.forEach((element) => {
        console.log(element);


        let elLi = document.createElement(`li`)
        elLi.className = `list-item d-flex align-items-center mb-3`;
        elLi.innerHTML = `
        <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
        />
        <span class="js-text">${element.text}</span>
        <div class="ms-auto">
            <button type="button" class="btn btn-primary me-2">Edit</button>
            <button type="button" class="btn btn-secondary">Delete</button>
        </div>
        `;
    
        elList.appendChild(elLi);
    });

};

let onSubmit = (evt) => {
evt.preventDefault();

let inputValue = elInput.value.trim();

if(!inputValue) {
    alert(`Input ToDo`);
};

let newToDo = {
    id: allToDos.length +1,
    text: inputValue,
    isCompleted: false,
};



allToDos.unshift(newToDo);
onRender(allToDos);

elInput.value = null;
elInput.focus();

};

elForm.addEventListener(`submit`, onSubmit);