import { FC, ReactNode, useEffect } from 'react'


export type AnswerProps = {
  children: ReactNode
  animationDelay: number
}


const Answer: FC<AnswerProps> = ({
  children,
  animationDelay
}) => {
  useEffect

  return (
    <div
      className={`Answer`}
      style={{ animationDelay: animationDelay + 'ms' }}
    >
      {children}
    </div>
  )
}


export default Answer
