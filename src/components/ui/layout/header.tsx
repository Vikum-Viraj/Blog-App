"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create Post",
    href: "/blog/create",
  },
];

function Header() {

  const router = useRouter();

  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Next.js 15 Blog
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {navItem.label}
            </Link>
          ))}
        </nav>
        {/* placeholder for theme toggle */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild onClick={() => router.push('/auth')}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;