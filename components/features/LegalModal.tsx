import React from "react";
import { X, AlertTriangle } from "lucide-react";

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LegalModal = ({ isOpen, onClose }: LegalModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                onClick={onClose}
            ></div>
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto relative border-4 border-black shadow-[10px_10px_0px_0px_#FF5F1F] z-[101]">
                <div className="bg-signalYellow p-4 border-b-4 border-black sticky top-0 flex justify-between items-center bg-caution">
                    <h2 className="font-stencil text-2xl uppercase flex items-center gap-2 bg-white px-2 border-2 border-black">
                        <AlertTriangle size={24} /> Bauvorschriften
                    </h2>
                    <button
                        onClick={onClose}
                        className="bg-black text-white p-2 hover:bg-neonOrange transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="p-8 font-mono text-sm space-y-8">
                    <section>
                        <h3 className="text-xl font-bold bg-black text-white inline-block px-2 mb-4 uppercase">
                            Impressum
                        </h3>
                        <div className="border-l-4 border-neonOrange pl-4">
                            <p className="font-bold">Angaben gemäß § 5 TMG</p>
                            <p className="mt-2">
                                Gegenwind Records
                                <br />
                                (Vertreten durch die Geschäftsführung)
                            </p>
                            <p className="mt-4 font-bold">Kontakt</p>
                            <p>E-Mail: brutusaiswebapp@gmail.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
