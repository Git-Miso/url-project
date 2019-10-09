const protokollText = "<b>Das Protokoll</b><br><br>";
const subdomainText = "<b>1. Sub-Domain (Third-Level-Domain)</b><br><br> Bei Subdomains handelt es sich um Domains, die hierarchisch unter einer anderen Domain stehen. Zu erkennen sind Subdomains daran, dass sie abgetrennt von einem Punkt vor dem eigentlichen Domainnamen steht. Jede Domain kann eine oder mehrere Subdomains haben. Durch Subdomains lassen sich Inhalte unter einer gemeinsamen Adresse abrufen, aber voneinander getrennt ansprechen. ";
const domainText = "<b>2. Domain (Second-Level-Domain)</b><br><br> Eine Domain dient einer Website als eine Internetadresse. Die IP-Adresse besteht aus verschiedenen Zahlen und Punkten wie beispielsweise 46.4.199.140. Diese lassen sich durch das Domain Name System (DNS) in Wörtern ausdrücken. Dadurch können wir einfach google.de eingeben anstatt eine Zahlenkette, welche schwer zu merken ist.";
const topdomainText = "<b>3. Top-Level-Domain (TLD)</b><br><br> Die TLD befasst sich mit der geographischen Zuordnung oder den kommerziellen oder nicht kommerziellen Absichten einer Organisation. Diese steht hinter der Domain und ist mit einem Punkt von ihr abgetrennt. <br> Beispiele sind: .org, .com, .net oder .de";
const portText = "<b>Der Port</b><br><br> Domain ist geil und hat style";
const pfadText = "<b>Der Pfad</b><br><br> Der Pfad gibt an wo sich die HTML-Datei auf dem Server befindet. <br> Dieses Dateisystem funktioniert wie die Dateien in einem Betriebssystem, so zum Beispiel Windows. <br> Wenn du einen Ordner öffnest wirst du auch oben so einen Pfad sehen. <br> Mit Hilfe des Pfades können verschiedene HTML-Dateien geöffnet werden, wodurch man nicht auf nur eine Seite beschränkt ist. <br> Meistens landet man wenn man eine Seite öffnet auf der Index Datei. <br> Also: www.example.de/index.html";
const queryText = "<b>Der QueryString</b><br><br>Domain ist geil und hat style";
const fragmentText = "<b>Das Fragment</b><br><br> Das Fragment weist auf eine bestimmte Stelle auf der Seite hin. Die Seite springt dann an die Stelle mit dem Objekt, dessen Namens oder dessen id dem Fragment enspricht. Also id=ziel entspricht Fragment #ziel. \n Eingesetzt wird das Fragment zum Beispiel bei <a href='#validatorStatus'>Sprungstellen.</a>";


function changeText(text) {
  document.getElementById('text').innerHTML = text;
}

var count = 0;
document.getElementById("myBtn").onclick = function() {
  count++;
  console.log(count);

  switch (count % 5) {
    case 1:
      var d = document.getElementById("square");
      d.className += " square_anim";
      var neu = "youtube.com";
      document.getElementById('webadresse').innerHTML = neu;
      break;
    case 2:
      var d = document.getElementById("square");
      d.className += "2";
      var neu = "194.0.4.44";
      document.getElementById('webadresse').innerHTML = neu;
      break;
    case 3:
      var d = document.getElementById("square");
      d.className += "2";
      var neu = "";
      document.getElementById('webadresse').innerHTML = neu;

      var d = document.getElementById("square2");
      d.className += " square2_anim";
      var neu = "192.0.4.44";
      document.getElementById('webadresse2').innerHTML = neu;
      break;
    case 4:
      var d = document.getElementById("square2");
      d.className += "2";
      var neu = "seite.html";
      document.getElementById('webadresse2').innerHTML = neu;
      break;
    case 0:
      var d = document.getElementById("square2");
      d.className += "2";
      var neu = "";
      document.getElementById('webadresse2').innerHTML = neu;
      break;
  };

  if (count >= 25) {
    count = 0;
    alert("bist du hobbylos...");
  }
};

(function changeDimensions() {
  let fontSize;
  if (screen.width < 1960) fontSize = "20px";
  else fontSize = "30px";

  let width;
  if(screen.width < 1200) width = "95%";
  else width = "65%";

  let elems = document.getElementsByClassName("domain");
  for (button of elems) {
    button.style.fontSize = fontSize;
  }

  document.getElementsByClassName("border_url")[0].style.width = width;
})();

$(window).on('resize', () => changeDimensions());
