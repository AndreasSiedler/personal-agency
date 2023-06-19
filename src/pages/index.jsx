import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import feedback1 from '@/images/cemsit-yelgin.jpeg'
import logoEnlivio from '@/images/logos/enlivio.png'
import logoMediashop from '@/images/logos/mediashop.svg'
import logoVerbund from '@/images/logos/verbund.jpeg'
import logoWaytation from '@/images/logos/waytation.png'
import image1 from '@/images/photos/andreas-siedler-1.jpeg'
import image2 from '@/images/photos/andreas-siedler-2.jpeg'
import image4 from '@/images/photos/andreas-siedler-3.jpeg'
import image6 from '@/images/photos/andreas-siedler-5.jpeg'
import image3 from '@/images/photos/image-3.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { BriefcaseIcon, MegaphoneIcon } from '@heroicons/react/20/solid'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Artikel lesen</Card.Cta>
    </Card>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Verbund',
      title: 'Frontend Developer',
      logo: logoVerbund,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Enlivio',
      title: 'Full-Stack Developer',
      logo: logoEnlivio,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Mediashop',
      title: 'Frontend Developer',
      logo: logoMediashop,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Waytation',
      title: 'Full-Stack Developer',
      logo: logoWaytation,
      start: '2019',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none text-gray-500" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Meine Visitenkarte
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Feedback() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MegaphoneIcon className="h-6 w-6 flex-none text-gray-500" />
        <span className="ml-3">Feedback</span>
      </h2>
      <figure className="mt-6 flex flex-auto flex-col justify-between ">
        <blockquote className="text-sm italic text-zinc-900 dark:text-zinc-100">
          <p>
            Als Fullstack Developer hat Herr Siedler den Erwartungen des
            Unternehmens, der Mitarbeiter und der Kunden in jeglicher Hinsicht
            und in allerbester Weise entsprochen. Er erfüllte seine Aufgaben zu
            unserer vollsten Zufriedenheit, mit außerordentlichem Engagement und
            höchstem Maße an Eigeninitiative, Zielorientierung und
            Professionalität.
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-4">
          <Image
            src={feedback1}
            alt=""
            className="h-10 w-10 rounded-full"
            unoptimized
          />
          <div className="text-base">
            <div className="font-semibold text-zinc-900 dark:text-zinc-100">
              Cemsit Yelgin
            </div>
            <div className="text-sm text-gray-400">CEO of Waytation</div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image3, image1, image2, image4, image6].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Andreas Siedler - Web-Freelancer aus Österreich</title>
        <meta
          name="description"
          content="Hey, ich bin Andreas - Fullstack-Entwickler aus Österreich und spezialisiert auf Websites, Webapps und Mobile-Apps. Ich arbeite als externer Freelancer für ein großes österreichisches Unternehmen und nebenbei möchte ich kleinen und mittleren Unternehmen sowie Privatpersonen helfen, ihre Ideen für digitale Produkte in die Realität umzusetzen."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="mb-2 overflow-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
            Freelancer aus Österreich
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hey, ich bin Andreas - Fullstack-Entwickler aus Österreich und
            spezialisiert auf{' '}
            <span className="font-bold">
              Websites, Webapps und Mobile-Apps.
            </span>{' '}
            Ich arbeite als externer Freelancer für ein großes österreichisches
            Unternehmen und nebenbei möchte ich kleinen und mittleren
            Unternehmen sowie Privatpersonen helfen, ihre Ideen für digitale
            Produkte in die Realität umzusetzen.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Dabei ist mir eine gute und unkomplizierte Zusammenarbeit und
            Kommunikation besonders wichtig, so kann ich auf Wünsche bestmöglich
            reagieren. Wenn du auf der Suche nach einem erfahrenen Entwickler
            mit Leidenschaft und Engagement bist, dann melde dich bei mir.
          </p>
          <Link href="/about">
            <Button className="mt-6">Mehr zu mir</Button>
          </Link>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
            <Feedback />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
