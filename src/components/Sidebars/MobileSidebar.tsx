import { MenuIcon, XIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet"
import { ModeToggle } from "../ModeToggle"

const MobileSidebar = () => {
    return (
        <div className="absolute top-3 left-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="mx-2 my-4">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side='left'>
                    <div className="flex justify-between items-center">
                        <h2 className=''>🐞 BugTrackify</h2>
                        <div className="flex gap-2">
                            <ModeToggle/>
                            <SheetClose asChild>
                                <Button variant='outline' className="rounded-full">
                                    <XIcon />
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileSidebar