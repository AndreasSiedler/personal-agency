import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, TwitterIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import { CalendarIcon } from '@heroicons/react/20/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'

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

export default function Contact() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = object().shape({
    name: string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    email: string()
      .required('Email is required')
      .email('Invalid email address'),
    reachOut: string().required('This is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  // Form submission handler
  const onSubmit = async (data) => {
    // Do something with the form data
    console.log(data)
    // const data = new FormData(data);
    try {
      setIsLoading(true)
      const response = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      })
      setIsLoading(false)

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`)
      }
      router.push('/contact/success')
    } catch (err) {
      setIsLoading(false)
      alert("We can't submit the form, try again later?")
    }
  }

  return (
    <>
      <Head>
        <title>Kontaktiere mich - Ich freue mich, von dir zu hören!</title>
        <meta
          name="description"
          content="Hier findest du den direkten Draht zu mir. Ich stehe bereit, um auf deine Fragen zu antworten, dich zu unterstützen oder gemeinsam an neuen Projekten zu arbeiten."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="mb-2 overflow-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
              Ich freue mich, von dir zu hören!
            </h1>

            <div className="mt-6 mb-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hier findest du den direkten Draht zu mir. Ich stehe bereit, um
                auf deine Fragen zu antworten, dich zu unterstützen oder
                gemeinsam an neuen Projekten zu arbeiten. Schick mir einfach
                eine Nachricht über das Kontaktformular und ich werde mich
                umgehend bei dir melden. Lass uns zusammen großartige Ideen
                verwirklichen und deine Ziele erreichen. Ich freue mich darauf,
                von dir zu hören!
              </p>
            </div>
            <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="input-wrapper flex flex-col">
                    <label className="font-lato-bold" htmlFor="name">
                      Name*s
                    </label>
                    <input
                      className="rounded-lg border-1 border-gray-500 bg-transparent p-5 dark:border-white"
                      type="text"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="input-wrapper flex flex-col">
                    <label className="font-lato-bold" htmlFor="email">
                      Email*
                    </label>
                    <input
                      className="rounded-lg border-1 border-gray-500 bg-transparent p-5 dark:border-white"
                      type="email"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="input-wrapper mt-5 flex flex-col">
                  <label className="font-lato-bold" htmlFor="reachOut">
                    Womit kann ich Ihnen helfen?
                  </label>
                  <select
                    id="reachOut"
                    autoComplete="reachOut-name"
                    className="rounded-lg border-1 border-gray-500 bg-transparent p-5 dark:border-white"
                    {...register('reachOut')}
                  >
                    <option>Mobile App-Entwicklung</option>
                    <option>Web-Entwicklung</option>
                    <option>Etwas anderes</option>
                  </select>

                  {errors.reachOut && (
                    <p className="text-xs text-red-500">
                      {errors.reachOut.message}
                    </p>
                  )}
                </div>

                <div className="input-wrapper mt-5 flex flex-col">
                  <label className="font-lato-bold" htmlFor="message">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="rounded-lg border-1 border-gray-500 bg-transparent p-5 dark:border-white"
                    placeholder={
                      'Wenn Sie möchten, können Sie mir mehr über Ihr Projekt erzählen...'
                    }
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button isLoading={isLoading} className="mt-10 sm:w-1/2">
                  Senden
                </Button>
              </form>
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
