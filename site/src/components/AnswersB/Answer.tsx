import { FC, ReactNode } from 'react'


export type AnswerProps = {
  children: ReactNode
  show: boolean
}


const Answer: FC<AnswerProps> = ({
  children,
  show
}) => {
  return (
    <div
      className={`Answer ${show ? 'Answer--appear' : 'Answer--disappear'}`}
      style={{}}
    >
      {children}
    </div>
  )
}


export default Answer
