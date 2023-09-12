export function scrolling(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}
