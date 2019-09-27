function protokollText()
{
  document.getElementById('text').innerHTML = "Protokoll";
}
function domainText()
{
  document.getElementById('text').innerHTML = "Domain";
}
function pfadText()
{
  document.getElementById('text').innerHTML = "Pfad";
}
function queryText()
{
  document.getElementById('text').innerHTML = "QueryString";
}
function fragmentText()
{
  document.getElementById('text').innerHTML = "Fragment";
}


var count = 1;
document.getElementById("myBtn").onclick = function() {
  switch(count){
    case 1:
        var d = document.getElementById("square");
        d.className += " square_anim";
        var neu = "youtube.com";
      document.getElementById('webadresse')
        .innerHTML = neu;
        count += 1;
    break;
    case 2:
        var d = document.getElementById("square");
        d.className += "2";
        var neu = "194.0.4.44";
      document.getElementById('webadresse')
        .innerHTML = neu;
        count += 1;
    break;
    case 3:
        var d = document.getElementById("square");
        d.className += "2";
        var neu = "";
      document.getElementById('webadresse')
        .innerHTML = neu;

        var d = document.getElementById("square2");
        d.className += " square2_anim";
        var neu = "192.0.4.44";
      document.getElementById('webadresse2')
        .innerHTML = neu;
        count += 1;
    break;
    case 4:
        var d = document.getElementById("square2");
        d.className += "2";
        var neu = "seite.html";
      document.getElementById('webadresse2')
        .innerHTML = neu;
        count += 1;
    break;
    case 5:
        var d = document.getElementById("square2");
        d.className += "2";
        var neu = "";
      document.getElementById('webadresse2')
        .innerHTML = neu;
        count = 1;
    break;
};
};
