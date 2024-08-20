function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementById('otpverify');
    let otp_val = Math.floor(Math.random() * 10000);
    // making the email cordnaits
    let emailbody = `<h2>Your OTP Is: ${otp_val}</h2>`;
    Email.send({
        SecureToken: "6c6a302d-022c-4cb1-b21d-96f30c74a082",
        To: email.value,
        From: "faresatef111222333@gmail.com",
        Subject: "OTP code",
        Body: emailbody,


    }).then((message) => {
        if (message === "OK") {
            alert("OTP sent to your email: " + email.value);
        }

        otpverify.style.display = "flex";
        const otp_inp = document.getElementById('otp_inp');
        const otp_btn = document.getElementById('otpbtn');

        otp_btn.addEventListener('click', () => {
            if (otp_inp.value == "0021") {
                alert("Email Address verified.");
            } else {
                alert("Invalid OTP.");
            }
        });
    });
}
