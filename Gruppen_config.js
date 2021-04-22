
let url ="https://script.google.com/macros/s/AKfycbx0uG2tsQhab97rJrMBtioVbuVLeu5QgmkvdIlgMNBsMUYVAO6e/exec"

//function testGS(){
fetch(url)
    .then(d => d.json())
    .then(d => {
       var Arr_Gruppe = d;
       var JitMeetingLink; //= 'https://meet.jit.si/' + Arr_Gruppe[0][0] +'-Der-Talk#config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D%22'
       var DocumentLink; //
       var CalcLink; //
       var DrawLink; //
  
            var ActuGruppe = 0;
            if(typeof liste["Gruppe"] !== "undefined"){
                ActuGruppe = liste["Gruppe"];
            }  
            JitMeetingLink = 'https://meet.jit.si/' + Arr_Gruppe[ActuGruppe][0] + '-Der-Talk#config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D%22';//'-Der-Talk#config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D%22';
            CalcLink = 'https://docs.google.com/spreadsheets/d/' + Arr_Gruppe[ActuGruppe][2] + '/edit?usp=sharing';
            DrawLink = 'https://docs.google.com/drawings/d/'+ Arr_Gruppe[ActuGruppe][3] + '/edit?usp=sharing';
            DocumentLink = 'https://docs.google.com/document/d/'+ Arr_Gruppe[ActuGruppe][4]+ '/edit?usp=sharing';
  alert(CalcLink);
          document.getElementById("Videocall").src = JitMeetingLink;
          document.getElementById("Calculation").src = CalcLink;
          document.getElementById("Drawing").src = DrawLink
          document.getElementById("Documentation").src = DocumentLink;
          alert("Du betrittst den Gruppenraum Nr.  " + ActuGruppe); 
  
  
  
  
   // var JitMeetingLink = 'https://meet.jit.si/' + d[1][0] + '-Der-Talk#config.startWithAudioMuted=false&config.startWithVideoMuted=false&config.prejoinPageEnabled=false&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&interfaceConfig.MOBILE_APP_PROMO=false&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&interfaceConfig.SHOW_BRAND_WATERMARK=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.SHOW_POWERED_BY=false&interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE=false&interfaceConfig.SHOW_WATERMARK_FOR_GUESTS=false&interfaceConfig.TOOLBAR_BUTTONS=%5B%22microphone%22%2C%22camera%22%2C%22closedcaptions%22%2C%22desktop%22%2C%22fullscreen%22%2C%22fodeviceselection%22%2C%22hangup%22%2C%22profile%22%2C%22chat%22%2C%22recording%22%2C%22livestreaming%22%2C%22etherpad%22%2C%22sharedvideo%22%2C%22settings%22%2C%22raisehand%22%2C%22videoquality%22%2C%22filmstrip%22%2C%22feedback%22%2C%22stats%22%2C%22shortcuts%22%2C%22tileview%22%2C%22videobackgroundblur%22%2C%22download%22%2C%22help%22%2C%22mute-everyone%22%5D%22';
    //document.getElementById("video").src = JitMeetingLink;
});
//}
//document.getElementById("btn").addEventListener("click", testGS);
