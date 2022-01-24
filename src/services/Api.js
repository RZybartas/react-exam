const API = `${process.env.REACT_APP_BASE_URL}`

export class Api {
    static async all() {
        const res = await fetch(API);

        return res.json()
    }
}