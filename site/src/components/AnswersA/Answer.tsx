import { FC, ReactNode } from 'react'


export type AnswerProps = {
  children: ReactNode
  animationDelay: number
  offset: number
}


const Answer: FC<AnswerProps> = ({
  children,
  animationDelay,
  offset
}) => {
  return (
    <div
      className={`Answer`}
      style={{
        animationDelay: animationDelay + 'ms',
        marginLeft: offset + 'px'
      }}
    >
      {children}
    </div>
  )
}


export default Answer
