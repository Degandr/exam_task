function checkAnagramma(str1: string, str2: string) {
  let result: string = "it's anagram";
  for (let i = 0; i < str2.length; i++) {
    if (str2.toLowerCase().includes(str1[i].toLowerCase())) {
    } else result = "it isn't anagram";
  }
  console.log(result);
}

checkAnagramma("qwerty", "weqtyr");
