import { useState, useEffect, useRef } from 'react';
import { motion, LazyMotion, domAnimation, useInView, AnimatePresence } from 'framer-motion';
import {
Play, Star, ChevronDown, ArrowRight, Send, ThumbsUp, Users, Award,
  Facebook, Instagram, Youtube, Linkedin
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import imag1 from '../../assets/imag1.jpg';
import runn from '../../assets/runn.jpg';
import readImg from '../../assets/read.jpg';
import redImg from '../../assets/red.jpg';

const TelegramIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
  </svg>
); 

const MotionContainer = ({ children }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

const _motionReference = motion;
void _motionReference;

function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px', ...options });
  return [ref, isInView];
}

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useScrollAnimation();
  useEffect(() => {
    if (!inView) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const VideoCard = ({ video, index }) => {
  const { lang } = useLanguage();
  const [ref, inView] = useScrollAnimation();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: index * 0.1 }} className="relative mx-auto max-w-2xl h-full">
      <a href={video.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#07101f]/90 via-[#0b1832]/95 to-[#111c3b]/95 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#d2a517]/30 h-full min-h-[30rem] flex flex-col">
          <div className="relative overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-x-5 top-5 flex justify-between items-start gap-2">
              <span className="rounded-full bg-[#d2a517]/25 px-3 py-1 text-[10px] uppercase tracking-[0.24em] font-semibold text-[#f8f0c3] shadow-lg shadow-black/15">{lang === 'ar' ? 'مميز' : 'Featured'}</span>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.15 }} className="absolute -right-5 top-7 rounded-full bg-[#d2a517]/20 p-2 shadow-xl shadow-black/20">
              <Play className="w-4 h-4 text-white" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25 }} className="absolute left-4 bottom-4 rounded-full bg-white/10 p-2 shadow-lg shadow-black/15">
              <Star className="w-4 h-4 text-[#d2a517]" />
            </motion.div>
          </div>

          <div className="p-5 sm:p-6 flex-1 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">{video.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300 max-w-2xl" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{video.description}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#d2a517]/20 via-[#f8e16f]/15 to-transparent px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#f8f0d2] shadow-md shadow-[#d2a517]/10">
                <Star className="w-3.5 h-3.5 text-[#f8f0c3]" />
                {lang === 'ar' ? 'حفظ أقوى' : 'Stronger recall'}
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0ea5e9]/20 via-[#7dd3fc]/15 to-transparent px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#e0f2fe] shadow-md shadow-[#0ea5e9]/10">
                <ArrowRight className="w-3.5 h-3.5 text-[#e0f2fe]" />
                {lang === 'ar' ? 'تركيز أعلى' : 'Sharper focus'}
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#8b5cf6]/20 via-[#c084fc]/15 to-transparent px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#f3e8ff] shadow-md shadow-[#8b5cf6]/10">
                <Play className="w-3.5 h-3.5 text-[#f3e8ff]" />
                {lang === 'ar' ? 'طاقة تعليمية' : 'Learning energy'}
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end mt-auto">
              <motion.span whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d2a517] px-5 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#f3db6c] shadow-lg shadow-[#d2a517]/20">
                {video.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          </div>
        </article>
      </a>
    </motion.div>
  );
};

const StatCard = ({ icon: Icon, number, suffix, label, index }) => {
  const [ref, inView] = useScrollAnimation();
  const StatIcon = Icon;
  return (<motion.div ref={ref} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gradient-to-br from-[#141f3b] to-[#0f2145] p-6 rounded-2xl border border-[#414d76]/50 text-center"><div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-[#d2a517] to-[#414d76] rounded-2xl flex items-center justify-center"><StatIcon className="w-7 h-7 text-white" /></div><div className="text-3xl font-bold text-white mb-1"><AnimatedCounter end={number} duration={2} suffix={suffix} /></div><div className="text-[#e9efff]/80 text-sm">{label}</div></motion.div>);
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useScrollAnimation();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-[#0f2145]/70 border border-[#414d76]/50 rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-5 text-left flex items-center justify-between hover:bg-[#141f3b]/30 transition-colors">
        <span className="font-semibold text-white">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown className="w-5 h-5 text-[#d2a517]" /></motion.div>
      </button>
      <AnimatePresence>{isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><div className="p-5 pt-0 text-[#e9efff]/80 bg-[#141f3b]/30">{answer}</div></motion.div>)}</AnimatePresence>
    </motion.div>
  );
};

const ContactSection = ({ lang }) => {
  const [ref, inView] = useScrollAnimation();
  const contactMethods = [
    { icon: Facebook, title: lang === 'ar' ? 'فيسبوك' : 'Facebook', value: 'http://facebook.com/qimamplatform', color: 'from-[#d2a517] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#d2a517]' },
    { icon: Instagram, title: lang === 'ar' ? 'إنستجرام' : 'Instagram', value: 'https://www.instagram.com/gimam.platform?igsh=dWJ1dDF4ZjBnZG8z', color: 'from-[#414d76] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#d2a517]' },
    { icon: Youtube, title: lang === 'ar' ? 'يوتيوب' : 'YouTube', value: 'http://www.youtube.com/@qimam.platform', color: 'from-[#d2a517] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#d2a517]' },
    { icon: Linkedin, title: lang === 'ar' ? 'لينكد إن' : 'LinkedIn', value: 'https://www.linkedin.com/company/%D9%82%D9%85%D9%85/', color: 'from-[#d2a517] to-[#414d76]', hover: 'hover:from-[#414d76] hover:to-[#d2a517]' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-[#0f2145] via-[#141f3b] to-[#0f2145] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h2>
          <p className="text-[#e9efff]/80 text-base sm:text-lg max-w-2xl mx-auto">{lang === 'ar' ? 'نحن هنا لمساعدتك! تواصل معنا بأي طريقة تناسبك' : 'We are here to help! Contact us in any way that suits you'}</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-12">
          {contactMethods.map((method, i) => (
            <motion.a 
              key={i} 
              href={method.value} target="_blank" rel="noopener noreferrer" 
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
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input name="name"
                  type="text" 
                  placeholder={lang === 'ar' ? 'الاسم' : 'Name'} 
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2145]/70 border border-[#414d76] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d2a517] focus:ring-2 focus:ring-[#d2a517]/20 transition-all text-base"
                />
              </div>
              <div>
                <input name="email"
                  type="email" 
                  placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} 
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2145]/70 border border-[#414d76] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d2a517] focus:ring-2 focus:ring-[#d2a517]/20 transition-all text-base"
                />
              </div>
            </div>
            <div>
              <textarea name="message"
                rows={4} 
                placeholder={lang === 'ar' ? 'رسالتك...' : 'Your Message...'} 
                required
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2145]/70 border border-[#414d76] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#d2a517] focus:ring-2 focus:ring-[#d2a517]/20 transition-all resize-none text-base"
              />
            </div>
            <motion.button type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#d2a517] to-[#414d76] text-slate-900 font-bold rounded-xl hover:from-[#414d76] hover:to-[#d2a517] transition-all shadow-lg shadow-[#d2a517]/25 flex items-center justify-center gap-2 text-base"
            >
              <Send className="w-5 h-5" />
              {lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const { lang } = useLanguage();
  
  const videos = [
    {
      id: 1,
      thumbnail: imag1,
      title: lang === 'ar' ? 'وداعما لتراكم الدروس – استراتيجيات الإنجاز الذكي' : 'Supportive lesson backlog – smart achievement strategies',
      description: lang === 'ar' ? 'تعلم كيف تنجز مهامك بفاعلية وتتخلّص من تراكم الدروس بأحدث الطرق العلمية.' : 'Learn how to complete your tasks effectively and clear your lesson backlog with modern scientific methods.',
      url: 'https://youtu.be/Xk3sEXk78lY?si=AyjqSRkWijkeL2_M',
      cta: lang === 'ar' ? 'شاهد الآن' : 'Watch Now'
    },
    {
      id: 2,
      thumbnail: redImg,
      title: lang === 'ar' ? 'أسرار المذاكرة الفعّالة' : 'Secrets of effective studying',
      description: lang === 'ar' ? "تعرف على الأسباب الحقيقية وراء النسيان، واكتشف استراتيجيات 'المذاكرة النشطة' و 'التكرار المتباعد' التي تضمن بقاء المعلومات في ذاكرتك لأطول فترة ممكنة." : "Discover the real reasons behind forgetting, and learn active learning and spaced repetition strategies that keep information in memory longer.",
      url: 'https://youtu.be/H6IZWwv4b0Q?si=-dn8DGvHn_OVgN70',
      cta: lang === 'ar' ? 'شاهد الآن' : 'Watch Now'
    },
    {
      id: 3,
      thumbnail: runn,
      title: lang === 'ar' ? 'الذاكرة الحديدية' : 'Iron memory',
      description: lang === 'ar' ? "اكتشف لماذا ننسى 70% من المعلومات في أول 24 ساعة، وتعلم كيف تكسر 'منحنى النسيان' باستخدام استراتيجية التكرار المتباعد لضمان استرجاع المعلومة يوم الامتحان بسهولة." : "Discover why we forget 70% of information in the first 24 hours, and learn how to break the forgetting curve with spaced repetition for easy exam recall.",
      url: 'https://youtu.be/zNPfXT_wY64?si=udfrbn_kWKzYoLZG',
      cta: lang === 'ar' ? 'شاهد الآن' : 'Watch Now'
    },
    {
      id: 4,
      thumbnail: readImg,
      title: lang === 'ar' ? 'فن الخرائط الذهنية وتفعيل الحواس' : 'Mind mapping mastery and sensory activation',
      description: lang === 'ar' ? "تعلم كيف تحول المذاكرة المملة إلى رحلة ممتعة باستخدام الخرائط الذهنية، واكتشف سر دمج الصوت والصورة لترسيخ المعلومات بنسبة 100%." : "Learn how to turn boring studying into an enjoyable journey using mind maps, and discover the secret of combining sound and imagery for 100% retention.",
      url: 'https://youtu.be/RAYJQzJ7ArM?si=JEVYx8acOhnX6NES',
      cta: lang === 'ar' ? 'شاهد الآن' : 'Watch Now'
    }
  ];
  
  const faqs = [
    { question: 'ما هي منصة قمم؟', answer: 'قمم منصة تعليمية تهدف إلى دعم طلاب الشهادة السودانية من خلال فيديوهات تعليمية، وكتاب بوصلة قمم، بالإضافة إلى أدوات تساعد على تنظيم المذاكرة وتحقيق أفضل النتائج.' },
    { question: 'هل المحتوى مجاني؟', answer: 'نعم، نوفر محتوى مجانيًا يشمل الفيديوهات التعليمية، والنصائح، والمواد التي تساعدك على التفوق.' },
    { question: 'كيف أبدأ؟', answer: 'يمكنك البدء بمشاهدة الفيديوهات التعليمية مباشرة، أو استخدام البوت على Telegram للوصول إلى المحتوى بسهولة.' },
    { question: 'ما هو كتاب بوصلة قمم؟', answer: 'هو دليل عملي يساعدك على تنظيم المذاكرة، وفهم أفضل طرق الدراسة، والاستعداد للامتحانات بثقة.' },
    { question: 'كيف أستخدم البوت؟', answer: 'يمكنك الدخول إلى البوت عبر Telegram، وستجد فيه جميع الروابط والمواد التعليمية مرتبة وسهلة الوصول.' }
  ];
  
  const stats = [
    { icon: Play, number: 200, suffix: '+', label: lang === 'ar' ? 'فيديو' : 'Videos' },
    { icon: Users, number: 50000, suffix: '+', label: lang === 'ar' ? 'مشاهد' : 'Views' },
    { icon: ThumbsUp, number: 8500, suffix: '+', label: lang === 'ar' ? 'إعجاب' : 'Likes' },
    { icon: Award, number: 50, suffix: '+', label: lang === 'ar' ? 'مدرب' : 'Instructors' }
  ];
  
  return (
    <MotionContainer>
      <div className="relative z-10">
        <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d2a517]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#414d76]/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#d2a517] via-[#f8e36c] to-white leading-tight">
                {lang === 'ar' ? 'دليلك العملي للتميز' : 'Your practical guide to excellence'}
              </h2>
            </motion.div>
            
            <motion.div layout className="grid grid-cols-1 gap-8">
              <AnimatePresence mode="popLayout">{videos.map((video, i) => (<VideoCard key={video.id} video={video} index={i} />))}</AnimatePresence>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16 bg-[#0f2145]/70">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{stats.map((stat, i) => (<StatCard key={i} {...stat} index={i} />))}</div>
          </div>
        </section>
        
        <section className="py-20 bg-[#0f2145]">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</h2>
            </motion.div>
            <div className="space-y-4">{faqs.map((faq, i) => (<FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />))}</div>
          </div>
        </section>
        
        <ContactSection lang={lang} />
        
        <section className="py-20 bg-gradient-to-r from-[#414d76] via-[#0f2145] to-[#414d76] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"><TelegramIcon /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{lang === 'ar' ? 'انضم لقناتنا على تيلجرام' : 'Join Our Telegram Channel'}</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{lang === 'ar' ? 'احصل على أحدث المحتوى' : 'Get the latest content'}</p>
              <motion.a href="https://t.me/gimam22" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                <span>{lang === 'ar' ? 'انضم الآن' : 'Join Now'}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <div className="flex justify-center gap-8 mt-10">
                <div className="text-center"><div className="text-3xl font-bold text-white">10K+</div><div className="text-white/70 text-sm">{lang === 'ar' ? 'مشترك' : 'Subscribers'}</div></div>
                <div className="text-center"><div className="text-3xl font-bold text-white">50+</div><div className="text-white/70 text-sm">{lang === 'ar' ? 'محتوى' : 'Contents'}</div></div>
                <div className="text-center"><div className="text-3xl font-bold text-white">24/7</div><div className="text-white/70 text-sm">{lang === 'ar' ? 'نشط' : 'Active'}</div></div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionContainer>
  );
};

export default Services;
