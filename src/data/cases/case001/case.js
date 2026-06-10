const case001 = {
  id: "case001",
  caseNumber: "Case 01",
  status: "playable",

  title: {
    en: "The Turtle Soup",
    zh: "海龟汤"
  },

  difficulty: "Medium",
  vocabularyLevel: "CET6+",
  estimatedTime: "2-3 min",
  wordCount: 8,

  summary: {
    en: "A man tasted turtle soup, paid the bill, and then took his own life.",
    zh: "一个男人尝了一口海龟汤，付完账后自杀了。"
  },

  prompt: {
    en: [
      "A man ordered turtle soup.",
      "He tasted one spoonful.",
      "Then he paid the bill.",
      "After leaving the restaurant, he killed himself."
    ],
    zh: [
      "一个男人点了一碗海龟汤。",
      "他只尝了一勺。",
      "随后付了账。",
      "离开餐厅后，他自杀了。"
    ]
  },

  vocabulary: [
    {
      id: "v001",
      word: "spoonful",
      phonetic: "/ˈspuːnfʊl/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "一勺的量",
      example: "He tasted one spoonful of turtle soup."
    },
    {
      id: "v002",
      word: "survivor",
      phonetic: "/sərˈvaɪvər/",
      partOfSpeech: "n.",
      level: "CET4/CET6",
      zh: "幸存者",
      example: "The survivor never forgot what happened at sea."
    },
    {
      id: "v003",
      word: "shipwreck",
      phonetic: "/ˈʃɪprek/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "海难；沉船事故",
      example: "He had survived a shipwreck years earlier."
    },
    {
      id: "v004",
      word: "stranded",
      phonetic: "/ˈstrændɪd/",
      partOfSpeech: "adj.",
      level: "CET6",
      zh: "被困的；滞留的",
      example: "They were stranded with no food left."
    },
    {
      id: "v005",
      word: "starvation",
      phonetic: "/stɑːrˈveɪʃn/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "饥饿；饿死",
      example: "Starvation forced the survivors to make terrible choices."
    },
    {
      id: "v006",
      word: "substitute",
      phonetic: "/ˈsʌbstɪtuːt/",
      partOfSpeech: "n./v.",
      level: "CET6",
      zh: "替代物；代替",
      example: "The soup was used as a substitute for the truth."
    },
    {
      id: "v007",
      word: "realize",
      phonetic: "/ˈriːəlaɪz/",
      partOfSpeech: "v.",
      level: "CET4",
      zh: "意识到；明白",
      example: "He began to realize what he had eaten before."
    },
    {
      id: "v008",
      word: "unbearable",
      phonetic: "/ʌnˈberəbl/",
      partOfSpeech: "adj.",
      level: "CET6",
      zh: "无法忍受的",
      example: "The truth was unbearable."
    }
  ],

  questionGroups: [
    {
      id: "group_soup",
      title: {
        en: "About the Soup",
        zh: "关于这碗汤"
      },
      unlockCondition: "default",
      questions: [
        {
          id: "q001",
          text: {
            en: "Was the soup poisonous?",
            zh: "这碗汤有毒吗？"
          },
          answer: {
            en: "No. If it were poison, this case would be too lazy even for a bad detective novel.",
            zh: "不是。如果是毒药，这案子就烂得像三流侦探小说了。"
          },
          unlockClues: []
        },
        {
          id: "q002",
          text: {
            en: "Did the man know what turtle soup tasted like?",
            zh: "这个男人以前知道海龟汤是什么味道吗？"
          },
          answer: {
            en: "Yes. Or at least he thought he did.",
            zh: "是。至少他以为自己知道。"
          },
          unlockClues: ["clue001"]
        },
        {
          id: "q003",
          text: {
            en: "Was this his first time ordering turtle soup in a restaurant?",
            zh: "这是他第一次在餐厅点海龟汤吗？"
          },
          answer: {
            en: "Yes. And that spoonful ruined everything.",
            zh: "是。而那一勺毁掉了一切。"
          },
          unlockClues: []
        },
        {
          id: "q004",
          text: {
            en: "Had he once survived a disaster at sea?",
            zh: "他曾经在海难中幸存下来吗？"
          },
          answer: {
            en: "Yes. Now the soup is starting to smell less like dinner and more like trauma.",
            zh: "是。现在这碗汤闻起来已经不像晚餐，更像创伤了。"
          },
          unlockClues: ["clue002"]
        }
      ]
    },
    {
      id: "group_disaster",
      title: {
        en: "About the Disaster",
        zh: "关于那场灾难"
      },
      unlockCondition: "default",
      questions: [
        {
          id: "q005",
          text: {
            en: "Was he once stranded with other people?",
            zh: "他当时是和其他人一起被困的吗？"
          },
          answer: {
            en: "Yes. He was not alone. That matters.",
            zh: "是。他不是一个人。这很重要。"
          },
          unlockClues: []
        },
        {
          id: "q006",
          text: {
            en: "Did someone lie to him during that disaster?",
            zh: "在那场灾难中，有人对他说谎了吗？"
          },
          answer: {
            en: "Yes. A merciful lie, apparently. Still a lie.",
            zh: "是。看起来是个善意的谎言。但谎言就是谎言。"
          },
          unlockClues: ["clue003"]
        },
        {
          id: "q007",
          text: {
            en: "Was the soup he tasted in the restaurant different from what he remembered?",
            zh: "餐厅里的海龟汤和他记忆中的味道不同吗？"
          },
          answer: {
            en: "Yes. That difference gave him the answer he had been avoiding.",
            zh: "是。这个味道差异，让他明白了自己一直不敢面对的真相。"
          },
          unlockClues: []
        },
        {
          id: "q008",
          text: {
            en: "Did he realize that what he ate before was not turtle soup?",
            zh: "他意识到自己以前吃的并不是海龟汤了吗？"
          },
          answer: {
            en: "Yes. And some truths arrive far too late.",
            zh: "是。有些真相来得太晚，也太重。"
          },
          unlockClues: ["clue004"]
        }
      ]
    }
  ],

  clues: [
    {
      id: "clue001",
      text: {
        en: "The man believed he had eaten turtle soup before.",
        zh: "这个男人以为自己以前吃过海龟汤。"
      }
    },
    {
      id: "clue002",
      text: {
        en: "He had survived a shipwreck years earlier.",
        zh: "他多年前曾在一场海难中幸存。"
      }
    },
    {
      id: "clue003",
      text: {
        en: "Someone had lied to him about what he ate during the disaster.",
        zh: "有人曾骗他说，他在灾难中吃的是海龟汤。"
      }
    },
    {
      id: "clue004",
      text: {
        en: "The restaurant soup made him realize the old meal had not been turtle soup.",
        zh: "餐厅里的海龟汤让他意识到，当年吃的并不是海龟汤。"
      }
    }
  ],

  finalChoices: [
    {
      id: "choice_a",
      text: {
        en: "The soup was poisonous, and the man died because he had eaten it.",
        zh: "汤有毒，男人是因为喝了汤才死的。"
      },
      isCorrect: false,
      feedback: {
        en: "No. The spoonful did not kill him. What it revealed did.",
        zh: "不对。那一勺没有杀死他，真正击垮他的是它揭露的真相。"
      }
    },
    {
      id: "choice_b",
      text: {
        en: "He realized that the restaurant had served fake turtle soup.",
        zh: "他意识到餐厅端上来的是假的海龟汤。"
      },
      isCorrect: false,
      feedback: {
        en: "No. The restaurant soup was real. That was the problem.",
        zh: "不对。餐厅里的汤是真的，问题恰恰在这里。"
      }
    },
    {
      id: "choice_c",
      text: {
        en: "He realized that the food he ate during the shipwreck was not turtle soup.",
        zh: "他意识到自己在海难中吃下的东西并不是海龟汤。"
      },
      isCorrect: true,
      feedback: {
        en: "Correct. The real soup exposed the lie he had survived with.",
        zh: "正确。真正的海龟汤揭穿了那个支撑他活下来的谎言。"
      }
    },
    {
      id: "choice_d",
      text: {
        en: "He killed himself because he could not afford the restaurant bill.",
        zh: "他自杀是因为付不起餐厅账单。"
      },
      isCorrect: false,
      feedback: {
        en: "No. He paid the bill. Money was not the unbearable part.",
        zh: "不对。他已经付了账。让他无法承受的不是钱。"
      }
    }
  ],

  truth: {
    en: [
      "Years earlier, the man survived a shipwreck.",
      "He and other survivors were stranded on a deserted island.",
      "After their food ran out, the others gave him some soup.",
      "They told him it was turtle soup.",
      "He believed them.",
      "Years later, he tasted real turtle soup in a restaurant for the first time.",
      "After one spoonful, he realized the taste was completely different.",
      "That meant the soup he had eaten during the shipwreck was not turtle soup.",
      "It had been made from the flesh of another victim.",
      "The truth was unbearable, so he took his own life."
    ],
    zh: [
      "多年前。",
      "这个男人经历了一场海难。",
      "他和其他幸存者被困在荒岛上。",
      "食物耗尽后。",
      "其他人给了他一些肉汤。",
      "并告诉他：",
      "那是海龟汤。",
      "他相信了。",
      "多年后。",
      "他第一次在餐厅喝到真正的海龟汤。",
      "只尝了一口。",
      "他就发现味道完全不同。",
      "于是明白：",
      "当年喝下的根本不是海龟汤。",
      "而是其他遇难者的肉。",
      "这个真相让他无法承受。",
      "最终选择自杀。"
    ]
  },

  reviewVocabulary: [
    "spoonful",
    "survivor",
    "shipwreck",
    "stranded",
    "starvation",
    "substitute",
    "realize",
    "unbearable"
  ],

  usefulExpressions: [
    {
      en: "taste one spoonful",
      zh: "尝一勺"
    },
    {
      en: "pay the bill",
      zh: "付账"
    },
    {
      en: "survive a shipwreck",
      zh: "在海难中幸存"
    },
    {
      en: "be stranded on an island",
      zh: "被困在岛上"
    },
    {
      en: "run out of food",
      zh: "食物耗尽"
    },
    {
      en: "tell a merciful lie",
      zh: "说一个善意的谎言"
    },
    {
      en: "realize the truth",
      zh: "意识到真相"
    },
    {
      en: "be too unbearable to accept",
      zh: "难以承受"
    }
  ],

  askNickFutureHooks: [
    {
      id: "nick_001",
      trigger: "low_progress",
      responseType: "gentle_hint",
      message: {
        en: "Start with the soup. The important question is whether he had tasted it before.",
        zh: "从汤开始。关键问题是：他以前是否尝过这种汤。"
      }
    },
    {
      id: "nick_002",
      trigger: "after_clue001",
      responseType: "medium_hint",
      message: {
        en: "If he believed he had eaten turtle soup before, ask where that memory came from.",
        zh: "如果他以为自己以前吃过海龟汤，那就问问这个记忆来自哪里。"
      }
    },
    {
      id: "nick_003",
      trigger: "after_clue002",
      responseType: "strong_hint",
      message: {
        en: "The shipwreck is not background. It is where the lie began.",
        zh: "海难不是背景。谎言就是从那里开始的。"
      }
    },
    {
      id: "nick_004",
      trigger: "near_solution",
      responseType: "solution_hint",
      message: {
        en: "The restaurant soup was real. That real taste exposed what the old soup could not have been.",
        zh: "餐厅里的汤是真的。正是这个真实味道，暴露了当年那碗汤不可能是海龟汤。"
      }
    }
  ]
};

export default case001;
