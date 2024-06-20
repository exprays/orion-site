import { Metadata } from "next"

export function constructMetadata({
    title = "Orion",
    description = "Database of the Future",
    image = "https://orion.thestarsociety.tech/thumbnail.png",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
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
