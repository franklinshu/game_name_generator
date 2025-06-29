import { NextResponse } from "next/server"

// Simulated media sources for games
const mediaAPIs = {
  steam: "https://store.steampowered.com/api/appdetails",
  youtube: "https://www.googleapis.com/youtube/v3/search",
  twitch: "https://api.twitch.tv/helix/clips",
  gameTrailers: "https://api.gametrailers.com/v1/videos",
  screenshots: "https://api.screenshots.com/v1/games",
}

// Simulated high-quality media data
const gameMediaDatabase = {
  "baldurs-gate-3": {
    images: [
      {
        type: "screenshot",
        url: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg",
        description: "Epic combat scene with party members",
        quality: "4K",
      },
      {
        type: "screenshot",
        url: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_14ca6b05b3ac8b8e8e8e8e8e8e8e8e8e8e8e8e8e.1920x1080.jpg",
        description: "Character creation interface",
        quality: "4K",
      },
      {
        type: "artwork",
        url: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        description: "Official game artwork",
        quality: "HD",
      },
    ],
    videos: [
      {
        type: "trailer",
        url: "https://cdn.akamai.steamstatic.com/steam/apps/256897509/movie_max.mp4",
        title: "Launch Trailer",
        duration: "2:30",
        quality: "4K",
      },
      {
        type: "gameplay",
        url: "https://cdn.akamai.steamstatic.com/steam/apps/256895291/movie_max.mp4",
        title: "Gameplay Overview",
        duration: "5:45",
        quality: "1080p",
      },
    ],
    gifs: [
      {
        url: "https://media.giphy.com/media/baldursgate3combat/giphy.gif",
        description: "Combat animation showcase",
        size: "2MB",
      },
      {
        url: "https://media.giphy.com/media/baldursgate3magic/giphy.gif",
        description: "Spell casting effects",
        size: "1.8MB",
      },
    ],
  },
  "spider-man-2": {
    images: [
      {
        type: "screenshot",
        url: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
        description: "Web-swinging through New York",
        quality: "4K",
      },
      {
        type: "screenshot",
        url: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/2c8b75d8ed9271516546560d219ad0b22ee0a263b4537bd9.png",
        description: "Dual Spider-Man action",
        quality: "4K",
      },
    ],
    videos: [
      {
        type: "trailer",
        url: "https://video.api.playstation.com/spiderman2/launch_trailer.mp4",
        title: "Launch Trailer",
        duration: "3:15",
        quality: "4K",
      },
      {
        type: "gameplay",
        url: "https://video.api.playstation.com/spiderman2/gameplay_demo.mp4",
        title: "Gameplay Demo",
        duration: "8:20",
        quality: "1080p",
      },
    ],
    gifs: [
      {
        url: "https://media.giphy.com/media/spiderman2webswing/giphy.gif",
        description: "Web-swinging mechanics",
        size: "3.2MB",
      },
      {
        url: "https://media.giphy.com/media/spiderman2combat/giphy.gif",
        description: "Combat combos",
        size: "2.5MB",
      },
    ],
  },
  starfield: {
    images: [
      {
        type: "screenshot",
        url: "https://images.ctfassets.net/rporu91m20dc/starfield_screenshot_1.jpg",
        description: "Space exploration scene",
        quality: "4K",
      },
      {
        type: "screenshot",
        url: "https://images.ctfassets.net/rporu91m20dc/starfield_screenshot_2.jpg",
        description: "Planet surface exploration",
        quality: "4K",
      },
    ],
    videos: [
      {
        type: "trailer",
        url: "https://assets.xbox.com/starfield/launch_trailer.mp4",
        title: "Launch Trailer",
        duration: "2:45",
        quality: "4K",
      },
      {
        type: "gameplay",
        url: "https://assets.xbox.com/starfield/gameplay_showcase.mp4",
        title: "Gameplay Showcase",
        duration: "15:30",
        quality: "1080p",
      },
    ],
    gifs: [
      {
        url: "https://media.giphy.com/media/starfieldspacecombat/giphy.gif",
        description: "Space combat sequence",
        size: "4.1MB",
      },
      {
        url: "https://media.giphy.com/media/starfieldshipbuilding/giphy.gif",
        description: "Ship building interface",
        size: "2.8MB",
      },
    ],
  },
  "alan-wake-2": {
    images: [
      {
        type: "screenshot",
        url: "https://cdn.remedygames.com/alanwake2/screenshot_darkplace.jpg",
        description: "Dark Place atmospheric scene",
        quality: "4K",
      },
      {
        type: "screenshot",
        url: "https://cdn.remedygames.com/alanwake2/screenshot_saga.jpg",
        description: "Saga Anderson investigation",
        quality: "4K",
      },
    ],
    videos: [
      {
        type: "trailer",
        url: "https://cdn.remedygames.com/alanwake2/launch_trailer.mp4",
        title: "Launch Trailer",
        duration: "2:55",
        quality: "4K",
      },
      {
        type: "gameplay",
        url: "https://cdn.remedygames.com/alanwake2/gameplay_walkthrough.mp4",
        title: "Gameplay Walkthrough",
        duration: "12:15",
        quality: "1080p",
      },
    ],
    gifs: [
      {
        url: "https://media.giphy.com/media/alanwake2flashlight/giphy.gif",
        description: "Flashlight combat mechanics",
        size: "2.9MB",
      },
      {
        url: "https://media.giphy.com/media/alanwake2horror/giphy.gif",
        description: "Horror atmosphere showcase",
        size: "3.5MB",
      },
    ],
  },
  "super-mario-wonder": {
    images: [
      {
        type: "screenshot",
        url: "https://assets.nintendo.com/image/upload/mariowonder/screenshot_wonder_effect.jpg",
        description: "Wonder Effect transformation",
        quality: "4K",
      },
      {
        type: "screenshot",
        url: "https://assets.nintendo.com/image/upload/mariowonder/screenshot_multiplayer.jpg",
        description: "4-player cooperative gameplay",
        quality: "4K",
      },
    ],
    videos: [
      {
        type: "trailer",
        url: "https://assets.nintendo.com/mariowonder/launch_trailer.mp4",
        title: "Launch Trailer",
        duration: "2:20",
        quality: "1080p",
      },
      {
        type: "gameplay",
        url: "https://assets.nintendo.com/mariowonder/gameplay_overview.mp4",
        title: "Gameplay Overview",
        duration: "6:30",
        quality: "1080p",
      },
    ],
    gifs: [
      {
        url: "https://media.giphy.com/media/mariowondertransform/giphy.gif",
        description: "Wonder transformation sequence",
        size: "2.1MB",
      },
      {
        url: "https://media.giphy.com/media/mariowonderpower/giphy.gif",
        description: "Power-up showcase",
        size: "1.9MB",
      },
    ],
  },
  "cyberpunk-phantom-liberty": {
    images: [
      {
        type: "screenshot",
        url: "https://cdn.cdprojektred.com/cyberpunk2077/phantomliberty/dogtown_vista.jpg",
        description: "Dogtown district overview",
        quality: "4K",
      },
      {
        type: "screenshot",
        url: "https://cdn.cdprojektred.com/cyberpunk2077/phantomliberty/keanu_reeves.jpg",
        description: "Johnny Silverhand appearance",
        quality: "4K",
      },
    ],
    videos: [
      {
        type: "trailer",
        url: "https://cdn.cdprojektred.com/cyberpunk2077/phantomliberty/launch_trailer.mp4",
        title: "Phantom Liberty Launch Trailer",
        duration: "3:40",
        quality: "4K",
      },
      {
        type: "gameplay",
        url: "https://cdn.cdprojektred.com/cyberpunk2077/phantomliberty/gameplay_demo.mp4",
        title: "Gameplay Demo",
        duration: "10:25",
        quality: "1080p",
      },
    ],
    gifs: [
      {
        url: "https://media.giphy.com/media/cyberpunkchase/giphy.gif",
        description: "High-speed chase sequence",
        size: "4.5MB",
      },
      {
        url: "https://media.giphy.com/media/cyberpunkcyberware/giphy.gif",
        description: "Cyberware enhancement showcase",
        size: "3.2MB",
      },
    ],
  },
}

export async function POST(request: Request) {
  try {
    const { gameId, mediaTypes = ["images", "videos", "gifs"] } = await request.json()

    if (!gameId) {
      return NextResponse.json(
        {
          success: false,
          message: "Game ID is required",
        },
        { status: 400 },
      )
    }

    // Simulate media collection process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const gameMedia = gameMediaDatabase[gameId as keyof typeof gameMediaDatabase]

    if (!gameMedia) {
      // Generate placeholder media for unknown games
      const placeholderMedia = {
        images: [
          {
            type: "screenshot",
            url: `/placeholder.svg?height=1080&width=1920&text=${encodeURIComponent(gameId + " Screenshot 1")}`,
            description: "Game screenshot",
            quality: "HD",
          },
          {
            type: "screenshot",
            url: `/placeholder.svg?height=1080&width=1920&text=${encodeURIComponent(gameId + " Screenshot 2")}`,
            description: "Game screenshot",
            quality: "HD",
          },
        ],
        videos: [
          {
            type: "trailer",
            url: `/placeholder.svg?height=720&width=1280&text=${encodeURIComponent(gameId + " Trailer")}`,
            title: "Game Trailer",
            duration: "2:30",
            quality: "HD",
          },
        ],
        gifs: [
          {
            url: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(gameId + " GIF")}`,
            description: "Gameplay animation",
            size: "2MB",
          },
        ],
      }

      return NextResponse.json({
        success: true,
        gameId,
        media: placeholderMedia,
        source: "placeholder",
        collectedAt: new Date().toISOString(),
      })
    }

    // Filter requested media types
    const filteredMedia: any = {}
    mediaTypes.forEach((type: string) => {
      if (gameMedia[type as keyof typeof gameMedia]) {
        filteredMedia[type] = gameMedia[type as keyof typeof gameMedia]
      }
    })

    return NextResponse.json({
      success: true,
      gameId,
      media: filteredMedia,
      source: "database",
      collectedAt: new Date().toISOString(),
      stats: {
        images: gameMedia.images?.length || 0,
        videos: gameMedia.videos?.length || 0,
        gifs: gameMedia.gifs?.length || 0,
      },
    })
  } catch (error) {
    console.error("Error collecting media:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to collect media",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const availableGames = Object.keys(gameMediaDatabase)
    const totalMedia = Object.values(gameMediaDatabase).reduce(
      (acc, game) => ({
        images: acc.images + (game.images?.length || 0),
        videos: acc.videos + (game.videos?.length || 0),
        gifs: acc.gifs + (game.gifs?.length || 0),
      }),
      { images: 0, videos: 0, gifs: 0 },
    )

    return NextResponse.json({
      success: true,
      availableGames,
      totalMedia,
      supportedTypes: ["images", "videos", "gifs"],
      endpoints: [
        "POST /api/collect-media - Collect media for a specific game",
        "GET /api/collect-media - Get media collection status",
      ],
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to get media collection status",
      },
      { status: 500 },
    )
  }
}
