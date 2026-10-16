import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="from-background via-primary/20 to-background flex min-h-[90vh] flex-col items-center justify-center bg-linear-to-b">
        <h1 className="text-foreground text-center text-6xl font-semibold">
          your next draft starts here.
        </h1>
        <p className="text-muted-foreground mt-5 text-center text-2xl">
          pin comments, compare revisions, and more. nextdraft is a tool for artists who value
          feedback delivered seamlessly.
        </p>
        {/* Use cn helper to join class names more reliably */}
        <Link href="#" className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'mt-6')}>
          Sign Up
        </Link>
      </div>
    </>
  );
}
