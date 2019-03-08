function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma (){
  var lowercase = 'hello'.toLowerCase()
  return `I can't hear you!`
  
  var uppercase = 'HELLO'.toUpperCase()
  return `YES INDEED!`
  
  var love = 'I love you, Grandma.'
  return `I love you, too.`
}

sayHiToGrandma(lowercase)
sayHiToGrandma(uppercase)
sayHiToGrandma(love)
