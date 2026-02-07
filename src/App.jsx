import { useState } from "react";
import { Banner } from "./components/Banner";
import { YesNoButtons } from "./components/YesNoButtons";
import { SuccessMessage } from "./components/SuccessMessage";
import {
  NO_MESSAGES,
  CONFIDENCE_DROP_INDEX,
  YES_LABEL,
  QUESTION,
  SUCCESS_MESSAGE,
} from "./data/copy";

const NO_BUTTON_SIZE_OPTIONS = [40, 50, 30, 35, 45];
const INITIAL_YES_SIZE = 50;
const SHRUNK_YES_SIZE = 32;

export default function App() {
  const [bannerVariant, setBannerVariant] = useState("mid");
  const [answeredYes, setAnsweredYes] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(INITIAL_YES_SIZE);

  const noLabel = NO_MESSAGES[noIndex];
  const totalNoMessages = NO_MESSAGES.length;

  function handleNoClick() {
    if (noIndex === 0) {
      setBannerVariant("no");
    }

    const nextIndex = noIndex + 1;

    if (nextIndex < totalNoMessages) {
      setNoIndex(nextIndex);
      if (nextIndex === CONFIDENCE_DROP_INDEX) {
        setYesButtonSize(SHRUNK_YES_SIZE);
      } else {
        const random =
          NO_BUTTON_SIZE_OPTIONS[
            Math.floor(Math.random() * NO_BUTTON_SIZE_OPTIONS.length)
          ];
        setYesButtonSize((s) => s + random);
      }
    } else {
      setNoIndex(0);
      setYesButtonSize(INITIAL_YES_SIZE);
    }
  }

  function handleYesClick() {
    setBannerVariant("yes");
    setAnsweredYes(true);
  }

  return (
    <div className="container">
      <Banner variant={bannerVariant} />
      {!answeredYes ? <h1 id="question-heading">{QUESTION}</h1> : null}
      {!answeredYes ? (
        <YesNoButtons
          noLabel={noLabel}
          yesLabel={YES_LABEL}
          yesButtonSize={yesButtonSize}
          onNoClick={handleNoClick}
          onYesClick={handleYesClick}
        />
      ) : (
        <SuccessMessage message={SUCCESS_MESSAGE} />
      )}
    </div>
  );
}
