import Tab from 'src/modules/Tab/Tab'
import TabMenu from 'src/modules/Tab/TabMenu'
import TabSegment from 'src/modules/Tab/TabSegment'
import * as common from 'test/specs/commonTests'

describe('Tab', () => {
  common.isConformant(Tab)
  common.hasSubComponents(Tab, [TabMenu, TabSegment])
})
