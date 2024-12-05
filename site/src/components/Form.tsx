import { FC, useState } from 'react'
import Input from './Input'
import Button from './Button'
import { post } from '../utils/requests'
import { useNavigate } from 'react-router-dom'
import isProd from '../utils/isProd'


export type FormProps = {
  questions: string[]
}


const Form: FC<FormProps> = ({
  questions
}) => {
  const [answers, setAnswers] = useState(
    questions.map(q =>
      isProd() ?
        ''
        :
        q.slice(0, 5)
    )
  )
  const navigate = useNavigate()
  const submit = async () => {
    await post('/answer', { answer: answers })
    navigate('/done')
  }

  return (
    <div className='Form'>
      {questions.map((question, questionIndex) =>
        <Input
          key={questionIndex}
          label={`${questionIndex + 1}. ${question}`}
          value={answers[questionIndex]}
          onChange={value => setAnswers([
            ...answers.slice(0, questionIndex),
            value,
            ...answers.slice(questionIndex + 1)
          ])}
        />
      )}
      <Button
        black
        className='my-4'
        disabled={answers.map(a => a.length === 0).reduce((a, b) => a || b, false)}
        onClick={submit}
      >
        Отправить
      </Button>
    </div>
  )
}


export default Form
