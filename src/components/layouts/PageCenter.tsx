import { PropsWithChildren } from "react"

const PageCenter = ({children}: PropsWithChildren) => {
    return (
        <main className="flex items-center justify-center max-w-4xl mx-auto py-44">
            {children}
        </main>
    )
}

export default PageCenter