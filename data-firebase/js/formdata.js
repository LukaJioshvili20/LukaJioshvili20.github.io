const formData = document.querySelector(".form-data");

function createFormData(doc){
    let div = document.createElement("DIV");
    let number = document.createElement("span");
    let email = document.createElement("span");
    let icon = document.createElement("span");


    div.classList.add("form-info");
    number.textContent = doc.data().number;
    email.textContent = doc.data().email;
    icon.classList.add("far", "fa-trash-alt");

    div.appendChild(number);
    div.appendChild(email);
    div.appendChild(icon);

    formData.appendChild(div);

    icon.addEventListener("click", ()=>{
        let ref = db.collection("form-data").doc(doc.id);
        ref.delete();
    })
}

// db.collection("form-data")
//     .get()
//     .then( (result) =>{
//         result.forEach( (doc)=>{
//             createFormData(doc);
//         })
//     })

db.collection("form-data").onSnapshot((snap)=>{
    snap.docChanges().forEach((doc)=>{
        if(doc.type === "added"){
            createFormData(doc.doc);
        }else if((doc.type = "removed")){
            let div = document.querySelector(`[data-id=${doc.doc.id}]`);
            formData.removeChild(div);
        }
    })
})