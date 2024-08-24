(function () {
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  let captchaValue = "";

  function generateCaptcha() {
    captchaValue = btoa(Math.random() * 1e9).substr(0, 5 + Math.random() * 5);
  }

  function setCaptcha() {
    document.querySelector(".login-form .captcha .preview").innerHTML = captchaValue
      .split("")
      .map(char => {
        const rotate = -20 + Math.random() * 30;
        const font = fonts[Math.floor(Math.random() * fonts.length)];
        return `<span style="transform:rotate(${rotate}deg);font-family:${font}">${char}</span>`;
      })
      .join("");
  }

  function initCaptcha() {
    document.querySelector(".captcha-refresh").addEventListener("click", () => {
      generateCaptcha();
      setCaptcha();
    });
    generateCaptcha();
    setCaptcha();
  }

  initCaptcha();

  document.querySelector("#login-btn").addEventListener("click", () => {
    const inputCaptchaValue = document.querySelector(".captcha input").value;
    inputCaptchaValue === captchaValue ? swal("", "Logging In!", "success") : swal("Invalid captcha");
  });
})();
