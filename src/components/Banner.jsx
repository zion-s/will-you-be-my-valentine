const BANNER_SRC = {
  mid: "/images/mid.gif",
  no: "/images/no.gif",
  yes: "/images/yes.gif",
};

export function Banner({ variant = "mid" }) {
  const src = BANNER_SRC[variant];
  return (
    <div className="banner-gif">
      <img key={src} src={src} alt="banner" />
    </div>
  );
}
