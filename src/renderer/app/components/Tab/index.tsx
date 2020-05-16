import React from "react"
import { StyledTab, StyledTabContent, TabTitle, Close, TabMotion, TabFavicon, TabThrobber } from "./style"
import { Tab as ITab } from "../../models/tab"
import { observer } from "mobx-react-lite"

import { TAB_WIDTH } from '../../constants/tab'

import dot from '../../store'
import { ipcRenderer } from "electron"

const TabContent = observer(({ tab, onMouseDown }: { tab: ITab; onMouseDown: any }) => (
    <StyledTabContent onMouseDown={onMouseDown} title={tab.title}>
        {tab.status == "loading" && !tab.isNTP && <TabThrobber color={tab.themeColor} />}
        {tab.status == "idle" && tab.favicon && <TabFavicon src={tab.favicon} />}
        <TabTitle>{tab.title}</TabTitle>
    </StyledTabContent>
))

export const Tab = observer(({ tab }: { tab: ITab }) => {
    const [visible, setVisible] = React.useState(true);
    const [killed, setKilled] = React.useState(false);

    React.useEffect(() => {
        if(visible == false) {
            const tabId = tab.id;

            dot.tabs.list = dot.tabs.list.filter(tab => tab.id !== tabId)

            console.log("Selected View", dot.tabs.lastInteractedViews[0])
            console.log("Destroying View", tabId)

            if(dot.tabs.lastInteractedViews[0] !== tabId) {
                ipcRenderer.send('view-select', dot.tabs.lastInteractedViews[0])
                dot.tabs.selectedId = dot.tabs.lastInteractedViews[0];
            }

            ipcRenderer.send('view-destroy', tabId)

            setTimeout(() => {
                setKilled(true)
            }, 200);
        }
    }, [visible])

    const variants = {
        opening: {
            x: 0, 
            opacity: 1, 
            width: TAB_WIDTH, 
            display: 'flex'
        },
        closing: {
            x: -20, 
            opacity: 0, 
            width: 0, 
            minWidth: 0,
        }
    }

    const events = dot.events;

    return (
        <>
            {!killed && (
                <TabMotion
                    initial={{ x: -TAB_WIDTH, opacity: 0, width: 0 }}
                    animate={visible ? 'opening' : 'closing'}
                    variants={variants}
                    transition={{ duration: 0.2, type: "tween" }}
                >
                    <StyledTab selected={tab.id == dot.tabs.selectedId} themeColor={tab.themeColor} tab={tab}>
                        <TabContent tab={tab} onMouseDown={() => events.tabOnMouseDown(tab)} />
                        <Close tab={tab} hook={setVisible} />
                    </StyledTab>
                </TabMotion>
            )}
        </>
    )
})