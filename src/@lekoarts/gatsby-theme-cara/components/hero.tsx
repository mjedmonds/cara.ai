/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import Intro from "../sections/intro"
import Title from "../sections/title"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <Title />
      </Inner>
      <Inner sx={{textAlign: `center` }}>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
