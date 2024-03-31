import Image from 'next/image'

import ShimmerButton from '@/components/magicui/shimmer-button'

import { DashboardButton } from './_components/dashboard-button'
import HomeLogo from './_components/home-logo'
import { SigninButton } from './_components/signin-button'

export default function HomePage() {
  return (
    <>
      <main className="p-x-[10%] flex h-[100vh]  w-[180vh] flex-row items-center justify-between">
        <div className=" flex h-[100%] w-[50vh]  pr-[30%] ">
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
        <div className="mt-10 flex w-[50vh] grow flex-col items-center justify-center ">
          <div className="flex grow flex-col items-center justify-center gap-10 hxl:gap-14">
            <HomeLogo />
            {/* Announcement Link */}
            <a
              href="https://twitter.com/unwallet_me/status/1737874854953783299" //Need to change
              target="_blank"
              className="-mb-5 mt-5 block rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-white ring-2 ring-primary ring-offset-2"
            >
              Read the announcement →
            </a>

            {/* Title & Description */}
            <div className="flex max-w-prose flex-col gap-2 text-center">
              <h2 className="text-4xl font-medium tracking-tight">
                <em>Next-Gen</em> Onboarding
              </h2>
              <p className="text-lg tracking-tight text-muted-foreground">
                Seedless smart wallets meet multichain domains
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex justify-center gap-3">
                {/* Start Setup */}
                <ShimmerButton
                  href="/setup"
                  className="h-14 shadow-2xl"
                  shimmerColor="hsl(var(--brand))"
                  shimmerSize="0.1em"
                >
                  <span className="whitespace-pre-wrap px-1 text-center text-base font-medium leading-none tracking-tight text-brand dark:from-white dark:to-slate-900/10">
                    Get Aethered
                  </span>
                </ShimmerButton>

                {/* Dashboar Button */}
                <DashboardButton />
              </div>

              {/* Sign-in */}
              <SigninButton className="text-sm font-medium text-muted-foreground hover:text-foreground" />
            </div>
          </div>

          {/* Phone Image with Features */}
          <div className="mt-10 flex items-center justify-center">
            <ul className="mb-[20%] flex flex-col gap-2 whitespace-nowrap font-medium hlg:!mb-[60%]">
              <li>⛓️&nbsp;&nbsp;Multichain domains</li>
              <li>🔑&nbsp;&nbsp;No seedphrases</li>
              <li>📬&nbsp;&nbsp;No wallet address</li>
              <li>🧬&nbsp;&nbsp;Passkey signing</li>
              <li>👛&nbsp;&nbsp;Fee- and gas-less</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Marquee with latest domains */}
      {/* <LatestDomainsMarquee /> */}
    </>
  )
}
