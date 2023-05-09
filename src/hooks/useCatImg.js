import { useEffect, useState } from "react"

const CAT_PREFIX_IMG_URL = "https://cataas.com"

export function useCatImg({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(" ", 3).join(" ")

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

  return { imgUrl: `${CAT_PREFIX_IMG_URL}${imgUrl}` }
}

//creando customHook
//esto es una caja negra donde no sabemos como funciona pero
//hace lo que esperamos. En este caso retornar {imgUrl = 'https://...'}
