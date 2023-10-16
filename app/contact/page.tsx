'use client';

import Image from 'next/image'
import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Button } from '@/components/ui/button';
import * as React from "react"
import { allDocs, Doc } from "contentlayer/generated"
import Link from "next/link"
import {
  compareDesc
} from "date-fns";
import { Tip } from '@/components/tip';
import type { Metadata } from "next";


export default function Contact() {
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get in contact</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore all the projects and libraries built with a lot of love</p>
      </div> 
      <div className=" mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
             
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Fahd Sultan
                  </h3>
                  <div className='grid grid-cols-3 gap-5'>
                    <div>
                        
                    </div>
                  </div>
              </div>
          </div> 
      </div>  
  </div>
</section>
  )
}
