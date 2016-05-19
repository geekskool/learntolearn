function draw(){
	ctx.strokeStyle= "orange"
	for (var i = 0; i <= 100; i++){
		line(350+i,100,100+i,350)
	}

	for (var i = 0; i <= 100; i++) {
		line(100+i,350,350+i,600)
	}

	for (var i = 0; i <= 100; i++) {
		line(650+i,600,900+i,350)
	}

	for (var i = 0; i <= 100; i++){
		line(900+i,350,650+i,100)
	}

	text("G",340,520,530);
	fill("orange")
	
	

}