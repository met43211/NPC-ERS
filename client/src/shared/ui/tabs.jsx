import { Tabs as NativeTabs, Tab } from '@nextui-org/react';

export const Tabs = ({ tabs, localKey }) => {
  const local = localStorage.getItem(localKey);
  const initial = local ? local : tabs[0].id;
  return (
    <div className='flex w-full flex-col h-full'>
      <NativeTabs
        aria-label='Dynamic tabs'
        items={tabs}
        defaultSelectedKey={initial}
        onSelectionChange={(key) => {
          localStorage.setItem(localKey, key);
        }}
        classNames={{ panel: 'pb-0' }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className='h-full'>
            {item.content}
          </Tab>
        )}
      </NativeTabs>
    </div>
  );
};
