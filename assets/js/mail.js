const firebaseConfig = {
  apiKey: "AIzaSyCK7F6vI10eDOz0y1v0aDo1XpeRhnZACnA",
  authDomain: "contact-form-ce2c2.firebaseapp.com",
  databaseURL: "https://contact-form-ce2c2-default-rtdb.firebaseio.com",
  projectId: "contact-form-ce2c2",
  storageBucket: "contact-form-ce2c2.appspot.com",
  messagingSenderId: "727379156492",
  appId: "1:727379156492:web:92dcab4c97bc5c7b4f5829",
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("contactForm").addEventListener("submit", submitForm);
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log("test");
  var name = getElementVal("name");
  var emailSubject = getElementVal("subject");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("content");
  const sentmsg = document.getElementsByClassName("sent-message");

  const loading = document.getElementsByClassName("loading");
  loading[0].style.display = "block";
  setTimeout(() => {
    loading[0].style.display = "none";
    sentmsg[0].style.display = "block";
  }, 500);
  setTimeout(() => {
    sentmsg[0].style.display = "none";
  }, 3000);
  saveMessages(name, emailSubject, emailid, msgContent);
  console.log(name, emailSubject, emailid, msgContent);
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailSubject, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    emailSubject: emailSubject,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
