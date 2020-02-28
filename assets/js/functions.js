function welcome() {
    let today = new Date();
    let currentHour = today.getHours();
    let welcomeText = '';
    if (5 <= currentHour && currentHour < 12) {
        welcomeText = 'Good Morning!';
    }
    else if (12 <= currentHour && currentHour < 17) {
        welcomeText = 'Good Afternoon!';
    }
    else if (17 <= currentHour && currentHour < 21) {
        welcomeText = 'Good Evening!';
    }
    else {
        welcomeText = 'Good Night!';
    }
    document.querySelector('#welcome').innerHTML = welcomeText;
}