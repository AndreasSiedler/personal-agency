import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export default function Banner() {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div
      className={clsx(
        'flex items-center gap-x-6 bg-teal-400 px-6 py-2.5 sm:px-3.5 sm:before:flex-1',
        isHidden && 'hidden'
      )}
    >
      <p className="text-sm leading-6 text-white">
        <Link href="/articles/freelancer-vs-fiverr">
          <strong className="font-semibold">
            Fiverr vs. Freelancer: Ein ausführlicher Vergleich
          </strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Mehr erfahren
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={setIsHidden}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
