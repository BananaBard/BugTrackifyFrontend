import getErrorMessage from "@/lib/utils";

interface SignUpWithEmailServiceArgs {
    email: string;
    password: string;
}

const signUpWithEmailService = async({email, password}: SignUpWithEmailServiceArgs) => {
    try {
        const res = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        
        if (res.ok) {
            const maxAge = data.expires_in
            document.cookie = `accessToken=${data.accessToken}; Max-Age=${maxAge}; Secure; HttpOnly; SameSite=Strict`;
        } else {
            throw new Error(data.message || 'Failed to sign up')
        }
        return data
    } catch (error) {
        throw new Error(getErrorMessage(error))
    }
}

export default signUpWithEmailService