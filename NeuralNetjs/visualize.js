var stage = new Konva.Stage({
  container: "container",
  width: 500,
  height: 400
})

var layer = new Konva.Layer()

var rect = new Konva.Rect({
  x: 500 / 2 - 200 / 2,
  y: 400 / 2 - 100 / 2,
  width: 200,
  height: 100,
  fill: 'red',
  name: 'rect',
  stroke: 'black',
  draggable: false
});

var MAX_WIDTH = 450
var MAX_HEIGHT = 350

var labelWidth = 80
var labelHeight = 30

var sizeLabel = (new Konva.Label({})).add(new Konva.Text({
  x: rect.getPosition().x + rect.getWidth() / 2 - labelWidth / 2,
  text: "w: " + rect.getWidth() + " h: " + rect.getHeight(),
  y: rect.getPosition().y + rect.getHeight() / 2 - labelHeight / 2,
  width: labelWidth,
  height: labelHeight
}))

var group = new Konva.Group({})
group.add(rect)
group.add(sizeLabel)

var tr = new Konva.Transformer({
  rotateEnabled: false,
  centeredScaling: true,
  boundBoxFunc: function(oldBoundBox, newBoundBox) {
    sizeLabel.getChildren()[0].setText("w: " + Math.floor(rect.getWidth() * group.getScaleX()) + " h: " + Math.floor(rect.getHeight() * group.getScaleY()))
    if (Math.abs(newBoundBox.width) > MAX_WIDTH || Math.abs(newBoundBox.height) > MAX_HEIGHT) {
      return oldBoundBox;
    }
    return newBoundBox;
  },
});

layer.add(group)
layer.add(tr);
tr.attachTo(group);

stage.add(layer)
layer.draw()

function getSize() {
  return [(Math.floor(rect.getWidth() * group.getScaleX())), (Math.floor(rect.getHeight() * group.getScaleY()))]
}

function correctAsSquare() {
  var size = getSize()
  correct(size[0], size[1], 1)
}

function correctAsRect() {
  var size = getSize()
  correct(size[0], size[1], 0)
}

function displayGuess() {
  document.getElementById("guessDisplay").textContent = "Computers Guess: " + guessFromQuad()
}
