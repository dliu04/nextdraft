import Navbar from "@/components/Navbar"

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
      </div>
    </>
  );
}
