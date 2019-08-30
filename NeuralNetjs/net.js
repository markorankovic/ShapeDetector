var bias = 1
var rate = 1
var weights = [Math.random(), Math.random(), Math.random()]

var outputP = 0

function perceptron(input1, input2, output) {
	outputP = guess(input1, input2)
	correct(input1, input2, output, outputP)
}

function guessFromQuad() {
	var size = getSize()
	var input1 = size[0]
	var input2 = size[1]
	return guess(input1, input2) ? 'square' : 'rectangle'
}

function heaviside(x) {
	return x > 0 ? 1 : 0
}

function guess(input1, input2) {
	outputP = heaviside(input1 * weights[0] + input2 * weights[1] + bias * weights[2])
	return outputP
}

function correct(input1, input2, output) {
	error = output - outputP
	weights[0] += error * input1 * rate
	weights[1] += error * input2 * rate
	weights[2] += error * bias * rate
}

function train() {
  for (i = 0; i < 1000; i++) {
		perceptron(200, 200, 1)
		perceptron(390, 390, 1)
		perceptron(175, 175, 1)
		perceptron(400, 400, 1)
		perceptron(250, 250, 1)
		perceptron(150, 150, 1)
		perceptron(200, 200, 1)
		perceptron(130, 130, 1)
		perceptron(210, 210, 1)
		perceptron(340, 340, 1)
		perceptron(300, 300, 1)
		perceptron(0, 0, 1)
		perceptron(90, 90, 1)
		perceptron(76, 76, 1)
		perceptron(66, 66, 1)
		perceptron(66, 70, 1)
		perceptron(70, 66, 1)
		perceptron(250, 270, 1)
		perceptron(200, 198, 1)

  	perceptron(100, 50, 0)
  	perceptron(300, 100, 0)
  	perceptron(300, 90, 0)
		perceptron(0, 50, 0)
		perceptron(32, 56, 0)
		perceptron(0, 1, 0)
		perceptron(300, 200, 0)
		perceptron(150, 200, 0)
		perceptron(200, 100, 0)
		perceptron(100, 300, 0)
		perceptron(80, 240, 0)
		perceptron(110, 200, 0)
		perceptron(30, 320, 0)
		perceptron(180, 270, 0)
		perceptron(100, 270, 0)
		perceptron(130, 270, 0)
		perceptron(90, 270, 0)
		perceptron(80, 210, 0)
		perceptron(50, 190, 0)
		perceptron(140, 250, 0)
  }
	console.log("Training complete.")
}

function untrain() {
	weights = [Math.random(), Math.random(), Math.random()]
}

train()
