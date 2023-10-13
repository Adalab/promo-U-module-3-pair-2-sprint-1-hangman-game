//imports dependencias, imagenes, componentes, stylos
import {useState} from "react";

function App() {
  //funciones, variables, handles,

  let [userLetters, setUserLetters] = useState([]);
  let [lastLetter, setLastLetter] = useState('');
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  let [word, setWord] = useState('katakroker');

  const handleInputChange = (ev) => {
  const inputText = ev.target.value;
  const validInput = inputText.replace(/[^a-zA-Z-ZáéíóúüñÁÉÍÓÚÜÑ]/g, "");
    setLastLetter(validInput);
    setUserLetters(validInput.split(''));
    setNumberOfErrors(validInput.split('').filter((letter) => !word.includes(letter)).length);
  } 

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return (
      <ul className="letters">
        {wordLetters.map((letter, index) => {
          if (userLetters.includes(letter)) {
            return <li className="letter" key={index}>{letter}</li>;
          } else {
            return <li className="letter" key={index}></li>;
          }
        }
        )}
      </ul>
    )};
      
    const renderErrorLetters = () =>{
      const incorrectLetter = lastLetter.split('').filter(letter => !word.includes(letter));
      return (
        <ul className="letters">
          {incorrectLetter.map((letter, index) =>
          <li className="letter" key={index}>{letter}</li>
          )}
        </ul>
      )
    };

      const incrementNumber = () => {
      setNumberOfErrors(numberOfErrors +1);
      console.log(numberOfErrors);
      }

  //html
  return (
    <>
    <button onClick={incrementNumber}>Incrementar</button>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              {renderSolutionLetters()} 
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              {renderErrorLetters()}
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleInputChange}
                value={lastLetter}
              />
            </form>
          </section>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </>
  );
}
export default App;