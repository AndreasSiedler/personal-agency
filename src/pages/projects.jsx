import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import feedback1 from '@/images/cemsit-yelgin.jpeg'
import feedback2 from '@/images/markus-steinrisser.jpeg'
import bookingDoc from '@/images/logos/booking-doc.png'
import logoEnlivio from '@/images/logos/enlivio.png'
import logoMediashop from '@/images/logos/mediashop.svg'
import logoVerbund from '@/images/logos/verbund.jpeg'
import logoWaytation from '@/images/logos/waytation.png'
import logoApoolco from '@/images/logos/apoolco.jpeg'

import { BriefcaseIcon } from '@heroicons/react/20/solid'

const projects = [
  {
    name: 'Verbund VISION',
    description:
      'Gemeinsam mit einem motivierten Team von Experten setzen wir neue Funktionen für das VISION Service Portal um.',
    link: {
      href: 'https://www.verbund.com/de-at/geschaeftskunden/online-services/grosskundenportal-vision',
      label: 'verbund.com',
    },
    logo: logoVerbund,
  },
  {
    name: 'Booking Doc',
    description:
      'Bookingdoc ist eine Teletherapieplattform für Ärzte und Patienten, die ich durch die Entwicklung von Apps mit Javascript und Aps.Net unterstützt habe.',
    link: {
      href: 'https://www.bookingdoc.at/',
      label: 'bookingdoc.at',
    },
    logo: bookingDoc,
  },
  {
    name: 'Enlivio',
    description:
      'Die enlivio App unterstützt dich beim Training zuhause durch Video-basierte Teletherapie mit deiner Therapeutin und passt deine Übungen regelmäßig an deinen Gesundheitszustand an.',
    link: { href: 'https://www.enlivio.com/', label: 'enlivio.com' },
    logo: logoEnlivio,
  },
  {
    name: 'Waytation',
    description:
      'Die erste Plug-and-Play-Lösung für das Tracking und die Analyse des Besucherweges bei Veranstaltungen wie Messen und Kongressen.',
    link: { href: 'https://waytation.com/', label: 'waytation.com' },
    logo: logoWaytation,
  },
  {
    name: 'Mediashop',
    description:
      'Für die Neuentwicklung des E-Commerce-Systems setzt MediaShop auf eine Headless React Shop Entwicklung, um ein unterhaltendes Einkaufserlebnis für seine Kunden zu schaffen.',
    link: { href: 'https://www.mediashop.tv/', label: 'mediashop.tv' },
    logo: logoMediashop,
  },
  {
    name: 'Apoolco',
    description:
      'Für Apoolco, den führenden Anbieter im Bereich Pool und Wellness, habe ich als Shopware-Entwickler an der Entwicklung ihres Online-Shops mitgewirkt.',
    link: { href: 'https://www.apoolco.at/', label: 'apoolco.at' },
    logo: logoApoolco,
  },
]

const feedbacks = [
  {
    description:
      'Als Fullstack Developer hat Herr Siedler den Erwartungen des Unternehmens, der Mitarbeiter und der Kunden in jeglicher Hinsicht und in allerbester Weise entsprochen. Er erfüllte seine Aufgaben zu unserer vollsten Zufriedenheit, mit außerordentlichem Engagement und höchstem Maße an Eigeninitiative, Zielorientierung und Professionalität.',
    name: 'Cemsit Yelgin',

    image: feedback1,
    position: 'Waytation CEO',
  },
  {
    description:
      'Zusammenfassend kann festgehalten werden, dass Herr Siedler die genannten Tätigkeiten selbstständig und stets zu unserer vollsten Zufriedenheit erledigt hat. Er überzeugte durch Zuverlässigkeit, große Einsatzbereitschaft und außergewöhnliches Engagement bei der Lösung der täglichen Arbeitsaufgaben.',
    name: 'Markus Steinrisser',
    image: feedback2,
    position: 'Apoolco Head of Ecommerce',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Feedback() {
  return (
    <div className="mt-32 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.name}
          className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <BriefcaseIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Feedback</span>
          </h2>
          <figure className="mt-6 flex flex-auto flex-col justify-between ">
            <blockquote className="text-sm italic text-zinc-900 dark:text-zinc-100">
              <p>{feedback.description}</p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-4">
              <Image
                src={feedback.image}
                alt=""
                className="h-10 w-10 rounded-full"
                unoptimized
              />
              <div className="text-base">
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {feedback.name}
                </div>
                <div className="text-sm text-gray-400">{feedback.position}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Andreas Siedler</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Willkommen auf meiner"
        fancyTitle="Projektpage!"
        intro="Hier findest du eine Sammlung von meinen besten und erfolgreichsten Projekten, die ich stolz vorstellen möchte. Jedes Projekt hat einen Link zum Produkt, damit du das Ergebnis selbst erkunden und damit interagieren kannst. Vielen Dank, dass du dir die Zeit nimmst, um durch mein Portfolio zu stöbern. Ich hoffe, dass du meine Arbeit inspirierend und informativ findest!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-10 w-10 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
        <Feedback />
      </SimpleLayout>
    </>
  )
}
