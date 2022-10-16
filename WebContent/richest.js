var request;
function getRequestObject() {
	if (window.XMLHttpRequest) {
		return (new XMLHttpRequest());
	} else if (window.ActiveXObject) {
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	} else {
		return (null);
	}
}

function ajaxResult(address, resultRegion) {
	var request = getRequestObject();
	request.onreadystatechange =
	
	function() {
		showResponseText(request, resultRegion);
		};
		request.open("GET", address, true);
		request.send(null);
		}

function showResponseText(request, resultRegion) {
if ((request.readyState == 4) &&
(request.status == 200)) {
htmlInsert(resultRegion, request.responseText);
}
}
function htmlInsert(id, htmlData) {
document.getElementById(id).innerHTML = htmlData;
}