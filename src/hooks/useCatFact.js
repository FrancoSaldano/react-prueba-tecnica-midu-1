import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))

    //se puede pasar la función como parámetro en tl then
    //es lo mismo que .then(setFact())
    //pero estaría seteando todo el resultado de ese then...
    // y puede ser mala práctica
  }
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
