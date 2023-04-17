import { Container } from '@/components/Container'

export function SimpleLayout({ title, fancyTitle, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="mb-2 overflow-hidden font-mono text-4xl font-bold text-zinc-700 dark:text-gray-100 md:text-6xl">
          {title}
          <br className="block md:hidden" />{' '}
          <span className="relative">
            <span className="h-20 overflow-x-hidden whitespace-nowrap pt-2 text-teal-400">
              {fancyTitle} <span className="text-3xl md:text-5xl">👋</span>
            </span>
            <span className="{`${styles.cursor} will-change`} cursor absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type bg-white after:bg-zinc-700 dark:bg-zinc-900 dark:after:bg-white"></span>
          </span>
        </h1>
        {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1> */}
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
