import react, {useState} from "react";
import './learn.css';
import Qcard from "../question-card/Qcard";

function Learn() {

    const [selectedSubject, setSelectedSubject] = useState(null);
    const [questionAmount, setQuestionAmount] = useState(null);
    const [startQuiz, setStartQuiz] = useState(false);

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
    };

    const handleQuestionAmountClick = (amount) => {
        setQuestionAmount(amount);
    };

    const handleStartClick = () => {
        if(selectedSubject && questionAmount){
            setStartQuiz(true);
        }else{
            alert('Please fill in all sections');
        }
    };


    return(
    <>
    {!startQuiz ? (
        <div className="content">
            <div className="choice-box">
                <div className="subject-box">
                    <div className={`subject ${selectedSubject == "Hiragana" ? "selected" : ""}`} onClick={() => handleSubjectClick("Hiragana")}>Hiragana</div>
                    <div className={`subject ${selectedSubject == "Katakana" ? "selected" : ""}`} onClick={() => handleSubjectClick("Katakana")}>Katakana</div>
                </div>
                <div className="question-amount">
                    <div className={`subject ${questionAmount == 5 ? "selected" : ""}`} onClick={() => handleQuestionAmountClick(5)}>5</div>
                    <div className={`subject ${questionAmount == 10 ? "selected" : ""}`} onClick={() => handleQuestionAmountClick(10)}>10</div>
                    <div className={`subject ${questionAmount == 25 ? "selected" : ""}`} onClick={() => handleQuestionAmountClick(25)}>25</div>
                    <div className={`subject ${questionAmount == 50 ? "selected" : ""}`} onClick={() => handleQuestionAmountClick(50)}>50</div>
                    <div className={`subject ${questionAmount == 100 ? "selected" : ""}`} onClick={() => handleQuestionAmountClick(100)}>100</div>
                </div>
                <div className="start">
                    <button onClick={handleStartClick}>Start</button>
                </div>
            </div>
        </div>
        ) : (
            <Qcard subject = {selectedSubject} questionAmount = {questionAmount} />
        )}
    </>
    );
}

export default Learn;