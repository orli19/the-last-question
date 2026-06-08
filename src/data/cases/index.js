const modules = import.meta.glob("./case*/case.js", {
  eager: true,
  import: "default"
});

const cases = Object.values(modules).sort((a, b) => a.id.localeCompare(b.id));

export function getCases() {
  return cases;
}

export function getCaseById(caseId) {
  return cases.find((caseItem) => caseItem.id === caseId) ?? null;
}
