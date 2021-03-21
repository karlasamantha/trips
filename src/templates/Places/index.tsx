import LinkWrapper from 'components/LinkWrapper'
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
    description: {
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
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          />

          <Style.Gallery>
            {place.gallery.map((image, index) => (
              <img key={`photo-${index}`} src={image.url} alt={place.name} />
            ))}
          </Style.Gallery>
        </Style.Container>
      </Style.Wrapper>
    </>
  )
}
