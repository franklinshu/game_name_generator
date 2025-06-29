import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Users, Star, ArrowLeft, Gamepad2, Bot, Play, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const tutorialData = {
  "baldurs-gate-3": {
    // 保持现有的baldurs-gate-3数据不变
    title: "Baldur's Gate 3 Complete Guide",
    gameTitle: "Baldur's Gate 3",
    description: "Master the art of tactical combat and storytelling in this comprehensive guide",
    difficulty: "Intermediate",
    duration: "45 minutes",
    sections: 8,
    rating: 4.9,
    views: "12.5K",
    lastUpdated: "2 days ago",
    image: "/placeholder.svg?height=400&width=600",
    sections_content: [
      {
        title: "Getting Started",
        duration: "5 min",
        content:
          "Learn the basics of character creation and the game interface. Choose your race, class, and background to create the perfect character for your playstyle.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Launch the game and select 'New Game'",
          "Choose your character's race (Human, Elf, Dwarf, etc.)",
          "Select a class that matches your preferred playstyle",
          "Customize appearance and background story",
          "Allocate ability points strategically",
        ],
      },
      {
        title: "Combat Fundamentals",
        duration: "8 min",
        content:
          "Master the turn-based combat system that makes Baldur's Gate 3 unique. Learn positioning, action economy, and spell combinations.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Understand the initiative order system",
          "Learn about Actions, Bonus Actions, and Movement",
          "Use high ground for tactical advantage",
          "Combine spells for devastating effects",
          "Position your party members strategically",
        ],
      },
      {
        title: "Character Development",
        duration: "6 min",
        content: "Build powerful characters through smart leveling choices and equipment optimization.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Plan your character build from level 1",
          "Choose feats vs ability score improvements",
          "Understand multiclassing benefits and drawbacks",
          "Optimize equipment for your build",
          "Learn spell selection strategies",
        ],
      },
      {
        title: "Party Management",
        duration: "7 min",
        content: "Create the perfect party composition and manage relationships between companions.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Recruit and manage companion characters",
          "Balance party roles (tank, DPS, support, utility)",
          "Manage companion approval and relationships",
          "Handle party conflicts and decisions",
          "Optimize party synergies",
        ],
      },
    ],
    tips: [
      "Save frequently - your choices have permanent consequences",
      "Experiment with different dialogue options to see all outcomes",
      "Use the environment to your advantage in combat",
      "Rest regularly to restore spell slots and hit points",
      "Talk to every NPC - they often have valuable information or quests",
    ],
    requirements: {
      level: "Beginner friendly",
      time: "45 minutes to complete",
      materials: "Game installed, basic understanding of RPGs helpful",
    },
  },
  "spider-man-2": {
    title: "Marvel's Spider-Man 2 Mastery Guide",
    gameTitle: "Marvel's Spider-Man 2",
    description: "Master web-swinging, combat, and dual character mechanics in this comprehensive guide",
    difficulty: "Beginner",
    duration: "35 minutes",
    sections: 6,
    rating: 4.8,
    views: "8.2K",
    lastUpdated: "1 day ago",
    image: "/placeholder.svg?height=400&width=600",
    sections_content: [
      {
        title: "Web-Swinging Basics",
        duration: "8 min",
        content: "Master the fluid movement system that makes Spider-Man games legendary.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Learn basic web-swinging controls",
          "Understand momentum and physics",
          "Practice wall-running and parkour",
          "Master air tricks and combos",
          "Use environmental objects for traversal",
        ],
      },
      {
        title: "Combat System",
        duration: "10 min",
        content: "Learn the dynamic combat system with both Peter and Miles.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Master basic attack combinations",
          "Learn dodge timing and counters",
          "Use web abilities effectively",
          "Understand character-specific powers",
          "Handle multiple enemy types",
        ],
      },
      {
        title: "Character Switching",
        duration: "5 min",
        content: "Learn when and how to switch between Peter Parker and Miles Morales.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Understand each character's strengths",
          "Learn optimal switching timing",
          "Use unique abilities effectively",
          "Master dual character missions",
          "Coordinate team attacks",
        ],
      },
      {
        title: "Suit Powers & Gadgets",
        duration: "7 min",
        content: "Unlock and master the various suits and gadgets available.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Unlock new suits and abilities",
          "Understand suit power synergies",
          "Master gadget combinations",
          "Customize your playstyle",
          "Optimize for different mission types",
        ],
      },
    ],
    tips: [
      "Practice web-swinging in open areas before missions",
      "Each character has unique strengths - use them wisely",
      "Explore the city for collectibles and side missions",
      "Upgrade suits and gadgets regularly",
      "Master the photo mode for amazing screenshots",
    ],
    requirements: {
      level: "Beginner friendly",
      time: "35 minutes to complete",
      materials: "Game installed, PlayStation 5 controller recommended",
    },
  },
  starfield: {
    title: "Starfield Space Exploration Guide",
    gameTitle: "Starfield",
    description: "Navigate the cosmos, build ships, and explore planets in this comprehensive space RPG guide",
    difficulty: "Intermediate",
    duration: "50 minutes",
    sections: 7,
    rating: 4.6,
    views: "15.3K",
    lastUpdated: "3 days ago",
    image: "/placeholder.svg?height=400&width=600",
    sections_content: [
      {
        title: "Character Creation & Skills",
        duration: "8 min",
        content: "Create the perfect space explorer and understand the skill system.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Choose your background and traits",
          "Understand the skill tree system",
          "Plan your character build",
          "Allocate skill points effectively",
          "Understand skill challenges",
        ],
      },
      {
        title: "Space Combat & Ship Building",
        duration: "12 min",
        content: "Master space combat and create powerful custom ships.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Learn basic space combat controls",
          "Understand ship systems and power management",
          "Design and build custom ships",
          "Upgrade ship components",
          "Master advanced combat tactics",
        ],
      },
      {
        title: "Planet Exploration",
        duration: "10 min",
        content: "Explore diverse planets and manage resources effectively.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Use the scanner to find resources",
          "Understand biome types and hazards",
          "Build outposts and bases",
          "Manage oxygen and environmental suits",
          "Discover alien life and artifacts",
        ],
      },
      {
        title: "Faction Questlines",
        duration: "12 min",
        content: "Navigate the complex political landscape of the settled systems.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Join major factions",
          "Understand faction relationships",
          "Complete faction-specific missions",
          "Make important story decisions",
          "Balance multiple faction loyalties",
        ],
      },
    ],
    tips: [
      "Save before making major story decisions",
      "Explore every planet for unique resources",
      "Invest in ship building early for better exploration",
      "Join multiple factions to see all content",
      "Use fast travel to manage the large game world",
    ],
    requirements: {
      level: "Intermediate",
      time: "50 minutes to complete",
      materials: "Game installed, understanding of RPG mechanics helpful",
    },
  },
  "alan-wake-2": {
    title: "Alan Wake 2 Survival Horror Guide",
    gameTitle: "Alan Wake 2",
    description: "Survive the psychological horror and master the dual narrative structure",
    difficulty: "Advanced",
    duration: "40 minutes",
    sections: 6,
    rating: 4.7,
    views: "6.8K",
    lastUpdated: "5 days ago",
    image: "/placeholder.svg?height=400&width=600",
    sections_content: [
      {
        title: "Understanding the Dark Place",
        duration: "8 min",
        content: "Navigate the twisted reality of the Dark Place and understand its rules.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Understand light and shadow mechanics",
          "Learn to navigate shifting environments",
          "Use light sources effectively",
          "Understand reality distortions",
          "Master the flashlight combat system",
        ],
      },
      {
        title: "Dual Character Gameplay",
        duration: "10 min",
        content: "Master playing as both Alan Wake and Saga Anderson.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Understand each character's abilities",
          "Learn investigation mechanics as Saga",
          "Master writing mechanics as Alan",
          "Switch between perspectives effectively",
          "Understand how stories interconnect",
        ],
      },
      {
        title: "Combat and Survival",
        duration: "8 min",
        content: "Survive encounters with the Taken and other dark entities.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Master light-based combat",
          "Conserve ammunition and batteries",
          "Use environmental light sources",
          "Understand enemy weaknesses",
          "Learn evasion and stealth tactics",
        ],
      },
      {
        title: "Puzzle Solving",
        duration: "10 min",
        content: "Solve complex environmental and narrative puzzles.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Use the Mind Place effectively",
          "Connect clues and evidence",
          "Understand symbolic puzzles",
          "Navigate manuscript pages",
          "Solve reality-bending challenges",
        ],
      },
    ],
    tips: [
      "Always keep spare batteries for your flashlight",
      "Pay attention to environmental storytelling",
      "Use headphones for the best audio experience",
      "Take notes on important story elements",
      "Don't rush - atmosphere is key to the experience",
    ],
    requirements: {
      level: "Advanced",
      time: "40 minutes to complete",
      materials: "Game installed, good headphones recommended, mature content warning",
    },
  },
  "super-mario-wonder": {
    title: "Super Mario Bros. Wonder Complete Guide",
    gameTitle: "Super Mario Bros. Wonder",
    description: "Master the wonder effects and discover all secrets in this innovative Mario adventure",
    difficulty: "Beginner",
    duration: "30 minutes",
    sections: 5,
    rating: 4.8,
    views: "11.7K",
    lastUpdated: "1 day ago",
    image: "/placeholder.svg?height=400&width=600",
    sections_content: [
      {
        title: "Wonder Effects Mastery",
        duration: "8 min",
        content: "Understand and master the game-changing Wonder Effects.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Collect Wonder Flowers to trigger effects",
          "Adapt to changing level mechanics",
          "Use Wonder Effects strategically",
          "Find hidden Wonder Flowers",
          "Master timing during transformations",
        ],
      },
      {
        title: "Character Selection",
        duration: "6 min",
        content: "Choose the right character for each level and situation.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Understand each character's abilities",
          "Learn Mario's balanced gameplay",
          "Master Luigi's higher jumps",
          "Use Peach's floating ability",
          "Utilize Daisy's unique traits",
        ],
      },
      {
        title: "Collectibles and Secrets",
        duration: "10 min",
        content: "Find all Wonder Seeds, coins, and hidden areas.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Locate all Wonder Seeds in levels",
          "Find hidden coin caches",
          "Discover secret exits and areas",
          "Complete optional challenges",
          "Unlock bonus content",
        ],
      },
      {
        title: "Multiplayer Strategies",
        duration: "6 min",
        content: "Coordinate with friends in cooperative gameplay.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Coordinate character selection",
          "Help teammates with abilities",
          "Share power-ups effectively",
          "Revive fallen players",
          "Work together on puzzles",
        ],
      },
    ],
    tips: [
      "Experiment with different characters in each level",
      "Look for hidden blocks and secret areas",
      "Use Wonder Effects to access new areas",
      "Play with friends for the best experience",
      "Don't rush - explore every corner",
    ],
    requirements: {
      level: "Beginner friendly",
      time: "30 minutes to complete",
      materials: "Nintendo Switch, up to 4 controllers for multiplayer",
    },
  },
  "cyberpunk-phantom-liberty": {
    title: "Cyberpunk 2077: Phantom Liberty Guide",
    gameTitle: "Cyberpunk 2077: Phantom Liberty",
    description: "Navigate the dangerous world of espionage and cybernetic enhancement",
    difficulty: "Advanced",
    duration: "55 minutes",
    sections: 8,
    rating: 4.5,
    views: "9.4K",
    lastUpdated: "4 days ago",
    image: "/placeholder.svg?height=400&width=600",
    sections_content: [
      {
        title: "New Dogtown District",
        duration: "8 min",
        content: "Explore the dangerous new area and understand its unique challenges.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Navigate Dogtown's hostile environment",
          "Understand faction territories",
          "Find safe houses and vendors",
          "Avoid or engage hostile patrols",
          "Discover hidden locations",
        ],
      },
      {
        title: "Spy Thriller Mechanics",
        duration: "10 min",
        content: "Master the espionage elements and stealth gameplay.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Use stealth and infiltration tactics",
          "Gather intelligence effectively",
          "Make crucial dialogue choices",
          "Handle double agents and betrayals",
          "Navigate political intrigue",
        ],
      },
      {
        title: "New Cyberware and Abilities",
        duration: "12 min",
        content: "Utilize the expanded cybernetic enhancement system.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Install and upgrade new cyberware",
          "Master relic abilities",
          "Combine cyberware for synergies",
          "Manage cyberware capacity",
          "Optimize builds for different playstyles",
        ],
      },
      {
        title: "Vehicle Combat and Chases",
        duration: "8 min",
        content: "Master the improved vehicle combat system.",
        image: "/placeholder.svg?height=300&width=500",
        steps: [
          "Handle high-speed chases",
          "Use vehicle weapons effectively",
          "Perform evasive maneuvers",
          "Coordinate with passenger combat",
          "Navigate Dogtown's dangerous roads",
        ],
      },
    ],
    tips: [
      "Save before major story decisions - they have lasting consequences",
      "Invest in stealth and hacking for spy missions",
      "Explore Dogtown thoroughly for unique loot",
      "Build relationships with key characters",
      "Keep multiple save files for different story paths",
    ],
    requirements: {
      level: "Advanced",
      time: "55 minutes to complete",
      materials: "Base Cyberpunk 2077 game required, mature content warning",
    },
  },
}

interface TutorialPageProps {
  params: {
    slug: string
  }
}

export default function TutorialPage({ params }: TutorialPageProps) {
  const tutorial = tutorialData[params.slug as keyof typeof tutorialData]

  if (!tutorial) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/tutorials">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Tutorials
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

      {/* Tutorial Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <Bot className="h-3 w-3 mr-1" />
                    AI Generated
                  </Badge>
                  <Badge variant="outline">{tutorial.difficulty}</Badge>
                </div>
                <h1 className="text-4xl font-bold mb-4">{tutorial.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{tutorial.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{tutorial.sections} sections</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{tutorial.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{tutorial.rating}</span>
                  </div>
                </div>
              </div>

              <Image
                src={tutorial.image || "/placeholder.svg"}
                alt={tutorial.title}
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg mb-8"
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tutorial Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Game:</span>
                    <span className="font-medium">{tutorial.gameTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <Badge variant="outline">{tutorial.difficulty}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{tutorial.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span className="font-medium">{tutorial.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Start Tutorial
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Bookmark
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-medium">Level:</span>
                    <p className="text-sm text-muted-foreground">{tutorial.requirements.level}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Time:</span>
                    <p className="text-sm text-muted-foreground">{tutorial.requirements.time}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Materials:</span>
                    <p className="text-sm text-muted-foreground">{tutorial.requirements.materials}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Sections */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Tutorial Sections</h2>
          <div className="space-y-8">
            {tutorial.sections_content.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span>{section.title}</span>
                    </CardTitle>
                    <Badge variant="secondary">{section.duration}</Badge>
                  </div>
                  <CardDescription>{section.content}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        width={500}
                        height={300}
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Step-by-Step Guide:</h4>
                      <ol className="space-y-2">
                        {section.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-2">
                            <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tutorial.tips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">{tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Track your completion of this tutorial</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Tutorial Progress</span>
                  <span>0 of {tutorial.sections} sections completed</span>
                </div>
                <Progress value={0} className="h-2" />
                <div className="flex space-x-2">
                  <Button>
                    <Play className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                  <Button variant="outline">Reset Progress</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
