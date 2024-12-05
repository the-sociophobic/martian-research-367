import { FC } from 'react'

import { useAnswerNumber } from '../hooks/useAnswers'
import useParams from '../hooks/useParams'
import Answer from '../components/Answer'


const Answers: FC = () => {
  const { paramsState } = useParams()
  const currentAnswerNumber = parseInt(Object.keys(paramsState)[0] || '1') || 1
  const answers = useAnswerNumber(currentAnswerNumber)

  return (
    <div className='Answers d-flex flex-row flex-wrap align-items-start'>
      {answers.map((answer, answerIndex) =>
        <Answer
          key={`${currentAnswerNumber}-${answerIndex}`}
          animationDelay={(answerIndex + .3) * 1000}
        >
          {answer}
        </Answer>
      )}
    </div>
  )
}


export default Answers
