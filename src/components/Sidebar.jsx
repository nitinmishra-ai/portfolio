import { useState } from "react";

import {
  Home,
  User,
  FolderGit2,
  Brain,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", icon: Brain },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-white/[0.08] bg-black/40 px-8 py-10 backdrop-blur-2xl lg:flex">

        {/* Name */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest">
            NITIN
          </h1>

          <p className="mt-1 text-sm tracking-[0.3em] text-white/50">
            MISHRA
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-16 flex flex-col gap-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-4 rounded-lg px-4 py-3 text-sm text-white/40 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="mt-auto flex gap-4">

          <a
            href="https://github.com/nitinmishra-ai"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/50 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nitin-mishra14/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/50 transition hover:text-white"
          >
            LinkedIn
          </a>

        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/[0.08] bg-black/70 px-6 py-4 backdrop-blur-2xl lg:hidden">

        <a
          href="#home"
          className="text-lg font-bold tracking-[0.2em]"
        >
          NITIN MISHRA
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-24 lg:hidden">

          <nav className="flex flex-col px-6">

            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 border-b border-white/[0.08] py-5 text-lg text-white/60 transition hover:text-white"
                >
                  <Icon size={20} />
                  {item.name}
                </a>
              );
            })}

            {/* Social Links */}
            <div className="mt-8 flex gap-6">

              <a
                href="https://github.com/nitinmishra-ai"
                target="_blank"
                rel="noreferrer"
                className="text-white/50 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nitin-mishra14/"
                target="_blank"
                rel="noreferrer"
                className="text-white/50 transition hover:text-white"
              >
                LinkedIn
              </a>

            </div>

          </nav>

        </div>
      )}
    </>
  );
}

export default Sidebar;