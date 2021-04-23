// Set the date we're counting down to
let url ="https://script.google.com/macros/s/AKfycbx0uG2tsQhab97rJrMBtioVbuVLeu5QgmkvdIlgMNBsMUYVAO6e/exec"
let url_fun_time = url + "?fun=Get_end_time"
//function testGS(){
fetch(url_fun_time)
    .then(d => d.json())
    .then(d => {

var endtime = "2021-04-23T17:30:45.356Z"

//var endtime = "2021-04-23T17:30:45.356Z"
var countDownDate = new Date(endtime).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var lefttime = ""
  if(days>0){lefttime = days + "d "};
  if(hours>0){lefttime = lefttime + hours+"h "};
  if(minutes>0){lefttime = lefttime + minutes + "m "};
  lefttime = lefttime + seconds + "s " ; 

  // Output the result in an element with id="Timer"
  document.getElementById("Timer").innerHTML = lefttime;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Timer").innerHTML = d+"Zeit ist um!!!";
  }
}, 1000);
});