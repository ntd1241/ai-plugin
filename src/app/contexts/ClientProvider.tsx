import React, { ReactNode } from "react";

import { useMemo, useState, useEffect, createContext } from 'react'
export const ClientContext = createContext({})

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export function ClientProvider({ children }: Props) {
  const client = useMemo(() => window.ZAFClient.init(), [])
  const [appRegistered, setAppRegistered] = useState(false)

  useEffect(() => {
    client.on('app.registered', function () {
      setAppRegistered(true)
    })
  }, [client])

  if (!appRegistered) return null

  return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
}
