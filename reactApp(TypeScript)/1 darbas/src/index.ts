interface Person {
  vardas: string;
  metai: number;
}

var obj = {
  vardas: "Max",
  metai: 25,
};

var app = (maksas: Person): string =>
  `<div class="person"><h1>${maksas.vardas}</h1><p>YourAge: ${maksas.metai}</p></div>`;

var divas = (document.getElementById("yes").innerHTML = app(obj));
