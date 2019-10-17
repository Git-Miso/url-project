const expression = /((https?|ftp|gopher|telnet|file):\/\/.)+(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
const regex = new RegExp(expression);

function check(textarea) {
  let t = document.getElementById("urlArea").value;
  let display = document.getElementById("validatorStatus");

  if(t === undefined) return;

  let urls = t.match(regex);
  if(urls == null || urls.length <= 0) {
    display.innerHTML = "<i>Keine URL erkannt.</i>";
  } else if(urls.length == 1) {
    display.innerHTML = "Erkannte URL:<br><i><a target='_blank' href=\"" + urls[0] + "\">" + urls[0] + "</a></i>";
  } else {
    let html = "Erkannte URLs:<br>";
    let i = 0;

    for (url of urls) {
      let s = "<i><a target='_blank' href=\"" + url + "\">" + url + "</a></i>"

      if(i == 0) html += s;
      else html += "<br>" + s;

      i++;
    }

    display.innerHTML = html;
  }
}
