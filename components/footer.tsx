import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between space-y-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Link href="/">
            <span className="font-bold">Nexus</span>
          </Link>
          <nav className="flex items-center space-x-4 text-sm">
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Nexus Team
          </a>
          . The source code is available on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
