function Joueur()
{
	this.xp = 0;
	this.level = 1;
	this.pts = 0;
}

Joueur.prototype = 
{//methode

	afficher : function(){
		$("#joueur").html("<br> EXP "
		+this.xp + "<br> Niveau "
		+this.level+ "<br>Point "+this.pts);

	},

	points : function(obj){
		this.pts += obj.nbPts;
		this.xp += 1;
		this.niveau();
		this.afficher();
	},

	niveau : function(){

		if ((this.xp % 10) == 0){
			this.level += 1;
			$('#level').html("LEVEL "+this.level);
			$('#level').css('visibility' , 'visible');
			setTimeout(function() {
				$('#level').css('visibility', 'hidden');
			},900);
			
		}
	},

}