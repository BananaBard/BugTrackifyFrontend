import getErrorMessage from "@/lib/utils";
import { LoginWithEmailArgs } from "@/types";


const loginWithEmailService = async ({ email, password }: LoginWithEmailArgs) => {
    try {
        const res = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        return res
    }catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export default loginWithEmailService