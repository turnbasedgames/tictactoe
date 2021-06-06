console.log("javascript running")

function sendMessage() {
    window.top.postMessage(
        JSON.stringify({
            x: 0,
            y: 0
        }),
        '*'
    );
}

document.getElementById('playerMove').onclick = () => {
    sendMessage();
}
