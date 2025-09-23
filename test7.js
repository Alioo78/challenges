let mdp="Aghhg876";
let checker ="";
  if (mdp.length < 6) {
    checker= "Faible";
  }
  let aUnChiffre = false;
  for (var i = 0; i < mdp.length; i++) {
    if (mdp[i] >= '0' && mdp[i] <= '9') {
      aUnChiffre = true;
    }
  }
  var speciaux = "!@#$%^&*(),.?\":{}|<>";
  var aUnSpecial = false;
  for (var j = 0; j < mdp.length; j++) {
    if (speciaux.indexOf(mdp[j]) !== -1) {
      aUnSpecial = true;
    }
  }
  if (mdp.length >= 8 && aUnChiffre && aUnSpecial) {
    checker= "Fort";
  }else{
  if (mdp.length >= 6 && aUnChiffre) {
    checker= "Moyen";
  }
}
  console.log(checker);
