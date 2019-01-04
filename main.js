document
  .getElementById("selector")
  .addEventListener("mouseover", open.bind(null, "menu"));
document
  .getElementById("selector")
  .addEventListener("mouseout", close.bind(null, "menu"));
document.getElementById("select1").addEventListener("click", updateDropDown);
document.getElementById("select2").addEventListener("click", updateDropDown);

function open(id) {
  var element = document.getElementById(id);
  if (element.classList.contains("closed")) {
    element.classList.remove("closed");
    element.classList.add("open");
  }
}

function close(id) {
  var element = document.getElementById(id);
  if (element.classList.contains("open")) {
    element.classList.remove("open");
    element.classList.add("closed");
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
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
  this.count = 0;      // set to max number of iterations
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

  console.log(this.count);
  if (this.count !== 96) {
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
      console.log(period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML += ".typewrite > .wrap { border-right: 0.08em solid crimson; animation: blink-caret 0.75s step-start infinite; }";
  css.innerHTML += "@keyframes blink-caret { from, to {border-color: transparent;} 50% {border-color: crimson;} }";
  document.body.appendChild(css);
  console.log(css);
};
