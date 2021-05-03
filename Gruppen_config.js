
document.getElementById("Page_Status").innerHTML = "Auslesen Browser";
// Auslesen welcher Browser verwendet wird
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Opera 8.0+
var isFirefox = typeof InstallTrigger !== 'undefined';// Firefox 1.0+
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));// Safari 3.0+ "[object HTMLElementConstructor]" 
var isIE = /*@cc_on!@*/false || !!document.documentMode;// Internet Explorer 6-11
var isEdge = !isIE && !!window.StyleMedia;// Edge 20+
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);// Chrome 1 - 71
var isBlink = (isChrome || isOpera) && !!window.CSS;// Blink engine detection

document.getElementById("Page_Status").innerHTML = "Einlesen Gruppen-Tabelle beginn";         
let url ="https://script.google.com/macros/s/AKfycbyAxlfLqEFMlDbA3EwarHS_THrRqks2qw3WXV82qbGuJ_EHrCHnD4NFOXMJf_GfDdPUxg/exec" //WEB-Code für des google spreadsheet "Admin-Bereich" dort befindet sich die DoGet(e) funktion
        let url_fun = url + "?fun=Get_data"
//function testGS(){
fetch(url_fun)
    .then(Grup => Grup.json())
    .then(Grup => {
      document.getElementById("Page_Status").innerHTML = "Antwort der Gruppentabelle ist da";
       var Arr_Gruppe = Grup;
       var JitMeetingLink; //= 'https://meet.jit.si/' + Arr_Gruppe[0][0] +'-Der-Talk#config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D%22'
       var DocumentLink; //
       var CalcLink; //
       var DrawLink; //
  
            var ActuGruppe = 0;
            if(typeof liste["Gruppe"] !== "undefined"){
                ActuGruppe = liste["Gruppe"];
            }  
            JitMeetingLink = 'https://meet.jit.si/' + Arr_Gruppe[ActuGruppe][0] + '-Der-Talk#config.startWithAudioMuted=false'+
                  '&config.startWithVideoMuted=false'+
                  '&config.prejoinPageEnabled=false'+
                  '&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false'+
                  '&interfaceConfig.MOBILE_APP_PROMO=false'+
                  '&interfaceConfig.HIDE_INVITE_MORE_HEADER=true'+
                  '&interfaceConfig.SHOW_BRAND_WATERMARK=false'+
                  '&interfaceConfig.SHOW_JITSI_WATERMARK=false'+
                  '&interfaceConfig.SHOW_POWERED_BY=false'+
                  '&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false'+
                  '&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false'+
                  '&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C'+
                        '%22camera%22%2C'+
                        '%22closedcaptions%22%2C'+
                        '%22desktop%22%2C'+
                        '%22fullscreen%22%2C'+
                        '%22fodeviceselection%22%2C'+
                        //'%22hangup%22%2C'+
                        '%22profile%22%2C'+
                        //'%22chat%22%2C'+
                        //'%22recording%22%2C'+
                        //'%22livestreaming%22%2C'+
                        '%22etherpad%22%2C'+
                        //'%22sharedvideo%22%2C'+
                        '%22settings%22%2C'+
                        //'%22raisehand%22%2C'+
                        '%22videoquality%22%2C'+
                        '%22filmstrip%22%2C'+
                        //'%22feedback%22%2C'+
                        '%22stats%22%2C'+
                        '%22shortcuts%22%2C'+
                        '%22tileview%22%2C'+
                        '%22videobackgroundblur%22%2C'+
                        '%22download%22%2C'+
                        '%22help%22%5D';
                        //'%22help%22%2C'+
                        //'%22mute-everyone%22%5D';
            //'-Der-Talk#config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D';
            CalcLink = 'https://docs.google.com/spreadsheets/d/' + Arr_Gruppe[ActuGruppe][2] + '/edit?usp=sharing';
            DrawLink = 'https://docs.google.com/drawings/d/'+ Arr_Gruppe[ActuGruppe][3] + '/edit?usp=sharing';
            DocumentLink = 'https://docs.google.com/document/d/'+ Arr_Gruppe[ActuGruppe][4]+ '/edit?usp=sharing';
  // alert(CalcLink);
  document.getElementById("Page_Status").innerHTML = "Laden des Meetings"
          document.getElementById("Videocall").src = JitMeetingLink;
          document.getElementById("Page_Status").innerHTML = "Laden des Antwortsheets";
          document.getElementById("Calculation").src = CalcLink;
          document.getElementById("Page_Status").innerHTML = "Laden der Zeichnung";
          document.getElementById("Drawing").src = DrawLink
          document.getElementById("Page_Status").innerHTML = "Laden des Dokuments";
          document.getElementById("Documentation").src = DocumentLink;
          //alert("Du betrittst den Gruppenraum Nr.  " + ActuGruppe); 
          document.getElementById("Page_Status").innerHTML = "Alle Drive dokumente sind geladen";
  
  
  
   // var JitMeetingLink = 'https://meet.jit.si/' + d[1][0] + '-Der-Talk#config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D%22';
    //document.getElementById("video").src = JitMeetingLink;
}).then(Grup => {
  //document.getElementById("btn").addEventListener("click", testGS);
  // Set the date we're counting down to
  if (isFirefox == true) {
    document.getElementById("Page_Status").innerHTML = "Meldung Firefox";
    document.getElementById("Timer").innerHTML = "Timeranzeige wird von Firefox nicht unterstützt! <br>"
       +"Bevor du dich wieder bewegen kannst, klicke auf den graue Balken, welcher die Bildschirmhälften unterteilt."
   }else{
    document.getElementById("Page_Status").innerHTML = "Erstes auslesen des Timers"; 
    var Mycountdown = time_lesen() 
     var wait_time = 5000 //ms
          Mycountdown = setInterval(time_lesen, wait_time) 
   }
});
