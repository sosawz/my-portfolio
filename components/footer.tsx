import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-2">&copy; {currentYear} Oorawan Sukngam. All rights reserved.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground mb-2">
              Made with <Heart className="inline-block text-red-500" size={16} /> using Next.js and Tailwind CSS
            </p>
            <nav className="flex space-x-4">
              <Link href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

