/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset }: { offset: number }) => (
  <div>
    <Divider bg="divider" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
