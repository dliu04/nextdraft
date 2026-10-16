import Link from "next/link"
import Navbar from "@/components/Navbar"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-[80vh] bg-linear-to-b from-background via-primary/20 to-background">
        <h1 className="text-6xl text-center text-foreground font-semibold">your next draft starts here.</h1>
        <p className="text-2xl text-center mt-5 text-muted-foreground">
          pin comments, compare revisions, and more. nextdraft is a tool for artists
          who value feedback delivered seamlessly.
        </p>
        {/* Use cn helper to join class names more reliably */}
        <Link href="#" className={cn(buttonVariants({variant: "default", size: "lg"}), "mt-6")}>Sign Up</Link>
      </div>
    </>
  );
}
