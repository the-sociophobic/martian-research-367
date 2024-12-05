import { useQuery } from 'react-query'

import { get } from '../utils/requests'
import { AnswerType } from '../types/answer.type'


export const useAnswers = () => useQuery('answers', getAnswers)

export const useAnswerNumber = (answerNumber: number) => {
  const { data: answers } = useAnswers()

  if (!answers)
    return []

  return answers.map(answer => answer[answerNumber] || 'Некорректный номер вопроса')
}


const getAnswers = () => get<AnswerType[]>('/answers')
