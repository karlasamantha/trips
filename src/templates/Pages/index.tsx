import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as Style from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Style.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <Style.Heading>{heading}</Style.Heading>

    <Style.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Style.Body>
  </Style.Content>
)

export default PageTemplate
