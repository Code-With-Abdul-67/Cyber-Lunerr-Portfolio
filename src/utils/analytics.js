import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
    ReactGA.initialize("G-73CKFJ90VB");
    ReactGA.send("pageview");
};
