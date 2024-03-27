import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            DOSTON CODER
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Mening veb-ishlab chiqishdagi sayohatim bir qator mistik narsalar bilan taminlangan
             vositalari va tillar, JavaScript bilan mening yadrosini quyma
             sehrlar. Men React.js va Next.js kabi ramkalardan foydalanaman
             aniqlik, sohalarni boglaydigan uzluksiz portallar (veb-saytlar) yaratish
             (foydalanuvchilar) raqamli olamda. Qadimgi sanat
             Jamstack menga tez, xavfsiz va dinamik tajribalarni yaratishga imkon beradi,
             Shu bilan birga, mening dizayn mahoratim har bir ijodning nafaqat funktsional ekanligini taminlaydi
             lekin vizual tarzda jozibali. Menga qoshiling, chunki men yangi narsalarni kashf qilishda davom etaman
             Internet kelajagini shakllantirish uchun sehr va texnologiyalar.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Doston1232696&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Doston1232696&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="CodeBucks"
            loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,linkedin,ai,cloudflare,css,d3,docker,figma,firebase,git,github,html,js,linux,mongodb,netlify,nextjs,nodejs,npm,react,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <img  className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=Doston1232696&theme=dark&hide_border=true&background=EB54500B&border=FEFE5BDB"
         alt="CodeBucks"
         loading="lazy"/>
        </ItemLayout>

      



        
      </div>
    </section>
  );
};

export default AboutDetails;
