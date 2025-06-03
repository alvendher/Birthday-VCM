document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('birthdayModal');
    const enterBirthdayBtn = document.getElementById('enterBirthday');
    const closeModalBtn = document.querySelector('.close-modal');
    const submitBirthdayBtn = document.getElementById('submitBirthday');
    const questionSection = document.getElementById('questionSection');
    const submitAnswerBtn = document.getElementById('submitAnswer');
    const answerInput = document.getElementById('answerInput');

    const birthdays = {
        "01-09": "friend1.html",
        "05-12": "friend2.html",
        "05-31": "friend3.html"
    };

    // Show modal
    enterBirthdayBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Handle birthday submission
    submitBirthdayBtn.addEventListener('click', () => {
        const birthdayInput = document.getElementById('birthday');
        if (birthdayInput.value) {
            modal.classList.remove('active');
            questionSection.classList.add('active');
        } else {
            alert('Please select your birthday');
        }
    });

    // Handle answer submission
    submitAnswerBtn.addEventListener('click', () => {
        const answer = answerInput.value.toLowerCase();
        if (answer === 'fish') {
            alert('Correct! Redirecting to your birthday page...');
            // Add your redirection logic here
        } else {
            alert('Try again!');
        }
    });

    // Prevent form submission on enter key
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitAnswerBtn.click();
        }
    });

    // Validate date format
    const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!dateRegex.test(birthdayInput.value)) {
        alert("Please enter a valid date in MM-DD format (e.g., 01-12)");
        return;
    }

    // Check if birthday exists in our records
    if (birthdays[birthdayInput.value]) {
        window.location.href = birthdays[birthdayInput.value];
    } else {
        alert("No scrapbook found for this date. Please check the date and try again.");
    }
}); 