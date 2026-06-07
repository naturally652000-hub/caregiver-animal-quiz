const animals = {
  owl: {
    icon: "🦉",
    title: "貓頭鷹系照顧者",
    subtitle: "先看懂全局，再安靜守夜。",
    description:
      "你習慣先蒐集資訊、排好順序，讓照顧變得可預期。你的強項是冷靜、細緻、能在混亂裡找到下一步；也要小心把所有變數都背到自己身上。",
    traits: ["觀察力", "計畫感", "穩定判斷"]
  },
  dolphin: {
    icon: "🐬",
    title: "海豚系照顧者",
    subtitle: "用情緒雷達接住每個人。",
    description:
      "你很會感覺氣氛，知道什麼時候該陪、該問、該放慢。你的照顧讓人覺得被理解；也別忘了，敏感的人更需要定期把心裡的水換新。",
    traits: ["共感力", "溝通感", "情緒陪伴"]
  },
  dog: {
    icon: "🐕",
    title: "小犬系照顧者",
    subtitle: "需要你的時候，你總是在。",
    description:
      "你反應快、行動力強，會直接把事情扛起來做完。身邊的人很信任你的可靠；但可靠不等於永遠待命，適時說出限制也是一種照顧。",
    traits: ["行動力", "忠誠感", "即時支援"]
  },
  elephant: {
    icon: "🐘",
    title: "大象系照顧者",
    subtitle: "慢慢走，但一直都很穩。",
    description:
      "你有耐心，也能承受長期任務。你給人的安全感很厚實，適合陪人度過復原、退化或反覆的階段；只是再穩的人，也需要有人幫忙分擔重量。",
    traits: ["耐心", "承擔力", "長期陪伴"]
  },
  cat: {
    icon: "🐈",
    title: "貓系照顧者",
    subtitle: "保留距離，反而看得更準。",
    description:
      "你不一定熱烈表達，但你很會觀察需要，也懂得讓彼此有空間。你的照顧帶著尊重與界線；當壓力升高時，記得不要躲到完全無聲。",
    traits: ["界線感", "觀察力", "尊重自主"]
  },
  bee: {
    icon: "🐝",
    title: "蜜蜂系照顧者",
    subtitle: "把資源串起來，讓大家一起動。",
    description:
      "你擅長連結人、資訊與服務，不會只靠一個人硬撐。你是照顧網絡裡的協調者；也要留意自己是否忙著安排別人，卻忘了安排自己的休息。",
    traits: ["協調力", "資源感", "團隊照顧"]
  }
};

const questions = [
  {
    scene: "剛開始照顧",
    title: "身邊的人突然身體不舒服(ex.頭痛），你第一個反應比較像是？",
    choices: [
      { label: "馬上帶他去看醫師。", note: "馬上給專業的看，你比較放心。", animal: "owl" },
      { label: "先坐下來問他現在最不舒服的是什麼。", note: "情緒和感受是你的起點。", animal: "dolphin" }
    ]
  },
  {
    scene: "忙碌的一天",
    title: "在照顧人的同時你要工作、買飯、陪診，最像你的做法是？",
    choices: [
      { label: "立刻出門處理最急的那件事。", note: "先動起來，路上再調整。", animal: "dog" },
      { label: "把任務分成今天、明天、可請人協助。", note: "你會把壓力切成小塊。", animal: "bee" }
    ]
  },
  {
    scene: "對方不配合",
    title: "被照顧的人拒絕你的關心跟幫忙，你會怎麼讓他卸下心防？",
    choices: [
      { label: "放慢速度，等情緒過去再陪他試一次。", note: "你相信耐心會打開一點空間。", animal: "elephant" },
      { label: "持續關心他，期待他說出來。", note: "你相信持續陪伴會讓對方慢慢開口。", animal: "cat" }
    ]
  },
  {
    scene: "家人意見不同",
    title: "大家對照顧方式各說各話，你通常會？",
    choices: [
      { label: "找資料或專業建議，讓討論有依據。", note: "你偏好把事情說清楚。", animal: "owl" },
      { label: "把每個人的角色和能幫的時間排出來。", note: "你會讓支援網絡成形。", animal: "bee" }
    ]
  },
  {
    scene: "情緒低潮",
    title: "對方說「我是不是拖累你了」，你最自然的回應是？",
    choices: [
      { label: "你沒有拖累我。你是我在乎的人，所以我願意陪你。你不用一個人扛，我們一起慢慢想辦法。", note: "你會先接住心情。", animal: "dolphin" },
      { label: "如果你問我會不會累，我會誠實說會。但你不是我的負擔。我願意陪你，只是我們也要一起找到比較健康的方式。", note: "你用誠實和穩定陪對方往前。", animal: "elephant" }
    ]
  },
  {
    scene: "自己快累了",
    title: "你發現自己最近很容易煩躁，會比較想？",
    choices: [
      { label: "暫時躲到安靜的地方，先恢復自己的節奏。", note: "你需要一點不被打擾的空間。", animal: "cat" },
      { label: "找到自己有興趣的事情去舒壓。", note: "你會用行動幫自己重新充電。", animal: "dog" }
    ]
  },
  {
    scene: "長期照顧",
    title: "如果照顧是一段很長的日子，你最希望自己不要失去什麼？",
    choices: [
      { label: "穩定的生活節奏，讓每天不只是硬撐。", note: "你重視長期穩定。", animal: "elephant" },
      { label: "彼此還能像原本的家人，而不只是照顧者和被照顧者。", note: "你重視關係裡的原本樣子。", animal: "cat" }
    ]
  }
];

const stressItems = [
  "照顧責任幾乎都落在你身上，很少有人可以輪替。",
  "你最近常覺得睡不好、心情緊繃、容易煩躁或想哭。",
  "你因照顧影響工作、收入、學業或原本的人際生活。",
  "被照顧者有失智、精神症狀、行動困難或需要長時間看顧。",
  "你曾擔心自己會對對方失去耐心，或已經出現衝突。",
  "你不知道可以申請哪些長照、喘息或家庭照顧者支持服務。"
];

const state = {
  index: 0,
  answers: [],
  scores: {}
};

const screens = document.querySelectorAll(".screen");
const startBtn = document.querySelector("#startBtn");
const backBtn = document.querySelector("#backBtn");
const restartBtn = document.querySelector("#restartBtn");
const stressBtn = document.querySelector("#stressBtn");
const resultBackBtn = document.querySelector("#resultBackBtn");
const facebookShare = document.querySelector("#facebookShare");
const lineShare = document.querySelector("#lineShare");
const threadsShare = document.querySelector("#threadsShare");
const copyShare = document.querySelector("#copyShare");
const progressBar = document.querySelector("#progressBar");
const stepText = document.querySelector("#stepText");
const questionScene = document.querySelector("#questionScene");
const questionTitle = document.querySelector("#questionTitle");
const choices = document.querySelector("#choices");
const stressList = document.querySelector("#stressList");
const stressSummary = document.querySelector("#stressSummary");
const shareNote = document.querySelector("#shareNote");
let currentResult = animals.owl;

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[state.index];
  questionScene.textContent = question.scene;
  questionTitle.textContent = question.title;
  stepText.textContent = `${state.index + 1} / ${questions.length}`;
  progressBar.style.width = `${((state.index + 1) / questions.length) * 100}%`;
  backBtn.disabled = state.index === 0;

  choices.innerHTML = "";
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<strong>${choice.label}</strong><span>${choice.note}</span>`;
    button.addEventListener("click", () => choose(choice.animal));
    choices.appendChild(button);
  });
}

function choose(animal) {
  state.answers[state.index] = animal;
  state.index += 1;
  if (state.index >= questions.length) {
    renderResult();
    showScreen("result");
    return;
  }
  renderQuestion();
}

function renderResult() {
  state.scores = state.answers.reduce((scores, animal) => {
    scores[animal] = (scores[animal] || 0) + 1;
    return scores;
  }, {});

  const winner = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "owl";
  const result = animals[winner];
  currentResult = result;

  document.querySelector("#resultIcon").textContent = result.icon;
  document.querySelector("#resultTitle").textContent = result.title;
  document.querySelector("#resultSubtitle").textContent = result.subtitle;
  document.querySelector("#resultDescription").textContent = result.description;
  document.querySelector("#traits").innerHTML = result.traits.map((trait) => `<span class="trait">${trait}</span>`).join("");
  updateShareLinks();
  shareNote.textContent = "";
}

function resetQuiz() {
  state.index = 0;
  state.answers = [];
  state.scores = {};
  renderQuestion();
  showScreen("quiz");
}

function renderStressList() {
  stressList.innerHTML = "";
  stressItems.forEach((item, index) => {
    const label = document.createElement("label");
    label.className = "check-item";
    label.innerHTML = `<input type="checkbox" value="${index}" /><span>${item}</span>`;
    label.querySelector("input").addEventListener("change", updateStressSummary);
    stressList.appendChild(label);
  });
  updateStressSummary();
}

function updateStressSummary() {
  const checked = stressList.querySelectorAll("input:checked").length;
  if (checked === 0) {
    stressSummary.textContent = "目前沒有勾選項目。若之後照顧狀況改變，仍可以用 1966 或家庭照顧者支持服務詢問可用資源。";
  } else if (checked <= 2) {
    stressSummary.textContent = `你勾選了 ${checked} 項。可以先和家人討論分工，也可詢問 1966 是否有喘息、居家服務或照顧者支持資源。`;
  } else {
    stressSummary.textContent = `你勾選了 ${checked} 項。這代表照顧壓力可能已經偏高，建議盡快撥打 1966，或聯繫家庭照顧者支持服務據點。`;
  }
}

async function shareResult() {
  await copyShareText("已複製分享文字，可以貼到 LINE、Facebook 或 Instagram。");
}

function getSharePayload() {
  const shareText = `我的動物系照顧人格是「${currentResult.title}」：${currentResult.subtitle} 你也來測測看。`;
  return {
    title: "你是哪種動物系照顧人格",
    text: shareText,
    url: window.location.href,
    combined: `${shareText}\n${window.location.href}`
  };
}

function getSocialShareUrl(platform) {
  const payload = getSharePayload();
  const encodedUrl = encodeURIComponent(payload.url);
  const encodedText = encodeURIComponent(payload.combined);

  if (platform === "facebook") {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
  }

  if (platform === "line") {
    return `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`;
  }

  if (platform === "threads") {
    return `https://www.threads.net/intent/post?text=${encodedText}`;
  }

  return "#";
}

function updateShareLinks() {
  facebookShare.href = getSocialShareUrl("facebook");
  lineShare.href = getSocialShareUrl("line");
  threadsShare.href = getSocialShareUrl("threads");
}

async function copyShareText(message) {
  const payload = getSharePayload();
  try {
    await navigator.clipboard.writeText(payload.combined);
    shareNote.textContent = message;
  } catch {
    shareNote.textContent = payload.combined;
  }
}

startBtn.addEventListener("click", resetQuiz);
restartBtn.addEventListener("click", resetQuiz);
facebookShare.addEventListener("click", () => {
  shareNote.textContent = "已開啟 Facebook 分享頁。正式發布後，Facebook 才能正確抓到公開網址預覽。";
});
lineShare.addEventListener("click", () => {
  shareNote.textContent = "已開啟 LINE 分享頁。";
});
threadsShare.addEventListener("click", () => {
  shareNote.textContent = "已開啟 Threads 發文頁。";
});
copyShare.addEventListener("click", shareResult);
stressBtn.addEventListener("click", () => {
  renderStressList();
  showScreen("stress");
});
resultBackBtn.addEventListener("click", () => showScreen("result"));
backBtn.addEventListener("click", () => {
  if (state.index === 0) return;
  state.index -= 1;
  state.answers.pop();
  renderQuestion();
});
