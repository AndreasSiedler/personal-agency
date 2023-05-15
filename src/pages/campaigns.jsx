import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, TwitterIcon } from '@/components/SocialIcons'
import { CalendarIcon } from '@heroicons/react/20/solid'

function SocialLink({ className, target, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target={target}
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

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

export default function CampaignsPage() {
  return (
    <>
      <Head>
        <title>Mega Frühjahrsangebot: 10% Rabatt auf alle Projekte</title>
        <meta
          name="description"
          content="Ich wollte euch nur schnell mitteilen, dass wir gerade ein mega Frühjahrsangebot haben! Starte jetzt
          dein Traumprojekt!"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h1 className="mb-2 overflow-x-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
                frühjahrs angebot <br className="block md:hidden" />
                <span className="relative">
                  <span className="h-20 overflow-x-hidden whitespace-nowrap pt-2 text-teal-400">
                    10% Rabatt <span className="text-3xl md:text-5xl">👋</span>
                  </span>
                  <span className="{`${styles.cursor} will-change`} cursor absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type bg-white after:bg-zinc-700 dark:bg-zinc-900 dark:after:bg-white"></span>
                </span>
              </h1>

              <p>
                Ich wollte euch nur schnell mitteilen, dass wir gerade ein mega
                Frühjahrsangebot haben! Wenn ihr ein neues Projekt starten wollt
                oder eine bestehende Idee weiterentwickeln möchtet, dann ist
                jetzt der perfekte Zeitpunkt, um zuzuschlagen. Denn wir bieten
                aktuell 10% Rabatt auf alle Projekte. Also worauf wartet ihr
                noch? Schickt mir eure Ideen und wir können loslegen!
              </p>
            </div>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h1 className="mb-2 overflow-x-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
                startups <br className="block md:hidden" />
                <span className="relative">
                  <span className="h-20 overflow-x-hidden whitespace-nowrap pt-2 text-teal-400">
                    beteiligung.{' '}
                    <span className="text-3xl md:text-5xl">👋</span>
                  </span>
                  <span className="{`${styles.cursor} will-change`} cursor absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type bg-white after:bg-zinc-700 dark:bg-zinc-900 dark:after:bg-white"></span>
                </span>
              </h1>
              <p>
                Du hast eine coole Idee als Startup, aber wenig Geld? Ich bin
                bereit, die Entwicklung für eine Beteiligung am Startup zu
                übernehmen.
              </p>
              <p>
                Als Startup mit einer vielversprechenden Idee und begrenzten
                finanziellen Ressourcen kann es schwer sein, die notwendigen
                Entwicklungsressourcen zu finden. Aber wenn deine Idee mich
                anspricht, stehe ich gerne zur Verfügung, um die Entwicklung
                umzusetzen - im Austausch gegen eine Beteiligung am Startup.
                Zusammen können wir deine Vision zum Leben erwecken und dein
                Unternehmen zum Erfolg führen.
              </p>
              <p>
                Zusammen können wir deine Vision zum Leben erwecken und dein
                Unternehmen zum Erfolg führen.
              </p>
            </div>
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
          </div>
        </div>
      </Container>
    </>
  )
}
