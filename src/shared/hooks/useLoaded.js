import { useEffect } from 'react'

const useLoaded = (isDone, isSetDone) => {
  return useEffect(() => {
    if (isDone === true) {
      return
    } else {
      isSetDone(true)
      document
        .querySelector('img[src="/dist/145c387b74319a802942345077f18441.png"]')
        .click()
    }
  }, [isDone])
}

export default useLoaded
