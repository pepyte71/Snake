function Objet()
{//proprietes
	this.x = undefined;
	this.y = undefined;
	this.nbPts = 1;
}	

Objet.prototype = 
{//methode
	setObjet : function(pile){
		this.nbPts = 1;			
		this.placerObjet();
	},

	placerObjet : function(){
		var x = Math.floor((Math.random()*120));
		var y = Math.floor((Math.random()*70));

		this.x = x*4;
		this.y = y*4;

		var c = document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "rgba(0, 0, 200, 1)";
		ctx.fillRect(this.x, this.y, 4, 4);
		
	}

};