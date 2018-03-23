function dataLoad(){
	// document.designMode = 'On';
	let data = {
		idLinks : []
	}
	localStorage.setItem('data', JSON.stringify(data)); 
	
}

function headers() {
	let header = document.getElementById('heading').value;
	let userSelection;
	let range;
	// console.log(header);

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

	userHeading = userSelection;						//the heading which user selected
	userSelection = String(userSelection).replace(/\s/g, '-');			//making an id from heading text
	userSelection = String(userSelection).replace(/--/g, '-');

	document.execCommand('formatBlock', false, header);

	// var tag = document.execCommand('formatBlock', false, header);
	// document.execCommand(document.header.setAttribute("id", userSelection)); 	not working
	// document.execCommand('formatBlock', false, header).id = userSelection;  	 not working
	// tag.id = userSelection;				not working

	let elemMain = $("#editor " + header.toLowerCase());   // this will find the div with id=editor and then
																					// find the newly created tag
	console.log(elemMain);
	elemMain[elemMain.length - 1].id = userSelection;
	console.log(elemMain);

	let data2 = JSON.parse(localStorage.getItem('data'));
	idLink = {
		'id': userSelection,
		'heading': userHeading
	}
	data2.idLinks.push(idLink);

	let sel = document.getElementById('interLink');
  let opt;
  for (let i = 0; i < data2.idLinks.length; i++) {
    opt = document.createElement('option');
    opt.value = data2.idLinks[i].id;
    opt.innerHTML = data2.idLinks[i].heading;
    sel.appendChild(opt);
  }
	localStorage.setItem('data', JSON.stringify(data2));
	// document.execCommand('ForeColor',false, 'black');

}

function interLinks() {
	let idSel = document.getElementById('interLink').value;
	let link = '#' + idSel;
	document.execCommand('CreateLink', false, link);

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
	var imgSrc = prompt('Enter Image location', '');
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
	document.getElementById('editor').innerHTML = ''
	document.getElementById('showMsg').style.display = '';
	document.getElementById('show').style.display = '';
}

