export class GeneralService { 
    public static async getRecognitions() {
        const res = await fetch("https://api.1690.tk/recognition/display/all")

        return await res.json()
    }

    public static async getTestimonials() {
        const res = await fetch("https://api.1690.tk/testimonial/display/all")

        return await res.json()
    }

    public static async getVideos() {
        const res = await fetch("https://api.1690.tk/videos/display/all")

        return await res.json()
    }
}