function Snake(x, y, dir)
{//proprietes
	this.x = x;
	this.y = y;
	this.direction = dir;
}	

Snake.prototype = 
{//methode

	setPosition : function(x, y){
		this.x = x;
		this.y = y;
	},

	setDirection : function(dir){
		this.direction = dir;
	},

	getDirection : function(){
		return this.direction;
	},

	effacer : function(){

		var c = document.getElementById("myCanvas");
		var ctx=c.getContext("2d");

		ctx.moveTo(this.x, this.y);
		ctx.clearRect(this.x,this.y,4,4);
	},

	placer : function(){

		var c = document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.fillStyle = "rgb(250, 0, 0)";
		ctx.moveTo(this.x, this.y);
		ctx.beginPath();
		ctx.fillRect(this.x, this.y, 4, 4);
	},

	verifObjet : function(objet, joueur, dir, vitesse){
		this.suivant = true;

		if (this.x == objet.x && this.y == objet.y)
		{
			var x = this.x;
			var y = this.y;
		}	
		else
			this.suivant = false;	

		if (this.suivant == true){
			joueur.points(objet);
			obj = new Snake(snake[snake.length - 1].x, snake[snake.length - 1].y, dir);
			snake.push(obj);
			objet.setObjet();
			if (vitesse >= 25)
				vitesse -= 5;
		}
		return vitesse;
	},

	verifMur : function(){
		
		if (this.x + 4 > 480 || this.x < 0 || this.y + 4 > 280 || this.y < 0)
		{
			alert("Perdu");
			return true;
		}	
	},

	verifSnake: function(){
		var i = 1;

		while (i < snake.length)
		{
			if (this.x == snake[i].x && this.y == snake[i].y)
				return true;
				
			i++;
		}
	}


};