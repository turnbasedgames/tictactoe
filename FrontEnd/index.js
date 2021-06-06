console.log("javascript running")

function sendMessage() {
    window.top.postMessage(
        JSON.stringify({
            message: {
                x: 0,
                y: 0
            }
        }),
        '*'
    );
}

document.getElementById('playerMove').onclick = () => {
    sendMessage();
}
