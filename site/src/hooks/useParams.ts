import { isUndefined, omitBy } from 'lodash'
import { useSearchParams } from 'react-router-dom'


const useParams = () => {
  const [params, setParams] = useSearchParams()
  const paramsState = Object.fromEntries(params)
  const setParamsStateLike = (paramsEdit: { [k: string]: string | undefined }) => {
    const stateWithUndefined = {
      ...paramsState,
      ...paramsEdit
    }

    setParams(omitBy(stateWithUndefined, isUndefined) as { [k: string]: string })
    setTimeout(() =>
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search.replace(/=/g, '')
      )
    , 10)
  }

  return ({ paramsState, setParamsStateLike, setParams })
}


export default useParams