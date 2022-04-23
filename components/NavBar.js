/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  MailIcon,
  XIcon,
} from '@heroicons/react/outline'

export default function NavBar() {
  const router = useRouter()

  return (
    <Popover className="relative bg-sky-700">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex justify-between items-center border-gray-100">
          <div className="flex justify-start ml-4 md:ml-0">
            <Link href="/">
              <a className='flex items-center space-x-4'>
                {/* <img
                  className="h-12 md:h-16 lg:h-20 w-auto"
                  src="/images/citadel_contracting_logo_horizontal_white_short.png"
                  alt="Citadel Contracting Logo"
                /> */}
                <p className="uppercase py-1 text-white text-xl font-display tracking-widest">Palouse Free Market</p>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-sky-700 rounded-md p-2 inline-flex items-center justify-center text-slate-100 hover:text-slate-500 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex space-x-8 font-Condensed tracking-wider justify-end md:flex-1 lg:w-0">
            <Link href="/OurValues">
              <a className={`whitespace-nowrap text-lg font-medium text-slate-100 hover:text-slate-400 hover:underline ${router.pathname === '/gallery' ? 'border-b border-slate-100' : ''}`}>
                Our Values
              </a>
            </Link>
            <Link href="/SubmitListing">
              <a className={`whitespace-nowrap text-lg font-medium text-slate-100 hover:text-slate-400 hover:underline ${router.pathname === '/process' ? 'border-b border-slate-100' : ''}`}>
                List Your Business
              </a>
            </Link>
            {/* <Link href="/team">
              <a className={`whitespace-nowrap text-lg font-medium text-slate-100 hover:text-slate-400 hover:underline ${router.pathname === '/team' ? 'border-b border-slate-100' : ''}`}>
                The Team
              </a>
            </Link> */}
            <Link href="/FAQ">
              <a className={`hidden lg:inline whitespace-nowrap text-lg font-medium text-slate-100 hover:text-slate-400 hover:underline ${router.pathname === '/faq' ? 'border-b border-slate-100' : ''}`}>
                FAQ
              </a>
            </Link>
            <Link href="mailto: palousefm@protonmail.com">
              <div className="-m-3 p-3 rounded-md text-slate-100 hover:bg-slate-100 hover:text-slate-800 hover:cursor-pointer">
                <a className="flex items-center text-lg font-medium">
                  <MailIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  <span className="ml-3">Contact</span>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <nav focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-sky-700 divide-y-2 divide-gray-100">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <a>
                    {/* <img
                      className="h-12 w-auto"
                      src="/images/citadel_contracting_logo_horizontal_white_short.png"
                      alt="Workflow"
                    /> */}
                    <p className="uppercase py-1 text-white text-xl font-display tracking-widest">Palouse Free Market</p>
                  </a>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-sky-700 rounded-md p-2 inline-flex items-center justify-center text-slate-100 hover:text-slate-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8 font-Condensed tracking-wider">
                <Link href="/OurValues">
                  <a className="text-base font-medium text-slate-100 font-Condensed">
                    Our Values
                  </a>
                </Link>
                <Link href="/SubmitListing">
                  <a className="text-base font-medium text-slate-100">
                    List Your Business
                  </a>
                </Link>
                {/* <Link href="/team">
                  <a className="text-base font-medium text-slate-100">
                    The Team
                  </a>
                </Link> */}
                <Link href="/FAQ">
                  <a className="text-base font-medium text-slate-100">
                    FAQ
                  </a>
                </Link>
                <a href="mailto: palousefm@protonmail.com"
                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-slate-100"
                >
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-slate-100" aria-hidden="true" />
                  <span className="ml-3">Contact</span>
                </a>
                {/* <span className="flex items-center space-x-2 text-slate-100">
                  <span>Follow us on </span>
                  <a href="https://www.facebook.com/citadelcontractingmoscow" target="_blank">
                    <img src="/images/fb_logo_white_2.png" alt="Follow us on Facebook" className="h-8 w-8" />
                  </a>
                  <a href="https://www.instagram.com/citadelcontractingmoscow/" target="_blank">
                    <img src="/images/instagram_logo_white.png" alt="Follow us on Instagram" className="h-8 w-8" />
                  </a>
                </span> */}
              </div>
            </div>
          </div>
        </nav>
      </Transition>
    </Popover>
  )
}
