console.log("javascript running 2")

function sendMessage(givenX, givenY) {
    window.top.postMessage(
        JSON.stringify({
            x: givenX,
            y: givenY
        }),
        '*'
    );
}

$(document).ready(function() {
    $('.square').click((e) => {
        const cell = $(e.target);
        sendMessage(cell.attr('x', cell.attr('y')));
    })
})
