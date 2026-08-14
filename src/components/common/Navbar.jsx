import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { ArrowRight, ChevronRight, Menu } from "lucide-react";
import { brand, navLinks } from "../../mock";
import { scrollToId } from "../../lib/scroll";
import { Container } from "./Container";
import { cn } from "../../lib/utils";
import logo from "../../assets/logo.png";

const NavLink = ({ id, label, active, onClick }) => {
  const isActive = active === id;
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <button
          type="button"
          onClick={onClick}
          className={cn(
            "relative px-3 py-2 text-sm font-medium rounded-full transition-colors",
            "hover:bg-white/10 hover:text-white",
            isActive ? "text-white" : "text-white/80",
          )}
        >
          {label}
          <span
            className={cn(
              "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px rounded-full",
              "transition-opacity",
              isActive ? "opacity-100 bg-white/80" : "opacity-0 bg-white/70",
            )}
          />
        </button>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export const Navbar = ({ activeId }) => {
  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 h-[76px] bg-[#0b3f8c] backdrop-blur-md" />
      <Container className="relative">
        <div className="h-[76px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="flex items-center gap-3"
            aria-label="Kembali ke Beranda"
          >
            <div className="h-10 flex items-center">
              <img
                src={logo}
                alt="Logo Cening Community"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="leading-tight text-left">
              <div className="text-white font-semibold tracking-tight">
                {brand.name}
              </div>
              <div className="text-xs text-white/75">Community Profile</div>
            </div>
          </button>

          <nav className="hidden lg:block" aria-label="Navigasi Utama">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((l) => (
                  <NavLink
                    key={l.id}
                    id={l.id}
                    label={l.label}
                    active={activeId}
                    onClick={() => scrollToId(l.id)}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollToId("contact")}
              className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white shadow-lg shadow-[#2F6BFF]/15"
            >
              Kenal Lebih Dekat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="secondary"
                  aria-label="Buka Menu"
                  className="bg-white/10 text-white hover:bg-white/15 border border-white/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[380px]">
                <div className="text-slate-900 font-semibold">Menu</div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                  {navLinks.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => {
                        scrollToId(l.id);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-xl transition-colors",
                        activeId === l.id
                          ? "bg-slate-900 text-white"
                          : "hover:bg-slate-100 text-slate-800",
                      )}
                    >
                      <span className="inline-flex items-center justify-between w-full">
                        {l.label}
                        <ChevronRight className="h-4 w-4 opacity-70" />
                      </span>
                    </button>
                  ))}
                  <Separator className="my-2" />
                  <Button
                    onClick={() => scrollToId("contact")}
                    className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white"
                  >
                    Meet Founder
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
