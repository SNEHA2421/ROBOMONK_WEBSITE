function loadHTML(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("File not found: " + url);
      return res.text();
    })
    .then(html => el.innerHTML = html)
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {

  let base = "";

  // If inside Blogs_pages → go ONE folder up
  if (window.location.pathname.includes("Blogs_pages")) {
    base = "../";
  }

  const isBlogPage = window.location.pathname.includes("Blogs_pages");

  // ---------------------- HEADER ----------------------
  if (isBlogPage) {
    loadHTML("header-placeholder", base + "includes/header_blog.html");
  } else {
    loadHTML("header-placeholder", base + "includes/header.html");
  }

  // ---------------------- FOOTER ----------------------
  if (isBlogPage) {
    loadHTML("footer-placeholder", base + "includes/footer_blog.html");
  } else {
    loadHTML("footer-placeholder", base + "includes/footer.html");
  }

});
