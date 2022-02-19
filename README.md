# Color contrast checker built using 11ty serverless

Using Eleventy serverless, this app provides an interactive color contrast checker tool that relies on on-request page generation and no client-side JS.

This was forked from [the original version by Jason Lengstorf and Ben Myers](https://www.learnwithjason.dev/build-a-color-contrast-checker-with-eleventy-serverless). This fork adds another serverless function for taking screenshot of the current page (using [Zach Leatherman's strategy](https://www.zachleat.com/web/screenshots/)) and uses that for the social card images.

See it live on Netlify: [https://contrast-checker-11ty.netlify.app](https://contrast-checker-11ty.netlify.app/contrast/?foreground=%23724ef4&background=%23e8c9c9)

