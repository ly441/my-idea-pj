document.addEventListener("DOMContentLoaded", function () {
    console.log(" About Page Loaded!");

    
    let moreInfo = document.querySelector("more-info");
    let button = document.querySelector("read-more-btn");

    if (button) {
        button.addEventListener("click", function () {
            if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
                moreInfo.style.display = "block";
                button.innerText = "Show Less";
            } else {
                moreInfo.style.display = "none";
                button.innerText = "Read More";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
  console.log("About.js is connected!");

  let moreInfo = document.querySelector("#more-info");
  let button = document.querySelector("#read-more-btn");

  if (!moreInfo || !button) {
    console.log("⚠️ Elements not found. Check your HTML IDs.");
    return;
  }

  button.addEventListener("click", function () {
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
      moreInfo.style.display = "block";
      button.innerText = "Show Less";
    } else {
      moreInfo.style.display = "none";
      button.innerText = "Read More";
    }
  });
});
