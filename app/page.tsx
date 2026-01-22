import { HeroSection } from "@/components/features/HeroSection";
import { Soundboard } from "@/components/features/Soundboard";
import { ShopGrid } from "@/components/features/ShopGrid";
import { TikTokEmbed } from "@/components/features/TikTokEmbed";
import { ImageGallery } from "@/components/features/ImageGallery";

export default function Home() {
    return (
        <>
            <HeroSection />

            {/* MUSIK & SOUNDBOARD */}
            <Soundboard />

            {/* GALERIE */}
            <ImageGallery />

            {/* SHOP */}
            <ShopGrid />

            {/* TIKTOK */}
            <TikTokEmbed />
        </>
    );
}
