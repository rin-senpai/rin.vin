"use client"

import React, { useState, useEffect, CSSProperties } from 'react';

import { siteConfig } from "@/config/site"

import { MainNav } from "@/components/ui/main-nav"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function SiteHeader() {
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [top, setTop] = useState(0)
  const [position, setPosition] = useState('absolute')
  const [transition, setTransition] = useState('none')
  
  useEffect(() => {
    setPrevScrollpos(window.scrollY)
    setTransition((0 <= prevScrollpos && prevScrollpos <= 96) ? 'none' : 'top 0.3s ease-in-out')
  }, [prevScrollpos])
  
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if (currentScrollPos === 0) {
        setPosition('absolute')
      } else if (currentScrollPos === 96 && prevScrollpos > currentScrollPos) { // scrolling up
        setTop(0) // Show navbar
      } else if (currentScrollPos === 96 && prevScrollpos < currentScrollPos) { // scrolling down
        setTop(-96) // Hide navbar
      } else if (currentScrollPos > 96) {
        setPosition('fixed')
        if (prevScrollpos > currentScrollPos) {
          setTop(0) // Show navbar
        } else {
          setTop(-96) // Hide navbar
        }
      }
      setPrevScrollpos(currentScrollPos)
    }
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [prevScrollpos]);
  
  const positionStyles: CSSProperties = {
    top: `${top}px`,
    transition: transition,
    position: position as 'fixed' | 'absolute'
  }
  
  return (
    <header style={positionStyles} className="self-center z-40 m-4 max-w-[1000px] w-[calc(100%-32px)] border bg-background/80 rounded-2xl backdrop-blur">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 mr-[-16px]">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
