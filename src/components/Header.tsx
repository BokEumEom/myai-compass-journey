
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ListCheck, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "현재 상태 체크", href: "/reality-check" },
    { name: "발전 가이드", href: "/action-roadmap" },
    { name: "창의적 성장 퀘스트", href: "/creative-quest" },
    { name: "나만의 보고서", href: "/self-report" },
    { name: "서비스 소개", href: "/about" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <ListCheck className="h-6 w-6 text-compass-purple" />
          <span className="hidden font-bold sm:inline-block text-compass-purple-darkest">MyAI Compass</span>
        </Link>
        
        <div className="flex-1"></div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-compass-purple ${
                isActive(item.href) 
                  ? "text-compass-purple" 
                  : "text-compass-neutral-gray"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 ml-4">
          <Link to="/reality-check">
            <Button className="bg-compass-purple hover:bg-compass-purple-dark">
              진단 시작
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-compass-soft-purple text-compass-purple"
                    : "text-compass-neutral-gray hover:text-compass-purple hover:bg-compass-soft-purple/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
