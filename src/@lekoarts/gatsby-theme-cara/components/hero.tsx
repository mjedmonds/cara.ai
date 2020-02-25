/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
