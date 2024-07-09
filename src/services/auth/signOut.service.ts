import getErrorMessage from "@/lib/utils";

const signOutService = async () => {
    try {
        const res = await fetch('http://localhost:3000/auth/signout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        const data = await res.json();
        return data
    }
    catch (error) {
        throw new Error(getErrorMessage(error));
    }
}

export default signOutService;