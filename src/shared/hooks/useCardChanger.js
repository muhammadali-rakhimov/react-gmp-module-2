import { useEffect } from 'react'

const useCardChanger = (alternate, setAlternate) => {
  return useEffect(() => {
    setInterval(() => {
      if (!alternate) {
        setAlternate(true)
        document
          .querySelector(
            'img[src="/dist/a278d5a91f60b7245227084d19c0e10c.png"]'
          )
          .click()
      } else {
        setAlternate(false)
        document
          .querySelector(
            'img[class="cTFT2bWSObaenUIQUx6G Oki9tBCxV1prmfHw33yF"]'
          )
          .click()
      }
    }, 5000)
  }, [alternate])
}

export default useCardChanger
