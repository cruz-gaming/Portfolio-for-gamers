import React from 'react';
import { ArrowUp, Youtube, Disc as Discord, Instagram, Twitter } from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import useScrollProgress from '../../hooks/useScrollProgress';

const Footer = () => {
  const { scrollToTop } = useScrollProgress();
  const currentYear = new Date().getFullYear();
  const copyrightText = siteConfig.footer.copyright.replace('{year}', currentYear);

  return (
    <footer className="relative bg-surface border-t border-app-border pt-16 pb-12 overflow-hidden">
      {/* Top Cyber Line Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-app-border">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.branding.logo}
                alt={siteConfig.branding.channelName}
                className="w-10 h-10 drop-shadow-[0_0_12px_var(--color-primary-glow)]"
              />
              <span className="text-2xl font-orbitron font-black text-app-text tracking-wider uppercase">
                {siteConfig.branding.channelName}
              </span>
            </div>
            <p className="text-sm font-rajdhani text-app-muted max-w-md leading-relaxed">
              {siteConfig.branding.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.youtube.enabled && (
                <a
                  href={siteConfig.social.youtube.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass-panel hover:border-red-500 hover:text-red-500 text-app-muted transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.kick.enabled && (
                <a
                  href={siteConfig.social.kick.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full glass-panel text-xs font-orbitron font-bold text-emerald-400 hover:border-emerald-500 transition-colors"
                >
                  KICK
                </a>
              )}
              {siteConfig.social.discord.enabled && (
                <a
                  href={siteConfig.social.discord.inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass-panel hover:border-indigo-400 hover:text-indigo-400 text-app-muted transition-colors"
                  aria-label="Discord Server"
                >
                  <Discord className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.instagram.enabled && (
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass-panel hover:border-pink-500 hover:text-pink-500 text-app-muted transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.twitter.enabled && (
                <a
                  href={siteConfig.social.twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass-panel hover:border-sky-400 hover:text-sky-400 text-app-muted transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-orbitron font-bold text-primary uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-rajdhani">
              {siteConfig.navigation.slice(0, 5).map((nav) => (
                <li key={nav.label}>
                  <a
                    href={nav.href}
                    className="text-app-muted hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary text-xs">›</span> {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links & Battle Specs */}
          <div>
            <h4 className="text-sm font-orbitron font-bold text-primary uppercase tracking-wider mb-4">
              Creator Hub
            </h4>
            <ul className="space-y-2 text-sm font-rajdhani">
              {siteConfig.navigation.slice(5).map((nav) => (
                <li key={nav.label}>
                  <a
                    href={nav.href}
                    className="text-app-muted hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary text-xs">›</span> {nav.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-secondary font-semibold hover:underline flex items-center gap-1.5"
                >
                  <span className="text-secondary text-xs">›</span> Sponsorship Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-rajdhani text-app-muted">
          <div>
            {copyrightText} • <span className="text-app-text">{siteConfig.footer.developer}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>{siteConfig.footer.disclaimer}</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-panel hover:border-primary text-app-text hover:text-primary transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
