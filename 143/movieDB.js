var movies = [ 
	{
		title:"In Bruges",
		rating:5,
		hasWatched:true
	},
	{
		title:"Frozen",
		rating:4.5,
		hasWatched:false
	},
	{
		title:"Mad Max Fury Road",
		rating:5,
		hasWatched:true
	}
	];

function buildString(movie){
	var result = "You have "

	if(movie.hasWatched){
		result += "watched";
	}else{
		result += "not seen";
	}

	result += " \"" + movie.title + "\" - " + movie.rating + " stars"
}


movies.forEach(function(movie){

	console.log(buildString(movie));
});