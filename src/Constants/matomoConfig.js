const matomoConfig = {
  urlBase: "https://skillcounty.matomo.cloud/",
  srcUrl: "https://cdn.matomo.cloud/skillcounty.matomo.cloud/matomo.js",
  disabled: true,
  siteId: 7,
  heartBeat: {
    active: true,
    seconds: 10,
  },
  enableLinkTracking: false,
  linkTracking: false,
  configurations: {
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: "POST",
  }
}

export default matomoConfig;
