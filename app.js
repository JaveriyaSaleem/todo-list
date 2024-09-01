
var inputValue = document.getElementById('input')
var containerValue = document.getElementById('containerOfTask')


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
      getTaskValue.innerHTML = text
      saveData();
    }
  });
  
}
// completed icon
function completed(element){
  var fromIconToTask = element.parentNode.previousElementSibling;
  fromIconToTask.classList.add('text-decoration-line-through')
  saveData();

  
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
function saveData(){
  localStorage.setItem("task",containerValue.innerHTML)
}
//show stored data when reload

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