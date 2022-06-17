const matomoConfig = {
  urlBase: "https://skillcounty.matomo.cloud/",
  disabled: process.env.NODE_ENV !== 'production',
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
