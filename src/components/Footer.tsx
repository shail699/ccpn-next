"use client";

import { Shield, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="font-bold text-lg">Cadet College Pishin</h3>
                <p className="text-secondary text-xs">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Shaping future leaders through quality education, character building, and discipline since 2011.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#academics" className="text-white/70 hover:text-secondary transition-colors">Academics</a></li>
              <li><a href="#admissions" className="text-white/70 hover:text-secondary transition-colors">Admissions</a></li>
              <li><a href="#facilities" className="text-white/70 hover:text-secondary transition-colors">Facilities</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-white/70">Main Campus Road, Pishin, Balochistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-white/70">+92-826-410123</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-white/70">info@ccpn.edu.pk</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-white/70">www.ccpn.edu.pk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Cadet College Pishin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
