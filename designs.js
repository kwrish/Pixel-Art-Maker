// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


  // Select color input
  // Select size input
  // When size is submitted by the user, call makeGrid()

  $(document).ready(function() {

  const canvas=$('#pixelCanvas');
  let table, form, color, gridHeight, gridWidth;
  table=$('table');
  form=$('form');
  color=$('input[type="color"]');
  gridHeight=$('#inputHeight');
  gridWidth=$('#inputWidth');

  function makeGrid() {
  canvas.html('');
     canvas.css('background-color','white');
  for(let x=1; x<=gridHeight.val() ;x++){
    canvas.append('<tr></tr>');}
    for(let y=1; y<=gridWidth.val() ;y++){
    $('tr').append('<td></td>');
  }}

  form.submit(function(e){
    e.preventDefault();
    makeGrid();
  });

  //click to color
  canvas.on('click','td',function(evt){
    evt.preventDefault()
  $(evt.target).css('background-color',color.val());
  });

  //doubleclick to remove color
  table.on('dblclick','td',function(evt){
    $(evt.target).css('background-color','white');
  });

  //drag and draw
  canvas.on('mouseover','td', function (event){
    event.preventDefault();
  if (event.buttons) {
  $(this).css("background-color",color.val());
  }
  });


  });
