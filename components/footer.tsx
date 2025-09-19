import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Pebbling", href: "#pebbling" },
        { name: "Hibiscus", href: "#hibiscus" },
        { name: "Sheldon", href: "#sheldon" },
        { name: "Protocol", href: "#protocol" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Use Cases", href: "#use-cases" },
        { name: "Careers", href: "#careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Support", href: "#support" },
        { name: "Community", href: "#community" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Security", href: "#security" },
      ],
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8">
                <Image src="/penguin-logo.png" alt="Pebbling Logo" fill className="object-contain" />
              </div>
              <span className="text-lg font-bold text-foreground">Pebbling</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Transforming businesses with intelligent solutions that drive growth, efficiency, and innovation in the
              digital age.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Pebbling. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="text-sm text-muted-foreground">Made with 🐧 by the Pebbling team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
