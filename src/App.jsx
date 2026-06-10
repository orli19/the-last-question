import { useMemo, useState } from "react";
import { getCaseById, getCases } from "./data/cases/index.js";
import { CasePage } from "./pages/CasePage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { OpeningPage } from "./pages/OpeningPage.jsx";
import { ResultPage } from "./pages/ResultPage.jsx";

const initialRoute = { name: "home" };

export default function App() {
  const cases = useMemo(() => getCases(), []);
  const [route, setRoute] = useState(initialRoute);
  const [solvedCaseId, setSolvedCaseId] = useState(null);
  const [hasEnteredOpening, setHasEnteredOpening] = useState(false);

  const activeCase = route.caseId ? getCaseById(route.caseId) : null;

  function goHome() {
    setRoute(initialRoute);
  }

  function startCase(caseId) {
    setSolvedCaseId(null);
    setRoute({ name: "case", caseId });
  }

  function showResult(caseId) {
    setSolvedCaseId(caseId);
    setRoute({ name: "result", caseId });
  }

  function archiveSolvedCase(caseId) {
    setSolvedCaseId(caseId);
    setRoute(initialRoute);
  }

  if (!hasEnteredOpening) {
    return <OpeningPage onBegin={() => setHasEnteredOpening(true)} />;
  }

  if (route.name === "case" && activeCase) {
    return (
      <CasePage
        caseData={activeCase}
        onBack={goHome}
        onArchiveSolved={() => archiveSolvedCase(activeCase.id)}
        onSolved={() => showResult(activeCase.id)}
      />
    );
  }

  if (route.name === "result" && activeCase) {
    return (
      <ResultPage
        caseData={activeCase}
        isSolved={solvedCaseId === activeCase.id}
        onBackHome={goHome}
        onReplay={() => startCase(activeCase.id)}
      />
    );
  }

  return <HomePage cases={cases} solvedCaseId={solvedCaseId} onStartCase={startCase} />;
}
