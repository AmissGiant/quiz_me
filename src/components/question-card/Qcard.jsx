import react, {useState} from "react";
import './qcard.css';
import { Link, useNavigate } from "react-router-dom";

function Qcard(props) {
    const {subject, questionAmount} = props
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();
    const images = {
        Hiragana: ['a.png', 'i.png', "u.png", "e.png", "o.png", 'ka.png', 'ki.png', "ku.png", "ke.png", "ko.png", 'sa.png', 'shi.png', "su.png", "se.png", "so.png", 'at.png', 'chi.png', "tsu.png", "te.png", "to.png", 'na.png', 'ni.png', "nu.png", "ne.png", "no.png", 'ha.png', 'hi.png', "fu.png", "he.png", "ho.png", 'ma.png', 'mi.png', "mu.png", "me.png", "mo.png", 'ya.png', "yu.png", "yo.png", 'ra.png', 'ri.png', "ru.png", "re.png", "ro.png", "wa.png", "wo.png", "n.png"],
        Katakana: ['a.png', 'i.png', "u.png", "e.png", "o.png", 'ka.png', 'ki.png', "ku.png", "ke.png", "ko.png", 'sa.png', 'shi.png', "su.png", "se.png", "so.png", 'at.png', 'chi.png', "tsu.png", "te.png", "to.png", 'na.png', 'ni.png', "nu.png", "ne.png", "no.png", 'ha.png', 'hi.png', "fu.png", "he.png", "ho.png", 'ma.png', 'mi.png', "mu.png", "me.png", "mo.png", 'ya.png', "yu.png", "yo.png", 'ra.png', 'ri.png', "ru.png", "re.png", "ro.png", "wa.png", "wo.png", "n.png"]
    };

    function setPage(page) {
        navigate(page);
    }

    const getRandomEntry = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    const nextQuestion = () => {
        if(currentQuestionIndex < questionAmount - 1){
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }else{
            alert("Quiz Completed!");
            setPage('/');
        }
    };

    const generateQuestions = () => {
        const questions = [];
        for(let i = 0; i < questionAmount; i++){
            const correctImage = getRandomEntry(images[subject]);
            const correctAnswer = correctImage.split('.')[0];
            const allChoices = [...images[subject].map(img => img.split('.')[0])];
            const choices = [correctAnswer];

            while(choices.length < 4){
                const randomChoice = getRandomEntry(allChoices);
                if(!choices.includes(randomChoice)){
                    choices.push(randomChoice);
                }
            }

            //shuffle
            choices.sort(() => Math.random() - 0.5);

            questions.push({
                image: correctImage,
                choices: choices,
                correctAnswer: correctAnswer
            });
        }
        return questions;
    };

    const questions = generateQuestions();
    const currentQuestion = questions[currentQuestionIndex];

    return(
        <div className="content">
            <div className="full-box">
                <div className="image-box">
                <img src={`/${subject.toLowerCase()}/${currentQuestion.image}`} alt="question"></img>
            </div>
            <div className="answer-box">
                {currentQuestion.choices.map((choice, index) => (
                    <div className="choice" key="index" onClick={nextQuestion}>{choice}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Qcard;