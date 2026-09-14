"use client";
import React, { useState } from 'react';
import { CONTACT_DATA } from "@/constants";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", CONTACT_DATA.web3forms_key);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setStatus("Message Sent!");
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus("Error. Try again.");
    }
  };

  return (
    <section id="contact" className="py-32 px-0 bg-white">
      <div className="mx-auto">
        
        {/* The Premium Hub Card */}
        <div className="bg-[#0F172A] rounded-[7px] overflow-hidden relative shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            
            {/* Left Side: Information */}
            <div className="p-6 md:p-20 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                    {CONTACT_DATA.availability}
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8">
                  Lets make <br /> it <span className="text-primary">happen.</span>
                </h2>
                <p className="text-white/50 text-lg max-w-sm leading-relaxed mb-12">
                  Im looking for high-impact teams and exciting engineering challenges. 
                  Reach out and lets start a conversation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="font-semibold">{CONTACT_DATA.email}</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-semibold">{CONTACT_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="p-6 md:p-20 bg-white/5 border-l border-white/5">
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white/5 border-b border-white/10 p-4 text-white outline-none focus:border-primary transition-all placeholder:text-white/10" />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Work Email</label>
                  <input type="email" name="email" required placeholder="john@company.com" className="w-full bg-white/5 border-b border-white/10 p-4 text-white outline-none focus:border-primary transition-all placeholder:text-white/10" />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Your Message</label>
                  <textarea name="message" required rows={4} placeholder="What are you working on?" className="w-full bg-white/5 border-b border-white/10 p-4 text-white outline-none focus:border-primary transition-all placeholder:text-white/10 resize-none" />
                </div>

                <button type="submit" className="group w-full py-6 bg-primary text-white rounded-2xl font-bold tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                  SEND MESSAGE
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                {status && <p className="text-center text-xs font-bold text-primary tracking-widest">{status}</p>}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};