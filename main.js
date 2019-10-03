$(document).ready(function() {
  "use strict";
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  var tool = new Tool();

  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
    c.fillColor = "green";
  };

  paper.view.draw();
});
