
const printImage = function(){	
	var canvas = document.getElementById('obj');
	var dataURL = canvas.toDataURL('image/png');
	document.getElementById('printBase64').value = dataURL;	
	createPDF(dataURL)
}

/*****************************************************************/

var createPDF = function(imgData) {
	var doc = new jsPDF();
	doc.addImage(imgData, 'PNG', 10, 10, 140, 100, 'test');
	var win = window.open();
	win.document.write('<iframe src="' + doc.output('datauri') + '" style="width:100%; height:100%; border:none; margin:-10px"><\/iframe>');
}







