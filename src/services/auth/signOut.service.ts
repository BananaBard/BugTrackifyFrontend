import getErrorMessage, { baseUrl } from "@/lib/utils";

const signOutService = async () => {
    try {
        const res = await fetch(`${baseUrl}auth/signout`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        return res
    }
    catch (error) {
        throw new Error(getErrorMessage(error));
    }
}

export default signOutService;