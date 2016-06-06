import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Root from './Components/Root'
import Layout from './Components/Layout'
import ComponentDoc from './Components/ComponentDoc/ComponentDoc'
import Introduction from './Views/Introduction'
import PageNotFound from './Views/PageNotFound'
import ComponentExplorer from './Views/ComponentExplorer'
import Sandbox from './Views/Sandbox'

// TODO remove these once PRs are merged and docs are updated to use index.js files
import { Button, Input, List, Segment } from 'stardust'
const ButtonDoc = () => <ComponentDoc _meta={Button._meta} />
const InputDoc = () => <ComponentDoc _meta={Input._meta} />
const ListDoc = () => <ComponentDoc _meta={List._meta} />
const SegmentDoc = () => <ComponentDoc _meta={Segment._meta} />

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='introduction' />

    <Route path='introduction' component={Introduction} />
    <Route path='component-explorer' component={ComponentExplorer} />
    <Route path='sandbox' component={Sandbox} />

    {/* TODO remove routes once open PRs are merged and docs are updated to use index.js files */}
    <Route path='elements'>
      <Route path='button' component={ButtonDoc} />
      <Route path='input' component={InputDoc} />
      <Route path='list' component={ListDoc} />
      <Route path='segment' component={SegmentDoc} />
    </Route>

    {/* v1 Routes */}
    <Route path=':type'>
      <Route path=':name' component={Root} />
    </Route>

    <Route path='*' component={PageNotFound} />
  </Route>
)

export default routes
