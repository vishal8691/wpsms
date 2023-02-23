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



