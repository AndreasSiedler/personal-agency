import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
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
        {/* <a href="#"> */}
        <strong className="font-semibold">-10% Frühjahrsangebot 2023</strong>
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
