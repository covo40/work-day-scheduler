var nineAmElement = document.querySelector("#nineAmElement");
var tenAmElement = document.querySelector("#tenAmElement");
var elevenAmElement = document.querySelector("#elevenAmElement");
var twelvePmElement = document.querySelector("#twelvePmElement");
var onePmElement = document.querySelector("#onePmElement");
var twoPmElement = document.querySelector("#twoPmElement");
var threePmElement = document.querySelector("#threePmElement");
var fourPmElement = document.querySelector("#fourPmElement");
var fivePmElement = document.querySelector("#fivePmElement");
var saveBtn = document.querySelector("#piggy-bank");
var today = document.querySelector("#currentDay");
var momentElement = moment().hours(Number);

today.innerHTML = (momentElement);

$(".saveBtn").on("click", function () {
    event.preventDefault();
    var nineElem = nineAmElement.value;
    var tenElem = tenAmElement.value;
    var elevenElem = elevenAmElement.value;
    var twelveElem = twelvePmElement.value;
    var oneElem = onePmElement.value;
    var twoElem = twoPmElement.value;
    var threeElem = threePmElement.value;
    var fourElem = fourPmElement.value;
    var fiveElem = fivePmElement.value;

    localStorage.setItem("9am",nineElem);
    localStorage.setItem("10am",tenElem);
    localStorage.setItem("11am",elevenElem);
    localStorage.setItem("12pm",twelveElem);
    localStorage.setItem("1pm",oneElem);
    localStorage.setItem("2pm",twoElem);
    localStorage.setItem("3pm",threeElem);
    localStorage.setItem("4pm",fourElem);
    localStorage.setItem("5pm",fiveElem);
});

displayText();

function displayText() {
    var nineAM = localStorage.getItem("9AM");
    if (nineAM == null) {
      nineAM = "";
    }
    var tenAM = localStorage.getItem("10AM");
    if (tenAM == null) {
      tenAM = "";
    }
    var elevenAM = localStorage.getItem("11AM");
    if (elevenAM == null) {
      elevenAM = "";
    }
    var twelvePm = localStorage.getItem("12PM");
    if (twelvePm == null) {
      twelvePm = "";
    }
    var onePM = localStorage.getItem("1PM");
    if (onePM == null) {
      onePM = "";
    }
    var twoPM = localStorage.getItem("2PM");
    if (twoPM == null) {
      twoPM = "";
    }
    var threePM = localStorage.getItem("3PM");
    if (threePM == null) {
      threePM = "";
    }
    var fourPM = localStorage.getItem("4PM");
    if (fourPM == null) {
      fourPM = "";
    }
    var fivePM = localStorage.getItem("5PM");
    if (fivePM == null) {
      fivePM = "";
    }
    
    console.log(nineAmElement);
    nineAmElement.value = nineAM;
    tenAmElement.value = tenAM;
    elevenAmElement.value = elevenAM;
    onePmElement.value = onePM;
    twoPmElement.value = twoPM;
    threePmElement.value = threePM;
    fourPmElement.value = fourPM;
    fivePmElement.value = fivePM;
}
