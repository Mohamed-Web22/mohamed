import { Link } from 'react-router-dom';
import StarsBackground from '../../components/StarsBackground.jsx';
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
    { name: 'رزان كرار', quote: 'قمم كانت سند حقيقي لينا، دعمتنا نفسيًا وساعدتنا نفهم الامتحانات بثقة.' },
    { name: 'محمد هاشم', quote: 'في وقت كنت تايه وموقّف، قمم رجعتني للطريق وساعدتني أبدأ من جديد لحدي ما وصلت للامتحان وأنا واثق.' },
    { name: 'رفاء عبد الرؤوف', quote: 'قمم اختصرت عليّ الطريق… خلّت المذاكرة أسهل وأوضح خصوصًا في فترة الضغط.' },
    { name: 'مروة علي', quote: 'وسط النزوح وفقدان كل شيء، قمم كانت الحاجة الوحيدة الثابتة اللي قدرت أعتمد عليها.' }
  ];
  
  return (
    <MotionContainer>
      <FloatingOrbs />
      
      <main className="relative z-10">
        {/* ==================== HERO SECTION ==================== */}
        <section 
          ref={heroRef} 
          className="relative min-h-screen flex items-center justify-center overflow-hidden hero-parallax stars-bg"
          style={{ 
            backgroundImage: `url('/src/assets/looo.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="hero-bg-overlay" />
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
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#d2a517] text-slate-900 font-bold rounded-xl shadow-lg hover:bg-[#c49f16] active:scale-95 transition-all text-base sm:text-lg min-h-[48px] sm:min-h-[56px]"
                  >
                    {t('home.hero.cta_primary', { defaultValue: 'Start Learning' })}
                  </Motion.button>
                  
                  <Motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base sm:text-lg min-h-[48px] sm:min-h-[56px] flex items-center justify-center gap-2"
                  >
                    <PlayCircle className="w-5 h-5" />
                    {lang === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}
                  </Motion.button>
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
                        className="text-4xl sm:text-5xl font-extrabold text-white mb-2"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {lang === 'ar' ? 'قمم' : 'Qimam'}
                      </Motion.div>
                      <div className="text-[#d2a517] text-lg">{lang === 'ar' ? 'مكتبة الفيديو' : 'Video Library'}</div>
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
                { icon: BookOpen, title: lang === 'ar' ? 'كتاب بوصلة قمم' : 'Mission', text: t('about.mission.text', { defaultValue: '' }), color: 'from-[#d2a517] to-[#414d76]' },
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
      </main>
    </MotionContainer>
  );
};

export default Home;
