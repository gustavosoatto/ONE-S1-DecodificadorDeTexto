function encode() {
  let encode = document.getElementById("text").value.toLowerCase();

  const novaStringVogais = encode.replace(/[aeiou]/g, (match) => {
    switch (match) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return match;
    }
  });

  document.getElementById("text").value = novaStringVogais;
}

function decode() {
  let decode = document.getElementById("text").value.toLowerCase();

  const regexVogais = /ai|enter|imes|ober|ufat/g;
  const novaStringVogais = decode.replace(regexVogais, (match) => {
    switch (match) {
      case "ai":
        return "a";
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ober":
        return "o";
      case "ufat":
        return "u";
      default:
        return match;
    }
  });

  document.getElementById("text").value = novaStringVogais;
}
