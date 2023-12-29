
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if(!email || !name || !phoneNumber || !subject || !message) {
         alert ('Harap Isi Semua Form')
        return;
    }
    

    const body = 'Name: ' + name + 
               '\nEmail: ' + email + 
               '\nPhone Number: ' + phoneNumber + 
               '\nSubject: ' + subject + 
               '\nMessage: ' + message;

    window.open('mailto:test@example.com?subject=Contact&body=' + encodeURIComponent(body));
}
