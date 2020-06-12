  /*readying the document*/
$(document).ready(function() {
    /*input variables made for the text areas*/
    var input9 = $('#text9');
    var input10 = $('#text10');
    var input11 = $('#text11');
    var input12 = $('#text12');
    var input1 = $('#text1');
    var input2 = $('#text2');
    var input3 = $('#text3');
    var input4 = $('#text4');
    var input5 = $('#text5');
    /*variables made to put date and time on page*/
    var time = $('<p>');
    var day = $('<p>');
    /*tying the input variables to the local storage*/
    input9.val(localStorage.getItem('9'));
    input10.val(localStorage.getItem('10'));
    input11.val(localStorage.getItem('11'));
    input12.val(localStorage.getItem('12'));
    input1.val(localStorage.getItem('1'));
    input2.val(localStorage.getItem('2'));
    input3.val(localStorage.getItem('3'));
    input4.val(localStorage.getItem('4'));
    input5.val(localStorage.getItem('5'));
    /*creating button variables*/
    var btn9 = $('#btn9');
    var btn10 = $('#btn10');
    var btn11 = $('#btn11');
    var btn12 = $('#btn12');
    var btn1 = $('#btn1');
    var btn2 = $('#btn2');
    var btn3 = $('#btn3');
    var btn4 = $('#btn4');
    var btn5 = $('#btn5');
    var clearBtn = $('#clearBtn');
    /*variable that takes the date and time from moment js*/
    var currentTime = parseInt(moment().format('HH'));
    /*function to clear the local storage*/
    function clear() {
        localStorage.clear();
  
        input9.val('');
        input10.val('');
        input11.val('');
        input12.val('');
        input1.val('');
        input2.val('');
        input3.val('');
        input4.val('');
        input5.val('');
        
    }
     /*function to use moment to get the day and time on the page*/
    function clock() {
        day.text(moment().format('LL'));
        time.text(moment().format('hh:mm:ssA'));
        $('.jumbotron').append(day);
        $('.jumbotron').append(time);
    }
    /*function that checks the current time so that we know what color to change the text areas to represent past present and future*/
    function checkCurrentTime() {

        if (parseInt(input9.attr('data-hour')) > currentTime) {
            input9.removeClass('past present future');
            input9.addClass('future');
        } else if (parseInt(input9.attr('data-hour')) === currentTime) {
            input9.removeClass('past present future');
            input9.addClass('present');
        } else {
            input9.removeClass('past present future');
            input9.addClass('past');
        }
  
        if (parseInt(input10.attr('data-hour')) > currentTime) {
            input10.removeClass('past present future');
            input10.addClass('future');
        } else if (parseInt(input10.attr('data-hour')) === currentTime) {
            input10.removeClass('past present future');
            input10.addClass('present');
        } else {
            input10.removeClass('past present future');
            input10.addClass('past');
        }

        if (parseInt(input11.attr('data-hour')) > currentTime) {
            input11.removeClass('past present future');
            input11.addClass('future');
        } else if (parseInt(input11.attr('data-hour')) === currentTime) {
            input11.removeClass('past present future');
            input11.addClass('present');
        } else {
            input11.removeClass('past present future');
            input11.addClass('past');
        }
  
        if (parseInt(input12.attr('data-hour')) > currentTime) {
            input12.removeClass('past present future');
            input12.addClass('future');
        } else if (parseInt(input12.attr('data-hour')) === currentTime) {
            input12.removeClass('past present future');
            input12.addClass('present');
        } else {
            input12.removeClass('past present future');
            input12.addClass('past');
        }
          
        if (parseInt(input1.attr('data-hour')) > currentTime) {
            input1.removeClass('past present future');
            input1.addClass('future');
        } else if (parseInt(input1.attr('data-hour')) === currentTime) {
            input1.removeClass('past present future');
            input1.addClass('present');
        } else {
            input1.removeClass('past present future');
            input1.addClass('past');
        }
  
        if (parseInt(input2.attr('data-hour')) > currentTime) {
            input2.removeClass('past present future');
            input2.addClass('future');
        } else if (parseInt(input2.attr('data-hour')) === currentTime) {
            input2.removeClass('past present future');
            input2.addClass('present');
        } else {
            input2.removeClass('past present future');
            input2.addClass('past');
        }
  
        if (parseInt(input3.attr('data-hour')) > currentTime) {
            input3.removeClass('past present future');
            input3.addClass('future');
        } else if (parseInt(input3.attr('data-hour')) === currentTime) {
            input3.removeClass('past present future');
            input3.addClass('present');
        } else {
            input3.removeClass('past present future');
            input3.addClass('past');
        }
  
        if (parseInt(input4.attr('data-hour')) > currentTime) {
            input4.removeClass('past present future');
            input4.addClass('future');
        } else if (parseInt(input4.attr('data-hour')) === currentTime) {
            input4.removeClass('past present future');
            input4.addClass('present');
        } else {
            input4.removeClass('past present future');
            input4.addClass('past');
        }
  
        if (parseInt(input5.attr('data-hour')) > currentTime) {
            input5S.removeClass('past present future');
            input5.addClass('future');
        } else if (parseInt(input5.attr('data-hour')) === currentTime) {
            input5.removeClass('past present future');
            input5.addClass('present');
        } else {
            input5.removeClass('past present future');
            input5.addClass('past');
        }
    };
    /*setting the intercals to format the time right*/
    clock();
    setInterval(clock, 1000);
    setInterval(checkCurrentTime, 600000);
    clearBtn.on('click', clear);
    /*series of on click functions to store things with save button to local storage*/
    btn9.on('click', function() {
        event.preventDefault();
        if (input9.val() !== '') {
            localStorage.setItem('9', input9.val());
        }
    });
  
    btn10.on('click', function() {
        event.preventDefault();
        if (input10.val() !== '') {
            localStorage.setItem('10', input10.val());
        }
    });
  
    btn11.on('click', function() {
        event.preventDefault();
        if (input11.val() !== '') {
            localStorage.setItem('11', input11.val());
        }
    });
  
    btn12.on('click', function() {
        event.preventDefault();
        if (input12.val() !== '') {
            localStorage.setItem('12', input12.val());
        }
    });
  
    btn1.on('click', function() {
        event.preventDefault();
        if (input1.val() !== '') {
            localStorage.setItem('1', input1.val());
        }
    });
  
    btn2.on('click', function() {
        event.preventDefault();
        if (input2.val() !== '') {
            localStorage.setItem('2', input2.val());
        }
    });
  
    btn3.on('click', function() {
    event.preventDefault();
        if (input3.val() !== '') {
            localStorage.setItem('3', input3.val());
        }
    });
  
    btn4.on('click', function() {
        event.preventDefault();
        if (input4.val() !== '') {
            localStorage.setItem('4', input4.val());
        }
    });
    
    btn5.on('click', function() {
        event.preventDefault();
        if (input5.val() !== '') {
            localStorage.setItem('5', input5.val());
        }
    });
    /*runs the check current time function*/
    checkCurrentTime();
  });