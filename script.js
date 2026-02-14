let selectedCategory = null;
let currentQuestion = 0;
let userAnswers = {};

function selectCategory(category) {
  selectedCategory = category;

  document.getElementById('category-page').style.display = 'none';
  document.getElementById('quiz-page').style.display = 'block';

  currentQuestion = 0;
  userAnswers = {};

  displayQuestion();
}

const questions = [
  {
    question: "Love is in the air! You’re watching BakingWithJoni while sipping a cup of chrysanthemum tea. You take mental notes— knowing you won’t bake the fruit tarts anyway. It was truly a peaceful da-<br><br> *BANG, BANG, BANG!* <br>You open the door with a groan.",
    image: "IMAGES/q1.gif",
    answers: {
      A: { text: "What genre of mormon is at my doorstep this time..", scores: { shin: 1, sof: 1 } },
      B: { text: "This is LITERALLY the start of every horror game.", scores: { chu: 1, ciel: 1, fel: 1, joni: 1, sham: 1 } },
      C: { text: "Who could it be at this hour?", scores: { alb: 1, alex: 1, leon: 1, nor: 1, kim: 1, anu: 1, emi: 1, ric: 1, cor: 1, mia: 1, gion: 1, liv: 1 } }
    }
  },
  {
    question: "At the doorstep, you see a bakery box with a tag attached. You examine it—‘Goods by BakingWithJoni’. <br><br>It’s from the show you were watching..?",
    image: "IMAGES/q2.png",
    answers: {
      A: { text: "It can’t be.. Is this.. the start of my K-Drama?!?", scores: { chu: 1, sof: 1, ciel: 1, fel: 1 } },
      B: { text: "OH MY GOD ITS A STALKER HORROR GAME", scores: { sham: 1, alb: 1, joni: 1, alex: 1 } },
      C: { text: "..I’m going to pretend I didn’t see that.", scores: { leon: 1, shin: 1, nor: 1, kim: 1, anu: 1 } },
      D: { text: "Hm, did someone I know order this for an event?", scores: { emi: 1, ric: 1, cor: 1, mia: 1, gion: 1, liv: 1 } }
    }
  },
  {
    question: "Suddenly, a cat-like figure bursts out of the box. “Love looks not with the eyes, but with the mind; And therefore is winged Cupid painted blind. Tis I, Cupid Meow! I was called upon this mortal realm to fix your love life~” Cupid Meow hums.",
    image: "IMAGES/q3.png",
    answers: {
      A: { text: "I’m calling the cops.", scores: { gion: 1, emi: 1, nor: 1, leon: 1, shin: 1, ric: 1 } },
      B: { text: "OH MY GOD PLEASE DON’T KILL ME I’M SORRY I IGNORED THE STARVING STRAY CAT AT THE STREET 2 DAYS AGO", scores: { fel: 1, joni: 1, sham: 1, alex: 1 } },
      C: { text: "Damn, this advertisement is sick dude! Technology has come so far.", scores: { alb: 1, kim: 1, cor: 1, liv: 1 } },
      D: { text: "*gasp* Really?! Have my prayers finally been answered? Who is my destined soulmate? Or… *gasp* Could it be…. [insert crush name]? That would truly be tragic!!!", scores: { sof: 1, ciel: 1, chu: 1 }}
    }
  },
  {
    question: "“Uh…. Anyways! This fruit tart represents balance in your relationship. The blackberries represent the real love that exists when you know someone completely. The strawberries represent the happiness and purity in love. The raspberries represent the kindness and virtue needed in love.<br> To have the greatest love, you must eat this fruit tart with the right amount of intention!” Cupid Meow finishes.",
    image: "IMAGES/q4.gif",
    answers: {
      A: { text: "Not reading allat. *eats the fruit tart*", scores: { chu: 1, anu: 1, ric: 1 } },
      B: { text: "Uhh.. *picks out the fruits you dislike and eats it* That’s better!", scores: { emi: 1, mia: 1, kim: 1, leon: 1, alb: 1, ciel: 1 } },
      C: { text: "Ugh.. Not a big fan of fruit tarts. *takes a nibble*", scores: { sof: 1, nor: 1, char: 1, shin: 1, gion: 1 } },
      D: { text: "How interesting!! *swallows it immediately*", scores: { joni: 1, sham: 1, cor: 1, alex: 1, fel: 1, liv: 1 }}
    }
  },
  {
    question: "“Wait— Hold on! You’re not doing it prope—“ Cupid Meow gets interrupted by the loud groan coming from the bakery box.<br><br> The bakery box grew bigger and bigger, caging both of you in the process.",
    image: "IMAGES/q5.gif",
    answers: {
      A: { text: "..Why didn’t I call the cops?", scores: { alb: 1, gion: 1, nor: 1, ric: 1, sof: 1, char: 1, leon: 1 } },
      B: { text: "I’M GONNA DIE!!!!", scores: { mia: 1, alex: 1, sham: 1, emi: 1, chu: 1, shin: 1 } },
      C: { text: "Damn, this AR experience is sick!", scores: { joni: 1, fel: 1, anu: 1 } },
      D: { text: "Is this the part where I trust the process..?", scores: { kim: 1, ciel: 1, cor: 1, liv: 1 }}
    }
  },
  {
    question: "While you were caught off guard, the floor shifted into an endless series of spiral staircases. You tumble and tumble continuously until you feel Cupid Meow hook and slam you onto the ground.<br><br> “Woah! Rough ride, huh? I apologise for that..” Cupid Meow says awkwardly. You ignore him and examine the place.",
    image: "IMAGES/q6.gif",
    answers: {
      A: { text: "Is this a Roblox obby?", scores: { alb: 1, gion: 1, nor: 1, ric: 1, sof: 1, char: 1, leon: 1 } },
      B: { text: "*takes out phone to call the cops* Damn it! No signal…", scores: { mia: 1, alex: 1, sham: 1, emi: 1, chu: 1, shin: 1 } },
      C: { text: "OMG! Did I just get isekai’d to a Fantasy AU?!? My soulmate is definitely the prince!", scores: { joni: 1, fel: 1, anu: 1 } },
      D: { text: "IS THIS HEAVEN DID I DIE NO NO NO", scores: { kim: 1, ciel: 1, cor: 1, liv: 1 }}
    }
  },
  {
    question: "“No, you’ve got it all wrong! Y-you see… you’re not supposed to be here. You disrupted the balance placed into the fruit tart and now you’re here. I’ll help you out, swear!!!” Cupid Meow stutters. <br><br>You sigh and look around for a way out. To your surprise, you spot figures with… valentine boxes as their heads.",
    image: "IMAGES/q7.png",
    answers: {
      A: { text: "You approach them", scores: { alex: 1, alb: 1, leon: 1, emi: 1, cor: 1, ric: 1 } },
      B: { text: "You hide", scores: { kim: 1, mia: 1, liv: 1, sham: 1, anu: 1, char: 1 } },
      C: { text: "You sneak up to them", scores: { anu: 1, chu: 1, joni: 1, ciel: 1, fel: 1 } },
      D: { text: "You ignore and walk away", scores: { gion: 1, shin: 1, sof: 1, nor: 1 }}
    }
  },
  {
    question: "The valentine box headed figures immediately noticed your presence. <br><br>Before you could react, they rushed at you at a rapid speed. <br><br>CLING CLANK CLING CLANK",
    image: "IMAGES/q8.gif",
    answers: {
      A: { text: "You run away", scores: { chu: 1, fel: 1, gion: 1, liv: 1, joni: 1, nor: 1, sof: 1, char: 1 } },
      B: { text: "You sob and collapse onto the ground", scores: { mia: 1, sham: 1, chu: 1, ciel: 1 } },
      C: { text: "You call Cupid Meow for help", scores: { emi: 1, shin: 1, leon: 1, alex: 1, ric: 1 } },
      D: { text: "“Damn, the ad is over I guess!”", scores: { cor: 1, kim: 1, alb: 1, anu: 1 }}
    }
  },
  {
    question: "“Halt, That peasants mine!” a commanding voice shouted. The valentine box headed figures immediately froze.<br><br> Shortly, a brunette man in royal clothing approaches you. “I am Prince Gion of the Ice Kingdom. You are currently trespassing on our kingdom's borders, peasant outlander. Do you require assistance?”",
    image: "IMAGES/q9.png",
    answers: {
      A: { text: "WHO are you calling a peasant?!", scores: { sof: 1, ciel: 1, alb: 1, joni: 1, chu: 1, shin: 1, anu: 1, emi: 1, ric: 1 } },
      B: { text: "I’M SORRY I’M SORRY I’M SORRY!!!", scores: { sham: 1, mia: 1, fel: 1, alex: 1 } },
      C: { text: "*gasp* A… prince! You must be my destined soulmate!", scores: { chu: 1, ciel: 1 } },
      D: { text: "Um… uh… ummm….", scores: { kim: 1, nor: 1, liv: 1, char: 1, gion: 1, cor: 1, leon: 1 }}
    }
  },
  {
    question: "“Hey, back off! They’re mine!” Cupid Meow yells as he shields you with his candy cane.<br><br> “Hmph, you love fairies and your ridiculous magic. This peasant is better off with me.” Prince Gion argues.<br><br> “They’re lost— I need to help them escape!” Cupid Meow pleas. <br><br>“Hah, I'm assuming YOU were the one that brought the peasant here.” Prince Gion scoffs. <br><br>“..Well, whatever! They would definitely trust their life with ME over YOU! …Right?” Cupid Meow asks you.",
    image: "IMAGES/q10.gif",
    answers: {
      A: { text: "I’d trust my life with you, Cupid Meow!", scores: { joni: 1, cor: 1, alex: 1, alb: 1, ciel: 1, fel: 1, chu: 1 } },
      B: { text: "I’d rather trust my life with Prince Gion..", scores: { shin: 1, liv: 1, anu: 1, emi: 1, nor: 1, kim: 1, sof: 1 } },
      C: { text: "Uh… Both?", scores: { ric: 1, char: 1, gion: 1, leon: 1, mia: 1, sham: 1 } },
    }
  },
  {
    question: "“HUUUUUUH?!?!?” Prince Gion flashes an evil smirk. “Guards, seize this peasant now!” he immediately commands. <br><br>You finally realise the situation you’re in. You ran away from the commotion, looking for a hiding spot. Suddenly, you stumble onto someone by accident. “AAAAH!” a soft voice yelps.",
    image: "IMAGES/q11.png",
    answers: {
      A: { text: "OH GOD I’M SO SORRY PLEASE DON’T KILL ME", scores: { sham: 1, ciel: 1, fel: 1, chu: 1 } },
      B: { text: "I’m sorry! Are you alright?", scores: { liv: 1, alex: 1, mia: 1, joni: 1, leon: 1, alb: 1, ric: 1, emi: 1 } },
      C: { text: "How long is this advertisement?", scores: { kim: 1, cor: 1, nor: 1, char: 1 } },
      D: { text: "You scoff. What a jerk.", scores: { sof: 1, shin: 1, gion: 1, anu: 1 } }
    }
  },
  {
    question: "You look up to see two women who appear to be mages.<br><br> “Oh dear, are you alright? Please, take this herb. It will heal any minor injuries.” a mother-like mage says.<br><br> “I-i’m so sorry! I’ll make sure to be more careful!” a timid voice followed.",
    image: "IMAGES/q12.png",
    answers: {
      A: { text: "A fruit tart sent me to a whole different dimension. What makes you think I’ll accept herbs from a mage?", scores: { shin: 1, anu: 1, sof: 1, emi: 1, leon: 1, gion: 1 } },
      B: { text: "Damn, I prefer women too.", scores: { joni: 1, ciel: 1, fel: 1, chu: 1 } },
      C: { text: "T-thanks! …Please don’t kill me.", scores: { alex: 1, sham: 1, mia: 1 } },
      D: { text: "It’s fine! I’m alright.", scores: { liv: 1, alb: 1, char: 1, joni: 1, nor: 1, cor: 1 } }
    }
  },
  {
    question: "“Don’t fret. I am Mage Neelam. The Wise and Generous of the Candy Borders.” Mage Neelam says softly.<br><br> “Um.. I’m Mia, her apprentice.” Mia says with a crooked smile.",
    image: "IMAGES/q13.png",
    answers: {
      A: { text: "Candy Borders..? Miss, I’m not from this dimension! Please take me back home!", scores: { shin: 1, anu: 1, sof: 1, emi: 1, leon: 1, gion: 1, joni: 1, ciel: 1, felix: 1, chu: 1, alex: 1, sham: 1, mia: 1, liv: 1, alb: 1, char: 1, nor: 1, cor: 1, ric: 1, kim: 1 } }
    }
  },
  {
    question: "“H-huh, really?! That explains the major changes in the borders earlier..” Mia responds. <br><br>“Ah, yes. You are correct, Mia. This is quite the case. Well, our outlander shouldn’t overstay their welcome. I shall bring you back now.” Mage Neelam says as she waves her sceptre.",
    image: "IMAGES/q14.png",
    answers: {
      A: { text: "Damn, finally! This advertisement is way too long.", scores: { kim: 1, nor: 1, ric: 1, anu: 1, shin: 1 } },
      B: { text: "I miss my home…", scores: { mia: 1, cor: 1, alex: 1, liv: 1, char: 1, gion: 1, leon: 1 } },
      C: { text: "OH MY GOD!! ANGELS!! THANK YOU!!", scores: { sof: 1, emi: 1, sham: 1, ciel: 1, fel: 1, alb: 1 } },
      D: { text: "Sighs, I couldn’t even find my soulmate.", scores: { chu: 1, ciel: 1 } }
    }
  },
  {
    question: "You open your eyes to BakingWithJoni still playing on the television. You frantically grab the remote and shut it down. Now, only one thought lingers in your mind.",
    image: "IMAGES/q15.png",
    answers: {
      A: { text: "How exactly did this fix my love life?", scores: { shin: 1, anu: 1, sof: 1, emi: 1, leon: 1, gion: 1, joni: 1, ciel: 1, felix: 1, chu: 1, alex: 1, sham: 1, mia: 1, liv: 1, alb: 1, char: 1, nor: 1, cor: 1, ric: 1, kim: 1 } }
    }
  },
];

const resultOptions = {
  joni: {
    category: "Candy Series",
    name: "Joni",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  chu: {
    category: "Candy Series",
    name: "Charles",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  sof: {
    category: "Candy Series",
    name: "Sofia",
    image: "ball.png",
    description: "You are... a Sofia Perfume!"
  },
  nor: {
    category: "Candy Series",
    name: "Norman",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  kim: {
    category: "Candy Series",
    name: "Kim Ji Won",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  emi: {
    category: "Candy Series",
    name: "Emilia",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  ric: {
    category: "Candy Series",
    name: "Richard",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  cor: {
    category: "Candy Series",
    name: "Corey",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  mia: {
    category: "Candy Series",
    name: "Mia",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },
  sham: {
    category: "Candy Series",
    name: "Alex",
    image: "ball.png",
    description: "You are... a Joni Strawberry Jam Cookie!"
  },

  ciel: {
    category: "Prince Series",
    name: "Ciel",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  fel: {
    category: "Prince Series",
    name: "Felix",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  leon: {
    category: "Prince Series",
    name: "Leon",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  shin: {
    category: "Prince Series",
    name: "Shintarou",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  anu: {
    category: "Prince Series",
    name: "Anubis",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  gion: {
    category: "Prince Series",
    name: "Gion",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  liv: {
    category: "Prince Series",
    name: "Livio",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  alb: {
    category: "Prince Series",
    name: "Albert",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  char: {
    category: "Prince Series",
    name: "Charles",
    image: "ball.png",
    description: "You are... a Ciel Perfume!"
  },
  alex: {
    category: "Prince Series",
    name: "Alexis",
    image: "ball.png",
    description: "You are... Alexis Morning Pancakes!"
  }
};

function displayQuestion() {
  const quizElement = document.getElementById('quiz');
  const question = questions[currentQuestion];

  if (!question) return;

  let html = `<p>${question.question}</p>`;

  if (question.image) {
    html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
  }

  for (const option in question.answers) {
    html += `
      <button class="button-74" value="${option}">
        ${question.answers[option].text}
      </button>
    `;
  }

  quizElement.innerHTML = html;
  attachButtonClickHandlers();
}

function attachButtonClickHandlers() {
  const choiceButtons = document.querySelectorAll('.button-74');
  choiceButtons.forEach((button) => {
    button.addEventListener('click', handleAnswer);
  });
}

function handleAnswer(event) {
  const selectedOption = event.target;
  const answerKey = selectedOption.value;
  const question = questions[currentQuestion];
  const answer = question.answers[answerKey];

  for (const character in answer.scores) {
    userAnswers[character] = (userAnswers[character] || 0) + answer.scores[character];
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultTextContainer = document.querySelector('.result-text');
  const resultImage = document.getElementById('result-image');

  let topCharacter = null;
  let topScore = -Infinity;

  for (const character in userAnswers) {
    const characterData = resultOptions[character];

    if (!characterData) continue;
    if (characterData.category !== selectedCategory) continue;

    if (userAnswers[character] > topScore) {
      topScore = userAnswers[character];
      topCharacter = character;
    }
  }

  if (!topCharacter) {
    const possibleCharacters = Object.keys(resultOptions).filter(
      key => resultOptions[key].category === selectedCategory
    );
    topCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }

  const finalData = resultOptions[topCharacter];

  resultTextContainer.innerHTML = `
    <h2>${finalData.name}</h2>
    <p>${finalData.description}</p>
  `;

  resultImage.src = "IMAGES/" + finalData.image;
  resultImage.alt = finalData.name;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}







