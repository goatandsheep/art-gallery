var question = [];
var remaining = 0;

function start(){

	question[0] = [];
	question[0][0] = true;
	question[0][1] = "How do you think the boy is feeling?";
	question[0][2] = "sad";
	question[0][3] = "happy";
	question[0][4] = "confused";

	question[1] = [];
	question[1][0] = true;
	question[1][1] = "What do you think he is pointing at?";
	question[1][2] = "lake";
	question[1][3] = "duck";
	question[1][4] = "pigeon";

	question[2] = [];
	question[2][0] = true;
	question[2][1] = "What kind of gun is in his hand?";
	question[2][2] = "rifle";
	question[2][3] = "shotgun";
	question[2][4] = "revolver";

	remaining = question.length;
	document.getElementById('question').innerHTML = "Feel free to review the highlighted parts of the art.";
	//load image locations
	for (i = 0; i < question.length; i++){
		document.getElementById('column-mid').innerHTML += "<button class='selections' id='section" + i + "' onclick='questInsert("+ i +");'></button>";
		//document.getElementById('options').innerHTML += "<br>";
	}
}

function questInsert(qNum){

	if (question[qNum][0]){
		document.getElementById('question').innerHTML = question[qNum][1];
		//document.getElementById('options').innerHTML = " ";

		document.getElementById('section'+qNum).style.border = "0.5vw solid #FF8000";
		for (i = 2; i < question[qNum].length; i++){
			document.getElementById('options').innerHTML += ("<button class='answers' onclick='selectAnswer(" + qNum + ", " + i + ")'>" + question[qNum][i] + "</button>");
		}
		for (i=0; i<question.length; i++) {
			document.getElementById("section"+i).disabled = true;
		}
	}
}

function selectAnswer(qNum, aNum){
	document.getElementById('answers').innerHTML += ("<tr><td>" + "<div id='bubble" + qNum + "' class='imgBubble'></div>" + "</td><td>" + question[qNum][aNum] + "</td></tr>");
	
	//clear the options	
	document.getElementById('section'+qNum).style.border = "0";
	document.getElementById('options').innerHTML = " ";
	question[qNum][0] = false;
	remaining = remaining - 1;

	for (i=0; i<question.length; i++) {
		document.getElementById("section"+i).disabled = false;
	}
	if (remaining > 0){
		document.getElementById('question').innerHTML = "Select another area of the art to explore.";
	}
	else{
		document.getElementById('question').innerHTML = "Thank you for exploring the art on Art on the Brain.";
	}
}

/*
function addPoint(){
	question[question.length] = []; //increases the length of question
	left = width of image - (width of square*(square_num-1)) - border*(square_num - 1);
}
*/