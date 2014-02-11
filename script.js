function deplacer(dernier){
	var dernier = snake.pop();
	var tete = snake[0];
	dernier.effacer();
	
	if (direction == "haut")
	{
		dernier.setPosition(tete.x, tete.y - 4);
	}
	else if (direction == "bas")
	{
		dernier.setPosition(tete.x, tete.y + 4);
	}
	else if (direction == "gauche")
	{
		dernier.setPosition(tete.x - 4, tete.y);
	}
	else if (direction == "droite") 
	{
		dernier.setPosition(tete.x + 4, tete.y);
	}
	dernier.setDirection(direction);
	snake.unshift(dernier);

	var testMur = snake[0].verifMur(direction);
	var testSnake = snake[0].verifSnake();
	vitesse = snake[0].verifObjet(objet, joueur, direction, vitesse);
	if (testMur == true || testSnake == true)
		location.reload();
	else
		dernier.placer();

	setTimeout(function(){deplacer()}, vitesse);
}

var snake = new Array();
var joueur = new Joueur();
var objet = new Objet();
var direction = "droite";
var vitesse = 100;


$(document).ready(function(){
	var j = 0;
	var x = 16;

	while (j<=4){
		obj = new Snake(x, 0, direction);
		snake.push(obj);
		j++;
		x-=4;
	} 

	objet.setObjet();
	joueur.afficher();

	var c = document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var x = 0;
	var y = 0;

	ctx.moveTo(x,y);
	var i = 0;
	while (snake[i] != undefined)
	{
		snake[i].placer(direction);
		i++;
	}
	
	$(document).keydown(function(e)
	{
		if(e.which == 40)
			direction = ((snake[0].getDirection()!="haut") ? "bas" : "haut");
		else if(e.which == 38)
			direction = ((snake[0].getDirection()!="bas") ? "haut" : "bas");
		else if(e.which == 37)
			direction = ((snake[0].getDirection()!="droite") ? "gauche" : "droite");
		else if(e.which == 39)
			direction = ((snake[0].getDirection()!="gauche") ? "droite" : "gauche");
	});

deplacer();
});
