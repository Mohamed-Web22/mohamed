import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { 
  Mail, Phone, MapPin, ArrowRight, Clock, Users, BookOpen,
  Award, Star, MessageCircle
} from 'lucide-react';

const TelegramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer({ scrollToSection }) {
  const { t, lang } = useLanguage();

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/qimamsudanese', color: 'bg-[#414d76] hover:bg-[#d2a517]' },
    { icon: YoutubeIcon, label: 'YouTube', href: '#', color: 'bg-[#d2a517] hover:bg-[#414d76]' },
    { icon: FacebookIcon, label: 'Facebook', href: '#', color: 'bg-[#414d76] hover:bg-[#d2a517]' },
    { icon: TwitterIcon, label: 'Twitter', href: '#', color: 'bg-[#d2a517] hover:bg-[#414d76]' },
    { icon: InstagramIcon, label: 'Instagram', href: '#', color: 'bg-[#d2a517] hover:bg-[#414d76]' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: '#', color: 'bg-[#414d76] hover:bg-[#d2a517]' },
  ];

  const quickLinks = [
    { label: lang === 'ar' ? 'الرئيسية' : 'Home', href: '#home' },
    { label: lang === 'ar' ? 'من نحن' : 'About', href: '#about' },
{ label: lang === 'ar' ? 'آراء الطلاب' : 'Testimonials', href: '#testimonials' },
    { label: lang === 'ar' ? 'تواصل معنا' : 'Contact', href: '#contact' },
  ];

  const features = [
    { icon: BookOpen, text: lang === 'ar' ? 'دورات مجانية' : 'Free Courses' },
    { icon: Users, text: lang === 'ar' ? '50,000+ طالب' : '50,000+ Students' },
    { icon: Award, text: lang === 'ar' ? '50+ مدرب' : '50+ Instructors' },
    { icon: Clock, text: lang === 'ar' ? 'متاح 24/7' : 'Available 24/7' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0f2145] via-[#141f3b] to-[#0f2145] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d2a517]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#414d76]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img src="/src/assets/logo.png" alt="logo" className="w-16 h-16 object-contain" />
              </Link>
              <p className="text-[#e9efff]/80 mb-6 leading-relaxed">
                {lang === 'ar'
                  ? 'تعلّم واكتشف معنا عالمًا من الدروس المجانية، والجلسات المباشرة، وبرامج الإرشاد التي تساعدك على تطوير مهاراتك وتحقيق طموحك أينما كنت.'
                  : 'Learn and discover with us a world of free lessons, live sessions, and mentorship programs that help you build skills and reach your goals wherever you are.'}
              </p>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#d2a517]/20 to-[#414d76]/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-[#d2a517]" />
                    </div>
                    <span className="text-[#e9efff]/80 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg font-bold mb-6 text-white">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href.replace('#', ''))} className="flex items-center gap-2 text-[#e9efff]/80 hover:text-[#d2a517] transition-colors group">
                    <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''} group-hover:translate-x-1 transition-transform`} />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg font-bold mb-6 text-white">
              {lang === 'ar' ? 'تابعنا' : 'Follow Us'}
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center transition-all shadow-lg`} aria-label={social.label}>
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-[#414d76] mb-8">
          {[{ number: '50,000+', label: lang === 'ar' ? 'طالب' : 'Students', icon: Users }, { number: '200+', label: lang === 'ar' ? 'فيديو' : 'Videos', icon: BookOpen }, { number: '50+', label: lang === 'ar' ? 'مدرب' : 'Instructors', icon: Award }, { number: '95%', label: lang === 'ar' ? 'نجاح' : 'Success', icon: Star }].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-6 h-6 text-[#d2a517] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-[#e9efff]/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#414d76]">
          <div className="text-[#e9efff]/80 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} {lang === 'ar' ? 'قمم السودانية' : 'Qimam Sudanese'}. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#e9efff]/80">
            <a href="#" className="hover:text-[#d2a517] transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-[#d2a517] transition-colors">{lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
