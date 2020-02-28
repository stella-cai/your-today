
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
	clearInterval(stateCheck);
	// document ready
    show('page', true);
    show('loading', false);
    document.getElementById('body').style.overflowY = "scroll";
    
  $(".collapsible-table-row-head").click(function(){
    let temp = $(this).parent().children(".collapsible-table-row-content");
    $(this).toggleClass("shown");
    temp.fadeToggle();
});






  }
}, 100);


function show(id, value) {
    document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
}

function openNav() {
  document.getElementById("left-slide-panel").style.width = "350px";
}

function closeNav() {
  document.getElementById("left-slide-panel").style.width = "0";
}


















