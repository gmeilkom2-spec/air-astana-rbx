const API = "http://localhost:3000/api";


async function register() {
const email = document.getElementById('regEmail').value;
const password = document.getElementById('regPassword').value;


const res = await fetch(API + '/register', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email, password })
});


if (res.ok) {
alert('Регистрация успешна');
window.location.href = 'login.html';
} else {
alert('Ошибка регистрации');
}
}


async function login() {
const email = document.getElementById('loginEmail').value;
const password = document.getElementById('loginPassword').value;


const res = await fetch(API + '/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email, password })
});


if (res.ok) {
alert('Вход выполнен');
window.location.href = 'index.html';
} else {
alert('Неверные данные');
}
}
