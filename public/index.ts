const usernameElement = document.querySelector(".username") as HTMLInputElement;
const passwordElement = document.querySelector(".password") as HTMLInputElement;
const signInBtn = document.querySelector(".in-submit") as HTMLButtonElement;
const signUpBtn = document.querySelector(".up-submit") as HTMLButtonElement;

const sendRequest = async (flag: string) => {
  const username = usernameElement.value;
  const password = passwordElement.value;
  const response = await fetch(`http://localhost:3000/auth/${flag}`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    })
  });
  const text = await response.text();
  document.body.innerHTML = text;
};

signInBtn.addEventListener("click", () => sendRequest("signin"));
signUpBtn.addEventListener("click", () => sendRequest("signup"));
