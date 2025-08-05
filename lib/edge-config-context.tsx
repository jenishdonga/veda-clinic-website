'use client';

import React, { createContext, useContext } from 'react';
import { SiteConfig } from './types';



const ConfigContext = createContext<SiteConfig | null>(null);

export const useAppConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useAppConfig must be used inside <MyWrapper>');
  return context;
};

type Props = {
  siteConfig: SiteConfig;
  children: React.ReactNode;
};

export function MyWrapper({ siteConfig, children }: Props) {
  return (
    <ConfigContext.Provider value={siteConfig}>
      {children}
    </ConfigContext.Provider>
  );
}
