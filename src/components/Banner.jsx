import midGif from "../assets/mid.gif";
import noGif from "../assets/no.gif";
import yesGif from "../assets/yes.gif";

const BANNER_SRC = {
  mid: midGif,
  no: noGif,
  yes: yesGif,
};

export function Banner({ variant = "mid" }) {
  const src = BANNER_SRC[variant];
  return (
    <div className="banner-gif">
      <img key={src} src={src} alt="banner" />
    </div>
  );
}
