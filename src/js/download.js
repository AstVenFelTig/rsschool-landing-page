export default function linkApp() {
  const downloadApple = document.querySelectorAll(".download__apple");
  downloadApple[0].addEventListener("click", () => {
    window.open(
      "https://www.apple.com/apple-pay/",
      "_blank",
      "noopener,noreferrer",
    );
  });
  downloadApple[1].addEventListener("click", () => {
    window.open(
      "https://play.google.com/store/apps?hl=ru",
      "_blank",
      "noopener,noreferrer",
    );
  });
}
