

window.onload = function () {

    function search() {
        console.log('Search called');
        // YOUR CODE HERE
    }

    const doc = document.getElementById('feetFromMilesAction').onclick = search;
    if (doc) {
        doc.onclick = search();

    }
    /*function CalculateCircumference() {
        const userMiles = document.getElementById('userInput').value;
        fetch('/Circumference' + '?radius=' + userMiles)
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 1);
            })

            .catch(ex => {
                console.log(ex);
            });
    }

     */
    

    function getPostOptions(body) {
        return {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(body)
        };
    }


    getPostOptions({
        param01: 'foo',
        param02: 'bar'
    });

    function callServer() {
        const radius = document.getElementById('userInput').value;
        const query = {radius};

        fetch('/Circumference', getPostOptions(query))
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 4);
            })
            .catch((ex) => {
                console.log(ex);
            });
    }

    const Circumference = document.getElementById('Circumference');
    if (Circumference) {
        Circumference.onclick = callServer;
    }

    function getOneMile() {

        fetch('/getOneMile')
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 4);
            })
            .catch((ex) => {
                console.log(ex);
            });
    }

    const getOneMileAction = document.getElementById('getOneMileAction');

    if (getOneMileAction) {
        getOneMileAction.onclick = getOneMile;
    }



    const feetFromMiles = () => {
        const userMiles = document.getElementById('userInput').value;
        fetch('/feetFromMiles' + '?miles=' + userMiles)
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 4);
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    const feetFromMilesAction = document.getElementById('feetFromMilesAction');

    if (feetFromMilesAction) {
        feetFromMilesAction.onclick = feetFromMiles;
    }














};