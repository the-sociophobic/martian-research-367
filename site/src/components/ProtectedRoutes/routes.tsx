import Answers from '../../pages/Answers'
import Main from '../../pages/Main'
import Done from '../../pages/Done'
import Redirect from '../Redirect'


export type RouteType = {
  to: string
  title: string
  Comp: any
  exact?: boolean
}


const routes: RouteType[] = [
  {
    to: '/answer',
    title: 'Ответы',
    Comp: <Answers />,
  },
  {
    to: '/done',
    title: 'Спасибо за ваш ответ',
    Comp: <Done />,
  },
  {
    to: '/',
    exact: true,
    title: 'Исследование марсиан 367',
    Comp: <Main />,
  },
  {
    to: '/*',
    title: 'redirect',
    Comp: <Redirect to='/' />,
  },
]


export default routes
