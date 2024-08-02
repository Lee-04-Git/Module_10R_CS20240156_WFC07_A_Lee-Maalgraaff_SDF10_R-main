import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js"
import config from './config.js';

const firebaseConfig = {
    databaseURL: config.DATABASE_URL
}

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(inputValue)
})