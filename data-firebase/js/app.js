'use strict';

const modalWrap = document.querySelector(".modal-wrap");
const modalContent = document.querySelector(".modal-content");
const modalBtn = document.querySelector(".modal-btn");
const cancel = document.querySelector(".cancel");
const phoneNumber = document.querySelector(".phone-number");
const email = document.querySelector(".email");

const firebaseData = db.collection("form-data");
const accept = document.querySelector(".accept");
const onlyNumber = /^[0-9]+$/;
const errorEmail = document.querySelector(".email-error");
const errorPhoneNumber = document.querySelector(".phone-number-error");

modalBtn.addEventListener("click", () => {
  modalContent.classList.remove("slide-out");
  modalWrap.classList.toggle("display-none");
});

cancel.addEventListener("click", () => {
  modalContent.classList.add("slide-out");
  setTimeout(() => {
    modalWrap.classList.toggle("display-none");
  }, 650);
  phoneNumber.value = "";
  email.value = "";
});

function closeModal(){
  modalContent.classList.add("slide-out");
  setTimeout(() => {
    modalWrap.classList.toggle("display-none");
  }, 650);
  phoneNumber.value = "";
  email.value = "";
}

accept.addEventListener("click", ()=>{
  if(phoneNumber.value.length <= 11 && phoneNumber.value.match()){
    errorPhoneNumber.classList.add("display-none");
    if(email.value !== ""){
      errorEmail.classList.add("display-none");
      firebaseData 
        .doc()
        .set({
          number: phoneNumber.value,
          email: email.value
        })
        .then(()=>{
          closeModal();
        })
    }else{
      errorEmail.classList.remove("display-none");
    }
  }else{
    errorPhoneNumber.classList.add("display-none");
  }
})