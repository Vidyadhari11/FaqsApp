// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isAnswerShow: false}

  onClickButton = () => {
    this.setState(prevState => ({isAnswerShow: !prevState.isAnswerShow}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isAnswerShow} = this.state
    const imgUrl = isAnswerShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isAnswerShow ? 'minus' : 'plus'

    return (
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            <img src={imgUrl} alt={altText} className="image" />
          </button>
        </div>
        {isAnswerShow && (
          <div>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
