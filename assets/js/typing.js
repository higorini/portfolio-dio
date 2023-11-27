var title = document.getElementById("title");

var Typewriter = new Typewriter(title, {
  loop: false,
  delay: 75,
});

Typewriter.pauseFor(2000)
  .typeString("Olá,<br />eu sou o<br />Higor Moraes")
  .pauseFor(300)
  .deleteChars(5)
  .typeString(". dos Santos")
  .start();
