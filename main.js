let submitEl = document.getElementById("submit-btn")
let clearEl = document.getElementById("clear-btn")
let ulEl = document.getElementById("ul-el")
let textInput = document.getElementById("myInput")
let tasks = [] 

submitEl.addEventListener("click", function(){
    tasks.push(textInput.value)
    render()
    console.log("Submit button clicked!")
});


clearEl.addEventListener("click", function() {
    tasks = []
    render()
    console.log("Clear button clicked!")
});

function render(){
    let listItems = ""
    for(let i = 0; i < tasks.length; i++){
        listItems += "<li>" + tasks[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}

