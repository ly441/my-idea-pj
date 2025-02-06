document.addEventListener("DOMContentLoaded", function () {
  console.log("About Page Loaded!");

  
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
