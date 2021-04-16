/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import Intro from "../sections/intro"
import Title from "../sections/title"
import Particles from 'react-particles-js'

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Content speed={0.4} offset={offset}>
      <Particles
          className="particle-js"
          height={"100%"}
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
      <Inner sx={{textAlign: `center` }}>
        <Title />
      </Inner>
      <Inner sx={{textAlign: `center` }}>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
