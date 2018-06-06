var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function () {
    $messages.mCustomScrollbar();
    // setTimeout(function () {
    //     fakeMessage();
    // }, 100);
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
}

function insertMessage(msg) {
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    // setTimeout(function () {
    //     fakeMessage();
    // }, 1000 + (Math.random() * 20) * 100);
}

// var Fake = [
//     'Hi there, I\'m Fabio and you?',
//     'Nice to meet you',
//     'How are you?',
//     'Not too bad, thanks',
//     'What do you do?',
//     'That\'s awesome',
//     'Codepen is a nice place to stay',
//     'I think you\'re a nice person',
//     'Why do you think that?',
//     'Can you explain?',
//     'Anyway I\'ve gotta go now',
//     'It was a pleasure chat with you',
//     'Time to make a new codepen',
//     'Bye',
//     ':)'
// ];

function fakeMessage(msg) {
    $('<div class="message new"><figure class="avatar"><img src="assets/coolboy.jpg" /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
}

// function fakeMessage(msg) {
//     // if ($('.message-input').val() !== '') {
//     //     return false;
//     // }
//     $('<div class="message loading new"><figure class="avatar"><img src="assets/coolboy.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
//     updateScrollbar();
//
//     setTimeout(function () {
//         $('.message.loading').remove();
//         $('<div class="message new"><figure class="avatar"><img src="assets/coolboy.jpg" /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
//         setDate();
//         updateScrollbar();
//         i++;
//     }, 1000 + (Math.random() * 20) * 100);
// }