import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Clock, Trophy, Gamepad2, ArrowLeft, ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const gameData = {
  "baldurs-gate-3": {
    // 保持现有数据，添加媒体内容
    title: "Baldur's Gate 3",
    description: "An epic RPG adventure with deep storytelling and tactical combat",
    longDescription:
      "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a Mind Flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.",
    genre: ["RPG", "Strategy", "Turn-Based"],
    rating: 4.9,
    players: "1-4 Players",
    releaseDate: "August 3, 2023",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    playtime: "75-100 hours",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_14ca6b05b3ac8b8e8e8e8e8e8e8e8e8e8e8e8e8e.1920x1080.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_25ca6b05b3ac8b8e8e8e8e8e8e8e8e8e8e8e8e8e.1920x1080.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_35ca6b05b3ac8b8e8e8e8e8e8e8e8e8e8e8e8e8e.1920x1080.jpg",
    ],
    videos: [
      {
        type: "trailer",
        url: "https://cdn.akamai.steamstatic.com/steam/apps/256897509/movie_max.mp4",
        title: "Launch Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256897509/movie_max_vp9.webm",
      },
      {
        type: "gameplay",
        url: "https://cdn.akamai.steamstatic.com/steam/apps/256895291/movie_max.mp4",
        title: "Gameplay Overview",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256895291/movie_max_vp9.webm",
      },
    ],
    gifs: [
      {
        url: "/placeholder.svg?height=300&width=500&text=Combat+Animation",
        description: "Combat animation showcase",
      },
      {
        url: "/placeholder.svg?height=300&width=500&text=Magic+Effects",
        description: "Spell casting effects",
      },
    ],
    // 保持其他现有属性...
    features: [
      "Deep Character Customization",
      "Tactical Turn-Based Combat",
      "Multiplayer Co-op Campaign",
      "Branching Storylines",
      "Voice Acting Excellence",
      "Stunning Visuals",
    ],
    gameplay: {
      story:
        "Experience an epic tale of friendship and betrayal, where your choices matter and shape the world around you. The game features multiple origin characters, each with their own compelling backstories.",
      combat:
        "Engage in strategic turn-based combat that rewards tactical thinking. Use the environment to your advantage, combine spells for devastating effects, and coordinate with your party members.",
      exploration:
        "Explore a vast world filled with secrets, side quests, and memorable characters. Every corner of the world has been crafted with care and attention to detail.",
    },
    highlights: [
      "Winner of multiple Game of the Year awards",
      "Over 17,000 possible ending variations",
      "Full voice acting with motion capture",
      "Supports both single-player and 4-player co-op",
      "Based on D&D 5th Edition rules",
      "Over 600 spells and abilities to master",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-4690 / AMD FX 4350",
        memory: "8 GB RAM",
        graphics: "Nvidia GTX 970 / RX 480",
        storage: "150 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel i7-8700K / AMD r5 3600",
        memory: "16 GB RAM",
        graphics: "Nvidia 2060 Super / RX 6700 XT",
        storage: "150 GB available space (SSD)",
      },
    },
    scores: {
      graphics: 95,
      gameplay: 98,
      story: 97,
      sound: 94,
      replayability: 96,
    },
  },
  "spider-man-2": {
    title: "Marvel's Spider-Man 2",
    description: "Swing through New York as both Peter Parker and Miles Morales",
    longDescription:
      "Marvel's Spider-Man 2 is the incredible sequel to the critically acclaimed Marvel's Spider-Man franchise. Swing, jump and utilize the new Web Wings to travel across Marvel's New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
    genre: ["Action", "Adventure", "Superhero"],
    rating: 4.8,
    players: "Single Player",
    releaseDate: "October 20, 2023",
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    platforms: ["PlayStation 5"],
    playtime: "15-20 hours",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    screenshots: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/2c8b75d8ed9271516546560d219ad0b22ee0a263b4537bd9.png",
      "/placeholder.svg?height=600&width=800&text=Spider-Man+2+Screenshot+3",
      "/placeholder.svg?height=600&width=800&text=Spider-Man+2+Screenshot+4",
    ],
    videos: [
      {
        type: "trailer",
        url: "/placeholder.svg?height=720&width=1280&text=Spider-Man+2+Trailer",
        title: "Launch Trailer",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Trailer+Thumbnail",
      },
      {
        type: "gameplay",
        url: "/placeholder.svg?height=720&width=1280&text=Spider-Man+2+Gameplay",
        title: "Gameplay Demo",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Gameplay+Thumbnail",
      },
    ],
    gifs: [
      {
        url: "/placeholder.svg?height=300&width=500&text=Web+Swinging",
        description: "Web-swinging mechanics",
      },
      {
        url: "/placeholder.svg?height=300&width=500&text=Combat+Combos",
        description: "Combat combos",
      },
    ],
    features: [
      "Dual Spider-Man Gameplay",
      "Enhanced Web-Swinging",
      "Venom Symbiote Powers",
      "Expanded New York City",
      "Dynamic Weather System",
      "Photo Mode",
    ],
    gameplay: {
      story:
        "Experience the stories of both Peter Parker and Miles Morales as they face their greatest challenge yet with the emergence of the symbiote threat.",
      combat:
        "Master new combat abilities including Venom powers for Peter and evolved bio-electric abilities for Miles.",
      exploration: "Explore an expanded Marvel's New York with new districts, activities, and secrets to discover.",
    },
    highlights: [
      "Features both Spider-Man characters",
      "Stunning PlayStation 5 exclusive visuals",
      "Innovative web-swinging mechanics",
      "Epic boss battles with iconic villains",
      "Seamless character switching",
      "Award-winning voice acting",
    ],
    systemRequirements: {
      minimum: {
        os: "PlayStation 5 System Software",
        processor: "Custom AMD Zen 2",
        memory: "16 GB GDDR6",
        graphics: "Custom AMD RDNA 2",
        storage: "50 GB available space (SSD)",
      },
      recommended: {
        os: "PlayStation 5 System Software (Latest)",
        processor: "Custom AMD Zen 2",
        memory: "16 GB GDDR6",
        graphics: "Custom AMD RDNA 2",
        storage: "50 GB available space (SSD)",
      },
    },
    scores: {
      graphics: 96,
      gameplay: 94,
      story: 92,
      sound: 95,
      replayability: 88,
    },
  },
  starfield: {
    title: "Starfield",
    description: "Explore the vast cosmos in Bethesda's space exploration RPG",
    longDescription:
      "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.",
    genre: ["RPG", "Sci-Fi", "Space Exploration"],
    rating: 4.6,
    players: "Single Player",
    releaseDate: "September 6, 2023",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    platforms: ["PC", "Xbox Series X/S"],
    playtime: "60-100+ hours",
    image: "/placeholder.svg?height=400&width=600&text=Starfield+Cover",
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=Starfield+Space+Scene",
      "/placeholder.svg?height=600&width=800&text=Starfield+Planet+Surface",
      "/placeholder.svg?height=600&width=800&text=Starfield+Ship+Building",
      "/placeholder.svg?height=600&width=800&text=Starfield+Character",
    ],
    videos: [
      {
        type: "trailer",
        url: "/placeholder.svg?height=720&width=1280&text=Starfield+Launch+Trailer",
        title: "Launch Trailer",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Launch+Trailer",
      },
      {
        type: "gameplay",
        url: "/placeholder.svg?height=720&width=1280&text=Starfield+Gameplay+Showcase",
        title: "Gameplay Showcase",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Gameplay+Showcase",
      },
    ],
    gifs: [
      {
        url: "/placeholder.svg?height=300&width=500&text=Space+Combat",
        description: "Space combat sequence",
      },
      {
        url: "/placeholder.svg?height=300&width=500&text=Ship+Building",
        description: "Ship building interface",
      },
    ],
    features: [
      "1000+ Planets to Explore",
      "Custom Ship Building",
      "Deep Character Progression",
      "Space Combat",
      "Base Building",
      "Faction Questlines",
    ],
    gameplay: {
      story:
        "Embark on an epic journey across the galaxy as a member of Constellation, the last group of space explorers seeking rare artifacts.",
      combat: "Engage in both ground-based and space combat with a variety of weapons and ship configurations.",
      exploration: "Explore over 1000 planets across 100 star systems, each with unique environments and secrets.",
    },
    highlights: [
      "Bethesda's first new IP in 25 years",
      "Over 1000 planets to explore",
      "Comprehensive ship building system",
      "Multiple faction storylines",
      "Extensive mod support planned",
      "Game Pass day one availability",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 version 22H2 (10.0.19045)",
        processor: "AMD Ryzen 5 2600X, Intel Core i7-6800K",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 5700, NVIDIA GeForce GTX 1070 Ti",
        storage: "125 GB available space (SSD)",
      },
      recommended: {
        os: "Windows 10/11 with updates",
        processor: "AMD Ryzen 5 3600X, Intel i5-10600K",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 6800 XT, NVIDIA GeForce RTX 2080",
        storage: "125 GB available space (SSD)",
      },
    },
    scores: {
      graphics: 88,
      gameplay: 85,
      story: 82,
      sound: 90,
      replayability: 95,
    },
  },
  "alan-wake-2": {
    title: "Alan Wake 2",
    description: "A psychological horror masterpiece with stunning visuals",
    longDescription:
      "Alan Wake 2 is a psychological horror game that follows the story of Alan Wake, a bestselling thriller novelist, as he tries to write his way out of a nightmare beyond our world, and FBI agent Saga Anderson as she investigates ritualistic murders in a small town. The game features a dual narrative structure and groundbreaking survival horror gameplay.",
    genre: ["Horror", "Thriller", "Psychological"],
    rating: 4.7,
    players: "Single Player",
    releaseDate: "October 27, 2023",
    developer: "Remedy Entertainment",
    publisher: "Epic Games Publishing",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    playtime: "15-20 hours",
    image: "/placeholder.svg?height=400&width=600&text=Alan+Wake+2+Cover",
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=Alan+Wake+2+Dark+Place",
      "/placeholder.svg?height=600&width=800&text=Alan+Wake+2+Saga+Investigation",
      "/placeholder.svg?height=600&width=800&text=Alan+Wake+2+Horror+Scene",
      "/placeholder.svg?height=600&width=800&text=Alan+Wake+2+Flashlight",
    ],
    videos: [
      {
        type: "trailer",
        url: "/placeholder.svg?height=720&width=1280&text=Alan+Wake+2+Launch+Trailer",
        title: "Launch Trailer",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Launch+Trailer",
      },
      {
        type: "gameplay",
        url: "/placeholder.svg?height=720&width=1280&text=Alan+Wake+2+Gameplay",
        title: "Gameplay Walkthrough",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Gameplay+Walkthrough",
      },
    ],
    gifs: [
      {
        url: "/placeholder.svg?height=300&width=500&text=Flashlight+Combat",
        description: "Flashlight combat mechanics",
      },
      {
        url: "/placeholder.svg?height=300&width=500&text=Horror+Atmosphere",
        description: "Horror atmosphere showcase",
      },
    ],
    features: [
      "Dual Character Narrative",
      "Psychological Horror Elements",
      "Light-Based Combat",
      "Mind Place Investigation",
      "Musical Sequences",
      "Stunning Visuals",
    ],
    gameplay: {
      story:
        "Experience two interconnected stories as Alan Wake tries to escape the Dark Place and FBI agent Saga Anderson investigates supernatural murders.",
      combat: "Use light as your primary weapon against the forces of darkness in innovative survival horror combat.",
      exploration: "Investigate crime scenes, solve puzzles, and uncover the truth behind the supernatural events.",
    },
    highlights: [
      "Sequel to the cult classic Alan Wake",
      "Dual protagonist narrative structure",
      "Cutting-edge horror visuals",
      "Innovative light-based gameplay",
      "Award-winning sound design",
      "Mature storytelling themes",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit version 1909",
        processor: "Intel Core i5-7600K / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "GeForce GTX 1060 / Radeon RX 580",
        storage: "90 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-8600K / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "GeForce RTX 3070 / Radeon RX 6700 XT",
        storage: "90 GB available space (SSD)",
      },
    },
    scores: {
      graphics: 95,
      gameplay: 88,
      story: 94,
      sound: 97,
      replayability: 82,
    },
  },
  "super-mario-wonder": {
    title: "Super Mario Bros. Wonder",
    description: "Nintendo's most creative Mario adventure yet",
    longDescription:
      "Super Mario Bros. Wonder is a side-scrolling platform game that introduces Wonder Effects - game-changing events that transform levels in unexpected ways. Play as Mario, Luigi, Peach, Daisy, and others in this innovative adventure that redefines what a Mario game can be.",
    genre: ["Platformer", "Family", "Adventure"],
    rating: 4.8,
    players: "1-4 Players",
    releaseDate: "October 20, 2023",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    platforms: ["Nintendo Switch"],
    playtime: "10-15 hours",
    image: "/placeholder.svg?height=400&width=600&text=Super+Mario+Wonder+Cover",
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=Mario+Wonder+Effect",
      "/placeholder.svg?height=600&width=800&text=Mario+Multiplayer",
      "/placeholder.svg?height=600&width=800&text=Mario+Characters",
      "/placeholder.svg?height=600&width=800&text=Mario+Power+Up",
    ],
    videos: [
      {
        type: "trailer",
        url: "/placeholder.svg?height=720&width=1280&text=Mario+Wonder+Launch+Trailer",
        title: "Launch Trailer",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Launch+Trailer",
      },
      {
        type: "gameplay",
        url: "/placeholder.svg?height=720&width=1280&text=Mario+Wonder+Gameplay",
        title: "Gameplay Overview",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Gameplay+Overview",
      },
    ],
    gifs: [
      {
        url: "/placeholder.svg?height=300&width=500&text=Wonder+Transformation",
        description: "Wonder transformation sequence",
      },
      {
        url: "/placeholder.svg?height=300&width=500&text=Power+Up+Showcase",
        description: "Power-up showcase",
      },
    ],
    features: [
      "Wonder Effects System",
      "Multiple Playable Characters",
      "4-Player Local Co-op",
      "New Power-ups",
      "Creative Level Design",
      "Online Features",
    ],
    gameplay: {
      story:
        "Journey through the Flower Kingdom and collect Wonder Seeds while experiencing game-changing Wonder Effects.",
      combat: "Classic Mario platforming with new mechanics and power-ups that change how you interact with levels.",
      exploration: "Discover hidden areas, collect Wonder Seeds, and unlock new characters and abilities.",
    },
    highlights: [
      "Revolutionary Wonder Effects system",
      "Most creative Mario game in years",
      "Perfect for family gaming",
      "Innovative level design",
      "Multiple playable characters",
      "Excellent cooperative gameplay",
    ],
    systemRequirements: {
      minimum: {
        os: "Nintendo Switch System",
        processor: "Custom NVIDIA Tegra X1",
        memory: "4 GB RAM",
        graphics: "Custom NVIDIA Maxwell GPU",
        storage: "2.9 GB available space",
      },
      recommended: {
        os: "Nintendo Switch System (Latest)",
        processor: "Custom NVIDIA Tegra X1",
        memory: "4 GB RAM",
        graphics: "Custom NVIDIA Maxwell GPU",
        storage: "2.9 GB available space",
      },
    },
    scores: {
      graphics: 92,
      gameplay: 96,
      story: 85,
      sound: 94,
      replayability: 90,
    },
  },
  "cyberpunk-phantom-liberty": {
    title: "Cyberpunk 2077: Phantom Liberty",
    description: "The ultimate cyberpunk experience with Keanu Reeves",
    longDescription:
      "Cyberpunk 2077: Phantom Liberty is a spy-thriller expansion that introduces a brand-new district, Dogtown, and follows V on a high-stakes mission to save the President of the New United States. Featuring Keanu Reeves as Johnny Silverhand and introducing Idris Elba as Solomon Reed.",
    genre: ["RPG", "Cyberpunk", "Action"],
    rating: 4.5,
    players: "Single Player",
    releaseDate: "September 26, 2023",
    developer: "CD Projekt RED",
    publisher: "CD Projekt",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    playtime: "20-25 hours",
    image: "/placeholder.svg?height=400&width=600&text=Cyberpunk+Phantom+Liberty+Cover",
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=Cyberpunk+Dogtown",
      "/placeholder.svg?height=600&width=800&text=Cyberpunk+Keanu+Reeves",
      "/placeholder.svg?height=600&width=800&text=Cyberpunk+Vehicle+Combat",
      "/placeholder.svg?height=600&width=800&text=Cyberpunk+Cyberware",
    ],
    videos: [
      {
        type: "trailer",
        url: "/placeholder.svg?height=720&width=1280&text=Phantom+Liberty+Launch+Trailer",
        title: "Phantom Liberty Launch Trailer",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Launch+Trailer",
      },
      {
        type: "gameplay",
        url: "/placeholder.svg?height=720&width=1280&text=Phantom+Liberty+Gameplay",
        title: "Gameplay Demo",
        thumbnail: "/placeholder.svg?height=360&width=640&text=Gameplay+Demo",
      },
    ],
    gifs: [
      {
        url: "/placeholder.svg?height=300&width=500&text=High+Speed+Chase",
        description: "High-speed chase sequence",
      },
      {
        url: "/placeholder.svg?height=300&width=500&text=Cyberware+Enhancement",
        description: "Cyberware enhancement showcase",
      },
    ],
    features: [
      "New Dogtown District",
      "Spy Thriller Storyline",
      "Enhanced Vehicle Combat",
      "New Cyberware System",
      "Keanu Reeves & Idris Elba",
      "Improved AI and Graphics",
    ],
    gameplay: {
      story: "Experience a gripping spy thriller as V becomes entangled in a web of political intrigue and espionage.",
      combat: "Enhanced combat system with new cyberware abilities and improved vehicle combat mechanics.",
      exploration: "Explore the dangerous new district of Dogtown with its unique atmosphere and challenges.",
    },
    highlights: [
      "Features Keanu Reeves and Idris Elba",
      "Major expansion with 20+ hours content",
      "New district with unique atmosphere",
      "Spy thriller narrative focus",
      "Enhanced graphics and performance",
      "New cyberware and abilities",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-6700 / AMD Ryzen 5 1600",
        memory: "12 GB RAM",
        graphics: "GeForce GTX 1060 6GB / Radeon RX 580 8GB",
        storage: "70 GB available space (SSD)",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-12700 / AMD Ryzen 7 7800X3D",
        memory: "16 GB RAM",
        graphics: "GeForce RTX 2060 Super / Radeon RX 6700 XT",
        storage: "70 GB available space (SSD)",
      },
    },
    scores: {
      graphics: 94,
      gameplay: 89,
      story: 92,
      sound: 96,
      replayability: 85,
    },
  },
}

interface GamePageProps {
  params: {
    slug: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = gameData[params.slug as keyof typeof gameData]

  if (!game) {
    notFound()
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
                  Back to Games
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Gamepad2 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">GameVault</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.genre.map((g) => (
                    <Badge key={g} variant="secondary">
                      {g}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{game.longDescription}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">{game.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">User Rating</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold">{game.playtime}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Playtime</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Developer:</span>
                  <span className="font-medium">{game.developer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Publisher:</span>
                  <span className="font-medium">{game.publisher}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Release Date:</span>
                  <span className="font-medium">{game.releaseDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Players:</span>
                  <span className="font-medium">{game.players}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {game.platforms.map((platform) => (
                  <Badge key={platform} variant="outline">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {game.screenshots.map((screenshot, index) => (
              <Image
                key={index}
                src={screenshot || "/placeholder.svg"}
                alt={`${game.title} screenshot ${index + 1}`}
                width={500}
                height={300}
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      {game.videos && game.videos.length > 0 && (
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {game.videos.map((video, index) => (
                <div key={index} className="relative">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold mt-2">{video.title}</h3>
                  <Badge variant="outline" className="mt-1">
                    {video.type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GIFs Section */}
      {game.gifs && game.gifs.length > 0 && (
        <section className="py-8 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Gameplay Animations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {game.gifs.map((gif, index) => (
                <div key={index} className="space-y-2">
                  <Image
                    src={gif.url || "/placeholder.svg"}
                    alt={gif.description}
                    width={500}
                    height={300}
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-muted-foreground">{gif.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Game Features */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {game.features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="font-medium">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Details */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Gameplay</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>📖</span>
                  <span>Story</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{game.gameplay.story}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>⚔️</span>
                  <span>Combat</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{game.gameplay.combat}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🗺️</span>
                  <span>Exploration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{game.gameplay.exploration}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Makes It Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {game.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Scores */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Review Scores</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {Object.entries(game.scores).map(([category, score]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="capitalize font-medium">{category}</span>
                      <span className="font-bold">{score}/100</span>
                    </div>
                    <Progress value={score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Minimum Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(game.systemRequirements.minimum).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize text-muted-foreground">{key}:</span>
                    <span className="font-medium text-right">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recommended Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(game.systemRequirements.recommended).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize text-muted-foreground">{key}:</span>
                    <span className="font-medium text-right">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience this incredible game for yourself. Available on multiple platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>Buy Now</span>
            </Button>
            <Button size="lg" variant="outline" className="flex items-center space-x-2 bg-transparent">
              <span>Add to Wishlist</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
