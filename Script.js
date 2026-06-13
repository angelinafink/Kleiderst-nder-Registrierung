const uebergabe = document.getElementById("uebergabe");
const adresseBereich = document.getElementById("adresseBereich");

const vereinsPLZ = "49448";

uebergabe.addEventListener("change", funktion () {

      if (uebergabe.value === "Abholung durch Sammelfahrzeug") {
          adresseBereich.style.display = "block";
      } else {
          adresseBereich.style.display = "none";
      }
  });

document.querySelector("form").addEventListener("submit", function (event)
    event.preventDefault();

    const plz = document.getElementById("plz").value;

    if (uebergabe.value === "Abholung durch Sammelfahrzeug") {
          if (plz.substring(0,2) !== vereinsPLZ.substring(0, 2)) {
              alert("Die Abholadresse liegt leider nicht in der Nähe der Geschäftsstelle.");
              return;
            }
          }
          alert("Die Registrierung war erfolgreich.");
 });
