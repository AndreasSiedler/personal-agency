import { Container } from '@/components/Container'
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

export default function ComingSoon() {
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
      <Container classNameName="mt-16 sm:mt-32">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
            alt="Logo"
            className="mb-8 h-40 w-40 rounded-full object-cover"
          />
          <h1 className="mb-2 overflow-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
            Back{' '}
            <span className="relative">
              <span className="h-20 overflow-x-hidden whitespace-nowrap pt-2 text-teal-400">
                soon. <span className="text-3xl md:text-5xl">👋</span>
              </span>
              <span className="{`${styles.cursor} will-change`} cursor absolute -bottom-0 -top-1 left-0 inline-block w-full animate-type bg-white after:bg-zinc-700 dark:bg-zinc-900 dark:after:bg-white"></span>
            </span>
          </h1>
          <p className="mb-8 px-4 text-lg md:px-0">
            We&apos;re working hard to bring you something awesome. Stay tuned!
          </p>
          {/* <div className="flex items-center justify-center space-x-4">
            <a
              href="#"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Learn More
            </a>
            <a
              href="#"
              className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              Contact Us
            </a>
          </div> */}
        </div>
      </Container>
    </>
  )
}
