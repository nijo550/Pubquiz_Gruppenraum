function time_lesen() {
  document.getElementById("Page_Status").innerHTML = "Alle 5s auslesen des Timers beginn";  
  let url_fun_time = url + "?fun=Get_end_time";
       
    // Update the count down every 5 second
    //var x = setTimeout(function() {
      
      fetch(url_fun_time)
        .then(tim => tim.json())
        .then(tim => {
          document.getElementById("Page_Status").innerHTML = "Antwort vom Timer ist da";
      //var endtime = "2021-04-23T17:30:45.356Z"
      
      var endtime = tim
      var localendtime = new Date(endtime)
      var localendtime_string = localendtime.toLocaleTimeString()
      var countDownDate = new Date(endtime).getTime();

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
      document.getElementById("Timer").innerHTML = "Bis um " + localendtime_string + " habt Ihr noch "+ lefttime+ " zum Bearbeiten Zeit.";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        document.getElementById("Timer").innerHTML = "Die Zeit ist seit " +localendtime_string+ " um!!! Bitte kommt zurück zur Main Area!";
      }
      document.getElementById("Page_Status").innerHTML = "Timer wurde belegt";  
    });
}
