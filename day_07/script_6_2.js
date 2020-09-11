function checkSpamRegex(str) {
  let regexViagra = new RegExp("viagra", "gi");
  let regexXXXX = new RegExp("xxx", "gi");

  return str.match(regexViagra) || str.match(regexXXXX) ? true : false;
}

function checkSpam(str) {
  const xxxStr = 'XXX'.toLowerCase();
  const viagraStr = 'viagra'.toLowerCase();
  const inputStr = str.toLowerCase();

  return inputStr.includes(viagraStr) || inputStr.includes(xxxStr) ? true : false;
}

console.log("checkSpamRegex function");
console.log(checkSpamRegex("buy ViAgRA now"));
console.log(checkSpamRegex("free xxxxx"));
console.log(checkSpamRegex("innocent rabbit"));

console.log("checkSpam function");
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));