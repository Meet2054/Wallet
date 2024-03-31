'use client'

import Image from 'next/image'
import { redirect } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

import { useAtomValue } from 'jotai'
import { toast } from 'sonner'

import LoadingPlaceholder from '@/components/loading-placeholder'

import HomeFooter from '../_components/home-footer'
import {
  DomainContext,
  TurnkeyAuthContext,
  domainContextAtom,
  turnkeyAuthContextAtom,
} from '../atoms'
import ActionsMenuWidget from './_components/actions-menu-widget'
import DomainAndBalanceWidget from './_components/domain-and-balance-widget'
import FavoriteContactsWidget from './_components/favorite-contacts-widget'

export default function DashboardPage() {
  const authContext = useAtomValue(turnkeyAuthContextAtom)
  const domainContext = useAtomValue(domainContextAtom)

  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted ? (
    <DashboardPageContent {...{ authContext, domainContext }} />
  ) : (
    <LoadingPlaceholder />
  )
}

interface DashboardPageContentProps {
  authContext: TurnkeyAuthContext | null
  domainContext: DomainContext | null
}
const DashboardPageContent: FC<DashboardPageContentProps> = ({ authContext, domainContext }) => {
  useEffect(() => {
    if (!authContext || !domainContext) {
      toast.error('Not authenticated, redirecting…')
      redirect('/')
    }
  }, [])

  return (
    <>
      <main className="border-1 -my-8  flex h-[100vh] w-[180vh] max-w-full flex-row justify-around gap-4 ">
        {/* Left Side */}
        <div className=" flex h-[100%] w-[30%]  pr-[30%] ">
          {/* <Image src="/sideDesign.svg" alt="Side Design" width={500} height={500} priority /> */}
          <div className="pointer-events-none absolute inset-0 z-0 ">
            <Image
              src="/sideDesignPNG.png"
              alt="Background Image"
              width={600}
              height={500}
              className="ml-20"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="my-10 flex h-[40vh] w-[50vh] max-w-full flex-col gap-16">
          <div className="">
            <Image
              src="/SHAPEmE.svg"
              alt="Aether"
              width={900}
              height={900}
              className="-ml-6 h-[300px] "
            />
            <DomainAndBalanceWidget {...(domainContext as any)} />
          </div>
          <FavoriteContactsWidget />
          <ActionsMenuWidget />
        </div>
      </main>
      <HomeFooter />
    </>
  )
}
