const apiKey = "64405bd2"
class Api {
    url = `http://www.omdbapi.com/?apikey=${apiKey}`
    
    async getFilms(string){
        const responce = await fetch(this.url + `&s="${string}"`)
        return await responce.json()
    }

    async getFilmById(id){
        const responce = await fetch(this.url + `&i=${id}`)
        return await responce.json()
    }
}

export default new Api()