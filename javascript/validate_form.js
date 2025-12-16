

function checkMsg() {
   let msg = document.getElementById("messageForm");

   for (let i = 0; i < msg.elements.length; i++) {
      if (msg.elements[i].value === "" && msg.elements[i].hasAttribute("required")) {
         alert("Please fill out all required fields before sending your message.");
         return false;
      }
   }
   msg.submit()
}

function checkApp() {
   let app = document.getElementById("apply");

   for (let i = 0; i < app.elements.length; i++) {
      if (app.elements[i].value === "" && app.elements[i].hasAttribute("required")) {
         alert("Please fill out all required fields before submitting your application.");
         return false;
      }
   }
   msg.submit()
}











