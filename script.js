$(document).ready(function () {
    var form = document.getElementById("mainform");
    var username = document.getElementById("username");
    var password = document.getElementById("psw");
    var confirmpassword = document.getElementById("confirmpsw");
    var accept = document.getElementById("accept");
    var country = document.getElementById("country");
    var submit = document.getElementById("submit");





    submit.disabled = true;
    submit.className = 'disabled';







    country.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Select your country';

    country.add(defaultOption);
    country.selectedIndex = 0;



    const request = new XMLHttpRequest();
    request.open('GET', "countries.js", true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            let option;
            for (let i = 0; i < data.length; i++) {
                option = document.createElement('option');
                option.text = data[i].name;
                option.value = data[i].code;
                dropdown.add(option);
            }
        } else {
            // Reached the server, but it returned an error
        }
    }

    request.onerror = function () {
        console.error('An error occurred fetching the JSON from ' + url);
    };

    request.send();



    const checkEnableButton = () => {
        submit.disabled = !(
            username.value &&
            password.value &&
            accept.checked &&
            country.value !== 'Select your country'
        )
    }



    addEvent(username, 'change', checkEnableButton);
    addEvent(password, 'change', checkEnableButton);
    addEvent(confirmpassword, 'change', checkEnableButton);
    addEvent(accept, 'change', checkEnableButton);
});















