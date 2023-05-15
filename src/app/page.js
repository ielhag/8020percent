'use client'

import {ThemeProvider} from "@aws-amplify/ui-react";
import {Amplify} from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import {HeroLayout2, MarketingFooter, NavBar} from "./ui-components";

Amplify.configure(awsconfig);

export default function Home() {
    return (
        <ThemeProvider>
            <NavBar/>
            <HeroLayout2/>
            <MarketingFooter/>
        </ThemeProvider>
    )
}
