import { NextResponse } from "next/server"

const nameTemplates = {
  fantasy: [
    "{adjective} {noun}",
    "{noun} of {location}",
    "The {adjective} {noun}",
    "{character} and the {noun}",
    "{noun}: {subtitle}",
  ],
  scifi: ["{adjective} {noun}", "{noun} {number}", "{location}: {subtitle}", "Beyond {noun}", "{noun} Protocol"],
  action: ["{adjective} {noun}", "{noun} {verb}", "Operation {noun}", "{noun}: {subtitle}", "The {noun} {verb}"],
}

const wordLists = {
  adjectives: {
    fantasy: ["Mystic", "Ancient", "Forgotten", "Sacred", "Dark", "Golden", "Crystal", "Shadow", "Divine", "Eternal"],
    scifi: ["Quantum", "Cyber", "Neural", "Digital", "Cosmic", "Stellar", "Nano", "Bio", "Hyper", "Ultra"],
    action: [
      "Elite",
      "Tactical",
      "Stealth",
      "Combat",
      "Strike",
      "Assault",
      "Special",
      "Critical",
      "Maximum",
      "Ultimate",
    ],
  },
  nouns: {
    fantasy: ["Realm", "Quest", "Legend", "Chronicles", "Saga", "Kingdom", "Empire", "Destiny", "Legacy", "Prophecy"],
    scifi: ["Station", "Protocol", "Matrix", "System", "Network", "Core", "Nexus", "Grid", "Interface", "Dimension"],
    action: ["Force", "Strike", "Mission", "Operation", "Squad", "Unit", "Command", "Assault", "Defense", "Warfare"],
  },
  locations: {
    fantasy: ["Avalon", "Eldoria", "Mystara", "Aethermoor", "Shadowlands", "Dragonspire", "Moonhaven", "Starfall"],
    scifi: ["Alpha Station", "Nexus Prime", "Sector 7", "Mars Colony", "Deep Space", "Titan Base", "Void Station"],
    action: ["Ground Zero", "Danger Zone", "Hot Zone", "Combat Arena", "War Theater", "Strike Zone", "Battle Ground"],
  },
}

function generateName(genre: string, style: string, keywords: string[] = []) {
  const templates = nameTemplates[genre as keyof typeof nameTemplates] || nameTemplates.fantasy
  const template = templates[Math.floor(Math.random() * templates.length)]

  let name = template

  // Replace placeholders with appropriate words
  if (name.includes("{adjective}")) {
    const adjectives = wordLists.adjectives[genre as keyof typeof wordLists.adjectives] || wordLists.adjectives.fantasy
    const adjective =
      keywords.length > 0 && Math.random() > 0.5
        ? keywords[Math.floor(Math.random() * keywords.length)]
        : adjectives[Math.floor(Math.random() * adjectives.length)]
    name = name.replace("{adjective}", adjective)
  }

  if (name.includes("{noun}")) {
    const nouns = wordLists.nouns[genre as keyof typeof wordLists.nouns] || wordLists.nouns.fantasy
    const noun =
      keywords.length > 0 && Math.random() > 0.5
        ? keywords[Math.floor(Math.random() * keywords.length)]
        : nouns[Math.floor(Math.random() * nouns.length)]
    name = name.replace("{noun}", noun)
  }

  if (name.includes("{location}")) {
    const locations = wordLists.locations[genre as keyof typeof wordLists.locations] || wordLists.locations.fantasy
    name = name.replace("{location}", locations[Math.floor(Math.random() * locations.length)])
  }

  if (name.includes("{number}")) {
    name = name.replace("{number}", (Math.floor(Math.random() * 9) + 1).toString())
  }

  if (name.includes("{subtitle}")) {
    const subtitles = ["Awakening", "Revolution", "Legacy", "Origins", "Destiny", "Redemption", "Ascension", "Eclipse"]
    name = name.replace("{subtitle}", subtitles[Math.floor(Math.random() * subtitles.length)])
  }

  return name
}

export async function POST(request: Request) {
  try {
    const { genre = "fantasy", style = "epic", keywords = "", count = 8 } = await request.json()

    const keywordArray = keywords
      ? keywords
          .split(",")
          .map((k: string) => k.trim())
          .filter(Boolean)
      : []
    const names = []

    for (let i = 0; i < count; i++) {
      names.push(generateName(genre, style, keywordArray))
    }

    return NextResponse.json({
      success: true,
      names,
      parameters: {
        genre,
        style,
        keywords: keywordArray,
        count,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error generating names:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate names",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
