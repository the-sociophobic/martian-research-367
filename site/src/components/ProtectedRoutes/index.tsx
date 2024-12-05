import React, { useMemo } from 'react'

import { RouterProvider, createHashRouter } from 'react-router-dom'

import routes, { RouteType } from './routes'
import Layout from '../Layout'
import Redirect from '../Redirect'


const ProtectedRoutes: React.FC = () => {
  const router = useMemo(
    () => createHashRouter(
      mapRoutes(routes)
    )
    , [routes]
  )

  return <RouterProvider router={router} />
}


export default ProtectedRoutes


const mapRoutes = (
  routes: RouteType[],
) =>
  routes.map(route => ({
    key: route.to,
    path: route.to,
    element: (
      <Layout title={route.title} >
        {route.Comp}
      </Layout>
    ),
    errorElement: <Redirect to='/' />
  }))
