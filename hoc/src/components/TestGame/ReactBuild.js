import React,{Component} from 'react';
import Player from './Player';


const KEY = {
	W: 87,
	S:83,
	D:68,
	A:65
};

export class ReactBuild extends Component{
	constructor(){
		super();
		this.state = {
			screen:{
				width:window.innerWidth,
				height:window.innerHeight,
				ratio:window.PixelRatio || 1,
			},
			context:null,
			keys:{
				left : 0,
				right: 0,
				up   : 0,
				down : 0,
			},
			inGame:false
		}
		this.player =[];
	}

	handleResize(value,e){
		this.setState({
			screen:{
				width:window.innerWidth,
				height:window.innerHeight,
				ratio:window.devicePiexelRatio || 1,
			}
		});
	}

	handleKeys(value,e){
		let keys = this.state.keys;
		if(e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value;
		if(e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value;
		if(e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value;
		if(e.keyCode === KEY.S) keys.down = value;			
		this.setState({
			keys:keys
		});
	}

	componentDidMount(){
		window.addEventListener('keyup',   this.handleKeys.bind(this, false));
    	window.addEventListener('keydown', this.handleKeys.bind(this, true));
    	window.addEventListener('resize',  this.handleResize.bind(this, false));

    	const context = this.refs.canvas.getContext('2d');
    	this.setState({ context: context });
    	this.startGame();
    	requestAnimationFrame(() => {this.update()});
	}
	
	componentWillUnmount() {
    	window.removeEventListener('resize', this.handleKeys);
    	window.removeEventListener('resize', this.handleKeys);
    	window.removeEventListener('resize', this.handleResize);
  	}

  	update(){
  		const context = this.state.context;
  		const keys = this.state.keys;
  		const player = this.player[0];

  		context.save();
  		context.scale(this.state.screen.ratio,this.state.screen.ratio);




  		this.updateObjects(this.player,'player');

  		context.restore();

  		//Next frame
  		requestAnimationFrame(() => {this.update()});
  	}

  	startGame(){
  		this.setState({
  			inGame:true
  		});

  		//Make Player
  		let player = new Player({
  			position:{
  				x:this.state.screen.width/2,
  				y:this.state.screen.height/2
  			},
  			create: this.createObject.bind(this),
  			onDie: this.gameOver.bind(this)
  		});
      this.createObject(player,'player');
  	}

  	gameOver(){
  		this.setState({
  			inGame:false
  		});	
  	}

  	createObject(item,group){
  		this[group].push(item);
  	}

  	updateObjects(items,group){
  		let index=0;
  		for(let item of items){
  			if(item.delete){
  				this[group].splice(index,1);
  			}else{
  				items[index].render(this.state);
  			}
  			index++;
  		}
  	}

  	render(){
  		let endgame;
  		let message = "My First Game";

  		if(!this.state.inGame){
  			endgame = (
  				<div className="endgame">
  					<p>Game Over</p>
  					<p>{message}</p>
  					<button onClick={this.startGame.bind(this)}>
  						Try again?</button>
  				</div>);
  		}

  		return(
  			<div>
        <span className="controls" >
          Use [A][S][W][D] or [←][↑][↓][→] to MOVE<br/>
          Use [SPACE] to SHOOT
        </span>
        <canvas ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
  			</div>);
  	}



}	
