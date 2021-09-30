$(document).ready(function() {

var timeEl = document.querySelector('#currentDay');
var currentHour = moment().format('HH', true);
var timeblocks = $(".time-block");
var saveButton = $(".time-block").find('button');

// add clock to top of screen
function startTime() {
    var today = new moment();
    timeEl.textContent = moment().format('MMMM Do YYYY');
    t = setTimeout(function() {
      startTime()
    }, 500);
}
  
startTime();

// change colors of the time slots based on wether they are past present or future
for (var obj of timeblocks) {
  if (parseInt(obj.id.slice(5), 10) < currentHour){
    obj.classList.add('past');
  } else if (parseInt(obj.id.slice(5), 10) > currentHour){
    obj.classList.add('future');
  } else {
    obj.classList.add('present');      
  };
};

// send todos to local storage
function saveTask() {
    var button = $(this);
    var task = button.siblings('.description').val();
    var key = button.parent().attr('id');
    localStorage.setItem(key, task);
}
saveButton.on('click', saveTask);

// Display all tasks from local storage when page loads.
for (var obj of timeblocks) {
  var task = localStorage.getItem(obj.id);
  obj.children[1].textContent = task;
};

});












