var caret = document.getElementById("caret");
document
  .getElementById("selector")
  .addEventListener("click", open.bind(null, "menu"));

document.getElementsByTagName("BODY")[0].addEventListener("click", () => {
  close("menu");
  caret.classList.remove("caret-rotate");
});
document
  .getElementById("select1")
  .addEventListener("click", updateDropDown, false);
document
  .getElementById("select2")
  .addEventListener("click", updateDropDown, false);

function open(id) {
  var selector = document.getElementById(id);
  console.log("Open " + id);
  if (selector.classList.contains("closed")) {
    selector.classList.remove("closed");
    selector.classList.add("open");
    caret.classList.add("caret-rotate");
    event.stopPropagation(); // prevent event bubbling
  }
}

function close(id) {
  console.log("Close " + id);
  var selector = document.getElementById(id);
  if (selector.classList.contains("open")) {
    selector.classList.remove("open");
    selector.classList.add("closed");
    caret.classList.remove("caret-rotate");
    event.stopPropagation();
  }
}

function updateDropDown() {
  var top = document.getElementById("top").textContent;
  var selected = this.textContent;
  document.getElementById("top").textContent = selected;
  this.textContent = top;
  close("menu");
  close(top.toLowerCase());
  open(selected.toLowerCase());
  caret.classList.remove("caret-rotate");
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
  this.count = 0; // set to max number of iterations
};

// TYPE INTRO

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  //console.log(this.count);
  if (this.txt !== fullTxt) {
    setTimeout(function() {
      that.tick();
    }, delta);
  }
  this.count++;
};

window.onload = function() {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
