var elements = document.getElementsByClassName("Post-body")
var list  = []
for (var i = 0; i < elements.length; i++) {
    var a = elements[i].getElementsByTagName('a');
    // Escape first Link
    for (var j = 0; j < a.length; j++) {
        if(a[j].attributes.href.value=="https://www.scammer.info/u/ADAROSS")
            continue;
        else{
            console.log(a[j].attributes.href.value);
            list.push(a[j].attributes.href.value);
        }        
    }
    
}
chrome.runtime.sendMessage(list);