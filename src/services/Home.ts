export class HomeService { 
    public static async getNews() {
        const res = await fetch("https://api.1690.tk/news/display/batch/News/0/2");

        return await res.json()
    }

    public static async getEvents() {
        const res = await fetch("https://api.1690.tk/news/display/batch/Event/0/2");

        return await res.json()
    }

    public static async getSliders() {
        const res = await fetch("https://api.1690.tk/sliders/display/all")

        return await res.json()
    }
}