function resetPage() {
	location.reload();
}
window.onload = function () {
  canvas = document.getElementById("canvasBox");
  context = canvas.getContext("2d");
 
  var xPos = 20;
  var yPos = 20;
  var width = 150;
  var height = 150;

  //Grey Box
  context.fillStyle = "grey";
  context.fillRect(xPos, yPos, width, height);
  context.clearRect(xPos + 25, yPos + 20, width - 50, height - 40);
  //Blue Box
  context.lineWidth = 6;
  context.strokeStyle = "lightblue";
  context.strokeRect(xPos + 200, yPos, width, height);
  //Red Box
  context.fillStyle = "red";
  context.fillRect(xPos + 400, yPos, width, height);
  

}