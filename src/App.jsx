import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [factError, setFactError] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')//con esto podemos crear el catch
        // if (!res.ok) setFactError('Error fetching fact') 
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(data.fact)
      }).catch((error) => {
        //
      })
  }, [])
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatillos</h1>
      <section>
        {imgUrl &&
          <img src={`${CAT_PREFIX_IMG_URL}${imgUrl}`} alt={'cat extracted whit the first word'} />
        }
        {fact &&
          <p>{fact}</p>
        }
      </section>
    </main>
  )
}

export default App