export default function makeDragable(domElem) {
  console.log(document.getElementById(domElem));
  var contextmenu = document.getElementById(domElem);
  var initX, initY, mousePressX, mousePressY;

  contextmenu.addEventListener(
    "mousedown",
    function (event) {
      initX = this.offsetLeft;
      initY = this.offsetTop;
      mousePressX = event.clientX;
      mousePressY = event.clientY;

      this.addEventListener("mousemove", repositionElement, false);

      window.addEventListener(
        "mouseup",
        function () {
          contextmenu.removeEventListener(
            "mousemove",
            repositionElement,
            false
          );
        },
        false
      );
    },
    false
  );

  function repositionElement(event) {
    console.log(event);
    this.style.left = initX + event.clientX - mousePressX + "px";
    this.style.top = initY + event.clientY - mousePressY + "px";
  }
}
