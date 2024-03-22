function scuberGreetingForFeet(distance){
   // Use if and else if statements to return the correct greeting based on the distance
  // For example:
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}


function ternaryCheckCity(city){
  // Use a ternary operator to return the correct response based on the desired destination of the passenger.
  return city === "NYC" ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(tip){
  // Use a switch statement to return a different response based on the generosity of the passenger's tip.
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
  
}