export function getAllQuestions(caseData) {
  return (caseData.questionGroups ?? []).flatMap((group) =>
    (group.questions ?? []).map((question) => ({
      ...question,
      groupId: group.id,
      groupTitle: group.title
    }))
  );
}

export function getDemoQuestionPool(caseData, limit = 8) {
  const groups = caseData.questionGroups ?? [];
  const selected = [];
  const selectedIds = new Set();

  groups.forEach((group) => {
    const candidate = (group.questions ?? []).find((question) => (question.unlockClues ?? []).length > 0);
    if (candidate && !selectedIds.has(candidate.id)) {
      selected.push({ ...candidate, groupId: group.id, groupTitle: group.title });
      selectedIds.add(candidate.id);
    }
  });

  getAllQuestions(caseData).forEach((question) => {
    if (selected.length >= limit) {
      return;
    }

    if (!selectedIds.has(question.id) && (question.unlockClues ?? []).length > 0) {
      selected.push(question);
      selectedIds.add(question.id);
    }
  });

  return selected.slice(0, limit);
}

export function getUnlockedClues(caseData, usedQuestionIds) {
  const unlockedIds = new Set();

  getAllQuestions(caseData).forEach((question) => {
    if (usedQuestionIds.has(question.id)) {
      (question.unlockClues ?? []).forEach((clueId) => unlockedIds.add(clueId));
    }
  });

  return (caseData.clues ?? []).filter((clue) => unlockedIds.has(clue.id));
}

export function getProgress(caseData, usedQuestionIds, isSolved, questionPool = getAllQuestions(caseData)) {
  const totalQuestions = questionPool.length;
  const reachableClueIds = new Set(questionPool.flatMap((question) => question.unlockClues ?? []));
  const totalClues = reachableClueIds.size || (caseData.clues ?? []).length;
  const unlockedClues = getUnlockedClues(caseData, usedQuestionIds).length;
  const questionProgress = totalQuestions === 0 ? 0 : usedQuestionIds.size / totalQuestions;
  const clueProgress = totalClues === 0 ? 0 : unlockedClues / totalClues;
  const progressParts = [questionProgress, clueProgress];

  if (isSolved) {
    return 100;
  }

  return Math.round((progressParts.reduce((total, item) => total + item, 0) / progressParts.length) * 100);
}

export function getLocalized(value, languageMode) {
  if (!value) {
    return { en: "", zh: "" };
  }

  if (typeof value === "string") {
    return { en: value, zh: "" };
  }

  return {
    en: value.en ?? "",
    zh: languageMode === "bilingual" ? value.zh ?? "" : ""
  };
}

export function checkFinalChoice(choice) {
  return Boolean(choice?.isCorrect);
}

export function canMakeDeduction(caseData, usedQuestionIds, questionPool = getDemoQuestionPool(caseData)) {
  const unlockedClues = getUnlockedClues(caseData, usedQuestionIds).length;
  const neededClues = Math.min(5, Math.max(3, Math.ceil(questionPool.length * 0.6)));

  return unlockedClues >= neededClues;
}
