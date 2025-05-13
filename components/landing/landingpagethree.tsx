"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const LandingPage = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null)
  const router = useRouter()

  const products = [
    {
      id: "aria",
      title: "Aria",
      subtitle: "Automate the Old",
      description: "Powerful automation tools to streamline your workflow and boost productivity.",
      image: "/images/aria-mock.png",
      route: "/aria",
      color: "from-cyan-500 to-blue-600",
      accent: "bg-blue-500",
    },
    {
      id: "academy",
      title: "Arised Academy",
      subtitle: "Empower the Present",
      description: "tailor made role play training for your team using the latest in voice agents and simulation technology.",
      image: "/images/voice-simulation.png",
      route: "/academy",
      color: "from-violet-500 to-purple-600",
      accent: "bg-purple-500",
    },
    {
      id: "noor",
      title: "Project Noor",
      subtitle: "Education for Everyone",
      description: "Making quality education accessible to communities around the world.",
      image: "/images/noor-screenshot.png",
      route: "https://www.project-noor.eu",
      color: "from-emerald-400 to-teal-600",
      accent: "bg-emerald-500",
    },
  ]

  const handleClick = (route: string) => {
    if (route.startsWith("http")) {
      window.location.href = route
    } else {
      router.push(route)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Discover Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              Innovations
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Explore our suite of cutting-edge products designed to transform your experience
          </p>
        </div>

        {/* Products section */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`
                  relative overflow-hidden rounded-2xl group cursor-pointer
                  transition-all duration-500 ease-out bg-white
                  ${activePanel === product.id ? "scale-[1.03] z-10 shadow-xl" : "scale-100 z-0 shadow-md"}
                  ${activePanel && activePanel !== product.id ? "opacity-90 saturate-75" : "opacity-100 saturate-100"}
                  hover:shadow-2xl
                `}
                onMouseEnter={() => setActivePanel(product.id)}
                onMouseLeave={() => setActivePanel(null)}
                onClick={() => handleClick(product.route)}
              >
                {/* Top accent bar */}
                <div className={`h-1.5 w-full ${product.accent}`}></div>

                {/* Background image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    priority
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-90
                      bg-gradient-to-t ${product.color}
                      transition-opacity duration-500 ease-out
                    `}
                  />

                  {/* Hover title */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{product.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${product.accent} text-white`}
                    >
                      {product.id === "aria" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ) : product.id === "academy" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-lg">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div
                    className={`
                    flex items-center text-sm font-medium
                    text-transparent bg-clip-text bg-gradient-to-r ${product.color}
                    group-hover:translate-x-1 transition-transform duration-300
                  `}
                  >
                    <span>Explore {product.title}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
