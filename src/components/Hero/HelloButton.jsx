import "./HelloButton.css";

export default function HelloButton() {
  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="connectBtn flex justify-center items-center">
        <button onClick={handleScroll}> Let{`'`}s Connect</button>
      </div>
    </>
  );
}
