/** @jsx jsx */
import { jsx } from "theme-ui"

import Inner from "../elements/inner"

const Paypal = () => (
  <Inner>
    <div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="BCYPHVW52TNFW" />
        <input type="image" src="/paypal.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  </Inner>
)

export default Paypal
