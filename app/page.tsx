"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function Home() {
  const [currentTime, setCurrentTime] = useState("")
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const [showHelp, setShowHelp] = useState(false)

  const menuItems = [
    {
      name: "My Future Health",
      url: "https://my-future-health-6b4o.vercel.app/",
      users: "12,345,678",
      views: "45,678,901",
      created: "12-29-2024",
      description:
        "[Currently Broken] Answer a few basic health questions and see your future health, and it's impact on your life, at age 75.",
    },
    {
      name: "What's That Disease?",
      url: "https://whatisthatdisease.vercel.app",
      users: "8,765,432",
      views: "23,456,789",
      created: "01-16-2025",
      description: "Enter any disease name and get a detailed profile of that disease.",
    },
    {
      name: "Will Pharma Like Me?",
      url: "https://pharma-sales-analyzer.vercel.app",
      users: "14,350,780",
      views: "20,325,587",
      created: "02-02-2025",
      description: "Have you ever wondered if you can partner with Pharma? Enter your company URL and find out.",
    },
    {
      name: "Spanish Partner",
      url: "https://v0-openai-text-to-speech-bb.vercel.app/",
      users: "5,234,891",
      views: "18,456,123",
      created: "05-21-2025",
      description: "AI-powered Spanish language partner for conversation practice and learning.",
    },
    {
      name: "App Branding App",
      url: "https://appfactory-brander.vercel.app/",
      users: "3,567,234",
      views: "12,789,456",
      created: "06-28-2025",
      description: "Create professional branding and visual identity for your mobile applications.",
    },
    {
      name: "RareDx",
      url: "https://secondlook.vercel.app/",
      users: "2,891,567",
      views: "9,234,789",
      created: "08-06-2025",
      description: "Advanced differential diagnosis tool to help you find your rare disease diagnosis.",
    },
    {
      name: "EMR Integration Demo",
      url: "https://laramic-healthie.vercel.app/",
      users: "1,456,789",
      views: "6,789,123",
      created: "09-04-2025",
      description: "Demonstration of seamless electronic medical record integration capabilities.",
    },
    {
      name: "My Advisory Board",
      url: "https://board-picker.vercel.app/",
      users: "987,654",
      views: "4,567,890",
      created: "09-10-2025",
      description: "Build and manage a personal advisory board for your questions and challenges.",
    },
    {
      name: "Reddit Rx",
      url: "https://redditrx.vercel.app/",
      users: "654,321",
      views: "2,345,678",
      created: "09-18-2025",
      description:
        "Analyze Reddit discussions for insights into what interventions work specific medical problems or goals.",
    },
    {
      name: "UH Backpacking Site",
      url: "https://ultraheavy-backpacking.vercel.app/",
      users: "432,198",
      views: "1,876,543",
      created: "10-05-2025",
      description: "You might know Ultralight backpacking, but this is Ultraheavy. More pounds and more laughs.",
    },
    {
      name: "Digital Personas",
      url: "https://patient-agent-mg.vercel.app/",
      users: "298,765",
      views: "1,234,567",
      created: "10-15-2025",
      description:
        "Learn from digital personas of patients with rare disease. Ask about experience living with disease, opinions on medications or opinions on new ads or messaging. Currently available for Myasthenia Gravis and Friedreich's Ataxia.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setSelectedItem((prev) => (prev > 0 ? prev - 1 : prev))
          break
        case "ArrowDown":
          setSelectedItem((prev) => (prev < menuItems.length - 1 ? prev + 1 : prev))
          break
        case "Enter":
          window.location.href = menuItems[selectedItem].url
          break
        case "F1":
        case "f1":
          e.preventDefault()
          setShowHelp((prev) => !prev)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedItem])

  const handleUpClick = () => {
    setSelectedItem((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleDownClick = () => {
    setSelectedItem((prev) => (prev < menuItems.length - 1 ? prev + 1 : prev))
  }

  return (
    <div className="min-h-screen bg-[#000080] text-white font-dos p-0 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white text-[#000080] px-2 flex justify-between">
        <span>My App Collection</span>
        <span>{currentTime}</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* File List */}
        <div className="p-2 mb-2">
          <div className="mb-1">Directory of C:\APPS\CWHOGG\AI\PROJECTS</div>
          <div className="flex">
            {/* DOS-style navigation arrows */}
            <div className="flex flex-col mr-2">
              <button
                onClick={handleUpClick}
                className="text-white hover:bg-white hover:text-[#000080] px-2 py-1 mb-1"
                aria-label="Move selection up"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownClick}
                className="text-white hover:bg-white hover:text-[#000080] px-2 py-1"
                aria-label="Move selection down"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            {/* File List Content */}
            <div className="flex-1">
              {menuItems.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <span className="mr-2">{index === menuItems.length - 1 ? "└───" : "├───"}</span>
                    <a
                      href={item.url}
                      className={`${selectedItem === index ? "bg-white text-[#000080]" : ""} hover:bg-white hover:text-[#000080] px-1`}
                      onMouseEnter={() => setSelectedItem(index)}
                    >
                      {item.name}
                    </a>
                  </div>
                  <div>{item.created}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dividing Line */}
        <div className="border-t border-white my-2"></div>

        {/* Detailed Pane */}
        <div className="flex-1 p-2 mt-2">
          {showHelp ? (
            <div>
              <div className="mb-2">╔════ HELP ════╗</div>
              <div className="mb-4">
                <div>↑↓ - Navigate menu</div>
                <div>Enter - Select item</div>
                <div>F1 - Toggle help</div>
                <div>ESC - Exit help</div>
              </div>
              <div>╚═══════════════╝</div>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex mb-4">
                <div className="w-1/2">
                  <div className="mb-4">File Information</div>
                  <div className="ml-2">
                    <div className="mb-2">Name: {menuItems[selectedItem].name}</div>
                    <div className="mb-2">Type: Application</div>
                    <div className="mb-2">Created: {menuItems[selectedItem].created}</div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="mb-2">App Statistics</div>
                  <div className="ml-2">
                    <div className="mb-1">Users: {menuItems[selectedItem].users}</div>
                    <div className="mb-1">Views: {menuItems[selectedItem].views}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ml-2 text-wrap max-w-[600px] whitespace-pre-line">
                  {`Description: ${menuItems[selectedItem].description}`}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-white text-[#000080] px-2 flex justify-between">
        <div className="flex gap-8">
          <span className="bg-[#000080] text-white px-1">F1 Help</span>
          <span>F2 Menu</span>
          <span>F3 View</span>
          <span>F4 Edit</span>
          <span>F5 Copy</span>
          <span>F6 Move</span>
          <span>F7 Directory</span>
          <span>F8 Delete</span>
        </div>
      </div>
    </div>
  )
}
