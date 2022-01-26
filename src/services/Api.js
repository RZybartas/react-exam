
const API = `${process.env.REACT_APP_BASE_URL}`;
console.log(API);
export class Api {
    static async register(email, password) {
        const res = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            });
            return res.json();
    }

    static async login(email, password) {
        const res = await fetch(`${API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        return res.json();
    }

    static async getSkills(token) {
        const res = await fetch(`${API}/content/skills`, {
            method: "GET",
            headers: {authorization: `Bearer ${token}`},
        });

        return res.json();
    }

    
    static async addSkill(skills, token) {
        const res = await fetch(`${API}/content/skills`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(skills)
        })
        console.log(res);
        return res.json();
    }
}