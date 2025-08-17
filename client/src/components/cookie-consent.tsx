import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg max-w-sm z-50">
      <div className="flex items-start space-x-3">
        <div className="text-2xl">🍪</div>
        <div className="flex-1">
          <p className="text-sm text-doola-dark mb-2">We are using cookies!</p>
          <p className="text-xs text-gray-500 mb-3">
            See our <a href="#" className="hover:underline">Privacy Policy</a>.
          </p>
          <div className="flex gap-2">
            <Button onClick={handleAccept} className="bg-black text-white hover:bg-gray-800 text-sm">
              OK
            </Button>
            <Button 
              onClick={handleClose} 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
