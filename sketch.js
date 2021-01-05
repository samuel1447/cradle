const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var blob1, cradle1, platform1

function setup() {
	var canvas = createCanvas(800, 600)

	engine = Engine.create()
	world = engine.world

	blob1 = new Blob(280, 400)
	blob2 = new Blob(340, 400)
	blob3 = new Blob(400, 400)
	blob4 = new Blob(460, 400)
	blob5 = new Blob(520, 400)
	platform1 = new Platform(400, 200, 250, 20)
	cradle1 = new Cradle(blob1.body, { x: 280, y: 200 })
	cradle2 = new Cradle(blob2.body, { x: 340, y: 200 })
	cradle3 = new Cradle(blob3.body, { x: 400, y: 200 })
	cradle4 = new Cradle(blob4.body, { x: 460, y: 200 })
	cradle5 = new Cradle(blob5.body, { x: 520, y: 200 })
	var pointer = Matter.Mouse.create(canvas.elt)
	pointer.pixelRatio = pixelDensity()
	var options = {
		mouse: pointer
	}
	var Mouse = Matter.MouseConstraint.create(engine, options)
	World.add(world, Mouse)
	world.gravity.y=3
	Engine.run(engine)
}


function draw() {
	rectMode(CENTER)
	background(255)
	

	cradle1.display()
	cradle2.display()
	cradle3.display()
	cradle4.display()
	cradle5.display()
	blob1.display()
	blob2.display()
	blob3.display()
	blob4.display()
	blob5.display()
	platform1.display()
}



