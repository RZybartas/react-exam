
const API = 'https://autumn-delicate-wilderness.glitch.me/v1';
console.log (API)
export class Api {
    static async register(email, password) {
        const res = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            });
            console.log(res);
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
}