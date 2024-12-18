/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles/Main.css";
function Main() {
  const [inputValue, setInputValue] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const [inputError, setInputError] = useState(false);

  /* =========  Session Storage =========  */
  // Load links from session storage when the app loads
  useEffect(() => {
    const storedLinks = sessionStorage.getItem("shortenedLinks");
    console.log(storedLinks);
    
    if (storedLinks) {
      setInputArr(JSON.parse(storedLinks))
    }
  }, [])

  // Save links to session storage whenever they change
  useEffect(() => {
    sessionStorage.setItem("shortenedLinks", JSON.stringify(inputArr));
    console.log("Saved to sessionStorage:", inputArr)
  }, [inputArr])

  /* =========  Handle Submit Button =========  */
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue === "") {
      setInputError(true);
      return;
    }
    try {
      const newLlink = {
        original: inputValue,
        short: 'shortURL'
      }
      
      // Update the state with the new link
      setInputArr([inputValue, ...inputArr]);
      setInputValue(""); // Clear the input field
    } catch (error) {
      console.error("Error Shortening the Link:", error)
    }
  }

  /* =========  Handle Change Input =========  */
  function handleChange(e) {
    setInputError(false);
    setInputValue(e.target.value.trim());
  }

  /* =========  Handle Clipboard Button =========  */
  const handleCopyLink = (urlValue) => {
    // let inputValue = "Victor";
    navigator.clipboard.writeText(urlValue);
    alert(`you copied ${urlValue}!`);
  };

  
  return (
    <main className="main" onSubmit={handleSubmit}>
      <form className="form">
        <div className="shorten-wrapper">
          <input
            className={`form-input ${inputError && "errorBorder"}`}
            type="text"
            placeholder="Shorten a link here..."
            value={inputValue}
            onChange={handleChange}
          />
          <span
            style={{
              fontSize: "15px",
              fontStyle: "italic",
              color: "hsl(0, 87%, 67%)",
            }}
            className="error"
          >
            {inputError && "Please add Link"}
          </span>
        </div>
        <button className="shortenBtn">Shorten It!</button>
      </form>
      <div className="links-wrapper">
        {inputArr.map((linkValue, i) => (
          <ShortenLinks
            key={i}
            inputValue={linkValue}
            onCopyLink={() => handleCopyLink(linkValue)}
          />
        ))}
      </div>
    </main>
  );
}

/* =========  ShortenLinks Components =========  */
function ShortenLinks({ inputValue, onCopyLink }) {
  return (
    <div className="link-wrapper">
      <p className="link-paste">{inputValue}</p>
      <div className="item-links">
        <p className="link-copy">SomeURL...</p>
        <button className="linkBtn" onClick={onCopyLink}>
          Copy
        </button>
      </div>
    </div>
  );
}

export default Main;
