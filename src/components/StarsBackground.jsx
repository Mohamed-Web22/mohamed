import { useEffect, useRef, useState, useCallback } from 'react';

const StarsBackground = ({ className = '', density = 70, speed = 0.6 }) => {
  const canvasRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const starImgRef = useRef(null);

  const loadStarImage = useCallback(() => {
    const img = new Image();
    img.src = '/src/assets/start.png';  // Use 'start.png' as specified
    img.onload = () => {
      starImgRef.current = img;
      setImgLoaded(true);
    };
    img.onerror = () => {
      console.warn('start.png failed to load, using procedural fallback');
      starImgRef.current = null;
      setImgLoaded(true);
    };
  }, []);

  useEffect(() => {
    loadStarImage();
  }, [loadStarImage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imgLoaded) return;

    const ctx = canvas.getContext('2d');
    let animationFrame;
    let stars = [];
    let time = 0;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    const createStars = () => {
      stars = [];
      const count = density * (canvas.width * canvas.height) / 100000;
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.35,
          size: Math.random() * 10 + 0.5, // Varied sizes 0.5-10.5px
          vx: (Math.random() - 0.5) * speed * 1.5, // Random horizontal
          vy: Math.random() * 0.1 + 0.008, // Random vertical float
          opacity: Math.random() * 0.5 + 0.3,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const starImg = starImgRef.current;
      
      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;
        
        // Wrap
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y > canvas.height * 0.35) star.y = 0;
        
        const twinkle = 0.3 + 0.7 * Math.sin(time * 0.01 + star.twinklePhase);
        
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;
        
        if (starImg) {
          // Sharp start.png, no glow to preserve shape
          ctx.drawImage(starImg, star.x - star.size/2, star.y - star.size/2, star.size, star.size);
        } else {
          // Exact original fallback
          ctx.shadowColor = '#d2a517';
          ctx.shadowBlur = 4;
          ctx.fillStyle = '#d2a517';
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        ctx.restore();
      });

      time++;
      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    createStars();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [density, speed, imgLoaded]);

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-[40vh]"
      />
    </div>
  );
};

export default StarsBackground;

