const uebergabe = document.getElementById("uebergabe");
const adresseBereich = document.getElementById("adresseBereich");

const vereinsPLZ = "49448";

uebergabe.addEventListener("change", function () {

      if (uebergabe.value === "Abholung durch Sammelfahrzeug") {
          adresseBereich.style.display = "block";
      } else {
          adresseBereich.style.display = "none";
      }
  });

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const plz = document.getElementById("plz").value;

    if (uebergabe.value === "Abholung durch Sammelfahrzeug") {
          if (plz.substring(0, 2) !== vereinsPLZ.substring(0, 2)) {
              alert("Die Abholadresse liegt leider nicht in der Nähe der Geschäftsstelle.");
              return;
            }
          }
const kleidung = document.getElementById("kleidung").value;
const krisengebiet = document.getElementById("krisengebiet").value;

const jetzt = new Date();

const datum = jetzt.toLocaleDateString("de-DE");
const uhrzeit = jetzt.toLocaleTimeString("de-DE");

let ort;

if (uebergabe.value === "Abholung durch Sammelfahrzeug") {

      const strasse = document.getElementById("strasse").value;
      const ortsname = document.getElementById("ort").value;

      ort = strasse + ", " + plz + " " + ortsname;

} else {

      ort = "Geschäftsstelle";

}

document.getElementById("bestaetigung").innerHTML = 
<h3>Registrierung erfolgreich</h3>

<p><strong>Art der Kleidung:</strong> ${kleidung}</p>

<p><strong>Krisengebiet:</strong> ${krisengebiet}</p>

<p><strong>Datum:</strong> ${datum}</p>

<p><strong>Uhrzeit:</strong> ${uhrzeit}</p>

<p><strong>Ort:</strong> ${ort}</p>
`;
});
