import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Users, Gamepad2, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const allGames = [
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    description: "An epic RPG adventure with deep storytelling and tactical combat",
    genre: ["RPG", "Strategy"],
    rating: 4.9,
    players: "1-4 Players",
    releaseDate: "2023",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
    platform: ["PC", "PS5", "Xbox"],
  },
  {
    id: "spider-man-2",
    title: "Marvel's Spider-Man 2",
    description: "Swing through New York as both Peter Parker and Miles Morales",
    genre: ["Action", "Adventure"],
    rating: 4.8,
    players: "Single Player",
    releaseDate: "2023",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    platform: ["PS5"],
  },
  {
    id: "starfield",
    title: "Starfield",
    description: "Explore the vast cosmos in Bethesda's space exploration RPG",
    genre: ["RPG", "Sci-Fi"],
    rating: 4.6,
    players: "Single Player",
    releaseDate: "2023",
    image: "https://images.ctfassets.net/rporu91m20dc/starfield_header.jpg",
    platform: ["PC", "Xbox"],
  },
  {
    id: "alan-wake-2",
    title: "Alan Wake 2",
    description: "A psychological horror masterpiece with stunning visuals",
    genre: ["Horror", "Thriller"],
    rating: 4.7,
    players: "Single Player",
    releaseDate: "2023",
    image: "https://cdn.remedygames.com/alanwake2/header.jpg",
    platform: ["PC", "PS5", "Xbox"],
  },
  {
    id: "super-mario-wonder",
    title: "Super Mario Bros. Wonder",
    description: "Nintendo's most creative Mario adventure yet",
    genre: ["Platformer", "Family"],
    rating: 4.8,
    players: "1-4 Players",
    releaseDate: "2023",
    image: "https://assets.nintendo.com/image/upload/mariowonder/header.jpg",
    platform: ["Switch"],
  },
  {
    id: "cyberpunk-phantom-liberty",
    title: "Cyberpunk 2077: Phantom Liberty",
    description: "The ultimate cyberpunk experience with Keanu Reeves",
    genre: ["RPG", "Cyberpunk"],
    rating: 4.5,
    players: "Single Player",
    releaseDate: "2023",
    image: "https://cdn.cdprojektred.com/cyberpunk2077/phantomliberty/header.jpg",
    platform: ["PC", "PS5", "Xbox"],
  },
  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    description: "Experience the wizarding world like never before",
    genre: ["RPG", "Fantasy"],
    rating: 4.4,
    players: "Single Player",
    releaseDate: "2023",
    image: "/placeholder.svg?height=300&width=400",
    platform: ["PC", "PS5", "Xbox", "Switch"],
  },
  {
    id: "tears-of-the-kingdom",
    title: "The Legend of Zelda: Tears of the Kingdom",
    description: "The epic sequel to Breath of the Wild",
    genre: ["Adventure", "Action"],
    rating: 4.9,
    players: "Single Player",
    releaseDate: "2023",
    image: "/placeholder.svg?height=300&width=400",
    platform: ["Switch"],
  },
  {
    id: "diablo-4",
    title: "Diablo IV",
    description: "Return to the world of Sanctuary in this dark fantasy RPG",
    genre: ["RPG", "Action"],
    rating: 4.3,
    players: "1-4 Players",
    releaseDate: "2023",
    image: "/placeholder.svg?height=300&width=400",
    platform: ["PC", "PS5", "Xbox"],
  },
  {
    id: "street-fighter-6",
    title: "Street Fighter 6",
    description: "The ultimate fighting game experience returns",
    genre: ["Fighting", "Competitive"],
    rating: 4.6,
    players: "1-2 Players",
    releaseDate: "2023",
    image: "/placeholder.svg?height=300&width=400",
    platform: ["PC", "PS5", "Xbox"],
  },
  {
    id: "resident-evil-4",
    title: "Resident Evil 4 Remake",
    description: "The survival horror classic reimagined",
    genre: ["Horror", "Action"],
    rating: 4.7,
    players: "Single Player",
    releaseDate: "2023",
    image: "/placeholder.svg?height=300&width=400",
    platform: ["PC", "PS5", "Xbox"],
  },
  {
    id: "final-fantasy-16",
    title: "Final Fantasy XVI",
    description: "A dark fantasy epic with stunning visuals",
    genre: ["RPG", "Fantasy"],
    rating: 4.5,
    players: "Single Player",
    releaseDate: "2023",
    image: "/placeholder.svg?height=300&width=400",
    platform: ["PS5"],
  },
]

export default function AllGamesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">GameVault</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/games" className="text-foreground hover:text-primary transition-colors">
                All Games
              </Link>
              <Link href="/genres" className="text-muted-foreground hover:text-primary transition-colors">
                Genres
              </Link>
              <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">All Games</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our complete collection of the world's top 100 latest games
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search games..." className="pl-10 w-full" />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="rpg">RPG</SelectItem>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="pc">PC</SelectItem>
                  <SelectItem value="ps5">PlayStation 5</SelectItem>
                  <SelectItem value="xbox">Xbox</SelectItem>
                  <SelectItem value="switch">Nintendo Switch</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="release">Release Date</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Showing {allGames.length} games</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filter results</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allGames.map((game) => (
              <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur">
                      {game.releaseDate}
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <div className="flex items-center space-x-1 bg-background/80 backdrop-blur rounded px-2 py-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{game.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg line-clamp-1">{game.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {game.genre.slice(0, 2).map((g) => (
                      <Badge key={g} variant="outline" className="text-xs">
                        {g}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {game.platform.slice(0, 3).map((platform) => (
                      <Badge key={platform} variant="secondary" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span className="text-xs">{game.players}</span>
                    </div>
                    <Link href={`/games/${game.id}`}>
                      <Button size="sm">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Games
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Showing 12 of 100+ games</p>
          </div>
        </div>
      </section>
    </div>
  )
}
