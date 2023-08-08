import { createRoot } from 'react-dom/client'
import store from '@/store'
import '@/global.less'
import { Provider } from 'react-redux'
import React, { FC, useMemo } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '@/routes/config'
import { RouterAuth, screenRoutesByRole } from '@/routes/index'
import { cloneDeep } from 'lodash'
import 'zarm/dist/zarm.css'
import { remInit } from '@/utils/rem'
import { uaInit } from '@/utils/multi'

remInit()
uaInit()
const App: FC = () => {
  const { role } = store.getState().user
  const curRoutes = useMemo(() => {
    return screenRoutesByRole(cloneDeep(routes))
  }, [role])
  const Element = useRoutes(curRoutes)

  return <RouterAuth>{Element}</RouterAuth>
}

export const root = document.getElementById('app')

root &&
  createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
