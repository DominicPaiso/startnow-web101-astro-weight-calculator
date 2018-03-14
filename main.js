// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  var sel = document.getElementById('planets');
  var fragment = document.createDocumentFragment();

  planets.reverse().forEach(function(planets, index) {
      var opt = document.createElement('option');
      opt.innerHTML = planets[0];
      opt.value = planets[0];
      fragment.appendChild(opt);
  });

sel.appendChild(fragment);

function calculateWeight(userWeight, planetName) {
    return parseFloat(userWeight) * planets.find(function(item) {
        return (item[0] == planetName)
    })[1];
}  

function handleClickEvent(e) {
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;

    var result = calculateWeight(userWeight, planetName);
    console.log(result);
    var output = document.getElementById('output');
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ',' + ' you would weigh ' + result + 'lbs!';
    
}
document.getElementById('calculate-button').addEventListener('click',handleClickEvent);
//bind click to handleClickEvent

