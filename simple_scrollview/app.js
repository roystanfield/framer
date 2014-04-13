
// Set up the table cells

tableCells = [
  "images/01.png",
  "images/02.png",
  "images/03.png",
  "images/04.png",
  "images/05.png",
  "images/06.png"
]

generateTableCells = function(){
    activityFeed = new ScrollView({
    x:0,
    y:128,
    width:640,
    height:1010
  })

  for(var i = 0; i<tableCells.length; i++){
    window["imageView" + i] = new ImageView({
      x:40,
      y:i * 248,
      width:600,
      height: 248,
      image: tableCells[i],
      superView: activityFeed
    })
  }
}


// Let's do this!
generateTableCells(tableCells);

