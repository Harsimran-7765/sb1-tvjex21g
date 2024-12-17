import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-900/20 p-8 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-8">
              <Mail className="h-6 w-6 text-purple-400 mr-2" />
              <a
                href="mailto:AIMLHUBJIIT@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                AIMLHUBJIIT@gmail.com
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <SocialLink href="#" icon={<Github className="h-6 w-6" />} />
              <SocialLink href="#" icon={<Linkedin className="h-6 w-6" />} />
              <SocialLink href="#" icon={<Twitter className="h-6 w-6" />} />
              <SocialLink
                href="https://www.instagram.com/aiml.jiit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                icon={<Instagram className="h-6 w-6" />}
              />
              <SocialLink
                href="https://chat.whatsapp.com/B6LyQMpACJB7n8bOqBG9OR"
                icon={<MessageSquare className="h-6 w-6" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}