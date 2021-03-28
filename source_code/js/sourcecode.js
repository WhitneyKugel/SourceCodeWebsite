//Initialize variables
var today = new Date();
var day = "";
var hours = "";
var month = "";
var season = "";
var seasonAlt = "";
var welcomemessage = "";
var welcomemessagewinter = "Winter is here, and Source Code has all your favorites to keep you warm. Stop on in for some hot cider or hot chocolate and lounge next to our indoor fireplace.";
var welcomemessagefall = "Source Code is serving up delicious Fall favorites! Bring the whole family! Fall is here, and you know what that means! All your fall favorites are back. Pumpkin spice beers? We got 'em. Warm tomato soup? We're serving it. You've probably forgotten what our signature mouthwatering burgers taste like. Let Source Code serve you tonight!";
var welcomemessagespring = "Spring has sprung!";
var welcomemessagesummer = "Summertime!";
var firstEventOfMonthDate = "";
var firstEventOfMonth = "";
var secondEventOfMonthDate = "";
var secondEventOfMonth = "";
var picOfTheMonth = "";


//Update current month and month's properties in HTML
switch (today.getMonth()) {
  case 0:
    month = "January";
    season = "images/winter.jpg";
    seasonAlt = "winter";
    welcomemessage = welcomemessagewinter;
    firstEventOfMonthDate = "January 4";
    firstEventOfMonth = "National Trivia Day - We launch our 2021 Trivia League.";
    secondEventOfMonthDate = "January 9";
    secondEventOfMonth = "National Law Enforcement Appreciation Day - All law enforcement officers eat free today. Thank you for all you do and the sacrifices you make!"
    picOfTheMonth = "images/police.jpg";
    monthAlt = "Police L.E.A.D"
    break;
  case 1:
    month = "February";
    season = "images/winter.jpg";
    alt = "winter";
    welcomemessage = welcomemessagewinter;
    firstEventOfMonthDate = "February 14";
    firstEventOfMonth = "Valentine's Day - Love is in the air. We dial things back a bit and only take reservations on this day. Candle lit meal and complementary dessert served."
    secondEventOfMonthDate = "February 16";
    secondEventOfMonth = "Presidents' Day Trivia Night - In honor of Presidents' Day (February 15) our trivia night will be all about U.S. presidents."
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 2:
    month = "March";
    season = "images/spring.jpg";
    alt = "spring";
    welcomemessage = welcomemessagespring;
    firstEventOfMonthDate = "TBD";
    firstEventOfMonth = "TBD";
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 3:
    month = "April";
    season = "images/spring.jpg";
    alt = "spring";
    welcomemessage = welcomemessagespring;
    firstEventOfMonthDate = "TBD";
    firstEventOfMonth = "TBD";
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 4:
    month = "May";
    season = "images/spring.jpg";
    alt = "spring";
    welcomemessage = welcomemessagespring;
    firstEventOfMonthDate = "TBD";
    firstEventOfMonth = "TBD";
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 5:
    month = "June";
    season = "images/summer.jpg";
    alt = "summer";
    welcomemessage = welcomemessagesummer;
    firstEventOfMonthDate = "TBD";
    firstEventOfMonth = "TBD";
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 6:
    month = "July";
    season = "images/summer.jpg";
    alt = "summer";
    welcomemessage = welcomemessagesummer;
    firstEventOfMonthDate = "TBD";
    firstEventOfMonth = "TBD";
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 7:
    month = "August";
    season = "images/summer.jpg";
    alt = "summer";
    welcomemessage = welcomemessagesummer;
    firstEventOfMonthDate = "TBD";
    firstEventOfMonth = "TBD";
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 8:
    month = "September";
    season = "images/fall2.jpg";
    alt = "fall";
    welcomemessage = welcomemessagefall;
    firstEventOfMonthDate = "TBD";
    firstEventOfMonth = "TBD";
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 9:
    month = "October";
    season = "images/fall2.jpg";
    alt = "fall";
    welcomemessage = welcomemessagefall;
    firstEventOfMonthDate = "October 31";
    firstEventOfMonth = "Dine in anytime on Halloween wearing a costume and receive a 10.31% discount. Get your picture taken and entered into our costume contest for a chance to win a $50 Source Code gift card!"
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 10:
    month = "November";
    season = "images/fall2.jpg";
    alt = "fall";
    welcomemessage = welcomemessagefall;
    firstEventOfMonthDate = "November 11";
    firstEventOfMonth = "Veterans Day. At Source Code, we truly honor and appreciate all the men and women who have sacrificed so much for so many. All Veterans who dine in will receive their meal 100% free today. No tipping either. You owe us nothing for your duty."
    secondEventOfMonthDate = "November 26 - 27";
    secondEventOfMonth = "Thanksgiving Day. In the true spirit of being thankful, we want to bless our hard-working staff with these two days off. We look forward to serving you again on November 28th."
    picOfTheMonth = "";
    monthAlt = ""
    break;
  case 11:
    month = "December";
    season = "images/winter.jpg";
    alt = "winter";
    welcomemessage = welcomemessagewinter;
    firstEventOfMonthDate = "December 24 - 25"
    firstEventOfMonth = "We will be closed on Christmas Eve and Christmas Day for our employees to spend time with friends and family."
    secondEventOfMonthDate = "TBD";
    secondEventOfMonth = "TBD"
    picOfTheMonth = "";
    monthAlt = ""
    break;
} 

//Open or Closed with current day's hours
switch (today.getDay()) {
  case 0:
    day = "Sunday";
    hours = "12 pm - 10 pm";
    break;
  case 1:
    day = "Monday";
    hours = "10 am - 12 am";
    break;
  case 2:
    day = "Tuesday";
    hours = "10 - 12 am";
    break;
  case 3:
    day = "Wednesday";
    hours = "10 am - 12 am";
    break;
  case 4:
    day = "Thursday";
    hours = "10 am - 12 am";
    break;
  case 5:
    day = "Friday";
    hours = "10 am - 1 am";
    break;
  case  6:
    day = "Saturday";
    hours = "10 am - 1 am";
    break;
  default:
    day = "Closed";
    hours = " ";
}

//Assign ID elements to variables for easier calling
var monthEventIDDate1 = document.getElementById("monthevent1date");
var monthEventID1 = document.getElementById("monthevent1");
var monthEventIDDate2 = document.getElementById("monthevent2date");
var monthEventIDD2 = document.getElementById("monthevent2");
var currentMonth = document.getElementById("currentmonth");

//Ensure that elements are present in the HTML before modifying
if (currentMonth != null) { 
  currentMonth.innerHTML = month + " " + today.getFullYear();
}

//Ensure that elements are present in the HTML before modifying
if (document.getElementById("season") != null) {
  //update season elements
  document.getElementById("season").src = season;
  document.getElementById("season").alt = seasonAlt;
}

//Ensure that elements are present in the HTML before modifying
if (document.getElementById("welcomemessage") != null) {
  document.getElementById("welcomemessage").innerHTML = welcomemessage;
}

//Ensure that elements are present in the HTML before modifying
if (document.getElementById("picofthemonth") != null) {
  document.getElementById("picofthemonth").src = picOfTheMonth;
  document.getElementById("picofthemonth").alt = monthAlt;
}

//Update to current day and hours open
document.getElementById("hours").innerHTML = day + "<br>" + hours;

//Ensure that elements are present in the HTML before modifyings
if (monthEventIDDate1 != null) {
  monthEventIDDate1.innerHTML = firstEventOfMonthDate;
  monthEventID1.innerHTML = firstEventOfMonth;
  monthEventIDDate2.innerHTML = secondEventOfMonthDate;
  monthEventIDD2.innerHTML = secondEventOfMonth;
}