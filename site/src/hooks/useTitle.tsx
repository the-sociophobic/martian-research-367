import React from 'react'


const useTitle = ( title?: string ) => {
  const res = 'Исследование Марсиан 367: ' + (title || '')

  React.useEffect(() => {
    document.title = res
  }, [title])

  return res
}


export default useTitle
