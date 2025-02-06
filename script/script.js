


document.addEventListener("DOMContentLoaded", function () {
    console.log("Home Page Loaded!");

    
    let welcomeText = document.querySelector("#home-welcome");
    if (welcomeText) {
        let hour = new Date().getHours();
        let greeting = "Welcome!";

        if (hour < 12) {
            greeting = "Good Morning! ";
        } else if (hour < 18) {
            greeting = "Good Afternoon! ";
        } else {
            greeting = "Good Evening! ";
        }

        welcomeText.innerText = greeting;
    }



    
});

