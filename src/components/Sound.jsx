"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music, X, Play, Headphones } from "lucide-react";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { createPortal } from "react-dom";

// Daxshatli Audio Visualizer Icon
const AudioLines = ({ isPlaying }) => (
  <div className="flex items-end justify-center gap-[2px] h-4 w-5">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.span
        key={i}
        animate={isPlaying ? { height: ["20%", "100%", "40%", "80%", "20%"] } : { height: "20%" }}
        transition={{ repeat: Infinity, duration: 0.6 + i * 0.1, ease: "easeInOut" }}
        className="w-[3px] bg-accent rounded-full shadow-[0_0_8px_#FEFE5B]"
      />
    ))}
  </div>
);

const Modal = ({ isOpen, onClose, onSelectTrack, tracks, currentTrack, isPlaying }) => {
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[9999] p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-zinc-900/90 border border-accent/20 p-6 md:p-8 rounded-[2.5rem] shadow-[0_0_80px_rgba(254,254,91,0.15)] max-w-sm w-full relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse" />

          <div className="flex justify-between items-center mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Headphones size={20} className="text-accent" />
              </div>
              <h2 className="text-xl font-japanese font-bold text-white tracking-widest uppercase">Playlist</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-2 max-h-[45vh] overflow-y-auto pr-2 custom-scrollbar relative z-10">
            {tracks.map((track, index) => {
              const name = track.replace("/audio/", "").replace(".mp3", "");
              const isActive = currentTrack === track;
              
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectTrack(track)}
                  className={`w-full p-4 rounded-2xl flex items-center justify-between group transition-all duration-500 border ${
                    isActive ? "bg-accent/20 border-accent/50 text-accent shadow-[0_0_20px_rgba(254,254,91,0.1)]" : "bg-white/5 border-transparent text-white/60 hover:bg-white/10"
                  }`}
                >
                  <span className="truncate text-sm font-medium pr-4">{name}</span>
                  {isActive && isPlaying ? <AudioLines isPlaying={true} /> : <Play size={16} className={`${isActive ? "text-accent" : "opacity-0 group-hover:opacity-100 transition-opacity"}`} />}
                </motion.button>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="w-full mt-8 py-4 bg-accent text-black font-black rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_20px_rgba(254,254,91,0.2)] text-xs uppercase tracking-[0.3em]"
          >
            Yopish
          </button>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  
  // Playlist massivi
  const tracks = useMemo(() => [
    "/audio/Gesaffelstein & The Weeknd - Lost In The Fire.mp3", // Har doim 1-chi bo'lib shu ijro etiladi
    "/audio/The Weeknd - Call Out My Name.mp3",
    "/audio/Fe!n.mp3",
    "/audio/Nejno.mp3",
    "/audio/Патрон.mp3",
    "/audio/Колизей.mp3",
    "/audio/The Weeknd - The Hills.mp3",
    "/audio/The Weeknd feat. Daft Punk - Starboy.mp3",
    "/audio/The Weeknd feat. Kenny G - In Your Eyes (Remix).mp3",
  ], []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Default holatda massivning 0-indeksini olamiz
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const changeTrack = async (track) => {
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentTrack(track);
      audioRef.current.load();
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(e => console.error("Play error:", e));
      }
    }
  };

  const togglePlayback = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      // Birinchi marta bosganda playlistdagi 1-chi musiqani chaladi
      if (!isPlaying && audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.log("Autoplay blocked, waiting for interaction", e));
      }
      ["click", "keydown", "touchstart", "wheel"].forEach(e => 
        document.removeEventListener(e, handleFirstInteraction)
      );
    };

    ["click", "keydown", "touchstart", "wheel"].forEach(e => 
      document.addEventListener(e, handleFirstInteraction)
    );

    return () => ["click", "keydown", "touchstart", "wheel"].forEach(e => 
      document.removeEventListener(e, handleFirstInteraction)
    );
  }, [isPlaying]);

  return (
    <div className="fixed top-6 right-6 z-[100] flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlayback}
        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-900/80 border border-accent/20 text-accent shadow-2xl backdrop-blur-xl relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsModalOpen(true)}
        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-900/80 border border-accent/20 text-white hover:text-accent shadow-2xl backdrop-blur-xl relative group"
      >
        <Music size={24} />
        {isPlaying && (
           <div className="absolute -bottom-1 -right-1 bg-zinc-900 p-1 rounded-lg border border-accent/30 scale-75 md:scale-100">
             <AudioLines isPlaying={isPlaying} />
           </div>
        )}
      </motion.button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectTrack={changeTrack}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        tracks={tracks}
      />

      <audio ref={audioRef} loop src={currentTrack} preload="auto" />
    </div>
  );
};

export default Sound;