import React from "react"
import ProjectCard from "../@lekoarts/gatsby-theme-cara/components/project-card"
import Paypal from "../@lekoarts/gatsby-theme-cara/components/paypal"

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  Paypal: () => (
    <Paypal>
    </Paypal>
  ),
}
