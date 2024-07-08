import getErrorMessage from "@/lib/utils";
import signUpWithEmailService from "@/services/auth/signUpWithEmail";
import { User } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface AuthContext {
    user: User | null;
    token: string | null;
    signOut: () => Promise<void>;
    signUpWithEmail: ({ email, password, fullname, role }: SignUpWithEmail) => Promise<void>;
    updateUserData: () => Promise<void>;
}

interface SignUpWithEmail {
    email: string;
    password: string;
    fullname: string;
    role: 'Developer' | 'Tester' | 'Project Leader';
}

const authContext = createContext<AuthContext>({
    user: null,
    token: null,
    signOut: async () => { },
    signUpWithEmail: async () => { },
    updateUserData: async () => {}
});

function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<AuthContext['user']>(null);
    const [token, setToken] = useState<AuthContext['token']>(null);

    const signOut = async () => {
        // Logica signout
    }

    const signUpWithEmail = async ({ email, password, fullname, role }: SignUpWithEmail) => {
        try {
            const data = await signUpWithEmailService({ email, password, fullname, role });
            console.log(data)
            setToken(data.token);
            setUser(data.user);
        } catch(error) {
            throw new Error(getErrorMessage(error))
        }
    }

    const updateUserData = async() => {

    }

    return (
        <authContext.Provider value={{ user, token, signOut, signUpWithEmail, updateUserData }}>
            {children && children}
        </authContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(authContext);
}

export default AuthProvider;