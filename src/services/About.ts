export class AboutUsService { 
    public static async getAboutUs() {
        return fetch("https://api.1690.tk/about_lincoln/display/all");
    }
}