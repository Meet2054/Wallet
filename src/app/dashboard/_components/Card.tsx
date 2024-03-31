import Image from 'next/image'
import React from 'react'

interface CardProps {
  className?: string
  backgroundImage: string // Add a prop for the background image
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ className, backgroundImage, children }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-white shadow-md ${className}`}
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat`, // Set background image
      }}
    >
      <div className="p-6">{children}</div>
    </div>
  )
}
