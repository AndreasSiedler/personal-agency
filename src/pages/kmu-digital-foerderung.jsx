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

export default function KmuDigitalFörderungPage() {
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
          <div className="lg:order-first lg:row-span-2">
            <h1 className="mb-2 overflow-x-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
              kmu.DIGITAL <br className="block md:hidden" />
              <span className="relative">
                <span className="h-20 overflow-x-hidden whitespace-nowrap pt-2 text-teal-400">
                  förderung. <span className="text-3xl md:text-5xl">👋</span>
                </span>
                <span className="{`${styles.cursor} will-change`} cursor absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type bg-white after:bg-zinc-700 dark:bg-zinc-900 dark:after:bg-white"></span>
              </span>
            </h1>

            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Willkommen. Sie sind ein kleines oder mittelständisches
                Unternehmen und interessieren sich für die KMU.Digital
                Förderung? Dann sind Sie bei mir genau richtig!
              </p>
              <p>
                Ich biete Ihnen professionelle Unterstützung bei der Umsetzung
                Ihrer Digitalprojekte. Als Webentwickler habe ich mich darauf
                spezialisiert, Websites, Online-Shops und andere digitale
                Lösungen zu erstellen und zu optimieren. Mit meiner Erfahrung
                und meinem Know-how kann ich Sie bei der Umsetzung Ihrer
                digitalen Projekte unterstützen und sicherstellen, dass Sie das
                Beste aus der KMU.Digital Förderung herausholen.
              </p>
              <p>
                Die KMU.Digital Förderung bietet Ihnen die Möglichkeit, bis zu
                3.000 EUR für Beratungsleistungen und bis zu 6.000 EUR für die
                Umsetzung Ihrer Digitalprojekte zu erhalten. Ich unterstütze Sie
                bei der Umsetzung Ihrer geplanten Maßnahmen, indem ich Ihnen
                dabei helfe, eine professionelle und effektive Website oder
                einen Online-Shop zu erstellen oder Ihre
                Online-Marketing-Aktivitäten zu optimieren.
              </p>
              <p>
                Ich verstehe die Bedürfnisse von kleinen und mittelständischen
                Unternehmen und biete maßgeschneiderte Lösungen an, die auf Ihre
                individuellen Anforderungen zugeschnitten sind. Gemeinsam können
                wir Ihre Ideen und Ziele in die Tat umsetzen und sicherstellen,
                dass Ihre Investitionen in die Digitalisierung erfolgreich sind.
              </p>
              <p>
                Kontaktieren Sie mich noch heute, um mehr über meine
                Dienstleistungen als Webentwickler und meine Unterstützung bei
                der Beantragung der KMU.Digital Förderung zu erfahren. Ich freue
                mich darauf, Ihnen bei der Realisierung Ihrer digitalen Projekte
                zu helfen!
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
