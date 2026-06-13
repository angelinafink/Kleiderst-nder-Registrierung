const uebergabe = document.getElementById("uebergabe");
const adresseBereich = document.getElementById("adresseBereich");

uebergabe.addEventListener("change", funktion () {

      if (uebergabe.value === "Abholung durch Sammelfahrzeug") {
          adresseBereich.style.display = "block";
      } else {
          adresseBereich.style.display = "none";
      }
  });
