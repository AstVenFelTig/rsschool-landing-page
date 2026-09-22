export default function link() {
  const footerTvitter = document.querySelector(".footer__tvitter");
  const footerInstagram = document.querySelector(".footer__instagram");
  const footerFasеbook = document.querySelector(".footer__fasеbook");
  footerTvitter.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://x.com/twitter", "_blank", "noopener,noreferrer");
  });
  footerInstagram.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
  });
  footerFasеbook.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      "https://www.facebook.com/?locale=ru_RU",
      "_blank",
      "noopener,noreferrer",
    );
  });
}
