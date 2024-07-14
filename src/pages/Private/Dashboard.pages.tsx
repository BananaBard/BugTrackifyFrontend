import { useAuth } from "@/context/AuthContext"

const DashboardPage = () => {
    const {user} = useAuth();
    return (
        <>
            <h1 className="mb-4">Welcome, {user?.fullname}!</h1>
        </>
    )
}

export default DashboardPage