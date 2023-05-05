import Head from 'next/head'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { GitHubIcon, TwitterIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import portraitImage from '@/images/andreas-siedler-portrait.jpg'
import { CalendarIcon } from '@heroicons/react/20/solid'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Andreas Siedler</title>
        <meta
          name="description"
          content="I’m Andreas Siedler. I am a passionate software developer based in Vienna."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="mb-2 overflow-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
              hi, ich bin <br className="block md:hidden" />
              <span className="relative">
                <span className="h-20 overflow-x-hidden whitespace-nowrap pt-2 text-teal-400">
                  andreas. <span className="text-3xl md:text-5xl">👋</span>
                </span>
                <span className="{`${styles.cursor} will-change`} cursor absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type bg-white after:bg-zinc-700 dark:bg-zinc-900 dark:after:bg-white"></span>
              </span>
            </h1>

            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Ich liebe es, Websites und Anwendungen zu entwickeln, die das
                Leben der Menschen erleichtern und verbessern. Ich habe mich auf
                React und Flutter im Frontend sowie Python Django und NodeJS mit
                Express im Backend spezialisiert und verfüge über umfangreiche
                Kenntnisse in verschiedenen Programmiersprachen und Frameworks
                wie Angular und NextJS sowie Laravel.
              </p>
              <p>
                Ich arbeite schon seit einigen Jahren als Entwickler und habe
                mich darauf spezialisiert, Anwendungen für kleinere Unternehmen
                und Privatpersonen zu gestalten und umzusetzen. Es ist einfach
                großartig, wenn man eine Idee hat und sie in die Tat umsetzen
                kann. Ich bin stolz darauf, jedes Projekt von Anfang bis Ende
                betreuen zu können, um sicherzustellen, dass das Endprodukt
                perfekt ist.
              </p>
              <p>
                Ich finde es auch toll, bei der Gestaltung von Anwendungen
                mitzuhelfen, um sie einzigartig und ansprechend zu gestalten.
                Dabei gebe ich mein Bestes, um das Projekt so zu gestalten, dass
                es den Wünschen und Bedürfnissen des Kunden entspricht.
              </p>
              <p>
                Wenn du jemanden suchst, der mit Leidenschaft und Engagement an
                deinem Projekt arbeitet, bin ich gerne für dich da. Darüber
                hinaus kann ich auch bei der Beantragung von Fördermitteln wie
                KMU digital unterstützen, mit denen du bis zu 30% der Kosten
                einsparen kannst.
              </p>
              <p>
                Ich freue mich darauf, von dir zu hören und gemeinsam mit dir
                großartige Projekte zu realisieren.
              </p>
            </div>
            {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi there, my name is Andreas and I am a passionate software
              developer based in Vienna.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                For as long as I can remember, I have always been fascinated by
                the way technology works and how it can be leveraged to solve
                real-world problems. Over the years, I have gained a wealth of
                experience in software development, and I am now proud to offer
                my expertise to companies and individuals who are seeking to
                bring their ideas to life.
              </p>
              <p>
                As a freelancer, I take a unique approach to each project I
                undertake. I believe that the key to successful software
                development lies in understanding the unique needs of each
                client and working closely with them to create innovative and
                effective solutions. Whether you&apos;re a startup looking to
                build a new product from scratch, or an established business
                seeking to improve your existing software, I am here to help you
                achieve your goals.
              </p>
              <p>
                One of the things I love most about software development is the
                endless possibilities it presents. There is always something new
                to learn, a new tool to master, or a new challenge to overcome.
                I am constantly expanding my skill set, learning new programming
                languages, and exploring new frameworks and technologies. This
                allows me to stay at the cutting edge of the industry and to
                offer my clients the very best in software development.
              </p>
              <p>
                When I&apos;m not busy coding, you can usually find me spending
                time with my furry friend, a lovable and energetic dog. I
                believe that a balanced life is essential for creativity and
                productivity, and I always make time for the things that matter
                most to me.
              </p>
              <p>
                So, if you&apos;re looking for a skilled software developer who
                is passionate, creative, and dedicated to delivering results,
                then look no further than me. I am excited to work with you to
                bring your ideas to life and to help you achieve your goals. Get
                in touch with me today to learn more about how I can help you!
              </p>
            </div> */}
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                target={'_blank'}
                href="https://twitter.com/SiedlerAndreas"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                target={'_blank'}
                href="https://github.com/AndreasSiedler"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              {/* <SocialLink
                target={'_blank'}
                href="https://www.linkedin.com/in/andreas-siedler-8415a8b8/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink> */}
              <SocialLink
                target={'_blank'}
                href="mailto:andreas.siedler@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                andreas.siedler@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:+436769457566"
                icon={PhoneIcon}
                className="mt-4"
              >
                +43 676 945 75 66
              </SocialLink>
              <SocialLink
                target="_blank"
                href="https://calendly.com/andreassiedler/infogesprach"
                className="mt-4"
                icon={CalendarIcon}
              >
                Google Meeting
              </SocialLink>
            </ul>
            {/* <Button
              href="intent://vnd.android.cursor.dir/raw_contact/#Intent;action=android.intent.action.INSERT;S.email=hello@world.com;S.phone=+1-212-555-1234end;"
              variant="secondary"
              className="group mt-6 w-full"
            >
              Meine Visitenkarte
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button> */}
          </div>
        </div>
      </Container>
    </>
  )
}
