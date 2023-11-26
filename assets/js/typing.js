var title = document.getElementById("title");

var Typewriter = new Typewriter(title, {
  loop: true,
  delay: 75,
});

Typewriter.pauseFor(2000)
  .typeString("Olá,<br />eu sou o<br />Higor M. dos Santos")
  .start()
  .pauseFor(28000);
