var question = []

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

var remaining = question.length;

function start(){
	document.getElementByID('question').innerHTML = "Feel free to review the highlighted parts of the art.";
}

function questInsert(qNum){
	if (question[qNum][0]){
		document.getElementByID('question').innerHTML = question[qNum][1];
		//TODO: change class of answer bubbles to visible
		//TODO: change answer bubbles to qNum
		//TODO: change contents of answer bubbles

		for (i = 2; i < question[qNum].length; i++){
			/*
			bubble[i].innerHTML = question[qNum][i];
			bubble[i].className = 'visible';
			bubble
			*/
		}
	}
}

function selectAnswer(qNum, aNum){
	+="<tr><td>" + "</td><td>" +"</td></tr>"

	//TODO: change class of answer bubbles to hidden
	for (i = 2; i < question[qNum].length; i++){
		question[qNum][i].className = 'hidden';
	}
	question[qNum][0] = false;
	remaining = remaining - 1;

	if (remaining != 0){
		document.getElementByID('question').innerHTML = "Select another area of the art to explore.";
	}
	else{
		document.getElementByID('question').innerHTML = "Thank you for exploring the art on Art on the Brain.";
	}
}
/*
function addPoint(){
	question[question.length] = []; //increases the length of question
	left = width of image - (width of square*(square_num-1)) - border*(square_num - 1);
}
*/