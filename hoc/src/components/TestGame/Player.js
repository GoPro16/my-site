export default class Ship{
	constructor(args){
		this.position = args.position;
		this.velocity = {
			x:0,
			y:0
		}
		this.create = args.create;
    	this.onDie = args.onDie;
	}

	destroy(){
		this.delete = true;
		this.onDie();
	}

	move(xVal,yVal){
		this.velocity.x += xVal;
		this.velocity.y += yVal; 
	}

	render(state){
		// Controls
    if(state.keys.up){
      this.move(0,-1);
    }
    if(state.keys.left){
      this.move(-1,0);
    }
    if(state.keys.right){
      this.move(1,0);
    }
    if(state.keys.down){
    	this.move(0,1);
    }
    if(state.keys.space){
        this.fire();
    } 

    // Move
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity = {x:0,y:0};

    // Screen edges
    if(this.position.x > state.screen.width) this.position.x = 0;
    else if(this.position.x < 0) this.position.x = state.screen.width;
    if(this.position.y > state.screen.height) this.position.y = 0;
    else if(this.position.y < 0) this.position.y = state.screen.height;

    // Draw
    const context = state.context;
    context.clearRect(0,0,  state.screen.width,state.screen.height);
    context.save();
    context.translate(this.position.x, this.position.y);
    context.strokeStyle = '#ffffff';
    context.fillStyle = '#000000';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, -15);
    context.lineTo(10, 10);
    context.lineTo(5, 7);
    context.lineTo(-5, 7);
    context.lineTo(-10, 10);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
	}
}