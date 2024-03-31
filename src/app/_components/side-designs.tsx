'use client'

import Image from 'next/image'
import React from 'react'

const SideDesigns = () => {
  return (
    <div>
      <div className=" flex w-[30%]">
        <Image src="/Eth.svg" alt="Aether" width={300} height={50} className="-mt-40 w-[180px]" />
        <Image
          src="/sideDesign.svg"
          alt="Aether"
          width={500}
          height={300}
          className="-ml-52 flex"
        />
      </div>{' '}
    </div>
  )
}

export default SideDesigns
