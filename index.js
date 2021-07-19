function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    return 'This one is on me!';
  }
  else if (someNumber>2500){
    return 'No can do.';
  }
  else if (someNumber>2000){
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(destination){
  if(destination === 'NYC'){
    return 'Ok, sounds good.';
  }
  return "No go.";
}

function switchOnCharmFromTip(tip){
  let response;
  switch(tip) {
    case 'generous':
       response = 'Thank you so much.';
      break;
    case 'not as generous':
       response = 'Thank you.'
      break;
    default:
      response = 'Bye.';
  }
  return response;
}