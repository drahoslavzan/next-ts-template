import { createContext } from 'react';

const isProd = process.env.NODE_ENV === 'production';
const url = 'https://stats.domainsniffer.net/';
const siteId = 3;

declare global {
    interface Window { _paq: any; }
}

class Analytics {
    _id: number;

    constructor(id: number) {
        this._id = id;
        this._init();
    }

    track(e: any) {
        if (!isProd) {
            console.log('track: ', e);
            return;
        }
        window._paq.push(['trackEvent', e]);
    }

    private _init() {
        if (!isProd) return;
        if (typeof(window) === 'undefined') return;

        const _paq = window._paq || [];
        _paq.push(['disableCookies']);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function(id) {
            var u=url;
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', id]);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode?.insertBefore(g,s);
        })(this._id);
        window._paq = _paq;
    }
}

export const AnalyticsContext = createContext<Analytics | null>(null);
export const analytics = new Analytics(siteId);