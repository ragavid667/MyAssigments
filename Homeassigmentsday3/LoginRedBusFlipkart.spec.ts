import {  chromium , firefox , test } from '@playwright/test';
test("Load RedBus in Edge load flipkart in firefox",  async() => {
//browserinstance for edge, firefox
    const EdgeBrowserinstance = await chromium.launch({headless:false });
    const firefoxBrowserinstance = await firefox.launch({headless:false });
    //browsercontext for edge
    const EdgeBrowsercontext = await EdgeBrowserinstance.newContext();
    const FirefoxBrowsercontext = await firefoxBrowserinstance.newContext();

    //creating  page for edge
    const Edgepage = await EdgeBrowsercontext.newPage();
    await Edgepage.goto("https://www.redbus.in");
    const Edgeurl =  Edgepage.url();
    console.log(Edgeurl);
    const Edgetitle= await Edgepage.title();
    console.log(Edgetitle);
   //creating page for firefox
    
    const firefoxpage = await FirefoxBrowsercontext.newPage();
    await firefoxpage.goto("https://www.flipkart.in");
    const firefoxurl =  firefoxpage.url();
    console.log(firefoxurl);
    const firefoxtitle= await firefoxpage.title();
    console.log(firefoxtitle);



});