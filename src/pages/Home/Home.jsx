import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { motion as Motion, LazyMotion, domAnimation, useInView, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Quote, Users, Award, Globe, Heart, Play, Youtube, Star, Clock,
  Mail, Phone, MapPin, Send, ArrowRight, MessageCircle, Target,
  TrendingUp, BookOpen, GraduationCap, Award as AwardIcon, Users as UsersIcon,
  Sparkles, Zap, Shield, Rocket, ChevronLeft, ChevronRight, PlayCircle,
  HelpCircle, CheckCircle2, ArrowDown, Instagram, Youtube as YoutubeIcon
} from 'lucide-react';

// Custom Telegram Icon Component
const TelegramIcon = ({ className = "w-8 h-8 sm:w-10 sm:h-10 text-white" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
import { useLanguage } from '../../context/LanguageContext.jsx';

// Motion container for performance
const MotionContainer = ({ children }) => (
  <LazyMotion features={domAnimation}>
    {children}
  </LazyMotion>
);

// Custom hook for scroll animations
function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', ...options });
  return [ref, isInView];
};

// 3D Tilt Card Component
function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      node.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) scale(1.02)`;
    };
    
    const handleLeave = () => {
      node.style.transform = '';
    };
    
    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, []);
  
  return (
    <Motion.div 
      ref={ref} 
      className={`transition-all will-change-transform ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </Motion.div>
  );
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useScrollAnimation();
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  
  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

// Floating Orbs Background
const FloatingOrbs = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      particles = [];
      const count = Math.min(50, Math.floor(window.innerWidth / 15));
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          color: Math.random() > 0.5 ? '#F5DEB3' : '#d2a517'
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    resize();
    createParticles();
    animate();
    
    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

// Success Story Card
const SuccessStoryCard = ({ story, index, lang }) => {
  const [ref, inView] = useScrollAnimation();
  
  return (
    <Motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
      className="w-full"
    >
      <TiltCard className="h-full">
        <div className="bg-gradient-to-br from-[#141f3b]/90 via-[#0f2145]/95 to-[#0f2145]/90 rounded-3xl overflow-hidden shadow-2xl border border-[#414d76]/30 h-full backdrop-blur-sm">
          <div className="h-1.5 bg-gradient-to-r from-[#d2a517] via-[#d2a517] to-amber-500" />
          
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#d2a517] to-[#414d76] flex items-center justify-center text-slate-900 text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">
                {story.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-base sm:text-lg truncate">{story.name}</h4>
                <p className="text-[#d2a517] text-xs sm:text-sm truncate">{story.role}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-gradient-to-r from-[#d2a517]/20 to-[#414d76]/20 border border-[#d2a517]/30 rounded-full">
                <span className="text-[#d2a517] text-xs font-medium">{story.badge}</span>
              </span>
            </div>
            
            <div className="relative mb-4">
              <Quote className="absolute -top-1 -start-1 w-6 h-6 text-[#d2a517]/20" />
              <p className="text-[#e9efff]/80 text-sm sm:text-base leading-relaxed ps-3 italic line-clamp-3">{story.quote}</p>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-[#414d76]/30">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-center">
                  <div className="text-white font-bold text-sm">{story.year}</div>
                  <div className="text-[#e9efff]/70 text-[10px]">{lang === 'ar' ? 'السنة' : 'Year'}</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-[#141f3b]" />
                <div className="text-center">
                  <div className="text-white font-bold text-sm truncate max-w-[80px]">{story.location}</div>
                  <div className="text-[#e9efff]/70 text-[10px]">{lang === 'ar' ? 'الموقع' : 'Location'}</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-[#d2a517] fill-[#d2a517]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </Motion.div>
  );
};

// Testimonials Carousel
const TestimonialsCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref] = useScrollAnimation();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [items.length]);
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  
  return (
    <div ref={ref} className="relative max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <Motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="relative inline-block mb-6">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#d2a517] mx-auto" />
            <Motion.div 
              className="absolute -inset-2 bg-[#d2a517]/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light italic">
            "{items[currentIndex].quote}"
          </p>
          
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Motion.div 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#d2a517] to-[#414d76] flex items-center justify-center text-slate-900 text-lg sm:text-xl font-bold shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              {items[currentIndex].name.charAt(0)}
            </Motion.div>
            <div className="text-start">
              <p className="font-bold text-white text-base sm:text-lg">{items[currentIndex].name}</p>
              <p className="text-[#d2a517] text-sm">{items[currentIndex].role}</p>
            </div>
          </div>
        </Motion.div>
      </AnimatePresence>
      
      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button 
          onClick={goToPrev}
          className="p-2 rounded-full bg-[#0f2145]/70 text-white hover:bg-[#d2a517] hover:text-slate-900 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'bg-[#d2a517] w-8' 
                  : 'bg-[#414d76] w-2 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext}
          className="p-2 rounded-full bg-[#0f2145]/70 text-white hover:bg-[#d2a517] hover:text-slate-900 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// Contact Section
const ContactSection = ({ lang }) => {
  const [ref, inView] = useScrollAnimation();
  const contactMethods = [
    { icon: Phone, title: lang === 'ar' ? 'اتصل بنا' : 'Call Us', value: '+249 123 456 789', color: 'from-[#d2a517] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#d2a517]' },
    { icon: Mail, title: lang === 'ar' ? 'راسلنا' : 'Email Us', value: 'info@qimamsudanese.com', color: 'from-[#414d76] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#414d76]' },
    { icon: MapPin, title: lang === 'ar' ? 'موقعنا' : 'Visit Us', value: lang === 'ar' ? 'الخرطوم، السودان' : 'Khartoum, Sudan', color: 'from-[#d2a517] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#d2a517]' },
    { icon: MessageCircle, title: lang === 'ar' ? 'واتساب' : 'WhatsApp', value: '+249 123 456 789', color: 'from-[#d2a517] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#d2a517]' },
  ];
  
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-[#0f2145] via-[#141f3b] to-[#0f2145] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <Motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#d2a517]/20 to-[#414d76]/20 text-[#d2a517] text-sm font-semibold rounded-full mb-4 border border-[#d2a517]/30"
          >
            {lang === 'ar' ? '📞 تواصل معنا' : '📞 Contact Us'}
          </Motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h2>
          <p className="text-[#e9efff]/80 text-base sm:text-lg max-w-2xl mx-auto">{lang === 'ar' ? 'نحن هنا لمساعدتك! تواصل معنا بأي طريقة تناسبك' : 'We are here to help! Contact us in any way that suits you'}</p>
        </Motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-12">
          {contactMethods.map((method, i) => (
            <Motion.a 
              key={i} 
              href="#" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="block p-4 sm:p-6 bg-[#0f2145]/40 border border-[#414d76]/30 rounded-2xl hover:border-[#d2a517]/30 transition-all group backdrop-blur-sm"
            >
              <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r ${method.color} ${method.hover} rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg group-hover:shadow-[#d2a517]/25 transition-shadow`}>
                <method.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-1 text-center text-sm sm:text-base">{method.title}</h4>
              <p className="text-[#e9efff]/80 text-xs sm:text-sm text-center truncate">{method.value}</p>
            </Motion.a>
          ))}
        </div>
        
        <Motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input 
                  type="text" 
                  placeholder={lang === 'ar' ? 'الاسم' : 'Name'} 
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2145]/70 border border-[#414d76] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d2a517] focus:ring-2 focus:ring-[#d2a517]/20 transition-all text-base"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} 
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2145]/70 border border-[#414d76] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d2a517] focus:ring-2 focus:ring-[#d2a517]/20 transition-all text-base"
                />
              </div>
            </div>
            <div>
              <textarea 
                rows={4} 
                placeholder={lang === 'ar' ? 'رسالتك...' : 'Your Message...'} 
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2145]/70 border border-[#414d76] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d2a517] focus:ring-2 focus:ring-[#d2a517]/20 transition-all resize-none text-base"
              />
            </div>
            <Motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#d2a517] to-[#414d76] text-slate-900 font-bold rounded-xl hover:from-[#414d76] hover:to-[#d2a517] transition-all shadow-lg shadow-[#d2a517]/25 flex items-center justify-center gap-2 text-base"
            >
              <Send className="w-5 h-5" />
              {lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </Motion.button>
          </form>
        </Motion.div>
      </div>
    </section>
  );
};

// Telegram Section with enhanced animations
const TelegramSection = ({ lang }) => {
  const [ref, inView] = useScrollAnimation();
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#d2a517] via-[#414d76] to-[#d2a517] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Motion.div 
          className="absolute top-0 -start-20 w-40 h-40 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div 
          className="absolute bottom-0 -end-20 w-40 h-40 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Floating icons */}
        {[...Array(6)].map((_, i) => (
          <Motion.div
            key={i}
            className="absolute text-white/10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            <BookOpen className="w-8 h-8 sm:w-12 sm:h-12" />
          </Motion.div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <Motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <Motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <TelegramIcon />
          </Motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {lang === 'ar' ? 'انضم لقناتنا على تيلجرام' : 'Join Our Telegram Channel'}
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            {lang === 'ar' ? 'احصل على أحدث الدورات والنصائح التعليمية مباشرة في هاتفك' : 'Get the latest courses and educational tips directly on your phone'}
          </p>
          
          <Motion.a 
            href="https://t.me/qimamsudanese" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0f2145] font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-base sm:text-lg"
          >
            <TelegramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{lang === 'ar' ? 'انضم الآن' : 'Join Now'}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Motion.a>
          
          <div className="flex justify-center gap-6 sm:gap-10 mt-8 sm:mt-12">
            <Motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">10K+</div>
              <div className="text-white/70 text-sm">{lang === 'ar' ? 'مشترك' : 'Subscribers'}</div>
            </Motion.div>
            <div className="w-px h-10 sm:h-12 bg-white/30 self-center" />
            <Motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-white/70 text-sm">{lang === 'ar' ? 'محتوى' : 'Contents'}</div>
            </Motion.div>
            <div className="w-px h-10 sm:h-12 bg-white/30 self-center hidden sm:block" />
            <Motion.div 
              className="text-center hidden sm:block"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-white/70 text-sm">{lang === 'ar' ? 'نشط' : 'Active'}</div>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};


// Scroll to section helper
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

// Main Home Component
const Home = () => {
  const { t, lang } = useLanguage();
  const heroRef = useRef(null);
  
  // Data
  const testimonials = [
    { name: 'خالد Ibrahim', role: lang === 'ar' ? 'طالب هندسة' : 'Engineering Student', quote: lang === 'ar' ? 'أفضل منصة تعليمية للطلاب السودانيين. أنصح بها الجميع!' : 'The best educational platform for Sudanese students. I recommend it to everyone!' },
    { name: 'Sara Ahmed', role: lang === 'ar' ? 'طالبة تقنية' : 'Tech Student', quote: lang === 'ar' ? 'المحتوى عالي الجودة والمدربين روائع. شكراً قمم!' : 'High quality content and great instructors. Thanks Qimam!' },
    { name: 'Jamal Hussein', role: lang === 'ar' ? 'خريج حديث' : 'Recent Graduate', quote: lang === 'ar' ? 'ساعدتني في الحصول على وظيفتي الأولى. شكراً جزيلاً!' : 'Helped me get my first job. Thank you so much!' }
  ];
  
  return (
    <MotionContainer>
      <FloatingOrbs />
      
      <main className="relative z-10">
        {/* ==================== HERO SECTION ==================== */}
        <section 
          ref={heroRef} 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #191970 0%, #2a4a7f 40%, #3a5a8f 70%, #F5DEB3 100%)' }}
        >
          {/* Animated gradient overlay */}
          <Motion.div 
            className="absolute inset-0 opacity-30"
            style={{ background: 'linear-gradient(45deg, transparent 30%, rgba(245,222,179,0.1) 50%, transparent 70%)' }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <Motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 sm:space-y-6 text-center lg:text-start"
              >
                <Motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {t('home.hero.headline', { defaultValue: '' })}
                </Motion.h1>
                
                <Motion.p 
                  className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {t('home.hero.subtitle', { defaultValue: '' })}
                </Motion.p>
                
                <Motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Motion.button 
                    onClick={() => scrollToSection('about')}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,222,179,0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#d2a517] to-[#414d76] text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-base sm:text-lg min-h-[48px] sm:min-h-[56px]"
                  >
                    {t('home.hero.cta_primary', { defaultValue: 'Start Learning' })}
                  </Motion.button>
                  
                  <Motion.button 
                    onClick={() => scrollToSection('courses')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base sm:text-lg min-h-[48px] sm:min-h-[56px] flex items-center justify-center gap-2"
                  >
                    <PlayCircle className="w-5 h-5" />
                    {lang === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}
                  </Motion.button>
                </Motion.div>
                
                {/* Stats */}
                <Motion.div 
                  className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { number: '50K+', label: lang === 'ar' ? 'طالب' : 'Students' },
                    { number: '200+', label: lang === 'ar' ? 'دورة' : 'Courses' },
                    { number: '50+', label: lang === 'ar' ? 'مدرب' : 'Instructors' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#d2a517]">{stat.number}</div>
                      <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </Motion.div>
              </Motion.div>
              
              {/* Right Content - Animated Visual */}
              <Motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hidden lg:flex justify-center items-center"
              >
                <div className="relative w-80 h-80">
                  {/* Rotating rings */}
                  <Motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-4 border-dashed border-white/10 rounded-full"
                  />
                  <Motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-8 border-4 border-dashed border-amber-500/20 rounded-full"
                  />
                  <Motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-16 border-4 border-dashed border-white/15 rounded-full"
                  />
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Motion.div 
                        className="text-6xl font-bold text-white mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        50K+
                      </Motion.div>
                      <div className="text-[#d2a517] text-lg">{lang === 'ar' ? 'طالب نشط' : 'Active Students'}</div>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <Motion.div 
                    className="absolute -top-4 -end-4 w-14 h-14 bg-gradient-to-r from-[#d2a517] to-[#414d76] rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <BookOpen className="w-7 h-7 text-slate-900" />
                  </Motion.div>
                  <Motion.div 
                    className="absolute -bottom-4 -start-4 w-14 h-14 bg-gradient-to-r from-[#d2a517] to-[#414d76] rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <AwardIcon className="w-7 h-7 text-white" />
                  </Motion.div>
                  <Motion.div 
                    className="absolute top-1/2 -end-8 w-12 h-12 bg-gradient-to-r from-[#414d76] to-[#d2a517] rounded-xl flex items-center justify-center shadow-lg hidden"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <UsersIcon className="w-6 h-6 text-white" />
                  </Motion.div>
                </div>
              </Motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <Motion.div 
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex flex-col items-center text-white/70 hover:text-white transition-colors p-2"
              aria-label="Scroll down"
            >
              <span className="text-xs sm:text-sm mb-2">{t('home.hero.scroll_hint', { defaultValue: 'Scroll' })}</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </Motion.div>
        </section>
        
        {/* ==================== ABOUT SECTION ==================== */}
        <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d2a517]/30 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{t('about.overviewTitle', { defaultValue: 'تعرّف على قمم' })}</h2>
              <p className="text-[#e9efff]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">{t('about.overviewText', { defaultValue: '' })}</p>
            </Motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: PlayCircle, title: lang === 'ar' ? 'فيديوهات تعليمية' : 'Vision', text: t('about.vision.text', { defaultValue: '' }), color: 'from-[#d2a517] to-[#414d76]' },
                { icon: MessageCircle, title: lang === 'ar' ? 'بوصلة قمم' : 'Mission', text: t('about.mission.text', { defaultValue: '' }), color: 'from-[#d2a517] to-[#414d76]' },
                { icon: TelegramIcon, title: lang === 'ar' ? 'بوت تلجرام' : 'Telegram Bot', text: lang === 'ar' ? 'يساعدك على الوصول السريع إلى الدروس والمواد التعليمية بسهولة.' : 'Helps you quickly access lessons and learning materials with ease.', color: 'from-[#d2a517] to-[#414d76]' },
                { icon: HelpCircle, title: lang === 'ar' ? 'الدعم والإرشاد' : 'Support & Guidance', text: lang === 'ar' ? 'نساعدك على تجاوز التوتر والضغط الدراسي من خلال نصائح وتوجيه مستمر.' : 'We help you overcome stress and academic pressure with ongoing tips and guidance.', color: 'from-[#d2a517] to-[#414d76]' }
              ].map((item, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#0f2145]/40 border border-[#414d76]/30 p-5 sm:p-6 sm:p-8 rounded-2xl backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                  {item.text && <p className="text-[#e9efff]/80 leading-relaxed text-sm sm:text-base">{item.text}</p>}
                  {item.items && (
                    <ul className="space-y-2">
                      {(t('about.values.items', { returnObjects: true, defaultValue: [] }) || []).map((v, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#e9efff]/80 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#d2a517] flex-shrink-0" />
                          <span className="truncate">{v.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Motion.div>
              ))}
            </div>
          </div>
        </section>
        
        
        {/* ==================== TESTIMONIALS SECTION ==================== */}
        <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-r from-[#0f2145] via-[#141f3b] to-[#0f2145] relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#d2a517]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#414d76]/5 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{lang === 'ar' ? 'ماذا يقول طلابنا' : 'What Our Students Say'}</h2>
            </Motion.div>
            
            <TestimonialsCarousel items={testimonials} />
          </div>
        </section>
        
        {/* ==================== TELEGRAM SECTION ==================== */}
        <TelegramSection lang={lang} />
        
        {/* ==================== CONTACT SECTION ==================== */}
        <ContactSection lang={lang} />
      </main>
    </MotionContainer>
  );
};

export default Home;
