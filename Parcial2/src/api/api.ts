import { AttrChunorris } from "../type/types"

export const getCategories = async (): Promise<Array<AttrChunorris>> => {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json()
    console.log(data.categories);
    return data.categories
}
