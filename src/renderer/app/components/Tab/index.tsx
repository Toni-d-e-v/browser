import { observer } from 'mobx-react';
import * as React from 'react';

import { Preloader } from '~/renderer/components/Preloader';
import { Tab } from '~/renderer/app/models';
import store from '~/renderer/app/store';
import {
  StyledTab,
  StyledContent,
  StyledIcon,
  StyledTitle,
  StyledClose,
  StyledBorder,
  StyledOverlay,
  TabContainer,
} from './style';
import { shadeBlendConvert } from '../../utils';
import { transparency } from '~/renderer/constants';
import { ipcRenderer } from 'electron';
import Ripple from '~/renderer/components/Ripple';

const removeTab = (tab: Tab) => () => {
  if(store.tabsStore.tabs.length == 0) {
    store.overlayStore.visible = true;
  }
  tab.close();
};

const onCloseMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const onMouseDown = (tab: Tab) => (e: React.MouseEvent<HTMLDivElement>) => {
  const { pageX } = e;

  tab.select();

  store.tabsStore.lastMouseX = 0;
  store.tabsStore.isDragging = true;
  store.tabsStore.mouseStartX = pageX;
  store.tabsStore.tabStartX = tab.left;

  var url = store.tabsStore.selectedTab.url
  var hostname = "";
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
      hostname = url.split('/')[2];
  }
  else {
      hostname = url.split('/')[0];
  }

  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];

  process.env.RP_TYPE = `Brow-${hostname}`

  store.tabsStore.lastScrollLeft =
    store.tabsStore.containerRef.current.scrollLeft;
};

const onMouseEnter = (tab: Tab) => () => {
  if (!store.tabsStore.isDragging) {
    store.tabsStore.hoveredTabId = tab.id;
  }
};

const onMouseLeave = () => {
  store.tabsStore.hoveredTabId = -1;
};

const onClick = () => {
  if (store.canToggleMenu) {
    store.overlayStore.visible = true;
  }
};

const Content = observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledContent collapsed={tab.isExpanded}>
      {!tab.loading && tab.favicon !== '' && (
        <StyledIcon
          isIconSet={tab.favicon !== ''}
          style={{ backgroundImage: `url(${tab.favicon})` }}
        />
      )}
      {tab.loading && (
        <Preloader
          color={tab.background}
          thickness={6}
          size={16}
          style={{ minWidth: 16 }}
        />
      )}
      <StyledTitle
        isIcon={tab.isIconSet}
        style={{
          color: tab.isSelected
            ? tab.background
            : `rgba(0, 0, 0, ${transparency.text.high})`,
        }}
      >
        {tab.title}
      </StyledTitle>
    </StyledContent>
  );
});

const Close = observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledClose
      onMouseDown={onCloseMouseDown}
      onClick={removeTab(tab)}
      visible={tab.isExpanded}
      title="Close this tab"
    />
  );
});

const Border = observer(({ tab }: { tab: Tab }) => {
  return <StyledBorder visible={tab.borderVisible} />;
});

const Overlay = observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledOverlay
      hovered={tab.isHovered}
      style={{
        backgroundColor: tab.isSelected
          ? shadeBlendConvert(0.8, tab.background)
          : 'rgba(0, 0, 0, 0.04)',
      }}
    />
  );
});

export default observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledTab
      selected={tab.isSelected}
      onMouseDown={onMouseDown(tab)}
      onMouseEnter={onMouseEnter(tab)}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      visible={tab.tabGroupId === store.tabGroupsStore.currentGroupId}
      ref={tab.ref}
      title="View webpage information"
    >
      <TabContainer
        selected={tab.isSelected}
        style={{
          backgroundColor: tab.isSelected
            ? shadeBlendConvert(0.85, tab.background)
            : 'transparent',
        }}
      >
        <Content tab={tab} />
        <Close tab={tab} />

        <Overlay tab={tab} />
        <Ripple
          rippleTime={0.6}
          opacity={0.15}
          color={tab.background}
          style={{ zIndex: 9 }}
        />
      </TabContainer>
      <Border tab={tab} />
    </StyledTab>
  );
});
