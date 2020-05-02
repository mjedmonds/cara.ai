/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"
import Particles from 'react-particles-js'

const About = ({ offset }: { offset: number }) => (
  <div>
    <Divider bg="divider" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Particles
          className="particle-js"
          height={"65%"}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "150px",
            left: "-0%",
          }}
          params={{
            particles: {
              color: {
                value: "#2b8a9d"
              },
              size: {
                value: "2"
              },
              number: {
                value: "150"
              },
              line_linked: {
                enable: {
                  auto: true
                },
                distance: "150",
                color: "#2b8a9d",
                opacity: "0.3",
                width: "1"
              }
            },
          }}
        />
        <Inner>
          <AboutMDX />
        </Inner>
    </Content>
  </div>
)

export default About
