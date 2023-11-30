import { env } from "../config/config";

export const fetchWithOutAuth = async (route, method , payload) => {
    
    const url = `${env.SERVER_PATH}/${route}`;

if(method === 'GET'){
    const response = await fetch(url);
    const data = await response.json();
    return data;
} else {
    const response = await fetch("http://localhost:5500/auth/signin", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => null);
    return data;
}
}

