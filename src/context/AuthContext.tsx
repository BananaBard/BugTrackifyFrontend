import getErrorMessage from "@/lib/utils";
import loginWithEmailService from "@/services/auth/logInWithEmail.service";
import signOutService from "@/services/auth/signOut.service";
import signUpWithEmailService from "@/services/auth/signUpWithEmail";
import { User, LoginWithEmailArgs } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AuthContext {
    user: User | null;
    token: string | null;
    signOut: () => Promise<void>;
    signUpWithEmail: ({ email, password, fullname, role }: SignUpWithEmail) => Promise<void>;
    logInWithEmail: ({ email, password }: LoginWithEmailArgs) => Promise<void>;
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
    logInWithEmail: async () => { }
});

function AuthProvider({ children }: PropsWithChildren) {
    const navigate = useNavigate()
    const [user, setUser] = useState<AuthContext['user']>(null);
    const [token, setToken] = useState<AuthContext['token']>(null);

    const signOut = async () => {
        try {
            const res = await signOutService();
            if (res.ok) {
                setToken(null);
                setUser(null);
                navigate('/');
            } else {
                toast.error('Something went wrong', {
                    description: 'Could not sing out, try again',
                    duration: 3000
                })
            }
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    }

    const signUpWithEmail = async ({ email, password, fullname, role }: SignUpWithEmail) => {
        try {
            const res = await signUpWithEmailService({ email, password, fullname, role });
            const data = await res.json();
            if (res.ok) {
                setToken(data.token);
                setUser(data.user[0]);
                navigate('/dashboard');
            } else {
                toast.error('Something went wrong', {
                    description: data.message,
                    duration: 3000
                })
            }
        } catch (error) {
            throw new Error(getErrorMessage(error))
        }
    }

    const logInWithEmail = async ({ email, password }: LoginWithEmailArgs) => {
        try {
            const res = await loginWithEmailService({ email, password });
            const data = await res.json();
            if (res.ok) {
                setToken(data.token);
                setUser(data.user[0]);
                navigate('/dashboard');
            } else {
                toast.error('Something went wrong', {
                    description: data.message,
                    duration: 3000
                })
            }
        } catch (error) {
            throw new Error(getErrorMessage(error))
        }
    }

    return (
        <authContext.Provider value={{ user, token, signOut, signUpWithEmail, logInWithEmail }}>
            {children && children}
        </authContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(authContext);
}

export default AuthProvider;