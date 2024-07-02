import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    history: string[]
}

const DashboardBreadcrum = ({ history }: BreadcrumbProps) => {
    const breadItems = []
    let breadPage = <></>

    for (let i = 0; i < history.length; i++) {
        let word = history[i]
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1)

        if (capitalized == 'Dashboard') {
            continue
        }
        if (i == history.length - 1) {
            breadPage = (
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        {capitalized}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            )
        } else {
            breadItems.push((
                <React.Fragment key={i}>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to={`/dashboard/${history[i]}`}>{capitalized}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </React.Fragment>
            ))
        }
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {breadItems}
                {breadPage}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default DashboardBreadcrum