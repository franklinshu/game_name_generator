"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Bot, RefreshCw, CheckCircle, Clock, Gamepad2, ArrowLeft, Database, Globe, Zap } from "lucide-react"
import Link from "next/link"

const dataSources = [
  { name: "Steam Store", status: "active", games: 45, lastUpdate: "2 hours ago" },
  { name: "Epic Games Store", status: "active", games: 23, lastUpdate: "3 hours ago" },
  { name: "PlayStation Store", status: "active", games: 18, lastUpdate: "1 hour ago" },
  { name: "Xbox Store", status: "active", games: 14, lastUpdate: "4 hours ago" },
  { name: "Nintendo eShop", status: "maintenance", games: 0, lastUpdate: "6 hours ago" },
  { name: "GOG.com", status: "active", games: 8, lastUpdate: "5 hours ago" },
]

const recentlyCollected = [
  { name: "Baldur's Gate 3", source: "Steam", status: "completed", progress: 100 },
  { name: "Spider-Man 2", source: "PlayStation", status: "completed", progress: 100 },
  { name: "Starfield", source: "Xbox", status: "processing", progress: 75 },
  { name: "Alan Wake 2", source: "Epic Games", status: "processing", progress: 60 },
  { name: "Super Mario Wonder", source: "Nintendo", status: "pending", progress: 0 },
]

export default function AutoCollectPage() {
  const [isCollecting, setIsCollecting] = useState(false)
  const [collectionProgress, setCollectionProgress] = useState(0)

  const startCollection = async () => {
    setIsCollecting(true)
    setCollectionProgress(0)

    // Simulate collection progress
    const interval = setInterval(() => {
      setCollectionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsCollecting(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Gamepad2 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">GameVault AI</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Auto Game Collection</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatically collect and analyze the latest games from multiple digital stores and platforms. Our AI system
            gathers comprehensive information including descriptions, screenshots, and reviews.
          </p>
        </div>

        {/* Collection Control */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Collection Control</span>
            </CardTitle>
            <CardDescription>
              Start automatic collection of the latest 100 games from all connected sources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isCollecting && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Collection Progress</span>
                    <span>{collectionProgress}%</span>
                  </div>
                  <Progress value={collectionProgress} className="h-2" />
                </div>
              )}

              <div className="flex space-x-4">
                <Button onClick={startCollection} disabled={isCollecting} size="lg">
                  {isCollecting ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Collecting Games...
                    </>
                  ) : (
                    <>
                      <Bot className="h-4 w-4 mr-2" />
                      Start Auto Collection
                    </>
                  )}
                </Button>

                <Button variant="outline" size="lg">
                  <Database className="h-4 w-4 mr-2" />
                  View Collected Games
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Data Sources</span>
              </CardTitle>
              <CardDescription>Connected platforms and their current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          source.status === "active" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      />
                      <div>
                        <p className="font-medium">{source.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {source.games} games • {source.lastUpdate}
                        </p>
                      </div>
                    </div>
                    <Badge variant={source.status === "active" ? "default" : "secondary"}>{source.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Collections */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Collections</CardTitle>
              <CardDescription>Latest games processed by the AI system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentlyCollected.map((game, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{game.name}</p>
                        <p className="text-sm text-muted-foreground">Source: {game.source}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {game.status === "completed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {game.status === "processing" && <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />}
                        {game.status === "pending" && <Clock className="h-4 w-4 text-yellow-500" />}
                        <Badge
                          variant={
                            game.status === "completed"
                              ? "default"
                              : game.status === "processing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {game.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={game.progress} className="h-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Collection Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Database className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold">108</h3>
              <p className="text-muted-foreground">Total Games Collected</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Bot className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-muted-foreground">AI Processing Success</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <RefreshCw className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold">24h</h3>
              <p className="text-muted-foreground">Auto-Update Interval</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold">6</h3>
              <p className="text-muted-foreground">Connected Sources</p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Auto Collection Features</CardTitle>
            <CardDescription>What our AI system automatically collects and processes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Game Information</span>
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Title and description</li>
                  <li>• Release date and developer</li>
                  <li>• Genre and tags</li>
                  <li>• Platform availability</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Visual Content</span>
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Cover art and screenshots</li>
                  <li>• Gameplay videos</li>
                  <li>• Promotional images</li>
                  <li>• Logo and branding</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>AI-Generated Content</span>
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Detailed game analysis</li>
                  <li>• Feature highlights</li>
                  <li>• Gameplay tutorials</li>
                  <li>• Review summaries</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
