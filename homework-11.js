const form = document.querySelector(".footer__form");
const emailInput = document.querySelector(".footer__input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  console.log({ email: emailValue });
  form.reset();
});

let registeredUser = null;
const openBtn = document.querySelector(".open-modal-btn");
const closeBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const formRegister = document.querySelector(".register-form");

function openModal() {
  overlay.style.display = "flex";
  modal.classList.add("modal-showed");
}

function closeModal() {
  overlay.style.display = "none";
  modal.classList.remove("modal-showed");
  formRegister.reset();
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();

  const passwordInput = form.querySelector('input[name="password"]');
  const confirmPasswordInput = form.querySelector(
    'input[name="confirmPassword"]',
  );
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Регистрация отклонена: пароли не совпадают!");
    return;
  }

  if (!form.checkValidity()) {
    alert("Регистрация отклонена: форма невалидна!");
    return;
  }

  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());

  delete userData.confirmPassword;

  userData.createdOn = new Date();

  user = userData;

  console.log("Успешная регистрация:", user);
  closeModal();
});
