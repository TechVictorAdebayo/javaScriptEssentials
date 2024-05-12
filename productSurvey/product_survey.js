function submitFeedback(){

    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').ariaValueText;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    const submitButton = document.getElementById('submitBtn');
    alert ('Thank you for your valuable feedback');

    document.getElementById('userName').innerHTML = username;
    document.getElementById('Age').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = designation;
    document.getElementById('productChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
}   

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        submitFeedback();
    }
});

