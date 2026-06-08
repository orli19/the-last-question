const case001 = {
  id: "case001",
  caseNumber: "Case 01",
  status: "playable",

  title: {
    en: "The Returned Book",
    zh: "归还的书"
  },

  difficulty: "Medium",
  vocabularyLevel: "CET6+",
  estimatedTime: "5-8 min",
  wordCount: 32,

  summary: {
    en: "A returned library book exposes a hidden connection to an unsolved death.",
    zh: "一本被归还的图书，暴露了一起未破死亡案件中的隐藏联系。"
  },

  prompt: {
    en: [
      "A book was returned to a library.",
      "The librarian looked at it for less than ten seconds.",
      "Then she immediately called the police."
    ],
    zh: [
      "一本书被归还到了图书馆。",
      "图书管理员只看了它不到十秒钟。",
      "随后，她立刻报了警。"
    ]
  },

  vocabulary: [
    {
      id: "v001",
      word: "returned",
      phonetic: "/rɪˈtɜːrnd/",
      partOfSpeech: "v.",
      level: "CET4",
      zh: "归还；返回",
      example: "The book was returned after six months.",
      context: "The act of returning the book is the trigger of the case.",
      reasoningHint: "Ask why returning something ordinary could become suspicious."
    },
    {
      id: "v002",
      word: "librarian",
      phonetic: "/laɪˈbreriən/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "图书管理员",
      example: "The librarian noticed the old borrowing record.",
      context: "The librarian recognized the book and its borrowing history.",
      reasoningHint: "She noticed something a normal visitor would not notice."
    },
    {
      id: "v003",
      word: "immediately",
      phonetic: "/ɪˈmiːdiətli/",
      partOfSpeech: "adv.",
      level: "CET4",
      zh: "立即；马上",
      example: "She immediately reported the discovery.",
      context: "Her reaction was instant, which means the clue was obvious to her.",
      reasoningHint: "What could she know within ten seconds?"
    },
    {
      id: "v004",
      word: "borrower",
      phonetic: "/ˈbɑːroʊər/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "借书人；借用者",
      example: "The borrower never came back to the library.",
      context: "The identity and fate of the borrower are central to the mystery.",
      reasoningHint: "The book matters because of who borrowed it."
    },
    {
      id: "v005",
      word: "record",
      phonetic: "/ˈrekərd/",
      partOfSpeech: "n.",
      level: "CET4/CET6",
      zh: "记录；档案",
      example: "The borrowing record showed the date clearly.",
      context: "The librarian checked or remembered the borrowing record.",
      reasoningHint: "Records can reveal contradictions in timing."
    },
    {
      id: "v006",
      word: "victim",
      phonetic: "/ˈvɪktɪm/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "受害者",
      example: "The victim disappeared after leaving the library.",
      context: "The borrower later became the victim in an unsolved case.",
      reasoningHint: "The book connects the library to the victim's final movements."
    },
    {
      id: "v007",
      word: "disappear",
      phonetic: "/ˌdɪsəˈpɪr/",
      partOfSpeech: "v.",
      level: "CET4/CET6",
      zh: "消失；失踪",
      example: "He disappeared on the same day he borrowed the book.",
      context: "The borrower disappeared shortly after borrowing the book.",
      reasoningHint: "The timing of the disappearance is crucial."
    },
    {
      id: "v008",
      word: "belongings",
      phonetic: "/bɪˈlɔːŋɪŋz/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "随身物品；财物",
      example: "The police searched the victim's belongings.",
      context: "The missing book was not found among the victim's belongings.",
      reasoningHint: "If the victim had the book, why was it not found with him?"
    },
    {
      id: "v009",
      word: "ordinary",
      phonetic: "/ˈɔːrdneri/",
      partOfSpeech: "adj.",
      level: "CET4/CET6",
      zh: "普通的；平常的",
      example: "It looked like an ordinary library book.",
      context: "The book itself was not special.",
      reasoningHint: "The clue is not the book's value, but its history."
    },
    {
      id: "v010",
      word: "valuable",
      phonetic: "/ˈvæljuəbl/",
      partOfSpeech: "adj.",
      level: "CET4/CET6",
      zh: "贵重的；有价值的",
      example: "The book was not rare or valuable.",
      context: "The book was not worth stealing for money.",
      reasoningHint: "This rules out theft for profit."
    },
    {
      id: "v011",
      word: "evidence",
      phonetic: "/ˈevɪdəns/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "证据",
      example: "The returned book became unexpected evidence.",
      context: "The book became evidence because of who possessed it.",
      reasoningHint: "Evidence can be ordinary until context changes its meaning."
    },
    {
      id: "v012",
      word: "investigation",
      phonetic: "/ɪnˌvestɪˈɡeɪʃn/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "调查",
      example: "The investigation had been stuck for months.",
      context: "The death case had not been solved before the book returned.",
      reasoningHint: "The book reopened a cold investigation."
    },
    {
      id: "v013",
      word: "surveillance",
      phonetic: "/sərˈveɪləns/",
      partOfSpeech: "n.",
      level: "CET6+/考研",
      zh: "监控；监视",
      example: "Surveillance footage showed who returned the book.",
      context: "Police used library surveillance to identify the returner.",
      reasoningHint: "The return created a new chance to identify a person."
    },
    {
      id: "v014",
      word: "footage",
      phonetic: "/ˈfʊtɪdʒ/",
      partOfSpeech: "n.",
      level: "CET6+/IELTS",
      zh: "录像片段；影像资料",
      example: "The footage captured the returner at the entrance.",
      context: "Footage from the library helped the police.",
      reasoningHint: "A physical return leaves a trace."
    },
    {
      id: "v015",
      word: "anonymous",
      phonetic: "/əˈnɑːnɪməs/",
      partOfSpeech: "adj.",
      level: "CET6+/考研",
      zh: "匿名的",
      example: "The book was returned anonymously through the return box.",
      context: "The returner tried not to be identified.",
      reasoningHint: "Anonymous behavior can indicate guilt or fear."
    },
    {
      id: "v016",
      word: "return box",
      phonetic: "",
      partOfSpeech: "n.",
      level: "Context",
      zh: "还书箱",
      example: "The book was placed in the return box after closing time.",
      context: "The book was not handed directly to a staff member.",
      reasoningHint: "Using the return box helped the returner avoid interaction."
    },
    {
      id: "v017",
      word: "access",
      phonetic: "/ˈækses/",
      partOfSpeech: "n./v.",
      level: "CET6",
      zh: "接触机会；访问权限",
      example: "Only someone with access to the victim's belongings could have kept the book.",
      context: "The returner must have had access to the victim or his things.",
      reasoningHint: "Access narrows the suspect list."
    },
    {
      id: "v018",
      word: "possess",
      phonetic: "/pəˈzes/",
      partOfSpeech: "v.",
      level: "CET6",
      zh: "拥有；持有",
      example: "Whoever returned the book had possessed it for months.",
      context: "Possession of the book is the incriminating fact.",
      reasoningHint: "Ask who could have possessed the book after the victim died."
    },
    {
      id: "v019",
      word: "contradiction",
      phonetic: "/ˌkɑːntrəˈdɪkʃn/",
      partOfSpeech: "n.",
      level: "CET6/考研",
      zh: "矛盾；不一致",
      example: "The timeline contained a contradiction.",
      context: "The book was missing when it should have been with the victim.",
      reasoningHint: "A contradiction in the timeline points to hidden contact."
    },
    {
      id: "v020",
      word: "timeline",
      phonetic: "/ˈtaɪmlaɪn/",
      partOfSpeech: "n.",
      level: "CET6/IELTS",
      zh: "时间线",
      example: "The timeline made the return suspicious.",
      context: "The case depends on when the book disappeared and reappeared.",
      reasoningHint: "The correct solution requires reconstructing the timeline."
    },
    {
      id: "v021",
      word: "alibi",
      phonetic: "/ˈæləbaɪ/",
      partOfSpeech: "n.",
      level: "CET6+/推理词汇",
      zh: "不在场证明",
      example: "The suspect's alibi was later questioned.",
      context: "The returned book helped challenge a suspect's earlier story.",
      reasoningHint: "Physical evidence can weaken an alibi."
    },
    {
      id: "v022",
      word: "suspect",
      phonetic: "/ˈsʌspekt/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "嫌疑人",
      example: "The police identified a new suspect from the footage.",
      context: "The returner became a suspect.",
      reasoningHint: "Returning the book created a connection to the victim."
    },
    {
      id: "v023",
      word: "motive",
      phonetic: "/ˈmoʊtɪv/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "动机",
      example: "The police still needed to prove the suspect's motive.",
      context: "The book alone does not prove motive, but it gives police a lead.",
      reasoningHint: "The mystery is about why police knew whom to investigate, not about proving the entire trial."
    },
    {
      id: "v024",
      word: "trace",
      phonetic: "/treɪs/",
      partOfSpeech: "n./v.",
      level: "CET6",
      zh: "痕迹；追踪",
      example: "The return left a trace that had not existed before.",
      context: "The returner's action created a new trace.",
      reasoningHint: "The killer tried to remove risk, but created evidence."
    },
    {
      id: "v025",
      word: "discard",
      phonetic: "/dɪsˈkɑːrd/",
      partOfSpeech: "v.",
      level: "CET6/考研",
      zh: "丢弃；抛弃",
      example: "He should have discarded the book, but he returned it instead.",
      context: "Returning the book was irrational if he wanted to stay hidden.",
      reasoningHint: "Why would someone return dangerous evidence? Fear, habit, or guilt."
    },
    {
      id: "v026",
      word: "incriminate",
      phonetic: "/ɪnˈkrɪmɪneɪt/",
      partOfSpeech: "v.",
      level: "TOEFL/法律词汇",
      zh: "使负罪；使受牵连",
      example: "The book could incriminate the person who kept it.",
      context: "Possessing the victim's missing book was incriminating.",
      reasoningHint: "The book links the returner to the victim after the disappearance."
    },
    {
      id: "v027",
      word: "unresolved",
      phonetic: "/ˌʌnrɪˈzɑːlvd/",
      partOfSpeech: "adj.",
      level: "CET6/考研",
      zh: "未解决的；悬而未决的",
      example: "The death remained unresolved for months.",
      context: "The case was not solved until the book reappeared.",
      reasoningHint: "The return matters because the investigation was unresolved."
    },
    {
      id: "v028",
      word: "identify",
      phonetic: "/aɪˈdentɪfaɪ/",
      partOfSpeech: "v.",
      level: "CET4/CET6",
      zh: "识别；确认身份",
      example: "The police identified the returner from the footage.",
      context: "The return gave police a person to identify.",
      reasoningHint: "A hidden suspect became visible through a small action."
    },
    {
      id: "v029",
      word: "connection",
      phonetic: "/kəˈnekʃn/",
      partOfSpeech: "n.",
      level: "CET4/CET6",
      zh: "联系；关联",
      example: "The book revealed a connection between the returner and the victim.",
      context: "The returner had a connection that he should not have had.",
      reasoningHint: "The key is not ownership of the book, but connection to the victim."
    },
    {
      id: "v030",
      word: "confession",
      phonetic: "/kənˈfeʃn/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "供认；认罪；坦白",
      example: "The evidence eventually led to a confession.",
      context: "The returned book helped investigators pressure the suspect.",
      reasoningHint: "The book is the starting clue, not the entire proof."
    },
    {
      id: "v031",
      word: "lead",
      phonetic: "/liːd/",
      partOfSpeech: "n.",
      level: "CET6",
      zh: "线索；调查方向",
      example: "The returned book gave the police a new lead.",
      context: "The librarian's report gave police a new direction.",
      reasoningHint: "A lead does not need to solve everything instantly."
    },
    {
      id: "v032",
      word: "dispose of",
      phonetic: "",
      partOfSpeech: "phr.",
      level: "CET6+/考研",
      zh: "处理掉；丢弃",
      example: "He failed to dispose of the evidence properly.",
      context: "The suspect returned the book instead of destroying it.",
      reasoningHint: "People often make mistakes when trying to erase small evidence."
    }
  ],

  questionGroups: [
    {
      id: "group_book",
      title: {
        en: "About the Book",
        zh: "关于这本书"
      },
      unlockCondition: "default",
      questions: [
        {
          id: "q001",
          text: {
            en: "Was the book damaged?",
            zh: "这本书损坏了吗？"
          },
          answer: {
            en: "No.",
            zh: "没有。"
          },
          unlockClues: []
        },
        {
          id: "q002",
          text: {
            en: "Was there a note hidden inside the book?",
            zh: "书里藏着纸条吗？"
          },
          answer: {
            en: "No.",
            zh: "没有。"
          },
          unlockClues: []
        },
        {
          id: "q003",
          text: {
            en: "Was the book rare or valuable?",
            zh: "这本书稀有或贵重吗？"
          },
          answer: {
            en: "No. It was an ordinary library book.",
            zh: "不是。它只是一本普通的图书馆藏书。"
          },
          unlockClues: ["clue001"]
        },
        {
          id: "q004",
          text: {
            en: "Was the book itself the reason she called the police?",
            zh: "她报警是因为书本身有问题吗？"
          },
          answer: {
            en: "No. The book's history mattered more than the book itself.",
            zh: "不是。比起书本身，更重要的是它的借阅历史。"
          },
          unlockClues: ["clue002"]
        }
      ]
    },
    {
      id: "group_borrower",
      title: {
        en: "About the Borrower",
        zh: "关于借书人"
      },
      unlockCondition: "default",
      questions: [
        {
          id: "q005",
          text: {
            en: "Was the borrower important?",
            zh: "借书人重要吗？"
          },
          answer: {
            en: "Yes. Very important.",
            zh: "重要。非常重要。"
          },
          unlockClues: ["clue003"]
        },
        {
          id: "q006",
          text: {
            en: "Was the borrower still alive when the book was returned?",
            zh: "书被归还时，借书人还活着吗？"
          },
          answer: {
            en: "No.",
            zh: "不在世了。"
          },
          unlockClues: ["clue004"]
        },
        {
          id: "q007",
          text: {
            en: "Did the borrower die long before the book was returned?",
            zh: "借书人在书被归还很久以前就死了吗？"
          },
          answer: {
            en: "Yes.",
            zh: "是的。"
          },
          unlockClues: ["clue005"]
        },
        {
          id: "q008",
          text: {
            en: "Was the borrower's death already known to the public?",
            zh: "借书人的死亡当时已经公开了吗？"
          },
          answer: {
            en: "Yes. It had been reported months earlier.",
            zh: "是的。几个月前就已经被报道过。"
          },
          unlockClues: []
        }
      ]
    },
    {
      id: "group_timeline",
      title: {
        en: "About the Timeline",
        zh: "关于时间线"
      },
      unlockCondition: "default",
      questions: [
        {
          id: "q009",
          text: {
            en: "Did the borrower disappear on the day he borrowed the book?",
            zh: "借书人是在借书当天失踪的吗？"
          },
          answer: {
            en: "Yes.",
            zh: "是的。"
          },
          unlockClues: ["clue006"]
        },
        {
          id: "q010",
          text: {
            en: "Was the book found with the victim's belongings?",
            zh: "警方在死者遗物中找到这本书了吗？"
          },
          answer: {
            en: "No.",
            zh: "没有。"
          },
          unlockClues: ["clue007"]
        },
        {
          id: "q011",
          text: {
            en: "Was the book missing for months?",
            zh: "这本书消失了几个月吗？"
          },
          answer: {
            en: "Yes. For six months.",
            zh: "是的。消失了六个月。"
          },
          unlockClues: ["clue008"]
        },
        {
          id: "q012",
          text: {
            en: "Was the return date important?",
            zh: "归还时间重要吗？"
          },
          answer: {
            en: "Yes. It happened long after the borrower died.",
            zh: "重要。它发生在借书人死亡很久之后。"
          },
          unlockClues: ["clue009"]
        }
      ]
    },
    {
      id: "group_returner",
      title: {
        en: "About the Returner",
        zh: "关于归还者"
      },
      unlockCondition: "after_clue008",
      questions: [
        {
          id: "q013",
          text: {
            en: "Was the book returned directly to the librarian?",
            zh: "这本书是直接交给图书管理员的吗？"
          },
          answer: {
            en: "No. It was placed in the return box.",
            zh: "不是。它被放进了还书箱。"
          },
          unlockClues: ["clue010"]
        },
        {
          id: "q014",
          text: {
            en: "Could the victim's family have returned it?",
            zh: "有可能是死者家属归还的吗？"
          },
          answer: {
            en: "No. The police had already searched the victim's belongings.",
            zh: "不可能。警方早已搜查过死者遗物。"
          },
          unlockClues: ["clue011"]
        },
        {
          id: "q015",
          text: {
            en: "Did the returner likely have contact with the victim after he left the library?",
            zh: "归还者很可能在借书人离开图书馆后接触过他吗？"
          },
          answer: {
            en: "Yes. That is the key point.",
            zh: "是的。这是关键。"
          },
          unlockClues: ["clue012"]
        },
        {
          id: "q016",
          text: {
            en: "Did surveillance footage help identify the returner?",
            zh: "监控录像帮助确认了归还者身份吗？"
          },
          answer: {
            en: "Yes.",
            zh: "是的。"
          },
          unlockClues: ["clue013"]
        }
      ]
    },
    {
      id: "group_solution",
      title: {
        en: "Final Reasoning",
        zh: "最终推理"
      },
      unlockCondition: "after_clue012",
      questions: [
        {
          id: "q017",
          text: {
            en: "Was the returned book a new lead in an unresolved case?",
            zh: "这本被归还的书是一桩未破案件的新线索吗？"
          },
          answer: {
            en: "Yes.",
            zh: "是的。"
          },
          unlockClues: ["clue014"]
        },
        {
          id: "q018",
          text: {
            en: "Did the returner expose himself by trying to remove suspicion?",
            zh: "归还者是因为试图消除风险，反而暴露了自己吗？"
          },
          answer: {
            en: "Yes. Very close.",
            zh: "是的。非常接近。"
          },
          unlockClues: ["clue015"]
        }
      ]
    }
  ],

  clues: [
    {
      id: "clue001",
      text: {
        en: "The book was not rare, expensive, or damaged.",
        zh: "这本书并不稀有、昂贵，也没有损坏。"
      }
    },
    {
      id: "clue002",
      text: {
        en: "The book mattered because of its borrowing record.",
        zh: "这本书重要，是因为它的借阅记录。"
      }
    },
    {
      id: "clue003",
      text: {
        en: "The borrower was the key to the case.",
        zh: "借书人是案件的关键。"
      }
    },
    {
      id: "clue004",
      text: {
        en: "The borrower was already dead when the book was returned.",
        zh: "书被归还时，借书人已经死亡。"
      }
    },
    {
      id: "clue005",
      text: {
        en: "The death had happened months earlier.",
        zh: "死亡发生在几个月前。"
      }
    },
    {
      id: "clue006",
      text: {
        en: "The borrower disappeared on the same day he borrowed the book.",
        zh: "借书人在借书当天失踪。"
      }
    },
    {
      id: "clue007",
      text: {
        en: "The book was not found among the victim's belongings.",
        zh: "警方没有在死者遗物中找到这本书。"
      }
    },
    {
      id: "clue008",
      text: {
        en: "The book was missing for six months.",
        zh: "这本书消失了六个月。"
      }
    },
    {
      id: "clue009",
      text: {
        en: "The book returned long after the borrower died.",
        zh: "这本书在借书人死亡很久之后才被归还。"
      }
    },
    {
      id: "clue010",
      text: {
        en: "The book was returned anonymously through the return box.",
        zh: "这本书被匿名放进还书箱。"
      }
    },
    {
      id: "clue011",
      text: {
        en: "The family could not have returned it from the victim's belongings.",
        zh: "家属不可能是从死者遗物中找到并归还它。"
      }
    },
    {
      id: "clue012",
      text: {
        en: "Whoever returned the book probably had access to it after the victim disappeared.",
        zh: "归还者很可能在受害者失踪后仍接触过这本书。"
      }
    },
    {
      id: "clue013",
      text: {
        en: "Surveillance footage helped identify the returner.",
        zh: "监控录像帮助警方确认了归还者身份。"
      }
    },
    {
      id: "clue014",
      text: {
        en: "The returned book became a new lead in an unresolved death case.",
        zh: "这本被归还的书成了一桩未破死亡案件的新线索。"
      }
    },
    {
      id: "clue015",
      text: {
        en: "The returner tried to get rid of a small risk, but created a bigger trace.",
        zh: "归还者试图消除一个小风险，却留下了更大的痕迹。"
      }
    }
  ],

  finalChoices: [
    {
      id: "choice_a",
      text: {
        en: "The victim's family found the book while cleaning his belongings and returned it.",
        zh: "死者家属整理遗物时发现了这本书，并把它归还。"
      },
      isCorrect: false,
      feedback: {
        en: "No. The police had already searched the victim's belongings, and the book had been missing for months.",
        zh: "不对。警方早已搜查过死者遗物，而这本书已经消失了几个月。"
      }
    },
    {
      id: "choice_b",
      text: {
        en: "The librarian called the police because the book contained secret evidence.",
        zh: "图书管理员报警，是因为书里藏着秘密证据。"
      },
      isCorrect: false,
      feedback: {
        en: "No. There was nothing hidden inside the book. Its borrowing history was the clue.",
        zh: "不对。书里没有藏东西。线索在它的借阅历史。"
      }
    },
    {
      id: "choice_c",
      text: {
        en: "The library system made an error, so the librarian thought the book was related to a dead person.",
        zh: "图书馆系统出错，导致管理员误以为这本书和死者有关。"
      },
      isCorrect: false,
      feedback: {
        en: "No. The record was correct. That was why the return was alarming.",
        zh: "不对。记录是正确的，正因如此，归还才显得异常。"
      }
    },
    {
      id: "choice_d",
      text: {
        en: "The killer had kept the victim's missing library book for months and secretly returned it, exposing his connection to the victim.",
        zh: "凶手一直持有死者失踪的图书馆藏书，数月后偷偷归还，暴露了自己与死者的联系。"
      },
      isCorrect: true,
      feedback: {
        en: "Correct. The book was ordinary, but its return proved that someone had possessed it after the victim disappeared.",
        zh: "正确。这本书本身普通，但它的归还证明有人在死者失踪后仍持有它。"
      }
    }
  ],

  truth: {
    en: [
      "The book itself was ordinary.",
      "But the librarian recognized its borrowing record.",
      "It had been borrowed by a man who disappeared on the same day and was later found dead.",
      "When the police searched the victim's belongings, the book was not there.",
      "For six months, the book was missing.",
      "Then it suddenly appeared in the library's return box.",
      "That meant someone had possessed the book after the victim disappeared.",
      "The most reasonable explanation was that the returner had come into contact with the victim or his belongings after the disappearance.",
      "The librarian called the police, and surveillance footage from the library helped identify the returner.",
      "The returner had tried to get rid of a small piece of evidence, but by returning it, he created the clue that exposed him."
    ],
    zh: [
      "这本书本身很普通。",
      "但图书管理员认出了它的借阅记录。",
      "它曾被一名男子借走，而那名男子在借书当天失踪，后来被发现死亡。",
      "警方搜查死者遗物时，并没有找到这本书。",
      "整整六个月，这本书都下落不明。",
      "随后，它突然出现在图书馆的还书箱里。",
      "这意味着，有人在死者失踪后仍然持有这本书。",
      "最合理的解释是：归还者曾在失踪后接触过死者，或者接触过死者的随身物品。",
      "图书管理员报警后，警方通过图书馆监控确认了归还者身份。",
      "归还者原本想处理掉一件小证据，却因为归还行为留下了暴露自己的线索。"
    ]
  },

  reviewVocabulary: [
    "librarian",
    "borrower",
    "victim",
    "belongings",
    "evidence",
    "investigation",
    "surveillance",
    "footage",
    "anonymous",
    "access",
    "possess",
    "contradiction",
    "timeline",
    "alibi",
    "suspect",
    "motive",
    "trace",
    "discard",
    "incriminate",
    "unresolved",
    "identify",
    "connection",
    "lead",
    "dispose of"
  ],

  usefulExpressions: [
    {
      en: "return a book",
      zh: "归还一本书"
    },
    {
      en: "call the police",
      zh: "报警"
    },
    {
      en: "borrowing record",
      zh: "借阅记录"
    },
    {
      en: "surveillance footage",
      zh: "监控录像"
    },
    {
      en: "an unresolved case",
      zh: "一桩未破案件"
    },
    {
      en: "gain access to something",
      zh: "获得接触某物的机会"
    },
    {
      en: "possess evidence",
      zh: "持有证据"
    },
    {
      en: "create a trace",
      zh: "留下痕迹"
    },
    {
      en: "identify a suspect",
      zh: "确认嫌疑人"
    },
    {
      en: "expose a connection",
      zh: "暴露联系"
    }
  ],

  askNickFutureHooks: [
    {
      id: "nick_001",
      trigger: "low_progress",
      responseType: "gentle_hint",
      message: {
        en: "The book itself may not be special. Try asking about its history.",
        zh: "这本书本身可能并不特殊。试着问问它的历史。"
      }
    },
    {
      id: "nick_002",
      trigger: "after_clue004",
      responseType: "medium_hint",
      message: {
        en: "If the borrower was already dead, who could return the book?",
        zh: "如果借书人已经去世，那么是谁归还了这本书？"
      }
    },
    {
      id: "nick_003",
      trigger: "after_clue008",
      responseType: "strong_hint",
      message: {
        en: "Focus on the six-month gap. Where was the book during that time?",
        zh: "关注那六个月的空白。这本书那段时间在哪里？"
      }
    },
    {
      id: "nick_004",
      trigger: "near_solution",
      responseType: "solution_hint",
      message: {
        en: "The returner was trying to remove a risk, but the act of returning the book created a new clue.",
        zh: "归还者试图消除风险，但归还行为本身制造了新的线索。"
      }
    }
  ]
};

export default case001;
