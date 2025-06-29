"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Wand2, Copy, RefreshCw, Sparkles, Gamepad2, ArrowLeft } from "lucide-react"
import Link from "next/link"

const gameGenres = [
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Simulation",
  "Sports",
  "Racing",
  "Fighting",
  "Puzzle",
  "Horror",
  "Sci-Fi",
  "Fantasy",
  "Cyberpunk",
  "Steampunk",
]

const gameStyles = [
  "Epic",
  "Mystical",
  "Dark",
  "Futuristic",
  "Retro",
  "Minimalist",
  "Dramatic",
  "Heroic",
  "Mysterious",
  "Legendary",
  "Ancient",
  "Modern",
  "Cosmic",
  "Underground",
]

const sampleNames = [
  { name: "Shadowbane Chronicles", genre: "Fantasy RPG", style: "Dark" },
  { name: "Neon Velocity", genre: "Cyberpunk Racing", style: "Futuristic" },
  { name: "Mystic Realms", genre: "Fantasy Adventure", style: "Mystical" },
  { name: "Steel Horizon", genre: "Sci-Fi Strategy", style: "Epic" },
  { name: "Crimson Legacy", genre: "Action RPG", style: "Dramatic" },
  { name: "Quantum Shift", genre: "Sci-Fi Puzzle", style: "Futuristic" },
]

export default function NameGeneratorPage() {
  const [generatedNames, setGeneratedNames] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState("")
  const [selectedStyle, setSelectedStyle] = useState("")
  const [keywords, setKeywords] = useState("")
  const [description, setDescription] = useState("")

  const generateNames = async () => {
    setIsGenerating(true)

    // Simulate AI generation with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newNames = [
      `${selectedStyle || "Epic"} ${keywords || "Adventure"} ${Math.floor(Math.random() * 1000)}`,
      `${keywords || "Shadow"} ${selectedGenre || "Quest"}`,
      `${selectedStyle || "Mystic"} ${keywords || "Legends"}: The ${selectedGenre || "Chronicles"}`,
      `${keywords || "Cyber"} ${selectedStyle || "Storm"}`,
      `The ${selectedStyle || "Lost"} ${keywords || "Kingdom"} of ${selectedGenre || "Eternity"}`,
      `${keywords || "Dragon"} ${selectedStyle || "Fire"}: ${selectedGenre || "Awakening"}`,
      `${selectedStyle || "Phantom"} ${keywords || "Blade"} ${selectedGenre || "Saga"}`,
      `${keywords || "Crystal"} ${selectedStyle || "Destiny"}`,
    ]

    setGeneratedNames(newNames)
    setIsGenerating(false)
  }

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name)
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
            <Wand2 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">AI Game Name Generator</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate unique and creative game names using artificial intelligence. Perfect for indie developers, game
            designers, and creative minds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>Name Generator</span>
              </CardTitle>
              <CardDescription>Customize your preferences to generate the perfect game name</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="genre">Game Genre</Label>
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {gameGenres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="style">Game Style</Label>
                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    {gameStyles.map((style) => (
                      <SelectItem key={style} value={style}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords (optional)</Label>
                <Input
                  id="keywords"
                  placeholder="e.g., dragon, space, magic, warrior"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Game Description (optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your game concept to get more targeted name suggestions..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>

              <Button onClick={generateNames} disabled={isGenerating} className="w-full" size="lg">
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Generating Names...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4 mr-2" />
                    Generate Game Names
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Names */}
          <Card>
            <CardHeader>
              <CardTitle>Generated Names</CardTitle>
              <CardDescription>Click on any name to copy it to your clipboard</CardDescription>
            </CardHeader>
            <CardContent>
              {generatedNames.length > 0 ? (
                <div className="space-y-3">
                  {generatedNames.map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => copyToClipboard(name)}
                    >
                      <span className="font-medium">{name}</span>
                      <Copy className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={generateNames}
                    disabled={isGenerating}
                    className="w-full mt-4 bg-transparent"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Generate More Names
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Wand2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Click "Generate Game Names" to see AI-generated suggestions</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sample Names */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Sample Generated Names</CardTitle>
            <CardDescription>Here are some examples of names generated by our AI system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sampleNames.map((sample, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{sample.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{sample.genre}</Badge>
                    <Badge variant="outline">{sample.style}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Tips for Better Names</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🎯 Be Specific</h4>
                <p className="text-muted-foreground">
                  The more specific your genre and style selections, the more targeted your generated names will be.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔤 Use Keywords</h4>
                <p className="text-muted-foreground">
                  Add relevant keywords that capture the essence of your game concept.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📝 Describe Your Game</h4>
                <p className="text-muted-foreground">
                  A brief description helps the AI understand your vision and generate more relevant names.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔄 Generate Multiple Times</h4>
                <p className="text-muted-foreground">
                  Don't settle for the first batch - generate multiple sets to find the perfect name.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
