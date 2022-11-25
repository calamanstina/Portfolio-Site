console.log("Hello world");

function menuToggle() {
  var x = document.getElementbyId('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive ';
  } else { 
    x.className = 'navtoggle';
  }
}
