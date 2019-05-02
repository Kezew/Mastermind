var counterId = 5;
document.getElementById("playerActualColors").disabled = true;
// TODO tömb az ellenőrzéshez itt csak 0-val feltöltve majd ebbe beletenni a gondolt színeket

// computer random colors
function computerColors() {
  // TODO különböző színek generálása
  // vagy vamilyen opció hatására be/ki kapcsoló gomb >> annak függvényében lehetne azonos szín engedélyezés
  var randomDiffNumbers = randomFourDifferentNumber();
  // itt kell majd a négy különböző színnel 'beszínezni' a köröket
  for (var i = 1; i < 5; i++) {
    var string = i;
    var computerCircle = document.getElementById(string);
    var number = randomDiffNumbers[i];
    computerCircle.classList.add(circleColors[number]);
  }
  document.getElementById("thinkColorButton").disabled = true;
  document.getElementById("playerActualColors").disabled = false;
}

function checkPlayerColors() {
  //TODO...
}

// player colors
function playerColors() {
  var string = counterId;
  var coloredCircle = document.getElementById(string);
  coloredCircle.classList.add('yellow');
  // var x = document.getElementById(string).classList.contains('red');
  counterId++;
  if (counterId == 9) {
    document.getElementById("playerActualColors").disabled = true;
  }
}

// delete all colored circles
function deleteColors() {
  for (var i = 1; i < counterId; i++) {
    var idString = i;
    var circlesAll = document.getElementById(idString);
    circlesAll.classList.remove('blue');
    circlesAll.classList.remove('red');
    circlesAll.classList.remove('yellow');
    circlesAll.classList.remove('green');
    circlesAll.classList.remove('purple');
    circlesAll.classList.remove('brown');
  }
  counterId = 5;
  document.getElementById("thinkColorButton").disabled = false;
}

function randomColorNumber() {
  return (Math.floor(Math.random() * 6) + 1);
}

// négy különböző véletlen szám generálása egy tömb-be amit a funkció elején feltöltünk 0-val
function randomFourDifferentNumber() {
  var differentNum = [];
  // TODO négy különböző szám legyen az utolsó 4 helyen
  while (differentNum.length < 5) {
    var r = Math.floor(Math.random() * 6) + 1;
    if (differentNum.indexOf(r) === -1) {
      differentNum.push(r);
    }
  }
  //alert(differentNum);
  return differentNum;
}

// available colors (class names) in CSS file
var circleColors = ["empty", "blue", "red", "yellow", "green", "purple", "brown"];
