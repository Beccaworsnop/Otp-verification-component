const otp1 = document.getElementById('otp1');
const otp2 = document.getElementById('otp2');
const otp3 = document.getElementById('otp3');
const otp4 = document.getElementById('otp4');
const verifyBtn = document.getElementById('verifyBtn');
const message = document.getElementById('message');

function enableButton() {
    if (otp1.value && otp2.value && otp3.value && otp4.value) {
        verifyBtn.disabled = false;
    } else {
        verifyBtn.disabled = true;
    }
}

otp1.addEventListener('input', enableButton);
otp2.addEventListener('input', enableButton);
otp3.addEventListener('input', enableButton);
otp4.addEventListener('input', enableButton);

function checkOTP() {
    console.log("Button clicked!");
    const otp = otp1.value + otp2.value + otp3.value + otp4.value;

    if (otp === "0000") {
        message.textContent = "OTP Verified Successfully!";
        message.style.color = "green";
    } else {
        message.textContent = "Incorrect OTP. Please try again.";
        message.style.color = "red";
    }
}

verifyBtn.addEventListener('click', checkOTP);
