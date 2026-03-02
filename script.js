fetch("slide.json")
  .then((res) => res.json())
  .then((data) => renderSlide(data));

function renderSlide(data) {
  const slide = document.getElementById("slide");
  slide.style.width = data.slide.width + "px";
  slide.style.height = data.slide.height + "px";
  slide.style.background = data.slide.background.color;

  data.slide.elements.forEach((el) => {
    let node;

    if (el.type === "text") {
      node = document.createElement("div");
      node.innerText = el.content;
      node.style.fontSize = el.style?.fontSize + "px";
      node.style.color = el.style?.color;
      node.style.fontWeight = el.style?.fontWeight || "normal";
    }

    if (el.type === "shape") {
      node = document.createElement("div");
      node.style.background = el.style.backgroundColor;
      node.style.width = el.size.width + "px";
      node.style.height = el.size.height + "px";
    }

    if (el.type === "image") {
      node = document.createElement("img");
      node.src = el.src;
      node.style.width = el.size.width + "px";
      node.style.height = el.size.height + "px";
    }

    node.style.position = "absolute";
    node.style.left = el.position.x + "px";
    node.style.top = el.position.y + "px";

    slide.appendChild(node);
  });
}
