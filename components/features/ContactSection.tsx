"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { useAppContext } from "../providers/AppContext";
import { SectionTitle } from "../ui/SectionTitle";

export const ContactSection = () => {
    const { user, showToast } = useAppContext();

    return (
        <section id="kontakt" className="py-20 px-4 bg-caution">
            <div className="container mx-auto max-w-2xl">
                <Card className="bg-white" isDark={false}>
                    <div className="border-b-4 border-black pb-4 mb-6 text-center">
                        <h2 className="font-stencil text-4xl uppercase text-black">Bauantrag</h2>
                        <p className="text-sm font-mono mt-2 text-black">Formular A38 - Zur Erteilung einer Abrissgenehmigung</p>
                        {!user && <div className="mt-4 bg-yellow-100 p-2 border border-yellow-500 text-xs text-yellow-800 flex items-center justify-center gap-2"><AlertTriangle size={14} /> Tipp: Stempel dich ein (Login), um das Formular schneller auszufüllen.</div>}
                    </div>
                    <form className="space-y-6 font-mono text-sm text-black" onSubmit={(e) => { e.preventDefault(); showToast("Bauantrag erfolgreich versendet!"); }}>
                        <div>
                            <label className="block font-bold uppercase mb-1">Bauherr (Name)</label>
                            <input type="text" className="w-full bg-gray-100 border-2 border-black p-3 focus:outline-none focus:bg-signalYellow/20 focus:border-neonOrange" placeholder="Max Mustermann" defaultValue={user?.displayName || ''} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block font-bold uppercase mb-1">Baustelle</label><input type="text" className="w-full bg-gray-100 border-2 border-black p-3 focus:outline-none" placeholder="Festzelt" /></div>
                            <div><label className="block font-bold uppercase mb-1">Baubeginn</label><input type="date" className="w-full bg-gray-100 border-2 border-black p-3 focus:outline-none" /></div>
                        </div>
                        <div><label className="block font-bold uppercase mb-1">Nachricht</label><textarea rows={4} className="w-full bg-gray-100 border-2 border-black p-3 focus:outline-none" placeholder="Wir brauchen Abriss..."></textarea></div>
                        <Button variant="primary" className="w-full">Antrag Einreichen</Button>
                    </form>
                </Card>
            </div>
        </section>
    );
}
