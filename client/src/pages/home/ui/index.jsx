import * as React from 'react';
import { Tabs } from '@/shared/ui/tabs';
import { HomeTabs } from '../config/home-tabs';

export const HomePage = () => {
  return <Tabs tabs={HomeTabs} localKey={'home'} />;
};
