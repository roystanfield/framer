var heightOfRefreshAnimation = 100;


createRefreshGraphic = function(){
    refreshGraphic = new ImageView({
    width: 87,
    height: 93,
    x: (640 / 2) - (87 / 2),
    y: 160,
    image: "images/rotation_arrow.png",
    opacity: 0,
    superView: activityFeed
  })
}


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

// Set up some animations

activityFeedClicked = function() {
  for(var i = 0; i<activityFeed.subViews.length; i++){
    activityFeed.subViews[i].y = activityFeed.subViews[i].y + heightOfRefreshAnimation
    console.log(activityFeed.subViews[i].y);
  }
  activityFeed.animate({
    properties: {
      height: activityFeed.height + heightOfRefreshAnimation
    },
    time: 250,
    curve: "ease-in-out"
  })
  showRefreshGraphic();
}

showRefreshGraphic = function() {
  utils.delay(500, function() {
    refreshGraphic.opacity = 1
  })
}



// Let's do this!
generateTableCells(tableCells);
createRefreshGraphic();
activityFeed.on("click", activityFeedClicked);

