
const API = 'https://autumn-delicate-wilderness.glitch.me/v1/auth';
console.log (API)
export class Auth {
    static async register(email, password) {
        const res = await fetch(`${API}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            });
            console.log(res);
            return res.json();
    }

    static async login(email, password) {
        const res = await fetch(`${API}/login`, {
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
}