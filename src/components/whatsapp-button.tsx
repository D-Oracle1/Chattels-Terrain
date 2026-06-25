import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

/** Persistent click-to-chat button for quick lead capture. */
export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-luxe transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
