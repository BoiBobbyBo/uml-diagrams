import { PureComponent as Component } from "react";
import { questions } from "./qstate";

const propTypes = {};

const defaultProps = {};

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestionIndex: 0,
      selectedAnswer: null,
    };
  }

  handleNextQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex:
        (prevState.currentQuestionIndex + 1) % questions.length,
      selectedAnswer: null,
    }));
  };

  handleAnswerClick = (answer) => {
    this.setState({ selectedAnswer: answer });
  };

  render() {
    const { currentQuestionIndex, selectedAnswer } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">Tests</h3>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <h2 className="text-lg font-semibold py-3">
              {currentQuestion.question}
            </h2>
            {selectedAnswer !== null && (
              <button
                onClick={this.handleNextQuestion}
                className="bg-[#eee] hidden sm:block"
              >
                Nākamais jautājums
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 self-stretch">
            {currentQuestion.answerOptions.map((option, index) => {
              let buttonColor = "";

              if (selectedAnswer !== null) {
                if (option.isCorrect) {
                  buttonColor = "#d6f6d5";
                }

                if (selectedAnswer === option.answer && !option.isCorrect) {
                  buttonColor = "#ff9a98";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => this.handleAnswerClick(option.answer)}
                  className="bg-[#e1e5e6] w-full sm:w-auto"
                  style={{
                    backgroundColor: buttonColor,
                  }}
                >
                  {option.answer}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <button
              onClick={this.handleNextQuestion}
              className="self-stretch bg-[#eee] block sm:hidden"
            >
              Nākamais jautājums
            </button>
          )}
        </div>
      </div>
    );
  }
}

Test.propTypes = propTypes;

Test.defaultProps = defaultProps;

export default Test;