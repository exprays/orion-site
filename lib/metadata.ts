import { Metadata } from "next"

export function constructMetadata({
    title = "Orion",
    description = "Database of the Future",
    image = "https://orion.thestarsociety.tech/thumbnail.png",
    icons = "/favicon.ico",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@exprays"
      },
      icons,
      metadataBase: new URL('https://orion.thestarsociety.tech'),
      themeColor: '#FFF',
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }