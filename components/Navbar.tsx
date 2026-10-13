import Link from "next/link"
import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <div className="p-2 bg-sidebar">
            <nav>
                {/* Should create a logo and put here */}
                <Link href='/'>Home</Link> 
                <Button>Sign Up</Button>
            </nav>
        </div>
    )
}