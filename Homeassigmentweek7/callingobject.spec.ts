

import test from '@playwright/test'
import { Browser } from './BrowserInheritance.spec.ts'
import {Chrome} from './Chromesubclass.spec.ts'
import { Edge } from './Edgesubclass.spec.ts';
import { Safari } from './Safarisubclass.spec.ts';


test(`Launching Browser`, async({page})=>{
    const chromeBrowser = new Chrome("90.0.4430.93");
    const edgeBrowser = new Edge("91.0.864.59");
    const safariBrowser = new Safari("14.1.2");
    
    // Use methods
    chromeBrowser.openURL("https://www.google.com");
    chromeBrowser.openIncognito();
    chromeBrowser.clearCache();
    
    
    edgeBrowser.openURL("https://www.google.com");
    edgeBrowser.takeSnap();
    edgeBrowser.clearCookies();
    
    
    safariBrowser.openURL("https://www.google.com");
    safariBrowser.readerMode();
    safariBrowser.fullScreenMode();
})