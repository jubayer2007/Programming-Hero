// Login button 
document.getElementById('btn-login')
    .addEventListener('click', function (e) {
        e.preventDefault();  //type="button" er bikolpo
        const mobileNumber = 1621940844;
        const pinNumber = 2060;

        const mobileNumberValue = document.getElementById("mobile-number").value;
        const mobileNumberValueConverted = parseInt(mobileNumberValue);

        const pinNumberValue = document.getElementById("pin-number").value;

        const pinNumberValueConverted = parseInt(pinNumberValue);

        if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
            window.location.href="./main.html"
            // console.log('You are Welcome');
            
        }
        else{
            console.log('You are rejected');   
        } 
    })

 