const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!res.ok) throw new Error("Error fetching fact") //con esto podemos caer en el catch
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (error) {}
}

//extraer la lógica correctamente
//retornar el lo que queremos de la api
//convertir a async la función
