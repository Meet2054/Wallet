import Image from 'next/image'
import { HtmlHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

import { SignoutButton } from './signout-button'

// Import the 'Image' component from the appropriate package

export default function HomeFooter({ className }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={cn(
        'mb-5 flex justify-center gap-2 text-center text-xs text-muted-foreground',
        className,
      )}
    >
      <Image src="/Group-67.png" alt="Unwallet" width={800} height={200} className="" />{' '}
      {/* Fix the JSX element class error */}
      <SignoutButton className="outline-none hover:text-foreground focus:text-foreground" />
    </footer>
  )
}
