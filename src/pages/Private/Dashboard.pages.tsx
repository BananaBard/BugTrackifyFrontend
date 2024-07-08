import { useAuth } from "@/context/AuthContext"

const DashboardPage = () => {
    const {user} = useAuth();
    console.log(user)
    return (
        <>
            <h1 className="text-2xl mb-4">Welcome, {user?.fullname}!</h1>
        </>
    )
}

export default DashboardPage