import { FC, useCallback, useEffect, useRef, useState } from 'react'

import { useAnswerNumber } from '../../hooks/useAnswers'
import useParams from '../../hooks/useParams'
import Answer from './Answer'
import questions from '../../utils/questions'


const AnswersB: FC = () => {
  const { paramsState } = useParams()
  const currentAnswerNumber = parseInt(Object.keys(paramsState)[0] || '1') || 1
  const answers = useAnswerNumber(currentAnswerNumber)
  const currentQuestion = (questions[currentAnswerNumber] || '').replace('?', ':')

  const [answerVersion, setAnswerVersion] = useState(0)
  const intervalRef = useRef(-1)

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setAnswerVersion((answerVersion + 1) % answers.length)
      , 5000
    )

    return () => clearInterval(intervalRef.current)
  }, [answerVersion, answers.length])

  return (
    <div className='AnswersB pt-5 ps-3'>
      <div className='mt-5 ms-5 d-flex flex-row align-items-start'>
        <div className='me-2'>
          {currentQuestion}
        </div>
        <div className='flex-grow-1 position-relative'>
          {answers.map((answer, answerIndex) =>
            <Answer
              key={`${currentAnswerNumber}-${answerIndex}`}
              show={answerVersion === answerIndex}
            >
              {answer}
            </Answer>
          )}
        </div>
      </div>
    </div>
  )
}


export default AnswersB
