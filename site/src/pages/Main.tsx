import { FC } from 'react'

import Form from '../components/Form'
import questions from '../utils/questions'


const Main: FC = () => {
  return (
    <div className='container'>
      <Form questions={questions} />
    </div>
  )
}


export default Main
