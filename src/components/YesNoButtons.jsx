export function YesNoButtons({
  noLabel,
  yesLabel,
  yesButtonSize,
  onNoClick,
  onYesClick,
}) {
  return (
    <div className="buttons">
      <button
        type="button"
        id="yes-button"
        style={{ height: yesButtonSize, width: yesButtonSize }}
        onClick={onYesClick}
      >
        {yesLabel}
      </button>
      <button type="button" id="no-button" onClick={onNoClick}>
        {noLabel}
      </button>
    </div>
  );
}
