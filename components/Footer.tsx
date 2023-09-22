import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-100 px-20 py-1 max-md:flex-col' >
      <p>Copyright © 2023 JS Mastrey Pro | All Rights Reserved</p>

      <div className='flex gap-x-9 '>
        <Link href={'/terms-of-use'}>Terms & Conditions</Link>
        <Link href={'/privacy-policy'}>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer