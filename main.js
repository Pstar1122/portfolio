// Main JavaScript Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function selectRole(role) {
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Form Submissions
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.querySelector('.role-btn.active').textContent.toLowerCase();
    alert('Login successful!');
    if (role === 'student') {
        window.location.href = 'student.html';
    } else if (role === 'faculty') {
        window.location.href = 'faculty.html';
    } else {
        window.location.href = 'admin.html';
    }
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Application submitted successfully!');
    window.location.href = 'student.html';
});

console.log('UniCore University System Loaded!');