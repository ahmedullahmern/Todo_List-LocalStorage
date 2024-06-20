// localStorage.setItem("email" , "ahmed@gmail.com")
// var g  = localStorage.getItem("email")
// console.log(g)
// localStorage.clear("email"  )
// var p = localStorage.getItem("class")
// console.log(p);
// localStorage.removeItem("class")
// localStorage.removeItem("email")
// // localStorage.clear()
// <button id="del"  onclick="deletechal(this)">Del</button>
//         <button id="edit"  onclick="editchal(this)">Edit</button>

var html_email = document.getElementById("html_email")
var html_password = document.getElementById("html_password")
var login_page = document.getElementById("login_page")
var dusra_page = document.getElementById("dusra_page")
var note = document.getElementById("note")
var deleteall = document.getElementById("deleteall")
var em = document.getElementById("em")

function signin() {
    if (!html_email.value || !html_password.value)
        return alert("piz Enter Email or Passwords")
    localStorage.setItem("email", html_email.value)
    html_email.value = ""
    html_password.value = ""
    checkUserLogin()
}

function checkUserLogin() {
    var emailloginhe = localStorage.getItem("email")
    console.log(emailloginhe);
    if (emailloginhe) {
        login_page.style.display = "none"
        dusra_page.style.display = "block"
        showuser()
    }
    else {
        login_page.style.display = "block"
        dusra_page.style.display = "none"
    }
    em.innerHTML = emailloginhe

}
checkUserLogin()

function logpe() {
    var emailloginhe = localStorage.removeItem("email")
    checkUserLogin()
}




function submitNote() {
    var emailloginhe = localStorage.getItem("email")
    if (note.value === "") {
        return alert("piz Enter your Task")
    }
    var currentDate = new Date().toLocaleString();
    var obj = {
        emailloginhe: emailloginhe,
        note: note.value,
        date: currentDate
    };
    saveValueLocalStorage(obj)
    note.value = ""
}





function saveValueLocalStorage(obj) {
    var notes = localStorage.getItem("notesave")
    console.log(notes)

    if (notes) {
        notes = JSON.parse(notes)
        notes.push(obj)
        console.log(notes)
        setInterval(function () {
            localStorage.setItem("notesave", JSON.stringify(notes))
        }, 1000,)
        localStorage.setItem("notesave", JSON.stringify(notes))
    }
    else {
        notes = [obj]
        console.log(notes)
        localStorage.setItem("notesave", JSON.stringify(notes))
    }

    showuser()
}

function showuser() {
    var uidesing = document.getElementById("uidesing")
    var notes = localStorage.getItem("notesave")
    var currenEmail = localStorage.getItem("email")
    if (notes) {
        uidesing.innerText = ""
        notes = JSON.parse(notes)
        console.log(notes);
        notes.forEach(function (data, ind) {
            if (currenEmail === "admin@gmail.com") {
                var liEle = `
                <li class="setting_haro_baro"><span> &nbsp; &nbsp;${data.note} &nbsp; &nbsp; &nbsp; <span class="bold">(${data.emailloginhe}) </span></span>
                 <span class="time">${data.date}</span>
         </li>
                `;
                uidesing.innerHTML += liEle
            }
            console.log(data);
            if (data.emailloginhe === currenEmail) {
                var liEle = `
                <li class="setting_haro_baro"><span> &nbsp; &nbsp;${data.note} &nbsp; &nbsp; &nbsp; <span class="bold"> &nbsp; &nbsp;(${data.emailloginhe}) </span></span>
                <span class="time"> &nbsp; &nbsp; &nbsp; &nbsp;${data.date}</span>
         </li>
                `;
                uidesing.innerHTML += liEle
            }
        })


    }
}

// function deletechal(index) {
//     var notes = localStorage.getItem("notesave")
//     if (notes) {
//         notes = JSON.parse(notes)
//         console.log(notes);
//         notes.splice(index, 1)  
//         localStorage.setItem("notesave", JSON.stringify(notes))
//         showuser()
//     }
// }
showuser()
