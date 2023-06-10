var convertButton = document.getElementById("convert-btn");
var copyButton = document.getElementById("copy-btn");
var latinTextArea = document.getElementById("latin-text");
var russianTextArea = document.getElementById("russian-text");

convertButton.addEventListener("click", function () {
  var latinText = latinTextArea.value;

  var russianText = convertToCyrillic(latinText);

  russianTextArea.value = russianText;

  document.getElementById("result-container").style.display = "block";
});

copyButton.addEventListener("click", function () {
  russianTextArea.select();
  navigator.clipboard
    .writeText(russianTextArea.value)
    .then(function () {
      alert("Natija nusxa olindi!");
    })
    .catch(function (error) {
      alert("Nusxa olishda xatolik yuz berdi: " + error);
    });
});

function convertToCyrillic(text) {
  var latinLetters = "abcdefghijklmnopqrstuvwxyz";
  var cyrillicLetters = "абцдефгхийклмнопқрстуввхйз";

  var result = "";

  for (var i = 0; i < text.length; i++) {
    var letter = text[i].toLowerCase();
    var index = latinLetters.indexOf(letter);

    if (index !== -1) {
      var cyrillicLetter = cyrillicLetters.charAt(index);
      result +=
        text[i] === letter ? cyrillicLetter : cyrillicLetter.toUpperCase();
    } else {
      result += text[i];
    }
  }

  return result;
}

// İlk metin kutusunun içeriği değiştiğinde Rusça metni güncelle
latinTextArea.addEventListener("input", function () {
  var latinText = latinTextArea.value;
  var russianText = convertToCyrillic(latinText);
  russianTextArea.value = russianText;
});

// Sayfa yüklendiğinde Rusça metni göster
var latinText = latinTextArea.value;
var russianText = convertToCyrillic(latinText);
russianTextArea.value = russianText;

latinTextArea.style.display = "block"; // Latin metin kutusunu başlangıçta görünür yapar
russianTextArea.style.display = "block"; // Rusça metin kutusunu başlangıçta görünür yapar
