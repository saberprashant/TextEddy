function iFrameOn(){
	// document.designMode = 'On';
}

function headers() {
	var header = document.getElementById('header').value;
	var userSelection;
	var range;
	// console.log(header);
	// var tag = document.execCommand('formatBlock', false, header);

	if (window.getSelection) {					//Chrome & firefox
			userSelection = window.getSelection();
	}
	else if (document.selection) {			 // Opera
    userSelection = document.selection.createRange();
	}

	else if (userSelection.getRangeAt)			// IE
		range = userSelection.getRangeAt(0);
	else { 															// Safari
		range = document.createRange();
		range.setStart(userSelection .anchorNode, userSelection.anchorOffset);
		range.setEnd(userSelection.focusNode, userSelection.focusOffset);
	}

	userSelection = String(userSelection).replace(/\s/g, '-');
	userSelection = String(userSelection).replace(/--/g, '-');

	document.execCommand('formatBlock', false, header).id = userSelection;
	// tag.id = userSelection;

	var link = '#' + userSelection;
	document.execCommand('CreateLink',false,link);
	// document.execCommand('ForeColor',false, 'black');

}

function iBold(){
	document.execCommand('bold',false,null); 
}

function iUnderline(){
	document.execCommand('underline',false,null);
}

function iItalic(){
	document.execCommand('italic',false,null); 
}

function iFontSize(){
	var size = prompt('Enter a size 1 - 7', '');
	document.execCommand('FontSize',false,size);
}

function iForeColor(){
	var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
	document.execCommand('ForeColor',false,color);
}

function iHorizontalRule(){
	document.execCommand('inserthorizontalrule',false,null);
}

function iUnorderedList(){
	document.execCommand("InsertOrderedList", false,"newOL");
}

function iOrderedList(){
	document.execCommand("InsertUnorderedList", false,"newUL");
}

function iLink(){
	var linkURL = prompt("Enter the URL for this link:", "http://"); 
	document.execCommand("CreateLink", false, linkURL);
}

function iUnLink(){
	document.execCommand("Unlink", false, null);
}

function iImage(){
	var imgSrc = prompt('Enter image location', '');
    if(imgSrc != null){
        document.execCommand('insertimage', false, imgSrc); 
    }
}

function submit_form(){
	document.getElementById('showTitle').innerHTML = document.getElementById("title").value;
  // theForm.elements["myTextArea"].value = window.frames['richTextField'].document.body.innerHTML;
	document.getElementById('data').innerHTML = document.getElementById('editor').innerHTML;
	var text = document.getElementById('editor').innerHTML;
	console.log(text);
	document.getElementById('showMsg').style.display = '';
	document.getElementById('show').style.display = '';
}

