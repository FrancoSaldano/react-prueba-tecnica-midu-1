import { useState, useEffect } from 'react'
import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'



const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImg({ fact })
  // se pasa {fact} como objeto como buena práctica de js
  // no importa si el dia de mañana agrego algo aquí. Que donde creamos la función
  // no pasará nada ya que recibimos como parámetro { fact } y por ende también nos
  //obliga a escribir las variables de la misma manera.
  // lo mismo pasaría donde creamos la función, podemos escribir que recibe
  // x parámetros que en la llamada aquí no va a pasar nada ya que solo le mandamos
  //{facts}

  const handleClick = () => {
    refreshFact()
  }


  return (
    <main>
      <h1>App de gatillos</h1>
      <section>
        {imgUrl &&
          <img src={imgUrl} alt={'cat extracted whit the first three words'} />
        }
        {fact &&
          <p>{fact}</p>
        }
      </section>
      <button onClick={() => handleClick()}>Get new Fact</button>
    </main>
  )
}

export default App