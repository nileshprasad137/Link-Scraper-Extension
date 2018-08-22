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

// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {	
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;	
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('pagetitle').innerHTML = message.join("</br></br>");
	document.getElementById('downloadText').addEventListener('click', createDownloadLink("#downloadText",document.getElementById("pagetitle").innerText,"links.txt"));		
});