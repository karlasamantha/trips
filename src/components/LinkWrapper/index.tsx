import Link from 'next/link'

import * as Style from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <Style.Wrapper>
    <Link href={href}>{children}</Link>
  </Style.Wrapper>
)

export default LinkWrapper
