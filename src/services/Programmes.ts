export class ProgrammesService { 
    public static async getProgrammes() {
        const res = await fetch("https://api.1690.tk/programs/display/all")

        return await res.json()
    }

    public static async getProgramme(code: string) {
        const res = await fetch(`https://api.1690.tk/program/display/one/${code}`)

        return await res.json()
    }
}