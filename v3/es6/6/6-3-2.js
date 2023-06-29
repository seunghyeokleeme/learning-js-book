// 매개변수 해체: 객체를 변수로 해체

function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}

const o = {
  subject: "I",
  verb: "love",
  object: "JavaScript"
};

getSentence(o); // "I love JavaScript"

// 매개변수 해체: 배열을 변수로 해체

function getSentence([subject, verb, object]) {
  return `${subject} ${verb} ${object}`;
}

getSentence(o); // "I love JavaScript"

// 확산 연산자(...) 매개변수 이용

function addPrefix(prefix, ...words) {
  // 나중에 더 좋은 방법을 배웁니다.
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

addPrefix("con", "verse", "vex"); // ["converse", "convex"]
