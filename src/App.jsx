import React, { useState, useEffect, useCallback } from "react";

import {
    _AccessibleStyleProvider,
    _AccessibleHeader,
    _AccessibleNav,
    _AccessibleMain,
    _AccessibleFooter,
    _AccessibleStack,
    _AccessibleContainer,
    _AccessibleWidget,
    _AccessibleText,
    _AccessibleApp,
    _AccessibleImage,
    _AccessibleLink,
    _AccessibleDivider,
} from "your_access_accessible_ui";

import { FontSizes, FontLink, FontFamily, FontColors } from "./Settings";
import "./app.css";
import "./widget.css";

const App = () => {
    return (
        <_AccessibleApp rootsize={10} fontlink={FontLink} fontname={FontFamily} fontsizes={FontSizes}>
            <_AccessibleStyleProvider />
            <_AccessibleText _classnames="home-text" color={FontColors.black} text="Home" size="primaryTitle" islink={true} />
            <_AccessibleWidget />
        </_AccessibleApp>
    );
};

export default App;
