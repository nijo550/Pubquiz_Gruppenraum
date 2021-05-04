function Importjson(){

  return [12];
}  
function Import_json_all() {
var xmlHttp = null;

  try {
    xmlHttp = new XMLHttpRequest();
  } catch(e) {
    // Fehlerbehandlung, wenn die Schnittstelle vom Browser nicht unterstützt wird.
    document.getElementById("Page_Status").innerHTML =  "Schnittstelle XMLHttpReqzest wird vom Browser nicht unterstützt";
  }
  if (xmlHttp) {
    document.getElementById("Page_Status").innerHTML =  "Abruf Gruppenübersicht gestertet in jason format";
    xmlHttp.open('GET', 'overview_gruppen_json.json', true);
    document.getElementById("Page_Status").innerHTML =  "Antwort Json-Abruf: gestartet";
    xmlHttp.onreadystatechange = function () {
        document.getElementById("Page_Status").innerHTML =  "Antwort Json-Abruf: this.readyState="+ this.readyState + "this.Status="+this.status;
        if (xmlHttp.readyState == 4) {
            //alert(xmlHttp.responseText);
            myjsonObj = JSON.parse(this.responseText);            
            //alert("finished"+myjsonObj.Gruppenoverview)
            return myjsonObj;
           
        }
    };
    xmlHttp.send(null);
  }
}