import React from "react";

import { observable } from 'mobx';

class Dot {
    private originalURL = window.location.href;

    @observable
    public selectedSection: 'home' | 'appearance' | 'search' | 'downloads' | 'languages' | 'user' | 'about' = 'home'

    public get sectionName() {
        if(this.selectedSection == "home") return "Settings"
        if(this.selectedSection == "appearance") return "Appearance"
        if(this.selectedSection == "search") return "Search Engines"
        if(this.selectedSection == "downloads") return "Downloads"
        if(this.selectedSection == "languages") return "Region and Languages"
        if(this.selectedSection == "user") return "Me"
        if(this.selectedSection == "about") return "About Dot Browser"
        return "Unknown"
    }

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            document.title = this.sectionName
        })
    }
}

export default new Dot();