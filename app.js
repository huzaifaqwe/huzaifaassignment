// Q.Write a program that displays current date and time in
// your browser.


// var date =new Date();
// document.write(date);

// Q.Write a program that alerts the current month in words.
// For example December.

// var arrr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var monthDate = new Date()
// var month = monthDate.getMonth();
// var index = arrr[month];
// document.write("Current Month :" + " " + index)



//Q. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.



// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var Date = new Date();
// var week =arr[Date.getDay()];
// document.write("Today is " + " " + week )

// Q.Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today. 



// var day = new Date();
//  var indexOf = day.getDay();
//  if(indexOf ===6 ||indexOf ===5){
//          document.write(" It is Fun Day ")
//  }
// else{
// document.write("it's not fun day")
// }


// Q.Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var formonth =new Date();
// var month =formonth.getDate();
// if (month <=15){
// document.write("first fifteen days of the month")
// }
// else{
// document.write("last days of the month")
// }


// Q.Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var date = new Date();
// var milliseconds = date.getTime();
// var minutes = milliseconds / (1000*60);
// document.write("Current Date :" + date + "<br />");
// document.write("Elapsed milliseconds since January 1, 1970" + " " + milliseconds + "<br />");
// document.write("Elapsed minutes since January 1, 1970" + " " + minutes + "<br />")


// Q.Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date =new Date();
// var hours=date.getHours();
// if(hours <12){
// document.write("it's AM")
// }
// else{
// document.write("it's PM")
// }


// Q.Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate



// var date =new Date("31 DEC 2020");
// document.write("laterdate:"+" " +date )


// Q.Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//  var ramadan =new Date("june 18, 2015")
//  var date =new Date();
//  var change =ramadan.getTime();
//  var collect=date.getTime();
//  var diff=change-collect;
//  var convert =Math.floor(diff / (1000*60*60*24))
//  document.write(convert +"days have passed since 1st Ramdan 2015")


// Q.Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var reference =new Date();
// var date =new Date("jan 1, 2015")
// var get =reference.getTime();
// var newget = date.getTime();
// var diff =get-newget;
// var convert=Math.floor(diff / (1000))
// document.write("On reference date " + " " + reference + " ," + "<br />");
//  document.write(convert + " seconds had passed since beginning of 2015")


// Q.Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser

// var date =new Date();
// var time =new Date();
// time.setHours(time.getHours() -1)
// document.write("currenttime:" +" " + date +"<br/>" )
// document.write("1 Hour ago , it was " + " " + time)


// Q.Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// var date = new Date();
//  var time = new Date();
//  time.setFullYear(time.getFullYear()-100);
//  document.write("Current Date " + " " + date +"<br/>")
//  document.write("100 years back , it was " + " " + time)


// Q.Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.



// var age =prompt("enter your age");
// var birth =new Date();
// diff =birth.getFullYear()-age;
// document.write("your age"+" "+age +"<br/>")
// document.write("your birth"+" "+diff)


// Q.Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
//  b. Current Month


// var Username = prompt('Enter you name')
// var date = new Date()
// var months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December']
// document.write('Customer Name : '+ ' ' + Username +  '<br/>')
// document.write('Month : ' +  months[date.getMonth()]+ "<br/>")
// document.write(' number of units =410'+"<br/>" )
// document.write("charges per units =16"+"<br/>")
// var units =410
// var  per =16
// document.write("Net Amount Payable(within Due Date):" +units * per)









// FUNCTION
// Q.Write a function that displays current date & time in your
// browser.

// function datetime (){
// document.write(new Date())
// }
// datetime()

// Q.Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet (){
//     document.write(prompt("first name"))
// document.write(prompt("last name"))
// }
// greet();

// Q.Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function add (a,b){
// a =5
// b =89
// return a+b
// }
// document.write(add())

// Q.Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function arguments(num1, num2,oper){
//     if(oper === "+"){
//         var a = num1 +  num2
//     }
//     else if(oper === '-'){
//         var a = num1 - num2
//     }
//     else if(oper === '*'){
//         var a = num1 *num2
//     }
//     else if(oper === "/"){
//         var a = num1 / num2
//     }
//     else{
//         alert('enter right operator')
//     }
//     return a
// }
// var val1 = +prompt('Enter first value ')
// var val2 = +prompt('Enter second value ')
// var opera = prompt('Enter operator')
// alert(arguments(val1,val2,opera))



// Q.Write a function that squares its argument.

// function squares(a){
//           document.write(a*a)
//     }
//     squares(4)


// Q.. Write a function that computes factorial of a number.

    

// function factorial(num){
//     var f = 1;
//     for(var i = 1;i <= num ;i++){
//         f = f*i
//     }
//     return f
// }
// var fac = +prompt('Enter number to find its factorial')
// alert(factorial(fac))


// Q.Write a function that take start and end number as inputs
// & display counting in your browser.
    
// function count(start,end){
//             start = prompt("Enter start number")
//             end = prompt("Enter end number") 
//             for(var i=start; i<=end; i++){
//             document.write(i +"<br/>")
// }    
//     }
//     count()





// Q.Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function area(width,height){
//             var A  = width * height
//  width =2
// height =20
//             return A  = width * height
//     }
// document.write(area())

// Q.Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam
    
// function pan(){
//             var inp = prompt("Enter word") 
//             var b = ""
//             for(var i = inp.length-1; i >= 0; i--){
//                     b += inp[i]
//             }
//             if(inp === b){
//                     alert("yes")
//             }
//             else{
//                     alert("no")
//             }
//     }
//     pan()


// Q.Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'




// function accepts(){
//     var line ='the quick brown fox'
//     var change=line.split(" ")
//  return change.map (change => change[0].toUpperCase() + change.slice(1).toLowerCase()).join(" ");
// }
// document.write(accepts())


// Q.Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// Page 3 of 4
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'



// function identifier(string,letter){
//             var c = 0
//                for(var i = 0; i < string.length; i++){
//                        if(string[i] === letter){
//                             c = c + 1
//                        }
//                }
//                return c
//     }
//     var s = prompt("Enter string");
//     var p = prompt("Enter word which is to be count")
//     document.write(identifier(s,p))
    
    
    





// Q. find Circumference of circle = 2πr
// Area of circle = πr2



// function calcCircumference(radius){
//             var circum = 2*3.142*radius;
//             return alert("The Circumference is :" + " " + circum)
//     }
//     calcCircumference(2);
    
    
    
//     function calcArea(radius){
//             var area = 3.142 * ( radius*radius);
//             return alert("The calcArea is :" + " " + area)
//     }
//     calcArea(3)


// Q.Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


// function power(a,b){
//          var contain = 1;
//          for(var i=1; i <= b;i++){
//              contain = contain*a
//          }
      
//          alert("The answer is " + " " + contain)
//     }
//     var inp1 = prompt("Enter First value");
//     var inp2 = prompt("Enter Second value");
//     power(inp1,inp2)
    

// Q. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …


// function leapYear(year){
//           if(year % 4 === 0){
//                   alert("This is Leap Year")
//           }
//           else{
//                   alert("This is not Leap Year")
//           }
//     }
//     var leap = +prompt("Enter yer to cheak the leap year");
//     leapYear(leap)
    
    

// Q.If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
    
    
// var firstVal = +prompt("Enter First Value");
// var SecondVal = +prompt("Enter Second Value");
// var ThirdVal = +prompt("Enter Third Value");
// function side(a,b,c){
//         var sideA = ( a + b + c ) / 2;
//         return sideA
// }
// var S = side(firstVal,SecondVal,ThirdVal);
// function area(sum,a,b,c){
//         var areaA = sum*(sum - a)*(sum - b)*(sum - c);
//         return areaA
// }
// alert(area(S,firstVal,SecondVal,ThirdVal));



// Q.. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.





// var a = prompt("string")
// var b = prompt("Enter letter to check its index number")
// function checking(str,val){
//         for(var i = 0;i < str.length ; i++){
//                 if(str.slice(i,i+1) === val){
//                 alert("Index number : " + " " + i);
//                 }
//         }
// }
// checking(a,b)



// Q.Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// var sentence = prompt("Enter a sentence of less than 25 characters");
// function removeVow(a){
//         var c = ""
//         for(var i = 0; i < a.length; i++){
//                 if(a.slice(i,i+1) !== "a"  &&  a.slice(i,i+1) !== "e"  &&  a.slice(i,i+1) !== "i"  &&  a.slice(i,i+1) !== "o"  &&  a.slice(i,i+1) !== "u"  &&  a.slice(i,i+1) !== "A"  &&  a.slice(i,i+1) !== "E"  &&  a.slice(i,i+1) !== "I"  &&  a.slice(i,i+1) !== "O"  &&  a.slice(i,i+1) !== "U"){
//                         c += a[i]
//                 }
//         }

//  return c
// }
// alert(removeVow(sentence))


// Q.The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// var distance = prompt("Enter distance in KiloMeters");
// function meters(inputM){
//        var m = inputM*1000 + " " + "Meters"
//        return m
// }
// function Feet(inputF){
//         var f = inputF*3281 + " " +  "Feet"
//         return f
//  }
//  function Inches(inputI){
//         var i = inputI*1000*39.3 + " " +  "Inches"
//         return i
//  }
//  function centiMeters(inputC){
//         var c = inputC*1000*100 + " " +  "CentiMeters"
//         return c
//  }
// alert(meters(distance))
// alert(Feet(distance))
// alert(Inches(distance))
// alert(centiMeters(distance))



// Q. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// var enter =prompt("enter hours")
// var overtime =12*enter
// alert(overtime)