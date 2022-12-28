function hesapla() {
    var sctCity, telNo;
    var liste = document.getElementById("city");
    sctCity = liste.options[liste.selectedIndex].value;

    if (sctCity == 01) {
        telNo = "222 666 999";
    }
    else if (sctCity == 07) {
        telNo = "222 666 666";
    }
    else if (sctCity == 22) {
        telNo = "222 333 666";
    }
    else if (sctCity == 34) {
        telNo = "222 222 666";
    }
    else if (sctCity == 35) {
        telNo = "222 123 666";
    }
    document.querySelector("#noText").innerHTML = telNo;
}


(function () {
    'use strict'
    var myMessage = document.querySelector("#message");
    myMessage.addEventListener("blur", controlMessage);

    function controlMessage() {
        var myError = document.querySelector("#ErrMessage");

        if (myMessage.value.length < 10) {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.textContent = "Mesajınız 10 karakterden az olamaz";
            return false;
        } else {
            myMessage.classList.remove("is-invalid");
            myMessage.classList.add("is-valid");
            return true;
        }
    }

    myMessage.addEventListener("keyup", function () {
        document.getElementById("current-character").textContent = myMessage.value.length;
        if (myMessage.value.length >= 10) {
            myBtn.disabled = false;
        } else {
            myBtn.disabled = true;
        }
    });



})();