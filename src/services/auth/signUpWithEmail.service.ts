import getErrorMessage from "@/lib/utils";

interface SignUpWithEmailServiceArgs {
    email: string;
    password: string;
    role: 'Developer' | 'Tester' | 'Project Leader';
    fullname: string;
}

const signUpWithEmailService = async({email, password, role, fullname}: SignUpWithEmailServiceArgs) => {
    try {
        const res = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                fullname: fullname,
                role: role
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })

        return res
    } catch (error) {
        throw new Error(getErrorMessage(error))
    }
}

export default signUpWithEmailService