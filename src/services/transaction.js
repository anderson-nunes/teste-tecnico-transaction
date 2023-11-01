import { BASE_URL } from "../constants/urls"

export const getTransactions = async () => {

  try {
    const response = await fetch(`${BASE_URL}/transactions`)
    return await response.json()

  } catch (error) {
    console.log(error)
  }
}