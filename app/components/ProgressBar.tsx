import { useEffect, useState } from "react";
import { useNavigation } from "react-router";

export function ProgressBar() {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setIsVisible(true);
      setProgress(10);
      
      // محاكاة التقدم التدريجي مع تأثيرات أكثر واقعية
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 85) return prev;
          
          // زيادة تدريجية أبطأ مع مرور الوقت
          const increment = Math.random() * 8 + 2;
          return Math.min(prev + increment, 85);
        });
      }, 150);

      return () => clearInterval(interval);
    } else if (navigation.state === "idle" && progress > 0) {
      // إكمال التحميل بسلاسة
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setProgress(0), 300);
      }, 300);
    }
  }, [navigation.state, progress]);

  if (!isVisible && progress === 0) {
    return null;
  }

  return (
    <div className="progress-bar" style={{ 
      transform: `scaleX(${progress / 100})`,
      opacity: isVisible ? 1 : 0,
    }}>
      <div className="progress-bar-pulse" />
    </div>
  );
}
