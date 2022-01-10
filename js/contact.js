const formID = 'contact-primary';
let isContactUsed = sessionStorage.getItem('isContactUsed') || false;

// LOAD PAGE -----------------------------------------------------------------
function loadPage() { 
    // Disable contact button
    document.getElementById('contact-button').disabled = true;
    contactAlert('You have already used this form.');
}



// VALIDATE EMAIL ------------------------------------------------------------
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function contactAlert(message) {
    let alert = document.getElementById('contact-alert');
    alert.innerHTML = message;
}

// SEND EMAIL ----------------------------------------------------------------
function sendEmail() {
    // Check if form is used
    if (isContactUsed == 'true') {
        contactAlert('You have already used this form.');
        return;
    }

    // Collect values
    let payload = {
        name: getText('contact-name').html.querySelector('input').value,
        email: getText('contact-email').html.querySelector('input').value,
        message: getTextArea('contact-message').html.querySelector('textarea').value
    }

    // Validate values
    if (!payload.name || !payload.email || !payload.message) {
        contactAlert('Please fill out all fields.');
        return;
    }

    // if (!validateEmail(payload.email)) {
    //     contactAlert('Please enter a valid email address.');
    //     return;
    // }

    // Send email
    fetch(serverDomain + 'mailer/send/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'payload' : payload,
            'form_id' : formID
        })
    }).then(response => { response.json().then(data => {
        if (data.success) {
            contactAlert(`Your inquiry has been sent! I'll be in contact shortly :)`);
            sessionStorage.setItem('isContactUsed', 'true');
            isContactUsed = 'true';
        } else {
            contactAlert('There was an error sending your inquiry. Please try again later.');
        }
    }); });
}