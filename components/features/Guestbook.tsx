"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
    collection,
    addDoc,
    query,
    limit,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAppContext } from "../providers/AppContext";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const APP_ID = "beton-benny"; // Fixed App ID for preview

export const Guestbook = () => {
    const { user, isNightShift, showToast } = useAppContext();
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!db) {
            setMessages([
                { id: "1", text: "GEILSTE PARTY EVER!! 🍻", author: "PartyPeter" },
            ]);
            return;
        }

        try {
            const q = query(
                collection(db, "artifacts", APP_ID, "public", "data", "guestbook"),
                limit(20)
            );
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const msgs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                // Sort manually since we didn't add orderBy to query to avoid index errors in preview
                msgs.sort((a: any, b: any) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
                setMessages(msgs);
            });
            return () => unsubscribe();
        } catch (e) {
            console.error("Firestore Init Error in Guestbook", e);
            setMessages([
                { id: "1", text: "Fehler beim Laden...", author: "System" },
            ]);
        }
    }, []);

    const handlePost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !user || !db) return;
        setLoading(true);

        try {
            await addDoc(
                collection(db, "artifacts", APP_ID, "public", "data", "guestbook"),
                {
                    text: newMessage,
                    author: user.displayName || "Anonym",
                    uid: user.uid,
                    createdAt: serverTimestamp(),
                }
            );
            setNewMessage("");
            showToast("Nachricht gesprayt!");
        } catch (err) {
            console.error(err);
            showToast("Fehler beim Senden!");
        }
        setLoading(false);
    };

    return (
        <div className="mt-12">
            <div
                className={cn(
                    "border-4 border-black p-4 md:p-8 relative",
                    isNightShift ? "bg-zinc-800" : "bg-[#e5e5e5]"
                )}
            >
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-concrete-pattern"></div>
                <div className="relative z-10">
                    <h3 className="font-stencil text-3xl mb-6 text-center uppercase flex items-center justify-center gap-2">
                        <MessageSquare className="text-neonOrange" /> Die Baustellen-Wand
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-h-[400px] overflow-y-auto p-2">
                        <React.Fragment>
                            {/* We use React.Fragment because AnimatePresence needs direct children usually, but for specific list animations better to just animate the items */}
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={msg.id || idx}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: (idx % 2 === 0 ? 1 : -1) }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="bg-white p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] border border-gray-300 hover:z-10 hover:scale-105 transition-all"
                                >
                                    <p className="font-marker text-xl mb-2 text-gray-800 leading-tight">
                                        "{msg.text}"
                                    </p>
                                    <div className="text-xs font-bold text-neonOrange uppercase tracking-wider text-right">
                                        - {msg.author}
                                    </div>
                                </motion.div>
                            ))}
                        </React.Fragment>
                        {messages.length === 0 && (
                            <div className="text-center w-full col-span-full opacity-50 font-marker">
                                Noch nichts los hier...
                            </div>
                        )}
                    </div>
                    {user ? (
                        <form
                            onSubmit={handlePost}
                            className="flex flex-col md:flex-row gap-2 bg-black/5 p-4 border-2 border-dashed border-black/20 rounded-lg"
                        >
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Hinterlasse eine Nachricht..."
                                maxLength={60}
                                className="flex-1 p-3 border-2 border-black font-marker text-lg focus:outline-none focus:border-neonOrange"
                            />
                            <Button
                                type="submit"
                                disabled={loading || !newMessage.trim()}
                                className="py-3 px-6 text-sm"
                            >
                                {loading ? "..." : <><Send size={18} /> Sprayen</>}
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center bg-signalYellow p-4 border-2 border-black font-bold text-black">
                            🔒 Bitte oben <span className="underline">einstempeln</span>!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
