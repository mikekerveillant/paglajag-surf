"use client";

import React, { useState } from "react";

const colors = {
  deepOcean: "#063B4A",
  ocean: "#08798C",
  turquoise: "#18B6C7",
  seafoam: "#BFEFE6",
  paleFoam: "#ECFBF8",
  sand: "#F6E7C8",
  coral: "#FF8A6A",
  ink: "#07313B",
};

const imagePaths = {
  hero: "/images/paglajag-hero.jpg",
  james: "/images/james-siargao.jpg",
  youthRoom: "/images/paglajag-youth-room.jpg",
  youthGroup: "/images/paglajag-youth-group.jpg",
  surfboards: "/images/surfboards.jpg",
  lantern: "/images/solar-lantern.jpg",
  instructors: "/images/surf-instructors.jpg",
  ocean: "/images/siargao-ocean.jpg",
  soccer: "/images/james-soccer.jpg",
  surfing: "/images/james-surfing.jpg",
};

const stats = [
  ["150+", "youth in the Paglajag community"],
  ["2", "surfboards currently available"],
  ["2022", "year Paglajag was founded"],
  ["7", "community development pillars"],
];

const aboutCards = [
  ["👥", "Youth Empowerment", "Paglajag has grown from 13 members into a movement of over 150 children and youth."],
  ["🌊", "Ocean Connection", "The project helps youth connect with the sea through surfing, environmental stewardship, and community action."],
  ["☀️", "Holistic Growth", "Its pillars include education, creativity, values formation, nutrition, livelihood, and scholarships."],
];

const donationCards = [
  ["🌊", "Surfboards", "Additional boards will allow more youth to participate, including girls who are eager to learn.", imagePaths.surfboards],
  ["💡", "Solar Lanterns", "Lanterns help children study at night and give families more safety and comfort after dark.", imagePaths.lantern],
  ["👥", "Surf Instructors", "Funds help cover transport, fuel, and logistics for experienced coaches from General Luna.", imagePaths.instructors],
];

const fundingGoal = 250000;
const amountRaised = 48500;
const progressPercent = Math.round((amountRaised / fundingGoal) * 100);

const impactTargets = [
  ["₱1,500", "Helps fund transport and fuel for surf instructors traveling from General Luna."],
  ["₱3,000", "Provides a solar lantern for a household so children can study safely at night."],
  ["₱12,000", "Helps purchase a beginner surfboard so more youth can participate in the camp."],
];

const galleryImages = [
  [imagePaths.youthRoom, "Paglajag youth leaders"],
  [imagePaths.youthGroup, "Paglajag community"],
  [imagePaths.surfboards, "Surfboards for the camp"],
  [imagePaths.surfing, "James surfing"],
  [imagePaths.ocean, "Siargao ocean"],
  [imagePaths.soccer, "James on the field"],
];

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "dark" | "outlineLight" | "outlineDark";
  className?: string;
  href?: string;
  onClick?: () => void;
};

function Button({ children, variant = "primary", className = "", href, onClick }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition shadow-sm cursor-pointer";
  const styles =
    variant === "dark"
      ? "bg-[#063B4A] text-white hover:bg-[#08798C]"
      : variant === "outlineLight"
      ? "border border-white/50 bg-white/10 text-white backdrop-blur hover:bg-white/20"
      : variant === "outlineDark"
      ? "border border-[#08798C]/30 bg-transparent text-[#063B4A] hover:bg-[#ECFBF8]"
      : "bg-[#18B6C7] text-white hover:bg-[#08798C]";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>;
}

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-3xl shadow-sm ${className}`}>{children}</div>;
}

function ArrowIcon() {
  return <span className="ml-2 text-lg leading-none">→</span>;
}

type WaveDividerProps = {
  flip?: boolean;
};

function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div className={`relative h-16 overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d="M0,64 C180,110 320,20 520,54 C740,92 820,118 1040,70 C1220,30 1320,46 1440,72 L1440,120 L0,120 Z"
          fill="#ECFBF8"
        />
      </svg>
    </div>
  );
}

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
};

function ImageFrame({ src, alt, className = "", label }: ImageFrameProps) {
  return (
    <div className={`group relative overflow-hidden bg-[#BFEFE6] ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#063B4A]/25 via-transparent to-transparent" />
      {label ? (
        <div className="absolute bottom-4 left-4 rounded-full bg-[#ECFBF8]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#063B4A] backdrop-blur">
          {label}
        </div>
      ) : null}
    </div>
  );
}

type SectionEyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
};

function SectionEyebrow({ children, light = false }: SectionEyebrowProps) {
  return (
    <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.25em] ${light ? "text-[#BFEFE6]" : "text-[#08798C]"}`}>
      {children}
    </p>
  );
}

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ShareModal({ isOpen, onClose }: ShareModalProps) {
  if (!isOpen) return null;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Empowering Paglajag Youths in Siargao";
  const shareText = "Support a youth surf camp and community project in Anajawan, Del Carmen, Siargao.";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);
  const encodedText = encodeURIComponent(`${shareText} ${shareUrl}`);

  const shareLinks: [string, string, string][] = [
    ["✉️", "Email", `mailto:?subject=${encodedTitle}&body=${encodedText}`],
    ["f", "Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`],
    ["💬", "Messenger", `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=291494419107518&redirect_uri=${encodedUrl}`],
    ["🟢", "WhatsApp", `https://wa.me/?text=${encodedText}`],
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied!");
    } catch (error) {
      alert("Could not copy automatically. Please copy the browser URL instead.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#021F28]/70 px-6 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-[#BFEFE6]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-[#063B4A] shadow-sm hover:bg-[#ECFBF8]"
          aria-label="Close share popup"
        >
          ×
        </button>

        <div className="h-40 bg-[#063B4A]">
          <img src={imagePaths.ocean} alt="Siargao ocean" className="h-full w-full object-cover opacity-80 saturate-125" />
        </div>

        <div className="p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#08798C]">Share this project</p>
          <h3 className="mt-3 text-3xl font-semibold text-[#063B4A]">Help spread the word.</h3>
          <p className="mt-4 leading-7 text-[#34616B]">
            Share the Paglajag surf camp project with friends, family, or anyone who may want to support the youth in Siargao.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {shareLinks.map(([icon, label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#BFEFE6] bg-[#ECFBF8] px-5 py-4 font-semibold text-[#063B4A] transition hover:bg-[#BFEFE6]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">{icon}</span>
                {label}
              </a>
            ))}

            <button
              type="button"
              onClick={copyLink}
              className="flex items-center gap-3 rounded-2xl border border-[#BFEFE6] bg-[#ECFBF8] px-5 py-4 text-left font-semibold text-[#063B4A] transition hover:bg-[#BFEFE6] sm:col-span-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">🔗</span>
              Copy website link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function runComponentSmokeTests() {
  console.assert(stats.length === 4, "Expected four impact stats");
  console.assert(donationCards.length === 3, "Expected three donation support cards");
  console.assert(galleryImages.length === 6, "Expected six gallery images");
  console.assert(colors.deepOcean === "#063B4A", "Expected ocean color palette to be defined");
  console.assert(typeof ShareModal === "function", "Expected ShareModal component to exist");
  console.assert(progressPercent > 0, "Expected donation progress to be greater than zero");
  console.assert(
    donationCards.some((card) => card[1] === "Solar Lanterns"),
    "Donation cards should include Solar Lanterns"
  );
  console.assert(
    stats.some((item) => item[0] === "150+"),
    "Stats should include the Paglajag youth count"
  );
}

runComponentSmokeTests();

export default function SiargaoSurfCampLandingPage() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#ECFBF8] text-[#07313B]">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#063B4A] text-white">
        <div className="absolute inset-0">
          <img src={imagePaths.hero} alt="Paglajag youth in Siargao" className="h-full w-full object-cover opacity-68 saturate-125" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#021F28]/55 via-[#063B4A]/35 to-[#063B4A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(24,182,199,0.35),transparent_32%),radial-gradient(circle_at_18%_82%,rgba(191,239,230,0.28),transparent_36%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#ECFBF8] via-[#ECFBF8]/15 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 md:px-10">
          <nav className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/85 md:text-sm">
            <span>Empowering Paglajag</span>
            <span>Siargao · Summer 2026</span>
          </nav>

          <div className="grid items-end gap-12 pb-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm backdrop-blur">
                A youth surf camp and community initiative in Anajawan, Del Carmen
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Empowering the Paglajag youths in Siargao through surf, light, and opportunity.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
                We are raising funds to help the Paglajag youth access surfboards, safe instruction, and solar lanterns — creating a positive space to learn, grow, and come together as a community.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#donate">Donate Now <span className="ml-2">♡</span></Button>
                <Button href="#story" variant="outlineLight">Read the Story <ArrowIcon /></Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <ImageFrame src={imagePaths.youthRoom} alt="Paglajag youth leaders" label="Youth Leaders" className="h-56 rounded-[2rem] ring-1 ring-white/20" />
                <ImageFrame src={imagePaths.surfboards} alt="Surfboards" label="Only 2 Boards" className="mt-12 h-64 rounded-[2rem] ring-1 ring-white/20" />
                <ImageFrame src={imagePaths.lantern} alt="Solar lantern" label="Solar Lanterns" className="h-52 rounded-[2rem] ring-1 ring-white/20" />
                <ImageFrame src={imagePaths.youthGroup} alt="Youth community" label="150+ Youth" className="h-56 rounded-[2rem] ring-1 ring-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="relative mx-auto -mt-16 grid max-w-7xl grid-cols-1 gap-4 px-6 pb-16 md:grid-cols-4 md:px-10">
        {stats.map(([number, label]) => (
          <Card key={number} className="border border-[#BFEFE6] bg-white/90 backdrop-blur">
            <div className="p-8">
              <div className="text-5xl font-semibold text-[#08798C]">{number}</div>
              <p className="mt-3 text-sm leading-6 text-[#34616B]">{label}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[560px]">
          <ImageFrame src={imagePaths.james} alt="James in Siargao" className="absolute left-0 top-0 h-[520px] w-[78%] rounded-[2rem]" />
          <ImageFrame src={imagePaths.surfing} alt="James surfing" className="absolute bottom-0 right-0 h-64 w-[46%] rounded-[2rem] border-8 border-[#ECFBF8]" label="Started surfing at 4" />
        </div>

        <div className="flex flex-col justify-center">
          <SectionEyebrow>The Beginning</SectionEyebrow>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">After meeting the Paglajag youth, I wanted to do more.</h2>
          <p className="mt-8 text-lg leading-8 text-[#34616B]">
            Hi, I’m James. I’m working with friends and surf coaches from General Luna to support the Paglajag youth in Anajawan through a community surf camp.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#34616B]">
            The goal is simple: create a safe, fun, and inspiring space where young people can learn to surf, build confidence, develop discipline, and feel supported by the community around them.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* ABOUT PAGLAJAG */}
      <section className="relative overflow-hidden bg-[#063B4A] px-6 py-24 text-white md:px-10">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-25 md:block">
          <img src={imagePaths.youthGroup} alt="Paglajag community" className="h-full w-full object-cover saturate-125" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#063B4A] via-[#063B4A]/95 to-[#08798C]/70" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#18B6C7]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionEyebrow light>About Paglajag</SectionEyebrow>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">A youth-led movement rooted in learning, service, and love for the island.</h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {aboutCards.map(([icon, title, text]) => (
              <Card key={title} className="border border-white/10 bg-white/10 text-white shadow-none backdrop-blur">
                <div className="p-8">
                  <div className="mb-6 text-4xl">{icon}</div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 text-white/78">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* FUNDING PROGRESS */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#063B4A] to-[#08798C] text-white shadow-2xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 md:p-14 lg:p-20">
              <SectionEyebrow light>Fundraising Progress</SectionEyebrow>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Building the first Paglajag youth surf camp.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
                We are currently raising funds for additional surfboards, solar lanterns, instructor support, and logistics for the first surf camp in Anajawan, Del Carmen.
              </p>

              <div className="mt-12 rounded-[2rem] bg-white/10 p-8 backdrop-blur">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#BFEFE6]">Raised So Far</p>
                    <p className="mt-2 text-5xl font-semibold">₱48,500</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#BFEFE6]">Goal</p>
                    <p className="mt-2 text-3xl font-semibold">₱250,000</p>
                  </div>
                </div>

                <div className="mt-8 h-5 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#18B6C7] to-[#BFEFE6]"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                  <span>{progressPercent}% funded</span>
                  <span>{Math.max(0, fundingGoal - amountRaised).toLocaleString()} PHP remaining</span>
                </div>
              </div>
            </div>

            <div className="bg-[#ECFBF8] p-8 text-[#063B4A] md:p-14">
              <SectionEyebrow>What Your Donation Can Do</SectionEyebrow>

              <div className="mt-8 space-y-5">
                {impactTargets.map(([amount, text]) => (
                  <div key={amount} className="rounded-[1.75rem] border border-[#BFEFE6] bg-white p-6 shadow-sm">
                    <p className="text-3xl font-semibold text-[#08798C]">{amount}</p>
                    <p className="mt-3 leading-7 text-[#34616B]">{text}</p>
                  </div>
                ))}
              </div>

              <Button href="#donate" className="mt-10 w-full justify-center">
                Support the Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SURFING */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:px-10">
        <div className="flex flex-col justify-center">
          <SectionEyebrow>Why Surfing Matters</SectionEyebrow>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">The ocean is right there. Access is the missing piece.</h2>
          <p className="mt-8 text-lg leading-8 text-[#34616B]">
            Around 150 youth are part of the Paglajag community, but there are only two surfboards available. Right now, mostly boys know how to surf — even though many girls are excited to learn too.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#34616B]">
            More boards and safe instruction can turn surfing into more than a sport. It can become a source of confidence, joy, discipline, inclusion, and even future livelihood opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImageFrame src={imagePaths.surfboards} alt="Surfboards" label="Surfboards" className="h-80 rounded-[2rem]" />
          <ImageFrame src={imagePaths.youthGroup} alt="Paglajag youth" label="Community" className="mt-16 h-80 rounded-[2rem]" />
          <div className="col-span-2 rounded-[2rem] bg-gradient-to-br from-[#063B4A] to-[#08798C] p-8 text-white shadow-sm">
            <p className="text-5xl font-semibold">2 boards</p>
            <p className="mt-3 max-w-md text-white/75">for a community of 150+ youth. More boards means more access, more inclusion, and more time in the water.</p>
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY */}
      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Project Gallery</SectionEyebrow>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Real people, real community, real impact.</h2>
            </div>
            <p className="max-w-md leading-7 text-[#34616B]">
              These images should be replaced with the actual photos from the Canva deck once they are saved into your site’s images folder.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:grid-rows-2">
            <ImageFrame src={galleryImages[0][0]} alt={galleryImages[0][1]} className="col-span-2 h-80 rounded-[2rem] md:row-span-2 md:h-full" label="Paglajag" />
            <ImageFrame src={galleryImages[1][0]} alt={galleryImages[1][1]} className="col-span-2 h-56 rounded-[2rem]" label="Community" />
            <ImageFrame src={galleryImages[2][0]} alt={galleryImages[2][1]} className="h-56 rounded-[2rem]" label="Boards" />
            <ImageFrame src={galleryImages[3][0]} alt={galleryImages[3][1]} className="h-56 rounded-[2rem]" label="Surf" />
            <ImageFrame src={galleryImages[4][0]} alt={galleryImages[4][1]} className="h-56 rounded-[2rem]" label="Siargao" />
            <ImageFrame src={galleryImages[5][0]} alt={galleryImages[5][1]} className="col-span-2 h-56 rounded-[2rem]" label="Discipline" />
          </div>
        </div>
      </section>

      {/* DONATION SUPPORT */}
      <section className="bg-gradient-to-b from-[#ECFBF8] to-[#BFEFE6] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <SectionEyebrow>What Donations Support</SectionEyebrow>
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Small contributions can create lasting change.</h2>
            </div>
            <Button href="#donate" variant="dark" className="w-fit">Donate via GCash</Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {donationCards.map(([icon, title, text, image]) => (
              <Card key={title} className="overflow-hidden border border-white/70 bg-white/85">
                <ImageFrame src={image} alt={title} className="h-56 rounded-none" />
                <div className="p-8">
                  <div className="mb-5 text-4xl">{icon}</div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 text-[#34616B]">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#063B4A] text-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-14 lg:p-20">
              <SectionEyebrow light>The Future Vision</SectionEyebrow>
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">A community-centered surf camp in Siargao.</h2>
              <p className="mt-8 text-lg leading-8 text-white/75">
                The long-term vision is to build a surf camp and learning space that supports youth development, creates local opportunity, and keeps giving back to the community.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/75">
                This first camp is the starting point — a way to prove the model, build trust, and create momentum for something much bigger.
              </p>
            </div>
            <ImageFrame src={imagePaths.ocean} alt="Siargao ocean" className="h-full min-h-[520px] rounded-none" />
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-white text-center shadow-sm ring-1 ring-[#BFEFE6]">
          <div className="h-56 bg-[#063B4A]">
            <img src={imagePaths.ocean} alt="Siargao waves" className="h-full w-full object-cover opacity-85 saturate-125" />
          </div>
          <div className="p-8 md:p-14">
            <div className="mx-auto mb-6 text-5xl text-[#08798C]">♡</div>
            <h2 className="text-4xl font-semibold md:text-6xl">Help us get more youth in the water.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#34616B]">
              Every donation helps provide surfboards, solar lanterns, safe instruction, and the logistics needed to bring this camp to life.
            </p>
            <div className="mt-10 rounded-3xl bg-[#ECFBF8] p-8 ring-1 ring-[#BFEFE6]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#08798C]">Donate via GCash</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-[#063B4A]">09175082889</p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="#donate">Donate Now</Button>
              <Button onClick={() => setIsShareOpen(true)} variant="outlineDark">Share This Project</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="bg-[#063B4A] px-6 py-12 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Empowering Paglajag</h3>
            <p className="mt-2 text-white/65">Anajawan, Del Carmen, Siargao · Summer 2026</p>
          </div>
          <div className="space-y-2 text-white/78">
            <p>📍 Manila, Philippines</p>
            <p>☎ +63 917 167 3889</p>
            <p>✉ jvgilberd@gmail.com</p>
          </div>
        </div>
      </footer>
          <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </main>
  );
}
