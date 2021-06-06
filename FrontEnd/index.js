console.log("javascript running")

document.getElementById('playerMove').onclick = () => {
    window.top.postMessage(
        JSON.stringify({
            error: false,
            message: {
                testFunc: function () {
                    console.log("clicked")
                },
                etc: "message"
            }
        }),
        '*'
    );
}
