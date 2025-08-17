import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const handleChatClick = () => {
    // TODO: Implement chat functionality
    console.log('Chat widget clicked');
    alert('Chat feature coming soon!');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={handleChatClick}
        className="bg-doola-yellow text-black hover:bg-doola-gold w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
