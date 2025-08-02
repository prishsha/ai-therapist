"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Moon, Sun, MessageCircle, Heart, Users, Shield, Instagram, Twitter, Mail } from "lucide-react"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [moodValue, setMoodValue] = useState([50])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const moodEmojis = ["😢", "😕", "😐", "🙂", "😊"]
  const getCurrentMoodEmoji = () => {
    const index = Math.floor((moodValue[0] / 100) * (moodEmojis.length - 1))
    return moodEmojis[index]
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-100 dark:border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                MindSpace
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#chat"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Chat
              </a>
              <a
                href="#mood"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Mood Check
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                About
              </a>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-purple-100 dark:bg-purple-800 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5 text-purple-600" /> : <Moon className="w-5 h-5 text-purple-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Your safe space to talk 💬
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with an AI therapist that gets you. Available 24/7, judgment-free, and designed for your generation.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Chatting
          </Button>
        </div>
      </section>

      {/* Chat Preview Section */}
      <section id="chat" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">See how it works</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl rounded-br-md px-6 py-3 max-w-xs shadow-md">
                  <p>I've been feeling really anxious about college applications lately 😰</p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl rounded-bl-md px-6 py-3 max-w-sm shadow-md">
                  <p>
                    I hear you - college applications can feel overwhelming! It's totally normal to feel anxious about
                    such a big step. What part of the process is stressing you out the most? 💙
                  </p>
                </div>
              </div>

              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl rounded-br-md px-6 py-3 max-w-xs shadow-md">
                  <p>Mostly the essays... I don't know how to make myself stand out</p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl rounded-bl-md px-6 py-3 max-w-sm shadow-md">
                  <p>
                    Your story is already unique because it's yours! Let's break this down together. What experiences
                    have shaped who you are today? ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Check Section */}
      <section
        id="mood"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">How are you feeling today?</h2>
          <Card className="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-6xl mb-6">{getCurrentMoodEmoji()}</div>
              <Slider value={moodValue} onValueChange={setMoodValue} max={100} step={1} className="mb-6" />
              <div className="flex justify-between text-2xl mb-4">
                {moodEmojis.map((emoji, index) => (
                  <span key={index} className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    {emoji}
                  </span>
                ))}
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full">
                Log My Mood
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Gen Z Loves Us Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Why Gen Z Loves Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Always Available</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No appointments needed. Chat whenever you need support, 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Judgment-Free</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Share anything without fear. Our AI creates a safe, non-judgmental space.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Gets Your Vibe</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Trained to understand Gen Z language, culture, and unique challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Community Driven</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with feedback from thousands of Gen Z users just like you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MindSpace</span>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:hello@mindspace.app" className="hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Contact us: hello@mindspace.app</p>
              <p className="text-gray-500 text-sm">© 2024 MindSpace. Made with 💜 for Gen Z</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
