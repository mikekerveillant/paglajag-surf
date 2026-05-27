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

const videoPaths = {
  drone: "/videos/drone-siargao.mp4",
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

const paglajagStory = [
  "Paglajag—a Surigaonon term meaning ‘to sail’—is a holistic, community-driven initiative that nurtures values-based education while encouraging active participation and shared responsibility among stakeholders. Anchored in the Department of Education’s core values—Maka-Diyos, Maka-Tao, Makakalikasan, at Makabansa—Paglajag represents both a journey and a celebration of learning and service.",
  "Launched in August 2022 by the Anajawan Elementary School Supreme Elementary Learner Government (SELG), the initiative began with simple environmental efforts such as coastal cleanups, recycling, and engaging children in protecting their natural surroundings. Since then, it has grown into a dynamic, youth-led program built on seven flagship pillars: environmental education, performing arts and creative expression, values formation, literacy development, nutrition support, livelihood initiatives, and scholarships.",
  "From just 13 members, Paglajag has expanded into a vibrant movement of over 150 children and youth—reflecting the community’s shared commitment to education, environmental stewardship, and youth empowerment.",
  "Guided by a deep love for the island and its people, Paglajag promotes sustainable development and community resilience through collaboration, innovation, and active engagement. Its programs take a holistic approach to child and youth development, integrating learning, creativity, well-being, and practical skills.",
  "Paglajag envisions becoming a leading model for holistic and sustainable education in island and coastal communities across the Philippines—empowering young people to grow intellectually, creatively, emotionally, socially, and spiritually, and to become compassionate, self-reliant leaders and changemakers.",
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

const partners = [
  ["🏄", "Local Surf Coaches", "Experienced instructors from General Luna helping create a safe first experience in the water."],
  ["🌴", "Paglajag Community", "Youth leaders and families in Anajawan helping guide the project from the ground up."],
  ["🤝", "Supporters & Donors", "Friends, families, and partners helping fund boards, lanterns, transport, and camp logistics."],
];

const siargaoReasons = [
  ["🌊", "An island shaped by the ocean", "Many youth in Siargao grow up surrounded by waves and nature, yet access to surf equipment and organized activities remains limited."],
  ["⚡", "Limited access after dark", "Some households in Anajawan still have limited lighting at night, making it harder for children to study safely and consistently."],
  ["🏄", "Surfing can create opportunity", "Surfing is deeply connected to Siargao’s identity and tourism economy. Learning early can open future opportunities in guiding, coaching, and hospitality."],
];

const roadmapGoals = [
  ["June 2026", "Launch the First Surf Camp", "Host the first Paglajag youth surf camp in Anajawan with local coaches and community volunteers."],
  ["July 2026", "Expand Equipment Access", "Purchase additional beginner surfboards and safety gear so more youth — especially girls — can participate."],
  ["August 2026", "Solar Lantern Distribution", "Provide solar lanterns to support safer evenings and help children study after dark."],
  ["Late 2026", "Build Long-Term Momentum", "Develop recurring surf sessions, mentorship, and future partnerships that continue supporting the community."],
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
  console.assert(paglajagStory.length === 5, "Expected full Paglajag story paragraphs");
  console.assert(galleryImages.length === 6, "Expected six gallery images");
  console.assert(colors.deepOcean === "#063B4A", "Expected ocean color palette to be defined");
  console.assert(videoPaths.drone === "/videos/drone-siargao.mp4", "Expected drone video path to be defined");
  console.assert(typeof ShareModal === "function", "Expected ShareModal component to exist");
  console.assert(progressPercent > 0, "Expected donation progress to be greater than zero");
  console.assert(partners.length === 3, "Expected three partner cards");
  console.assert(siargaoReasons.length === 3, "Expected three Siargao impact cards");
  console.assert(roadmapGoals.length === 4, "Expected four roadmap milestones");
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
      {/* STICKY DONATE BUTTON */}
      <a
        href="#donate"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#18B6C7] to-[#08798C] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-2xl transition hover:scale-105 hover:shadow-[#18B6C7]/40 md:bottom-8 md:right-8"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg backdrop-blur">
          ♡
        </span>
        Get Involved
      </a>
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
                More surfboards. More opportunities. More youth in the water.
                <br />
                <br />
                We’re raising funds for surfboards, solar lanterns, and safe instruction for the Paglajag community in Siargao.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#donate">Donate Now <span className="ml-2">♡</span></Button>
                <Button href="#story" variant="outlineLight">Read the Story <ArrowIcon /></Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <ImageFrame src={imagePaths.youthRoom} alt="Paglajag youth leaders" label="Youth Leaders" className="h-60 rounded-[2rem] ring-1 ring-white/20" />
                <ImageFrame src={imagePaths.surfboards} alt="Surfboards" label="Only 2 Boards" className="h-60 rounded-[2rem] ring-1 ring-white/20" />
                <ImageFrame src={imagePaths.lantern} alt="Solar lantern" label="Solar Lanterns" className="h-60 rounded-[2rem] ring-1 ring-white/20" />
                <ImageFrame src={imagePaths.youthGroup} alt="Youth community" label="150+ Youth" className="h-60 rounded-[2rem] ring-1 ring-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRONE VIDEO */}
      <section className="relative overflow-hidden bg-[#021F28] px-6 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(24,182,199,0.22),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <SectionEyebrow light>Siargao from Above</SectionEyebrow>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              The island that inspires this project.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A place shaped by waves, community, and opportunity.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-[#063B4A] shadow-2xl ring-1 ring-white/10">
            <video
              className="aspect-video h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster={imagePaths.ocean}
            >
              <source src={videoPaths.drone} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
        <div className="grid grid-cols-2 gap-4">
          <ImageFrame src={imagePaths.james} alt="James in Siargao" className="h-[520px] rounded-[2rem]" label="James" />
          <ImageFrame src={imagePaths.surfing} alt="James surfing" className="h-[520px] rounded-[2rem]" label="Started surfing at 4" />
        </div>

        <div className="flex flex-col justify-center">
          <SectionEyebrow>The Beginning</SectionEyebrow>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">After meeting the Paglajag youth, I wanted to do more.</h2>
          <p className="mt-8 text-lg leading-8 text-[#34616B]">
            Hi, I’m James.
            <br />
            <br />
            I’m working on a project to support the Paglajag youth in Anajawan through a community surf camp.
            <br />
            <br />
            Together with a few friends and surf coaches from General Luna, Siargao, we’re planning a 2-day camp where kids can learn how to surf in a safe and encouraging environment.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#34616B]">
            It’s not just about surfing.
            <br />
            <br />
            It’s about building confidence, discipline, teamwork, and creating positive experiences together.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#34616B]">
            We’re also raising funds to help keep the project going.
            <br />
            <br />
            Part of that includes providing solar lanterns so children can study at night and families feel safer after dark.
            We’re also hoping to purchase more surfboards so more young people — especially girls — can participate.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#34616B]">
            My hope is that this can grow into something that creates more opportunities for the community and helps young people feel supported, inspired, and proud of where they come from.
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

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#BFEFE6]">The Full Story</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Paglajag means “to sail.”
              </h3>
              <p className="mt-6 text-lg leading-8 text-white/75">
                What began as a small youth-led environmental effort has grown into a movement of learning, service, creativity, and community care.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/95 p-8 text-[#063B4A] shadow-2xl md:p-10">
              <div className="space-y-6">
                {paglajagStory.map((paragraph, index) => (
                  <p key={index} className="leading-8 text-[#34616B]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
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
                Funding will help support:
                <br />
                • Additional surfboards
                <br />
                • Solar lanterns
                <br />
                • Instructor transport
                <br />
                • Camp logistics
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
            150+ youth.
          <br />
          Only 2 surfboards.
          <br />
          And many girls still waiting for a chance to learn.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#34616B]">
            Surfing can become more than a sport.
          <br />
          Confidence.
          <br />
          Discipline.
          <br />
          Community.
          <br />
          Opportunity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImageFrame src={imagePaths.surfboards} alt="Surfboards" label="Surfboards" className="h-80 rounded-[2rem]" />
          <ImageFrame src={imagePaths.youthGroup} alt="Paglajag youth" label="Community" className="h-80 rounded-[2rem]" />
          <div className="col-span-2 rounded-[2rem] bg-gradient-to-br from-[#063B4A] to-[#08798C] p-8 text-white shadow-sm">
            <p className="text-5xl font-semibold">2 boards</p>
            <p className="mt-3 max-w-md text-white/75">for a community of 150+ youth. More boards means more access, more inclusion, and more time in the water.</p>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS IN SIARGAO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#063B4A] to-[#08798C] px-6 py-24 text-white md:px-10">
        <div className="absolute inset-0 opacity-15">
          <img src={imagePaths.ocean} alt="Siargao coastline" className="h-full w-full object-cover" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <SectionEyebrow light>Why This Matters in Siargao</SectionEyebrow>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              More than a surf camp.
              <br />
              A chance to create opportunity close to home.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78">
              Siargao is known around the world for its waves.
              <br />
              <br />
              But many local youth still have limited access to surfboards, organized programs, and opportunities connected to the island’s growing surf culture.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {siargaoReasons.map(([icon, title, text]) => (
              <Card key={title} className="border border-white/10 bg-white/10 backdrop-blur">
                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-4xl">
                    {icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-white">{title}</h3>

                  <p className="mt-4 leading-7 text-white/75">
                    {text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#BFEFE6]">The Bigger Picture</p>

              <p className="mt-6 text-2xl font-semibold leading-relaxed text-white md:text-3xl">
                When youth feel connected to their community, the ocean, and a positive future — it changes what they believe is possible.
              </p>
            </div>

            <ImageFrame
              src={imagePaths.hero}
              alt="Paglajag youth in Siargao"
              className="min-h-[320px] rounded-[2rem]"
              label="Siargao"
            />
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ImageFrame src={galleryImages[0][0]} alt={galleryImages[0][1]} className="h-72 rounded-[2rem]" label="Paglajag" />
            <ImageFrame src={galleryImages[1][0]} alt={galleryImages[1][1]} className="h-72 rounded-[2rem]" label="Community" />
            <ImageFrame src={galleryImages[2][0]} alt={galleryImages[2][1]} className="h-72 rounded-[2rem]" label="Boards" />
            <ImageFrame src={galleryImages[3][0]} alt={galleryImages[3][1]} className="h-72 rounded-[2rem]" label="Surf" />
            <ImageFrame src={galleryImages[4][0]} alt={galleryImages[4][1]} className="h-72 rounded-[2rem]" label="Siargao" />
            <ImageFrame src={galleryImages[5][0]} alt={galleryImages[5][1]} className="h-72 rounded-[2rem]" label="Discipline" />
          </div>
        </div>
      </section>

      {/* SUMMER 2026 ROADMAP */}
      <section className="relative overflow-hidden px-6 py-24 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(24,182,199,0.12),transparent_28%),radial-gradient(circle_at_85%_90%,rgba(8,121,140,0.12),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SectionEyebrow>Summer 2026 Camp Goals</SectionEyebrow>
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                A roadmap for the first year of the project.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#34616B]">
              The goal is not just a single surf camp — but the beginning of something sustainable for the Paglajag youth and wider community.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-gradient-to-b from-[#18B6C7] to-[#BFEFE6] md:block" />

            <div className="space-y-8">
              {roadmapGoals.map(([date, title, text], index) => (
                <div key={title} className="relative grid grid-cols-1 gap-6 md:grid-cols-[80px_1fr] md:gap-10">
                  <div className="relative hidden md:flex items-start justify-center">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#18B6C7] text-sm font-bold text-white shadow-lg ring-8 ring-[#ECFBF8]">
                      {index + 1}
                    </div>
                  </div>

                  <Card className="border border-[#BFEFE6] bg-white/90 backdrop-blur">
                    <div className="p-8 md:p-10">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#08798C]">
                        {date}
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold text-[#063B4A]">
                        {title}
                      </h3>

                      <p className="mt-5 max-w-3xl leading-8 text-[#34616B]">
                        {text}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
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

      {/* PARTNERS */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <SectionEyebrow>Partners</SectionEyebrow>
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Built with community, coaches, and supporters.</h2>
            </div>
            <p className="max-w-md leading-7 text-[#34616B]">
              This project grows through collaboration — from the youth and families in Anajawan to the surf coaches, donors, and friends helping make the first camp possible.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {partners.map(([icon, title, text]) => (
              <Card key={title} className="border border-[#BFEFE6] bg-white/85">
                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ECFBF8] text-4xl">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#063B4A]">{title}</h3>
                  <p className="mt-4 leading-7 text-[#34616B]">{text}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] bg-gradient-to-r from-[#063B4A] to-[#08798C] p-8 text-white md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#BFEFE6]">Become a Partner</p>
              <h3 className="mt-3 text-3xl font-semibold">Want to support with boards, gear, coaching, or sponsorship?</h3>
            </div>
            <Button href="mailto:jvgilberd@gmail.com?subject=Partner%20with%20Empowering%20Paglajag" className="mt-6 md:mt-0">
              Contact Us
            </Button>
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
                The vision is bigger than one surf camp.
              <br />
              <br />
              A long-term community space where surfing, learning, and opportunity come together.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/75">
                This is just the beginning.
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
              Every contribution helps put more youth in the water and bring this project to life.
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
