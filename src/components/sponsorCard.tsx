import Image, { FluidObject } from "gatsby-image"
import * as React from "react"

import { getValidUrl } from "../utilities/getValidUrl"

export interface SponsorCardProps {
  name: string
  url: string
  logo: FluidObject
}

export const SponsorCard: React.FC<SponsorCardProps> = ({
  name,
  url,
  logo,
}) => {
  return (
    <div>
      <a href={getValidUrl(url)}>
        <Image fluid={logo} alt={name} />
      </a>
    </div>
  )
}
