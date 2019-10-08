/**
 * s50.js
 * 
 * Slide 50
 */
$(function() {
    let target = $('#target');
    
    $('a').click(function(event) {
        alert('You should not use any link on this page!');
        event.preventDefault(); // con questo non fa andare sulle pagine linkate, se lo togliamo viene fuori il messaggio allert ma non fa andare sulla pagin richiesta
    });

    $('html').dblclick(function(event) {
        target.append('Double-click detected at ' + event.pageX + ', ' + event.pageY + '\n');
    });
});
