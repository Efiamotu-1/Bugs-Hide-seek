const form = document.querySelector('form');
const emailError = document.querySelector('form-error');

form.addEventListener('submit', (e) => {
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    emailError.innerHTML = `<p class="error">Email should be written in lowercase letters: ${email}</p>`;
  } else {
    emailError.innerHTML = '';
    const data = JSON.stringify({ name, email, message });
    localStorage.setItem('data', data);
  }
});
const userData = JSON.parse(localStorage.getItem(data));
form.name.value = userData.name;
form.email.value = userData.email;
form.message.value = userData.message;
