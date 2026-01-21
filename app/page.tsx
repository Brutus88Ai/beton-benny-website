import { HeroSection } from "@/components/features/HeroSection";
import { Soundboard } from "@/components/features/Soundboard";
import { TourDates } from "@/components/features/TourDates";
import { ShopGrid } from "@/components/features/ShopGrid";
import { ContactSection } from "@/components/features/ContactSection";
import { TikTokEmbed } from "@/components/features/TikTokEmbed";

export default function Home() {
    return (
        <>
            <HeroSection />

            {/* MUSIK & SOUNDBOARD */}
            <Soundboard />

            {/* TERMINE */}
            <TourDates />

            {/* SHOP */}
            <ShopGrid />

            {/* GUESTBOOK (Included in Musik section in original, but cleaner as separate or part of Kontakt? 
         Original had Guestbook inside 'Musik' section container. 
         Let's put it after Shop or keep it in Soundboard?
         Actually, the original code had <Guestbook /> inside the #musik section.
         But Soundboard component I made renders the #musik section wrapper.
         So I should open Soundboard.tsx and add Guestbook there? 
         OR, structure page differently.
         
         My Soundboard component renders <section id="musik">... content ...</section>.
         If I want Guestbook inside that section, I should pass it as children or import it there.
         I'll put Guestbook in Soundboard.tsx for fidelity to original layout, OR just place it after.
         
         Let's place it after Soundboard but before TourDates? 
         No, layouts matter.
         In original: 
         <section id="musik">
            <Card>...</Card> <Card>...</Card>
            <Guestbook />
         </section>
         
         My Soundboard.tsx currently closes the section.
         I will update Soundboard.tsx to include Guestbook, or export SoundboardContent and wrap in page.
         
         Easier: Just put Guestbook below Soundboard in page.tsx, 
         but then it's outside the "bg-gray-100/zinc-900" wrapper of Soundboard unless I wrap them.
         
         I'll just add <Guestbook /> inside Soundboard.tsx to match specifically.
         Wait, I already wrote Soundboard.tsx. I should have added it.
         I'll use multi_replace to add it to Soundboard.tsx.
      */}

            {/* TIKTOK */}
            <TikTokEmbed />

            {/* KONTAKT */}
            <ContactSection />
        </>
    );
}
