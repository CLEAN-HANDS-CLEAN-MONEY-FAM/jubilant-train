# Exported Chat from Chrome DevTools AI Assistance

**Export Timestamp (UTC):** 2026-09-05T17:21:06.328Z

---

## User

PUT ALL DATA ON RECORD

## AI

### Recording a performance trace

### Analyzing data

**Trace details:**
````
Trace summary:
URL: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
Trace bounds: {min: 6211100363µs, max: 6217180968µs}
CPU throttling: none
Network throttling: Fast 4G

# Available insight sets

The following is a list of insight sets. An insight set covers a specific part of the trace, split by navigations. The insights within each insight set are specific to that part of the trace. Be sure to consider the insight set id and bounds when calling functions. If no specific insight set or navigation is mentioned, assume the user is referring to the first one.

## insight set id: NO_NAVIGATION

URL: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
Bounds: {min: 6211100363µs, max: 6211339704µs}
Metrics (lab / observed):
  - CLS: 0.00
Metrics (field / real users): n/a – no data for this page in CrUX
Available insights:
  - insight name: DuplicatedJavaScript
    description: Remove large, [duplicate JavaScript modules](https://developer.chrome.com/docs/performance/insights/duplicated-javascript) from bundles to reduce unnecessary bytes consumed by network activity.
    relevant trace bounds: {min: 6211910814µs, max: 6213426984µs}
    estimated wasted bytes: 316.9 kB
    example question: How do I deduplicate the identified scripts in my bundle?
    example question: Which duplicated JavaScript modules are the most problematic?
  - insight name: LegacyJavaScript
    description: Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren’t necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/articles/baseline-and-polyfills) features, unless you know you must support older browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://developer.chrome.com/docs/performance/insights/legacy-javascript)
    relevant trace bounds: {min: 6211835612µs, max: 6211910949µs}
    estimated wasted bytes: 25.3 kB
    example question: Is my site polyfilling modern JavaScript features?
    example question: How can I reduce the amount of legacy JavaScript on my page?

## insight set id: NAVIGATION_1

URL: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
Bounds: {min: 6211339704µs, max: 6217180968µs}
Metrics (lab / observed):
  - LCP: 2445 ms, event: (eventKey: r-50538, ts: 6213784468), nodeId: 1356
  - LCP breakdown:
    - TTFB: 443 ms, bounds: {min: 6211339704µs, max: 6211783177µs}
    - Render delay: 2,001 ms, bounds: {min: 6211783177µs, max: 6213784468µs}
  - CLS: 0.77, event: (eventKey: s-49658, ts: 6212208612)
Metrics (field / real users): n/a – no data for this page in CrUX
Available insights:
  - insight name: LCPBreakdown
    description: Each [subpart has specific improvement strategies](https://developer.chrome.com/docs/performance/insights/lcp-breakdown). Ideally, most of the LCP time should be spent on loading the resources, not within delays.
    relevant trace bounds: {min: 6211339704µs, max: 6213784468µs}
    example question: Help me optimize my LCP score
    example question: Which LCP subpart was most problematic?
    example question: What can I do to reduce the LCP time for this page load?
  - insight name: CLSCulprits
    description: Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://developer.chrome.com/docs/performance/insights/cls-culprit), such as elements being added, removed, or their fonts changing as the page loads.
    relevant trace bounds: {min: 6212208612µs, max: 6214763263µs}
    example question: Help me optimize my CLS score
    example question: How can I prevent layout shifts on this page?
  - insight name: RenderBlocking
    description: Requests are blocking the page’s initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking) can move these network requests out of the critical path.
    relevant trace bounds: {min: 6211835221µs, max: 6211835315µs}
    estimated metric savings: FCP 0 ms, LCP 0 ms
    example question: Show me the most impactful render-blocking requests that I should focus on
    example question: How can I reduce the number of render-blocking requests?
  - insight name: NetworkDependencyTree
    description: [Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.
    relevant trace bounds: {min: 6211340380µs, max: 6212103599µs}
    example question: How do I optimize my network dependency tree?
  - insight name: ThirdParties
    description: 3rd party code can significantly impact load performance. [Reduce and defer loading of 3rd party code](https://developer.chrome.com/docs/performance/insights/third-parties) to prioritize your page’s content.
    relevant trace bounds: {min: 6211840050µs, max: 6213814632µs}
    example question: Which third parties are having the largest impact on my page performance?
  - insight name: DuplicatedJavaScript
    description: Remove large, [duplicate JavaScript modules](https://developer.chrome.com/docs/performance/insights/duplicated-javascript) from bundles to reduce unnecessary bytes consumed by network activity.
    relevant trace bounds: {min: 6212957312µs, max: 6213426984µs}
    estimated metric savings: FCP 0 ms, LCP 0 ms
    estimated wasted bytes: 3.4 kB
    example question: How do I deduplicate the identified scripts in my bundle?
    example question: Which duplicated JavaScript modules are the most problematic?
  - insight name: ForcedReflow
    description: A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developer.chrome.com/docs/performance/insights/forced-reflow) and possible mitigations.
    relevant trace bounds: {min: 6212822585µs, max: 6213996177µs}
    example question: How can I avoid forced reflows and layout thrashing?
    example question: What is forced reflow and why is it problematic?
  - insight name: Cache
    description: A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache).
    relevant trace bounds: {min: 6211835221µs, max: 6213427379µs}
    estimated metric savings: FCP 0 ms, LCP 0 ms
    estimated wasted bytes: 5.1 kB
    example question: What caching strategies can I apply to improve my page performance?
  - insight name: LegacyJavaScript
    description: Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren’t necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/articles/baseline-and-polyfills) features, unless you know you must support older browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://developer.chrome.com/docs/performance/insights/legacy-javascript)
    relevant trace bounds: {min: 6211835612µs, max: 6211910949µs}
    estimated metric savings: FCP 0 ms, LCP 0 ms
    estimated wasted bytes: 25.3 kB
    example question: Is my site polyfilling modern JavaScript features?
    example question: How can I reduce the amount of legacy JavaScript on my page?
# Critical network requests

## insight set id: NO_NAVIGATION

none

## insight set id: NAVIGATION_1


Network requests data:



allUrls = [0: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb, 1: https://lumo.proton.me/assets/manifest.webmanifest, 2: https://lumo.proton.me/assets/static/index.e129d894.css, 3: https://lumo.proton.me/assets/static/Inter-Bold.54851dc3f5ada849af04.woff2, 4: https://lumo.proton.me/assets/static/Inter-SemiBold.594041393209f0003754.woff2, 5: https://lumo.proton.me/assets/static/Inter-Medium.da6143a97b8ed2ae857b.woff2, 6: https://lumo.proton.me/assets/static/Inter-Regular.85c128721035823e5405.woff2, 7: https://lumo.proton.me/assets/static/Syne-Medium.d5654c97c405fc2a96a1.woff2]

0;s-3352;0.7 ms;293 ms;490 ms;500 ms;499 ms;1 ms;10 ms;200;text/html;VeryHigh;VeryHigh;VeryHigh;f;h2;f;;[];[content-encoding: gzip|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|expires: Wed, 11 Jan 1984 05:00:00 GMT|date: Sat, 05 Sep 2026 17:20:24 GMT|public-key-pins-report-only: <redacted>|content-type: text/html; charset=UTF-8|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|vary: Accept-Encoding|strict-transport-security: max-age=31536000; includeSubDomains; preload|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|cache-control: max-age=0, no-cache, no-store, must-revalidate|pragma: no-cache|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|x-xss-protection: 0]
1;s-6593;578 ms;579 ms;580 ms;764 ms;186 ms;0.5 ms;184 ms;200;text/plain;Medium;Medium;Medium;f;h2;f;0;[];[content-encoding: gzip|etag: <redacted>|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|date: Sat, 05 Sep 2026 16:18:10 GMT|public-key-pins-report-only: <redacted>|content-type: text/plain; charset=UTF-8|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|vary: Accept-Encoding|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|x-xss-protection: 0]
2;s-3562;496 ms;496 ms;496 ms;496 ms;94 μs;94 μs;0 μs;200;text/css;VeryHigh;VeryHigh;VeryHigh;t;h2;f;0;[];[content-encoding: gzip|etag: <redacted>|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|date: Sat, 05 Sep 2026 16:18:10 GMT|public-key-pins-report-only: <redacted>|content-type: text/css|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|vary: Accept-Encoding|strict-transport-security: max-age=31536000; includeSubDomains; preload|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|x-xss-protection: 0]
3;s-5379;528 ms;528 ms;528 ms;528 ms;56 μs;56 μs;0 μs;200;font/woff2;VeryHigh;VeryHigh;VeryHigh;f;h2;f;0,2;[];[strict-transport-security: max-age=31536000; includeSubDomains; preload|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|etag: <redacted>|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|date: Sat, 05 Sep 2026 16:41:56 GMT|public-key-pins-report-only: <redacted>|content-type: font/woff2|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|x-xss-protection: 0]
4;s-5371;528 ms;528 ms;528 ms;528 ms;55 μs;55 μs;0 μs;200;font/woff2;VeryHigh;VeryHigh;VeryHigh;f;h2;f;0,2;[];[strict-transport-security: max-age=31536000; includeSubDomains; preload|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|etag: <redacted>|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|date: Sat, 05 Sep 2026 16:18:33 GMT|public-key-pins-report-only: <redacted>|content-type: font/woff2|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|x-xss-protection: 0]
5;s-5362;528 ms;528 ms;528 ms;528 ms;67 μs;67 μs;0 μs;200;font/woff2;VeryHigh;VeryHigh;VeryHigh;f;h2;f;0,2;[];[strict-transport-security: max-age=31536000; includeSubDomains; preload|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|etag: <redacted>|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|date: Sat, 05 Sep 2026 16:18:31 GMT|public-key-pins-report-only: <redacted>|content-type: font/woff2|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|x-xss-protection: 0]
6;s-5352;528 ms;528 ms;528 ms;528 ms;84 μs;84 μs;0 μs;200;font/woff2;VeryHigh;VeryHigh;VeryHigh;f;h2;f;0,2;[];[strict-transport-security: max-age=31536000; includeSubDomains; preload|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|etag: <redacted>|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|date: Sat, 05 Sep 2026 16:18:12 GMT|public-key-pins-report-only: <redacted>|content-type: font/woff2|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|x-xss-protection: 0]
7;s-5343;528 ms;528 ms;528 ms;528 ms;0.1 ms;0.1 ms;0 μs;200;font/woff2;VeryHigh;VeryHigh;VeryHigh;f;h2;f;0,2;[];[strict-transport-security: max-age=31536000; includeSubDomains; preload|content-security-policy: default-src 'self'; connect-src 'self' blob:  https://zrh-storage.proton.me https://osl-storage.proton.me https://fra-storage.proton.me wss://lumo-api.proton.me; script-src 'self' 'wasm-unsafe-eval' blob: 'sha256-eAhF1Kdccp0BTXM6nMW7SYBdV0c3fZwzcC177TQ692g='; style-src 'self' 'unsafe-inline'; img-src http: https: data: blob: cid:; frame-src 'self' blob: https://account.proton.me https://verify.proton.me https://mail.proton.me https://drive.proton.me https://lumo.proton.me https://lumo-api.proton.me; object-src 'self' blob:; child-src 'self' data: blob:; report-uri https://reports.proton.me/reports/csp; frame-ancestors https://mail.proton.me https://calendar.proton.me https://drive.proton.me https://docs.proton.me https://lumo.proton.me https://wallet.proton.me https://sheets.proton.me https://account.proton.me/ https://account.protonvpn.com/;|etag: <redacted>|expect-ct: max-age=2592000, enforce, report-uri="https://reports.proton.me/reports/tls"|x-pm-date: <redacted>|x-permitted-cross-domain-policies: <redacted>|x-content-type-options: nosniff|referrer-policy: <redacted>|accept-ranges: bytes|content-length: <redacted>|date: Sat, 05 Sep 2026 16:18:35 GMT|public-key-pins-report-only: <redacted>|content-type: font/woff2|last-modified: Thu, 03 Sep 2026 03:09:00 GMT|x-xss-protection: 0]

# Main thread bottom-up summary

This is the bottom-up summary for the entire trace. Only the top 10 activities (sorted by self time) are shown. An activity is all the aggregated time spent on the same type of work. For example, it can be all the time spent in a specific JavaScript function, or all the time spent in a specific browser rendering stage (like layout, v8 compile, parsing html). "Self time" represents the aggregated time spent directly in an activity, across all occurrences. "Total time" represents the aggregated time spent in an activity or any of its children.

## insight set id: NO_NAVIGATION

- self: 234 ms, total: 234 ms, source: Profiling overhead
- self: 1 ms, total: 235 ms, source: Evaluate script
- self: 1 ms, total: 236 ms, source: Task

## insight set id: NAVIGATION_1

- self: 274 ms, total: 274 ms, source: Compile script
- self: 235 ms, total: 1,986 ms, source: Task
- self: 214 ms, total: 680 ms, source: Function call
- self: 116 ms, total: 159 ms, source: e (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 1967)
- self: 114 ms, total: 114 ms, source: Recalculate style
- self: 76 ms, total: 854 ms, source: Run microtasks
- self: 48 ms, total: 322 ms, source: u (url: https://lumo.proton.me/assets/static/runtime.d25c3f19.js, line: 0, column: 65)
- self: 34 ms, total: 34 ms, source: Layerize
- self: 32 ms, total: 32 ms, source: Layout
- self: 29 ms, total: 29 ms, source: removeChild
The following are markdown block(s) of code that ran in the page, each representing a separate function. <FUNCTION_START> and <FUNCTION_END> marks the exact function declaration, and everything outside that is provided for additional context. Comments at the end of each line indicate the runtime performance cost of that code. Do not show the user the function markers or the additional context.

Here is the first line of a relevant function:

DFS @ webpack://proton-lumo/node_modules/refractor/node_modules/prismjs/components/prism-core.js:458:0
```
			DFS: function DFS(o, callback, type, visited) {
```

# 3rd party summary

## insight set id: NO_NAVIGATION

no 3rd parties

## insight set id: NAVIGATION_1

- name: proton.me, main thread time: 1,139 ms, network transfer size: 2.9 MB
- name: Adobe Acrobat: PDF edit, convert, sign tools, main thread time: 32 ms, network transfer size: 0 B

# Longest tasks

## insight set id: NO_NAVIGATION

- total time: 235 ms, event: (eventKey: r-238, ts: 6211101000)
- total time: 1 ms, event: (eventKey: r-832, ts: 6211338714)
- total time: 0 ms, event: (eventKey: r-769, ts: 6211335938)

## insight set id: NAVIGATION_1

- total time: 220 ms, event: (eventKey: r-45873, ts: 6213445783)
- total time: 147 ms, event: (eventKey: r-37178, ts: 6213054420)
- total time: 71 ms, event: (eventKey: r-6879, ts: 6211921927)
````

### Investigating insight LCPBreakdown

**Code executed:**
```
getInsightDetails('NAVIGATION_1', 'LCPBreakdown')
```

**Data returned:**
```
{"details":"## Insight Title: LCP breakdown\n\n## Insight Summary:\nThis insight is used to analyze the time spent that contributed to the final LCP time and identify which of the 4 subparts (or 2 if there was no LCP resource) are contributing most to the delay in rendering the LCP element.\n\n## Detailed analysis:\nThe Largest Contentful Paint (LCP) time for this navigation was 2,445 ms.\nThe LCP element (CODE class='language-card', nodeId: 1356) is text and was not fetched from the network.\n\nWe can break this time down into the 2 subparts that combine to make the LCP time:\n\n- Time to first byte: 443 ms (18.1% of total LCP time)\n- Element render delay: 2,001 ms (81.9% of total LCP time)\n\n## Estimated savings: none\n\n## External resources:\n- https://developer.chrome.com/docs/performance/insights/lcp-breakdown\n- https://web.dev/articles/lcp\n- https://web.dev/articles/optimize-lcp"}
```

### Investigating main thread activity: LCP breakdown insight