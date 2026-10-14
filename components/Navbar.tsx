import Link from "next/link"
import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="bg-sidebar fixed w-full">
            <div className="flex flex-wrap items-center justify-between p-4">
                {/* Should create a logo and put here */}
                <Link href='/'>nextdraft</Link> 
                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link href="#">Placeholder</Link>
                        </li>
                        <li>
                            <Link href="#">Placeholder</Link>
                        </li>
                        <li>
                            <Link href="#">Placeholder</Link>
                        </li>
                    </ul>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </nav>
    )
}