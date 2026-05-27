import { useState, useEffect } from "react";
import { T, FontLink } from "./tokens";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import ProcessingPage from "./pages/ProcessingPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import { BUSINESS_STEPS } from "./data/businessSteps";
import { PERSONAL_STEPS } from "./data/personalSteps";
import { getRecommendations } from "./engine/recommend";

export default function App() {
  const [dark, setDark] = useState(false);
  const [mode, setMode] = useState("business");
  const [screen, setScreen] = useState("landing"); // landing | form | processing | results
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({ monthlySpend: 150000, sectors: [] });
  const [recommendedCards, setRecommendedCards] = useState([]);

  // Reset form when mode changes
  useEffect(() => {
    setFormStep(0);
    setFormData({ monthlySpend: 150000, sectors: [] });
    if (screen === "results" || screen === "processing") setScreen("landing");
  }, [mode]);

  const steps = mode === "business" ? BUSINESS_STEPS : PERSONAL_STEPS;

  const handleProcessingDone = () => {
    const cards = getRecommendations(formData, mode);
    setRecommendedCards(cards);
    setScreen("results");
  };

  return (
    <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", background: dark ? T.darkBg : T.surface }}>
      <FontLink />
      <Navbar
        dark={dark}
        setDark={setDark}
        onStart={() => { setScreen("form"); setFormStep(0); }}
        mode={mode}
        setMode={setMode}
      />

      {screen === "landing" && (
        <LandingPage dark={dark} onStart={() => { setScreen("form"); setFormStep(0); }} />
      )}
      {screen === "form" && (
        <FormPage
          steps={steps}
          dark={dark}
          step={formStep}
          setStep={setFormStep}
          formData={formData}
          setFormData={setFormData}
          onSubmit={() => setScreen("processing")}
        />
      )}
      {screen === "processing" && (
        <ProcessingPage dark={dark} onDone={handleProcessingDone} />
      )}
      {screen === "results" && (
        <RecommendationsPage dark={dark} cards={recommendedCards} />
      )}
    </div>
  );
}
