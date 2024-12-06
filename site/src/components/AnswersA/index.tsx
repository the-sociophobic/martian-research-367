import { FC } from 'react'

import { useAnswerNumber } from '../../hooks/useAnswers'
import useParams from '../../hooks/useParams'
import Answer from './Answer'


const AnswersA: FC = () => {
  const { paramsState } = useParams()
  const currentAnswerNumber = parseInt(Object.keys(paramsState)[0] || '1') || 1
  const answers = useAnswerNumber(currentAnswerNumber)

  return (
    // <div className='AnswersA d-flex flex-row flex-wrap align-items-start'>
    <div className='AnswersA d-flex flex-column flex-wrap align-items-start'>
      {answers.map((answer, answerIndex) =>
        <Answer
          key={`${currentAnswerNumber}-${answerIndex}`}
          animationDelay={(answerIndex + .3) * 1000}
          offset={offsetMap.get(answerIndex % 5) || 0}
        >
          {answer}
        </Answer>
      )}
    </div>
  )
}


export default AnswersA


const offsetMap = new Map<number, number>([
  [0, 110],
  [1, 170],
  [2, 200],
  [3, 170],
  [4, 110],
])
