class Folder {
    constructor() {
        this.aboutBtn = document.querySelector(".about-btn");
        this.projectsBtn = document.querySelector(".projects-btn");
        this.contactBtn = document.querySelector(".contact-btn");

        this.transitionEnd = this.whichTransitionEndEvent();
        this.mainContents = document.querySelector(".main-contents");

        this.paperBottom = document.querySelector(".paper-bottom");
        this.paperMiddle = document.querySelector(".paper-middle");
        this.paperTop = document.querySelector(".paper-top");

        this.aboutPaper = document.querySelector(".paper--about");
        this.projectsPaper = document.querySelector(".paper--projects");
        this.contactPaper = document.querySelector(".paper--contact");

        this.nextTab = "about";
        this.aboutPaper.classList.add("selected");
        this.aboutPaper.classList.add("unshift");

        this.adjustFooterPosition();
        this.hideNonSelectedTabs();
        this.updateAllTabHolderHeights();
        this.events();
    }

    events() {
        this.aboutBtn.addEventListener("click", this.handleAbout.bind(this));
        this.projectsBtn.addEventListener(
            "click",
            this.handleProjects.bind(this)
        );
        this.contactBtn.addEventListener(
            "click",
            this.handleContact.bind(this)
        );

        this.aboutPaper.addEventListener(
            this.transitionEnd,
            this.nextTransition.bind(this)
        );
        this.projectsPaper.addEventListener(
            this.transitionEnd,
            this.nextTransition.bind(this)
        );
        this.contactPaper.addEventListener(
            this.transitionEnd,
            this.nextTransition.bind(this)
        );

        this.aboutBtn.addEventListener(
            "mouseover",
            this.movePaperDown.bind(this)
        );
        this.projectsBtn.addEventListener(
            "mouseover",
            this.movePaperDown.bind(this)
        );
        this.contactBtn.addEventListener(
            "mouseover",
            this.movePaperDown.bind(this)
        );

        this.aboutBtn.addEventListener("mouseout", this.movePaperUp.bind(this));
        this.projectsBtn.addEventListener(
            "mouseout",
            this.movePaperUp.bind(this)
        );
        this.contactBtn.addEventListener(
            "mouseout",
            this.movePaperUp.bind(this)
        );

        window.addEventListener("resize", this.handleWindowResize.bind(this));
    }

    //Methods
    handleAbout(e) {
        console.log("inside handleAbout");

        this.nextTab = "about";
        document.querySelector(".selected").classList.toggle("selected");
        this.aboutPaper.classList.add("selected");
        this.adjustFooterPosition();
        this.hideNonSelectedTabs();
    }

    handleProjects(e) {
        console.log("inside handleProjects");

        this.nextTab = "projects";
        document.querySelector(".selected").classList.toggle("selected");
        this.projectsPaper.classList.add("selected");
        this.adjustFooterPosition();
        this.hideNonSelectedTabs();
    }

    handleContact(e) {
        console.log("inside nhandleContact");

        this.nextTab = "contact";
        document.querySelector(".selected").classList.toggle("selected");
        this.contactPaper.classList.add("selected");
        this.adjustFooterPosition();
        this.hideNonSelectedTabs();
    }

    nextTransition() {
        console.log("inside nextTransition");
        if (this.nextTab == "about") {
            this.aboutPaper.style.top = "150px";
        } else if (this.nextTab == "projects") {
            this.projectsPaper.style.top = "150px";
        } else if (this.nextTab == "contact") {
            this.contactPaper.style.top = "150px";
        }
        this.nextTab == "none";
        this.updateAllTabHolderHeights(); // fixes content poking past paper bug
        this.hideNonSelectedTabs(); // fixes content poking past paper bug
        this.adjustFooterPosition();
    }

    movePaperDown(e) {
        console.log("inside movePaperDown");
        if (e.target == this.aboutBtn) {
            this.paperTop.classList.add("move-down");
            this.paperMiddle.classList.remove("move-down");
            this.paperBottom.classList.remove("move-down");
        } else if (e.target == this.projectsBtn) {
            this.paperTop.classList.remove("move-down");
            this.paperMiddle.classList.add("move-down");
            this.paperBottom.classList.remove("move-down");
        } else if (e.target == this.contactBtn) {
            this.paperTop.classList.remove("move-down");
            this.paperMiddle.classList.remove("move-down");
            this.paperBottom.classList.add("move-down");
        }
    }

    movePaperUp(e) {
        console.log("inside movePaperUp");

        if (e.target == this.aboutBtn) {
            this.paperTop.classList.remove("move-down");
        } else if (e.target == this.projectsBtn) {
            this.paperMiddle.classList.remove("move-down");
        } else if (e.target == this.contactBtn) {
            this.paperBottom.classList.remove("move-down");
        }
    }

    whichTransitionEndEvent() {
        console.log("inside whichTransition");

        let t;
        let el = document.createElement("fakeelement");
        let transitions = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    handleWindowResize() {
        console.log("inside handleWindowResize");

        this.updateAllTabHolderHeights();
        this.hideNonSelectedTabs();
        this.adjustFooterPosition();
    }

    adjustFooterPosition() {
        console.log("inside adjustFooter");

        let selectedTab = document.querySelector(".selected");
        this.mainContents.style.height = this.getHeight(selectedTab, true);
    }

    getHeight(tab, footer = false) {
        console.log("inside GetHeight");

        let additional = footer ? 200 : 0;
        let paperBottom = tab.querySelector(".bottom-of-paper");
        let paperTop = tab.querySelector(".top-of-paper");
        let diff = paperBottom.offsetTop - paperTop.offsetTop;
        return `${diff + 80 + additional}px`;
    }

    updateAllTabHolderHeights() {
        console.log("inside UpdateTabs");

        [this.aboutPaper, this.projectsPaper, this.contactPaper].forEach(
            (tab) => {
                tab.style.height = this.getHeight(tab);
            }
        );
    }

    hideNonSelectedTabs() {
        console.log("inside hideNonSelectdTabs");

        if (this.nextTab == "about") {
            this.aboutPaper.classList.remove("rounded-bottom-right-border");
            this.projectsPaper.classList.add("rounded-bottom-right-border");
            this.contactPaper.classList.add("rounded-bottom-right-border");

            this.projectsPaper.style.top =
                "-" + this.getHeight(this.projectsPaper);
            this.contactPaper.style.top =
                "-" + this.getHeight(this.contactPaper);
        } else if (this.nextTab == "projects") {
            this.projectsPaper.classList.remove("rounded-bottom-right-border");
            this.aboutPaper.classList.add("rounded-bottom-right-border");
            this.contactPaper.classList.add("rounded-bottom-right-border");

            this.aboutPaper.style.top = "-" + this.getHeight(this.aboutPaper);
            this.contactPaper.style.top =
                "-" + this.getHeight(this.contactPaper);
        } else if (this.nextTab == "contact") {
            this.contactPaper.classList.remove("rounded-bottom-right-border");
            this.projectsPaper.classList.add("rounded-bottom-right-border");
            this.aboutPaper.classList.add("rounded-bottom-right-border");

            this.projectsPaper.style.top =
                "-" + this.getHeight(this.projectsPaper);
            this.aboutPaper.style.top = "-" + this.getHeight(this.aboutPaper);
        }
    }
}

export default Folder;
