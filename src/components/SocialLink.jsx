import clsx from 'clsx'
import Link from 'next/link'

export default function SocialLink({
  className,
  target,
  href,
  children,
  icon: Icon,
}) {
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
