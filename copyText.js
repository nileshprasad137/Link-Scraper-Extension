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
  
document.getElementById('copyText').addEventListener('click', copyText);