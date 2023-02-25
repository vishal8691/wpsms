// loader function start 
var preloader = $('#preloader');
  $(window).load(function(){
    preloader.addClass('loading').fadeOut('slow', function() { $(this).remove(); });    
  });
// loader function End 



new SlimSelect({
  select: '#phoneselect',
  settings: {
    showSearch: false,
  }
})


new SlimSelect({
  select: '#groupselect',
  settings: {
    showSearch: false,
    placeholderText: 'Select from Group Numbers',
    maxValuesShown: 20, // Default 20
    contentLocation: document.getElementById('text')
  },
})

new SlimSelect({
  select: '#groupselect2',
  settings: {
    showSearch: false,
    placeholderText: 'Enter Individual Phone Numbers',
    maxValuesShown: 20, // Default 20
    contentLocation: document.getElementById('text')
  },
})


// delet modal js

// Get the modal
var modal = document.getElementById("myModal");
//var body = body;

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  body.addClass = "overflow";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "visible";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



