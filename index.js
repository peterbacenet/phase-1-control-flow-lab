function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400) {result = 'This one is on me!'}
  else if (feet > 2500) {result = 'No can do.'}
  else if (feet > 2000) {result = 'I will gladly take your thirty bucks.'};
  return result;
}

function ternaryCheckCity(city){
  // let result
  // if (city === 'NYC') {result = 'Ok, sounds good.'}
  // else if (city != 'NYC') {result = 'No go.'}
  // return result
  let result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return result
} 


function switchOnCharmFromTip(typeoftip){
let response
switch(typeoftip){
  case "generous": response = 'Thank you so much.';
  break;
  case "not as generous" : response ="Thank you.";
  break;
  default: response = 'Bye.';
}
return response;
}