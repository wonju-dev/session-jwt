const usernameInput = document.querySelector(".username") as HTMLInputElement;
const passwordInput = document.querySelector(".password") as HTMLInputElement;

const clickHandler = async () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    })
  });
};
const loginBtn = document.querySelector(".btn");
loginBtn.addEventListener("click", clickHandler);
