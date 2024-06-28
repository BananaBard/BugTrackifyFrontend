import { PropsWithChildren } from "react"

const PageCenter = ({children}: PropsWithChildren) => {
    return (
        <main className="flex items-center justify-center max-w-4xl mx-auto py-24">
            {children}
        </main>
    )
}

export default PageCenter