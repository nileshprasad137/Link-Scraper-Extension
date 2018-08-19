function copyText() {
    element = document.getElementById("pagetitle");
    var range, selection, worked;
  
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();        
      range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    try {
      document.execCommand('copy');
      alert('text copied');
    }
    catch (err) {
      alert('unable to copy text');
    }
}

var blobObject = null;

function createDownloadLink(anchorSelector, str, fileName){
	if(window.navigator.msSaveOrOpenBlob) {
		var fileData = [str];
        blobObject = new Blob(fileData);
        document.querySelector(anchorSelector).addEventListener('click', function() {
            window.navigator.msSaveOrOpenBlob(blobObject, fileName);
        })
		// $(anchorSelector).click(function(){
		// 	window.navigator.msSaveOrOpenBlob(blobObject, fileName);
		// });
	} else {
        var url = "data:text/plain;charset=utf-8," + encodeURIComponent(str);
        document.querySelector(anchorSelector).setAttribute('href', url);
		// $(anchorSelector).attr("href", url);
	}
}
  
document.getElementById('copyText').addEventListener('click', copyText);

// var linksText = document.getElementById("pagetitle").innerHTML; 
document.getElementById('downloadText').addEventListener('click', createDownloadLink("#downloadText",document.getElementById("pagetitle").innerHTML,"links.txt"));
