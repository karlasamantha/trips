import LinkWrapper from 'components/LinkWrapper'
import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as Style from './styles'

export type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <Style.Wrapper>
        <Style.Container>
          <Style.Heading>{place.name}</Style.Heading>

          <Style.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <Style.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </Style.Gallery>
        </Style.Container>
      </Style.Wrapper>
    </>
  )
}
