
var inputValue = document.getElementById('input')
var containerValue = document.getElementById('containerOfTask')

var text = "Just Do it!";
var index = 0;
var speed = 100;

function type() {
    if (index < text.length) {
        document.getElementById("just").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed); // Call the function again after the specified time

    }

}
type();





function addTask(){
  var createRow = document.createElement('div');
  createRow.className = 'row'; //row created
  createRow.classList.add('row', 'd-inline-flex', 'align-items-center', 'border', 'border-0', 'rounded-pill', 'standard-input', 'p-1', 'mb-2');
var containerValue = document.getElementById('containerOfTask')
containerValue.appendChild(createRow)
createRow.innerHTML = `<div class="col-auto d-flex align-items-center fs-4">`+inputValue.value+`</div>
            <div class="col-auto d-flex align-items-center justify-content-center gap-2">
                <i class="fa-solid fa-check task-button fs-5 p-1 rounded-circle" style="color: #000000;" onclick="completed(this)"></i>
                <i class="fa-solid fa-pen-to-square task-button fs-5 p-1 rounded-circle" style="color: #000000;" onclick="editText(this)"></i>
                <i class="fa-solid fa-trash task-button fs-5 p-1 rounded-circle" style="color: #000000;" onclick="dltIcon(this)"></i>
            </div>`
  console.log(createRow)

  // emptying the input field 
inputValue.value = "";
saveData();
}
// deleteAll 
function deleteAll(){
    lists.innerHTML = ""
    saveData();

  }

// completed icon
var fromIconToTask;
function completed(element){
  fromIconToTask = element.parentNode.previousElementSibling;

  fromIconToTask.classList.add('text-decoration-line-through')
  saveData();

  
}
// edit icon -->
function editText(element) {
  Swal.fire({
    input: 'textarea',
    inputLabel: 'Update Task',
    inputPlaceholder: 'Update Here...',
    inputAttributes: {
      'aria-label': 'Update'
    },
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Store the input value
      const text = result.value;


 
      console.log(text); // Outputs the input value to the console
      var getTaskValue = element.parentNode.previousElementSibling;
      fromIconToTask.classList.remove('text-decoration-line-through')
      
      getTaskValue.innerHTML = text
      saveData();
    }
  });
  
}
// delete icon
function dltIcon(element){
  var taskElement = element.parentNode.parentNode
  
  taskElement.classList.add('animate__animated','animate__backOutDown')
  setTimeout( function() {
    taskElement.remove();
    saveData();
  }, 2000);    
 }
// local storage 
function saveData() {
  if (containerValue.innerHTML.trim() === "") {
    localStorage.removeItem("task");  // Remove from localStorage if empty
  } else {
    localStorage.setItem("task", containerValue.innerHTML);  // Save current tasks
  }
}
//show stored data when reload
function showStoredData() {
  var savedTasks = localStorage.getItem("task");  // Get the stored tasks
  if (savedTasks) {
      containerValue.innerHTML = savedTasks;  // If tasks exist, display them
  }
}

function standardTheme() {
  var bodyGet = document.getElementsByTagName('body')[0];
  // Set the class name
  bodyGet.className = 'standard';
}
function lightTheme() {
  var bodyGet = document.getElementsByTagName('body')[0];
  
  // Set the class name
  bodyGet.className = 'light';
}
function darkTheme() {
  var bodyGet = document.getElementsByTagName('body')[0];
  
  // Set the class name
  bodyGet.className = 'darker';
}
window.onload = showStoredData;