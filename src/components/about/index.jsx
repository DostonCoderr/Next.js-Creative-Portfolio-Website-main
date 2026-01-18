"use client";
import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  const v = "2026_wizard_v2"; // Keshni yangilash uchun

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        
        {/* Asosiy Ma'lumot - Digital Wizard Bio */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start bg-accent/5 border border-accent/20 backdrop-blur-lg group p-6 md:p-8">
          <h2 className="text-2xl md:text-4xl text-left w-full capitalize font-bold text-accent mb-4 group-hover:text-white transition-colors">
            Doston Coder — Digital Architect & Wizard
          </h2>
          
          <div className="space-y-6 font-light text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              Mening veb-ishlab chiqishdagi sayohatim mistik vositalar va tillar bilan sug&apos;orilgan bo&apos;lib, 
              <span className="text-accent font-medium"> JavaScript</span> mening asosiy sehrimdir. Men 
              <span className="text-accent font-medium"> React.js va Next.js</span> kabi ramkalarni mahorat bilan qo&apos;llagan holda, 
              raqamli olamda foydalanuvchilarni bog&apos;laydigan uzluksiz portallar yarataman.
            </p>

            <p className="border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-lg italic">
              Jamstack san&apos;ati menga tezkor va xavfsiz tajribalar yaratish imkonini beradi, dizayn mahoratim esa 
              har bir ijod namunasi nafaqat funksional, balki vizual jozibali bo&apos;lishini ta&apos;minlaydi. 
              Internet kelajagini shakllantirishda yangi sehrlarni kashf qilishda davom etaman.
            </p>

            {/* Yaponcha Sitata */}
            <div className="pt-4 flex flex-col items-end w-full space-y-2 opacity-70 hover:opacity-100 transition-opacity">
              <p className="text-xl md:text-2xl font-japanese font-bold text-accent/90 tracking-widest">
                継続は力なり
              </p>
              <div className="flex flex-col items-end">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-foreground/60">
                  &quot;Keizoku wa Chikara nari&quot;
                </span>
                <span className="text-xs md:text-sm text-accent/70 italic text-right">
                  — Davomiylik bu — qudratdir.
                </span>
              </div>
            </div>
          </div>
        </ItemLayout>

        {/* Clients Stat */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent hover:scale-[1.02] transition-transform">
          <p className="font-bold w-full text-left text-3xl sm:text-5xl">
            55 + <sub className="font-semibold text-base opacity-70">clients</sub>
          </p>
        </ItemLayout>

        {/* Experience Stat */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent hover:scale-[1.02] transition-transform">
          <p className="font-bold w-full text-left text-3xl sm:text-5xl">
            3 + <sub className="font-semibold text-base opacity-70">years exp.</sub>
          </p>
        </ItemLayout>

        {/* Top Languages - Ishlayotgan URL saqlab qolindi */}
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0 overflow-hidden group">
          <img
            className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=DostonCoderr&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="DostonCoderr Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* Main Stats - Yangilangan va barqaror */}
        <ItemLayout className="col-span-full md:col-span-8 !p-0 overflow-hidden group">
          <img
            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
            src={`https://github-readme-stats.vercel.app/api?username=DostonCoderr&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&show_icons=true&count_private=true&include_all_commits=true&v=${v}`}
            alt="DostonCoderr GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Skill Icons - Mastered Spells */}
        <ItemLayout className="col-span-full flex flex-col items-center justify-center p-8 bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors duration-500">
          <h3 className="text-xl font-semibold text-accent mb-8 tracking-widest uppercase">Mastered Spells & Tools</h3>
          <img
            className="w-full h-auto hover:brightness-125 transition-all duration-300"
            src="https://skillicons.dev/icons?i=nextjs,react,ts,js,tailwind,nodejs,mongodb,mysql,firebase,supabase,docker,figma,git,github,vscode,vercel,threejs,vite,bootstrap,sass,linux,netlify&perline=11"
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* Activity Graph - Streak o'rniga eng daxshatli va barqaror variant */}
        <ItemLayout className="col-span-full !p-0 overflow-hidden border border-accent/20 group">
          <img
            className="w-full h-auto group-hover:brightness-110 transition-all duration-500"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=DostonCoderr&theme=react-dark&bg_color=00000000&hide_border=true&color=FEFE5B&line=FEFE5B&point=FFFFFF&area=true&hide_grid=true&v=${v}`}
            alt="Activity Graph"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;