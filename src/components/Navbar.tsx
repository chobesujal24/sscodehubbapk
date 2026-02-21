import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Services", href: "/#features" },
  { label: "Projects", href: "/#showcase" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { currentUser, login, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-foreground">SH</span>
          <span className="text-[10px] text-muted-foreground leading-tight">SSCODEHUB</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border/60 px-2 py-1.5 glass">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* User Auth Info or Login CTA */}
        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <a href="/profile" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                {currentUser.photoURL && (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "User"}
                    className="w-8 h-8 rounded-full border border-border"
                  />
                )}
                <span>{currentUser.displayName}</span>
              </a>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-full glass-btn text-xs font-semibold hover:bg-red-500/10 hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-btn-dark text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <LogIn className="w-4 h-4" />
              Login / Sign Up
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border/50 px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-border/50">
            {currentUser ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <a href="/profile" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                    {currentUser.photoURL && (
                      <img
                        src={currentUser.photoURL}
                        alt={currentUser.displayName || "User"}
                        className="w-8 h-8 rounded-full border border-border"
                      />
                    )}
                    <span className="text-sm font-medium text-foreground">
                      {currentUser.displayName}
                    </span>
                  </a>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="w-full text-left text-sm text-red-400 hover:text-red-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  login();
                  setMobileOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-semibold text-foreground pt-2 w-full"
              >
                <LogIn className="w-4 h-4" />
                Login / Sign Up
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );


};

export default Navbar;
