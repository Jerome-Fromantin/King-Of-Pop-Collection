export const getDisques = async () => {
    const response = await fetch(process.env.PUBLIC_URL + "/disquesDB.json")
    const data = await response.json()
    return data
}

export const getDisque = async (disqueId) => {
    const disques = await getDisques()
    const disque = disques.find(item => item.id === disqueId)
    return disque
}
