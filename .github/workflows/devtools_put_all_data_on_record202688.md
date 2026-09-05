# Exported Chat from Chrome DevTools AI Assistance

**Export Timestamp (UTC):** 2026-09-05T17:33:21.765Z

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

## User

DEBUG ALL

## AI

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

**Code executed:**
```
getMainThreadTrackSummaryByLabel('LCPBreakdown')
```

**Data returned:**
```
{"summary":"# Top-down main thread summary\n\n\n## All URLs:\n\n  * 0: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb\n  * 1: https://lumo.proton.me/assets/static/index.59cc6d23.js\n  * 2: https://lumo.proton.me/assets/static/2948.8582ba5c.chunk.js\n  * 3: https://lumo.proton.me/assets/static/9333.60111c4c.chunk.js\n  * 4: https://lumo.proton.me/assets/static/AuthApp.2295fea0.chunk.js\n  * 5: https://lumo.proton.me/assets/static/192.65dc5392.chunk.js\n  * 6: https://lumo.proton.me/assets/static/5140.f800ea13.chunk.js\n  * 7: https://lumo.proton.me/assets/static/RouterContainer.dd98b730.chunk.js\n  * 8: https://lumo.proton.me/assets/static/4053.a7491bba.chunk.js\n  * 9: https://lumo.proton.me/assets/static/724.d8103889.chunk.js\n  * 10: https://lumo.proton.me/assets/static/runtime.d25c3f19.js\n  * 11: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js\n  * 12: https://lumo.proton.me/assets/static/5285.62251dcc.chunk.js\n\n## Call tree:\n\n1;r-3835;Task;22.4;0.1;;21;;\n2;r-5569;Task;37.7;0.1;;22;;\n3;r-6879;Task;70.9;0.3;;23;;\n4;r-7180;Task;58.7;0.3;;24;;\n5;r-7597;Task;39.9;0.2;;25;;\n6;r-9830;Task;35.3;0.3;;26;;\n7;r-10065;Task;14.8;0.2;;27;;\n8;r-10437;Task;21.3;0.1;;28;;\n9;r-11427;Task;12.3;12.3;;;;\n10;r-12456;Task;13.9;0.2;;29;;\n11;r-28228;Task;17.9;0.7;;30;;\n12;r-29693;Task;13;0.3;;31;;\n13;r-29803;Task;46.9;0.3;;32;;\n14;r-35580;Task;18.6;0.1;;33;;\n15;r-37178;Task;147.4;0.5;;34;;\n16;r-41673;Task;13.7;0.1;;35;;\n17;r-42696;Task;26.9;0.1;;36;;\n18;r-44480;Task;30.1;0;;37;;\n19;r-45873;Task;220.4;0.3;;38;;\n20;r-47845;Task;28.7;0;;39;;\n21;r-3837;Parse HTML;22.3;22.3;0;;;\n22;r-5572;Evaluate script;37.6;5.4;1;40;;\n23;r-6881;Evaluate script;70.6;0.8;2;41;;\n24;r-7182;Evaluate script;58.4;0.7;3;42;;\n25;r-7599;Evaluate script;39.7;5.4;4;43;;\n26;r-9832;Evaluate script;35;2.7;5;44;;\n27;r-10078;Run microtasks;14.5;1.9;;45;;\n28;r-10439;Function call;21.2;0.3;1;46;23;1815\n29;r-12473;Major GC;13.7;13.7;;;;\n30;r-28232;Function call;17.2;17.2;1;;23;1815\n31;r-29695;Evaluate script;12.8;0.3;6;47;;\n32;r-29805;Evaluate script;46.6;6;7;48;;\n33;r-35583;Function call;18.6;0.5;1;49;23;1815\n34;r-37185;Run microtasks;146.9;87.4;;50;;\n35;r-41675;Function call;13.6;0.3;1;51;23;1815\n36;r-42697;Run microtasks;26.8;10.1;;52;;\n37;r-44481;Run microtasks;30.1;13.1;;53;;\n38;r-45875;Evaluate script;220.1;0.1;8;54;;\n39;r-47846;Run microtasks;28.7;2.9;;55-57;;\n40;r-5573;Compile script;32.2;32.2;1;;;\n41;r-6882;Compile script;69.9;69.9;2;;;\n42;r-7183;Compile script;57.7;57.7;3;;;\n43;r-7679;Run microtasks;34.3;0.1;;57;;\n44;r-9833;Compile script;32.3;32.3;5;;;\n45;p-12488-2432-1947-432;d;12.6;12.6;4;;0;66439\n46;p-12488-2432-1999-81;P;20.8;;1;58;23;1815\n47;r-29696;Compile script;12.4;12.4;6;;;\n48;r-29811;Run microtasks;40.6;0.4;;59;;\n49;p-12488-2432--1-81;P;18.1;;1;60;23;1815\n50;p-12488-2432-6476-2042;i;59.5;;9;61;3;2270\n51;p-12488-2432-7307-81;P;13.3;;1;62;23;1815\n52;p-12488-2432-7472-4468;(anonymous);16.7;;2;63;59;74774\n53;p-12488-2432-7822-2042;i;17;;9;64;3;2270\n54;r-45881;Run microtasks;220;0.2;;65;;\n55;p-12488-2432-8836-4123;g;12.4;;3;66;2418;53188\n56;r-48258;Function call;13.4;13.4;1;;15;23933\n57;p-12488-2432-1600-125;u;34.2;;10;67;0;65\n58;p-12488-2432-1999-82;S;20.8;0.6;1;68;23;1161\n59;p-12488-2432-5316-125;u;40.1;11.5;10;69;0;65\n60;p-12488-2432--1-82;S;18.1;3.3;1;70;23;1161\n61;p-12488-2432-6476-2043;m;59.5;;9;71;3;1684\n62;p-12488-2432-7307-82;S;13.3;;1;72;23;1161\n63;p-12488-2432-7472-4469;dispatch;16.7;;2;73;87;5478\n64;p-12488-2432-7822-2043;m;17;;9;74;3;1684\n65;p-12488-2432-8206-125;u;219.7;;10;75;0;65\n66;p-12488-2432-8836-5804;dispatch;12.4;;2;76;87;5478\n67;p-12488-2432-1600-126;70663;34.2;12;4;77;0;305\n68;p-12488-2432-2002-373;p;20.3;;1;78;15;37973\n69;p-12488-2432-5338-1267;82478;28.6;6.3;7;79;0;23164\n70;p-12488-2432--1-373;p;14.8;;1;80;15;37973\n71;p-12488-2432-6476-2113;t.cont;59.5;;9;81;3;457\n72;p-12488-2432-7307-83;uE;13.3;0.2;1;82;15;24138\n73;p-12488-2432-7472-4470;(anonymous);16.7;0.6;2;83;59;82105\n74;p-12488-2432-7822-2044;k;17;;9;84;3;2219\n75;p-12488-2432-8206-4866;50913;219.7;;8;85;0;95\n76;p-12488-2432-8836-5805;(anonymous);12.4;;2;86;59;82105\n77;p-12488-2432-1600-127;u;22.2;22.2;10;;0;65\n78;p-12488-2432-2002-374;uU;20.3;;1;87;15;41918\n79;p-12488-2432-5350-1268;u;22.3;0.6;10;88;0;65\n80;p-12488-2432--1-374;uU;14.8;1.1;1;89;15;41918\n81;p-12488-2432-6476-2114;y;59.5;;9;90;3;780\n82;p-12488-2432-7308-328;uM;13.1;;1;91;15;29379\n83;p-12488-2432-7473-4485;d;16.1;;2;92;59;80722\n84;p-12488-2432-7822-2045;(anonymous);17;;9;93;3;66\n85;p-12488-2432-8206-4867;u;219.7;0.6;10;94;0;65\n86;p-12488-2432-8836-5806;(anonymous);12.4;;2;95;59;70077\n87;p-12488-2432-2002-375;ij;20.3;;1;96;15;14336\n88;p-12488-2432-5351-1287;67341;21.8;0.3;6;97;2;80360\n89;p-12488-2432--1-375;ij;13.7;13.7;1;;15;14336\n90;p-12488-2432-6476-2115;i;59.5;;9;98;3;2270\n91;p-12488-2432-7308-331;l;13.1;0.4;1;99;15;48592\n92;p-12488-2432-7473-4486;effect;16.1;;3;100;2455;25713\n93;p-12488-2432-7822-2046;r.<computed>;17;;9;101;0;1755\n94;p-12488-2432-8207-4868;47085;219.2;;11;102;0;95\n95;p-12488-2432-8836-5807;(anonymous);12.4;;9;103;3;3846\n96;p-12488-2432-2002-795;(anonymous);20.3;;5;104;1;461\n97;p-12488-2432-5351-1288;u;21.5;21.5;10;;0;65\n98;p-12488-2432-6476-2116;m;59.5;;9;105;3;1684\n99;p-12488-2432-7309-332;od;12.7;12.7;1;;13;18174\n100;p-12488-2432-7473-4487;(anonymous);16.1;;3;106;2455;4520\n101;p-12488-2432-7822-2047;v;17;;9;107;0;223\n102;p-12488-2432-8207-4869;u;219.2;0.6;10;108;0;65\n103;p-12488-2432-8836-5808;dispatch;12.4;;2;109;59;71721\n104;p-12488-2432-2002-796;E;20.3;;5;110;1;142\n105;p-12488-2432-6476-2117;k;59.5;;9;111;3;2219\n106;p-12488-2432-7473-4488;l;16.1;1.1;3;112;2455;3979\n107;p-12488-2432-7822-2048;h;17;;9;113;0;306\n108;p-12488-2432-8208-4870;42324;218.6;56.1;11;114-120;4;32463\n109;p-12488-2432-8836-5809;m;12.4;;2;120;87;4200\n110;p-12488-2432-2002-797;loadAnimation;20.3;;5;121;2;50975\n111;p-12488-2432-6476-2118;(anonymous);59.5;;9;122;3;66\n112;r-42753;Function call;15;15;1;;15;23933\n113;p-12488-2432-7822-2049;(anonymous);17;0.6;9;123;0;1812\n114;p-12488-2432-8283-4908;E;28.3;28.3;11;;4;30849\n115;p-12488-2432-8329-4908;E;18.4;18.4;11;;4;30849\n116;p-12488-2432-8393-4908;E;17.8;17.8;11;;4;30849\n117;p-12488-2432-8434-4908;E;19.6;19.6;11;;4;30849\n118;p-12488-2432-8470-4908;E;57.7;44.1;11;124;4;30849\n119;p-12488-2432-8589-4908;E;20.6;;11;125;4;30849\n120;p-12488-2432-8836-5810;(anonymous);12.4;;2;126;87;5065\n121;p-12488-2432-2002-798;t.loadAnimation;20.3;0.4;5;127;2;17592\n122;p-12488-2432-6476-2119;r.<computed>;59.5;;9;128;0;1755\n123;p-12488-2432-7825-2050;(anonymous);16.4;;12;129;0;1294\n124;p-12488-2432-8563-5663;t;13.6;0.6;11;130;7;20756\n125;p-12488-2432-8589-5690;t;20.6;20.6;11;;7;27901\n126;p-12488-2432-8836-5811;M;12.4;;2;131;59;77953\n127;p-12488-2432-2003-800;AnimationItem.setParams;19.9;;5;132;2;2158\n128;p-12488-2432-6476-2120;v;59.5;;9;133;0;223\n129;p-12488-2432-7825-2051;dispatch;16.4;;2;134;87;5478\n130;p-12488-2432-8564-5665;insertBefore;13.1;;11;135;14;1685\n131;p-12488-2432-8836-5812;o;12.4;0.1;2;136;59;73051\n132;p-12488-2432-2003-801;AnimationItem.setupAnimation;19.9;;5;137;2;3453\n133;p-12488-2432-6476-2121;h;59.5;;9;138;0;306\n134;p-12488-2432-7825-2052;(anonymous);16.4;16.4;2;;59;82105\n135;p-12488-2432-8564-5666;e;13.1;13.1;11;;14;1967\n136;p-12488-2432-8837-5813;(anonymous);12.3;;2;139;59;73187\n137;p-12488-2432-2003-802;completeAnimation;19.9;;5;140;1;18754\n138;p-12488-2432-6476-2122;(anonymous);59.5;-10.9;9;141;0;1812\n139;p-12488-2432-8837-5814;produce;12.3;12.3;2;;67;7137\n140;p-12488-2432-2003-803;postMessage;19.9;;5;142;1;12506\n141;r-38562;Function call;70.4;70.4;1;;15;23933\n142;p-12488-2432-2003-804;(anonymous);19.9;0.8;5;143;1;12818\n143;p-12488-2432-2005-809;postMessage;19.1;;5;144;1;12547\n144;p-12488-2432-2005-810;e.onmessage;19.1;;5;145;1;18229\n145;p-12488-2432-2005-811;AnimationItem.configAnimation;19.1;;5;146;2;7069\n146;p-12488-2432-2005-812;AnimationItem.waitForFontsLoaded;19.1;;5;147;2;7904\n147;p-12488-2432-2005-813;AnimationItem.checkLoaded;19.1;19.1;5;;2;8084\n\nIMPORTANT: Never show eventKey to the user.\n\nThe following are markdown block(s) of code that ran in the page, each representing a separate function. <FUNCTION_START> and <FUNCTION_END> marks the exact function declaration, and everything outside that is provided for additional context. Comments at the end of each line indicate the runtime performance cost of that code. Do not show the user the function markers or the additional context.\n\nHere is the first line of 3 relevant functions:\n\nregister @ webpack://proton-lumo/node_modules/refractor/core.js:62:0\n```\nmodule.exports = refract\n```\n\n__webpack_require__ @ webpack://proton-lumo/webpack/bootstrap:4:0\n```\nfunction __webpack_require__(moduleId) {\n```\n\n(anonymous) @ https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js:1706:6\n```\n(e, t, a) {\n```\n\n# Bottom-up main thread summary\n\nThis is the bottom-up summary for the entire trace. Only the top 20 activities (sorted by self time) are shown. An activity is all the aggregated time spent on the same type of work. For example, it can be all the time spent in a specific JavaScript function, or all the time spent in a specific browser rendering stage (like layout, v8 compile, parsing html). \"Self time\" represents the aggregated time spent directly in an activity, across all occurrences. \"Total time\" represents the aggregated time spent in an activity or any of its children.\n\n- self: 274 ms, total: 274 ms, source: Compile script\n- self: 153 ms, total: 1,595 ms, source: Task\n- self: 137 ms, total: 495 ms, source: Function call\n- self: 116 ms, total: 159 ms, source: e (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 1967)\n- self: 61 ms, total: 61 ms, source: Recalculate style\n- self: 54 ms, total: 687 ms, source: Run microtasks\n- self: 48 ms, total: 322 ms, source: u (url: https://lumo.proton.me/assets/static/runtime.d25c3f19.js, line: 0, column: 65)\n- self: 25 ms, total: 25 ms, source: Major GC\n- self: 21 ms, total: 21 ms, source: Layout\n- self: 20 ms, total: 20 ms, source: type (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 377)\n- self: 16 ms, total: 16 ms, source: Minor GC\n- self: 16 ms, total: 16 ms, source: removeChild\n- self: 16 ms, total: 16 ms, source: Layerize\n- self: 16 ms, total: 19 ms, source: setAttribute\n- self: 15 ms, total: 15 ms, source: appendChild\n- self: 13 ms, total: 13 ms, source: objId (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 449)\n- self: 13 ms, total: 209 ms, source: E (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 4, column: 30849)\n- self: 13 ms, total: 13 ms, source: Paint\n- self: 12 ms, total: 12 ms, source: C++ GC\n- self: 10 ms, total: 10 ms, source: setTimeout\n\n# Third parties\n\n- name: proton.me, main thread time: 1,025 ms, network transfer size: 2.9 MB\n- name: Adobe Acrobat: PDF edit, convert, sign tools, main thread time: 30 ms, network transfer size: 0 B\n\n# Related insights\n\nHere are all the insights that contain some related event from the main thread in the given range.\n\n- ThirdParties: Evaluate script (eventKey: r-3847, ts: 6211839688), Compile script (eventKey: r-3848, ts: 6211839698), ScriptCatchup (eventKey: r-3850, ts: 6211839805), (anonymous) (eventKey: p-12488-2432-975-4, ts: 6211839923), Evaluate script (eventKey: r-3855, ts: 6211840050)\n- ForcedReflow: Recalculate style (eventKey: r-28864, ts: 6212822585), Recalculate style (eventKey: r-30339, ts: 6212914331), Recalculate style (eventKey: r-30584, ts: 6212924562), Layout (eventKey: r-30600, ts: 6212924682), Recalculate style (eventKey: r-32340, ts: 6212960557)"}
```

### Answer

The performance of this page is primarily impacted by a high LCP and significant layout shifting.

### 1. Largest Contentful Paint (LCP)
The [LCP element](#node-1356) (a text block) took 2,445 ms to render. While the Time to First Byte was reasonable (443 ms), the **element render delay** accounted for 2,001 ms (82% of the total).

**Root Cause**: The main thread was heavily congested during the loading phase by long-running JavaScript tasks, preventing the LCP element from rendering earlier. Specifically:
- [A long task](#r-45873) (220 ms) was dominated by code execution in [runtime.d25c3f19.js](#s-3552), which spent considerable time in the `u` function.
- Extensive script compilation, including [2948.8582ba5c.chunk.js](#s-3562) (70 ms) and [9333.60111c4c.chunk.js](#s-5379) (58 ms), blocked the main thread.
- Syntax highlighting via [syntax-highlighter.2ed09ccb.chunk.js](#s-6593) consumed significant time (116 ms in the `e` function) during critical rendering phases.

**Suggestions**:
- **Defer non-critical JS**: Use `async` or `defer` for scripts like the syntax highlighter that aren't required for the initial paint.
- **Code Splitting**: Break down large bundles to reduce the initial compilation cost.
- **Optimize syntax highlighting**: If possible, perform syntax highlighting on the server or use a more efficient library that doesn't block the main thread for as long.

### 2. Cumulative Layout Shift (CLS)
The page recorded a very high CLS of 0.77, which creates a highly unstable visual experience.

**Root Causes**:
- **Late-loading fonts**: Multiple font files (Inter and Syne) were loaded, likely triggering FOIT/Fout and layout shifts.
- **Dynamic content insertion**: JavaScript execution (e.g., [loadAnimation](#r-2002-797)) and DOM manipulations like `removeChild` and `appendChild` contributed to shifting elements after the initial render.
- **Forced Reflows**: Multiple [recalculate style](#r-28864) and [layout](#r-30600) events were triggered by JavaScript, indicating layout thrashing.

**Suggestions**:
- **Font Display**: Use `font-display: swap` in your CSS to ensure text remains visible and use font descriptors to match the fallback font's metrics.
- **Set Dimensions**: Ensure containers for dynamic content (like animations) have pre-defined `aspect-ratio`, `width`, and `height` in CSS.
- **Reduce Layout Thrashing**: Batch DOM read/write operations to avoid triggering repeated [forced reflows](#r-28864).

## User

FIX ALL AND PUT IT ONLINE

## AI

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

This is the result of calling getInsightDetails('NAVIGATION_1', 'LCPBreakdown'):
## Insight Title: LCP breakdown

## Insight Summary:
This insight is used to analyze the time spent that contributed to the final LCP time and identify which of the 4 subparts (or 2 if there was no LCP resource) are contributing most to the delay in rendering the LCP element.

## Detailed analysis:
The Largest Contentful Paint (LCP) time for this navigation was 2,445 ms.
The LCP element (CODE class='language-card', nodeId: 1356) is text and was not fetched from the network.

We can break this time down into the 2 subparts that combine to make the LCP time:

- Time to first byte: 443 ms (18.1% of total LCP time)
- Element render delay: 2,001 ms (81.9% of total LCP time)

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/lcp-breakdown
- https://web.dev/articles/lcp
- https://web.dev/articles/optimize-lcp
This is the result of calling getMainThreadTrackSummaryByLabel('LCPBreakdown'):
# Top-down main thread summary


## All URLs:

  * 0: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
  * 1: https://lumo.proton.me/assets/static/index.59cc6d23.js
  * 2: https://lumo.proton.me/assets/static/2948.8582ba5c.chunk.js
  * 3: https://lumo.proton.me/assets/static/9333.60111c4c.chunk.js
  * 4: https://lumo.proton.me/assets/static/AuthApp.2295fea0.chunk.js
  * 5: https://lumo.proton.me/assets/static/192.65dc5392.chunk.js
  * 6: https://lumo.proton.me/assets/static/5140.f800ea13.chunk.js
  * 7: https://lumo.proton.me/assets/static/RouterContainer.dd98b730.chunk.js
  * 8: https://lumo.proton.me/assets/static/4053.a7491bba.chunk.js
  * 9: https://lumo.proton.me/assets/static/724.d8103889.chunk.js
  * 10: https://lumo.proton.me/assets/static/runtime.d25c3f19.js
  * 11: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js
  * 12: https://lumo.proton.me/assets/static/5285.62251dcc.chunk.js

## Call tree:

1;r-3835;Task;22.4;0.1;;21;;
2;r-5569;Task;37.7;0.1;;22;;
3;r-6879;Task;70.9;0.3;;23;;
4;r-7180;Task;58.7;0.3;;24;;
5;r-7597;Task;39.9;0.2;;25;;
6;r-9830;Task;35.3;0.3;;26;;
7;r-10065;Task;14.8;0.2;;27;;
8;r-10437;Task;21.3;0.1;;28;;
9;r-11427;Task;12.3;12.3;;;;
10;r-12456;Task;13.9;0.2;;29;;
11;r-28228;Task;17.9;0.7;;30;;
12;r-29693;Task;13;0.3;;31;;
13;r-29803;Task;46.9;0.3;;32;;
14;r-35580;Task;18.6;0.1;;33;;
15;r-37178;Task;147.4;0.5;;34;;
16;r-41673;Task;13.7;0.1;;35;;
17;r-42696;Task;26.9;0.1;;36;;
18;r-44480;Task;30.1;0;;37;;
19;r-45873;Task;220.4;0.3;;38;;
20;r-47845;Task;28.7;0;;39;;
21;r-3837;Parse HTML;22.3;22.3;0;;;
22;r-5572;Evaluate script;37.6;5.4;1;40;;
23;r-6881;Evaluate script;70.6;0.8;2;41;;
24;r-7182;Evaluate script;58.4;0.7;3;42;;
25;r-7599;Evaluate script;39.7;5.4;4;43;;
26;r-9832;Evaluate script;35;2.7;5;44;;
27;r-10078;Run microtasks;14.5;1.9;;45;;
28;r-10439;Function call;21.2;0.3;1;46;23;1815
29;r-12473;Major GC;13.7;13.7;;;;
30;r-28232;Function call;17.2;17.2;1;;23;1815
31;r-29695;Evaluate script;12.8;0.3;6;47;;
32;r-29805;Evaluate script;46.6;6;7;48;;
33;r-35583;Function call;18.6;0.5;1;49;23;1815
34;r-37185;Run microtasks;146.9;87.4;;50;;
35;r-41675;Function call;13.6;0.3;1;51;23;1815
36;r-42697;Run microtasks;26.8;10.1;;52;;
37;r-44481;Run microtasks;30.1;13.1;;53;;
38;r-45875;Evaluate script;220.1;0.1;8;54;;
39;r-47846;Run microtasks;28.7;2.9;;55-57;;
40;r-5573;Compile script;32.2;32.2;1;;;
41;r-6882;Compile script;69.9;69.9;2;;;
42;r-7183;Compile script;57.7;57.7;3;;;
43;r-7679;Run microtasks;34.3;0.1;;57;;
44;r-9833;Compile script;32.3;32.3;5;;;
45;p-12488-2432-1947-432;d;12.6;12.6;4;;0;66439
46;p-12488-2432-1999-81;P;20.8;;1;58;23;1815
47;r-29696;Compile script;12.4;12.4;6;;;
48;r-29811;Run microtasks;40.6;0.4;;59;;
49;p-12488-2432--1-81;P;18.1;;1;60;23;1815
50;p-12488-2432-6476-2042;i;59.5;;9;61;3;2270
51;p-12488-2432-7307-81;P;13.3;;1;62;23;1815
52;p-12488-2432-7472-4468;(anonymous);16.7;;2;63;59;74774
53;p-12488-2432-7822-2042;i;17;;9;64;3;2270
54;r-45881;Run microtasks;220;0.2;;65;;
55;p-12488-2432-8836-4123;g;12.4;;3;66;2418;53188
56;r-48258;Function call;13.4;13.4;1;;15;23933
57;p-12488-2432-1600-125;u;34.2;;10;67;0;65
58;p-12488-2432-1999-82;S;20.8;0.6;1;68;23;1161
59;p-12488-2432-5316-125;u;40.1;11.5;10;69;0;65
60;p-12488-2432--1-82;S;18.1;3.3;1;70;23;1161
61;p-12488-2432-6476-2043;m;59.5;;9;71;3;1684
62;p-12488-2432-7307-82;S;13.3;;1;72;23;1161
63;p-12488-2432-7472-4469;dispatch;16.7;;2;73;87;5478
64;p-12488-2432-7822-2043;m;17;;9;74;3;1684
65;p-12488-2432-8206-125;u;219.7;;10;75;0;65
66;p-12488-2432-8836-5804;dispatch;12.4;;2;76;87;5478
67;p-12488-2432-1600-126;70663;34.2;12;4;77;0;305
68;p-12488-2432-2002-373;p;20.3;;1;78;15;37973
69;p-12488-2432-5338-1267;82478;28.6;6.3;7;79;0;23164
70;p-12488-2432--1-373;p;14.8;;1;80;15;37973
71;p-12488-2432-6476-2113;t.cont;59.5;;9;81;3;457
72;p-12488-2432-7307-83;uE;13.3;0.2;1;82;15;24138
73;p-12488-2432-7472-4470;(anonymous);16.7;0.6;2;83;59;82105
74;p-12488-2432-7822-2044;k;17;;9;84;3;2219
75;p-12488-2432-8206-4866;50913;219.7;;8;85;0;95
76;p-12488-2432-8836-5805;(anonymous);12.4;;2;86;59;82105
77;p-12488-2432-1600-127;u;22.2;22.2;10;;0;65
78;p-12488-2432-2002-374;uU;20.3;;1;87;15;41918
79;p-12488-2432-5350-1268;u;22.3;0.6;10;88;0;65
80;p-12488-2432--1-374;uU;14.8;1.1;1;89;15;41918
81;p-12488-2432-6476-2114;y;59.5;;9;90;3;780
82;p-12488-2432-7308-328;uM;13.1;;1;91;15;29379
83;p-12488-2432-7473-4485;d;16.1;;2;92;59;80722
84;p-12488-2432-7822-2045;(anonymous);17;;9;93;3;66
85;p-12488-2432-8206-4867;u;219.7;0.6;10;94;0;65
86;p-12488-2432-8836-5806;(anonymous);12.4;;2;95;59;70077
87;p-12488-2432-2002-375;ij;20.3;;1;96;15;14336
88;p-12488-2432-5351-1287;67341;21.8;0.3;6;97;2;80360
89;p-12488-2432--1-375;ij;13.7;13.7;1;;15;14336
90;p-12488-2432-6476-2115;i;59.5;;9;98;3;2270
91;p-12488-2432-7308-331;l;13.1;0.4;1;99;15;48592
92;p-12488-2432-7473-4486;effect;16.1;;3;100;2455;25713
93;p-12488-2432-7822-2046;r.<computed>;17;;9;101;0;1755
94;p-12488-2432-8207-4868;47085;219.2;;11;102;0;95
95;p-12488-2432-8836-5807;(anonymous);12.4;;9;103;3;3846
96;p-12488-2432-2002-795;(anonymous);20.3;;5;104;1;461
97;p-12488-2432-5351-1288;u;21.5;21.5;10;;0;65
98;p-12488-2432-6476-2116;m;59.5;;9;105;3;1684
99;p-12488-2432-7309-332;od;12.7;12.7;1;;13;18174
100;p-12488-2432-7473-4487;(anonymous);16.1;;3;106;2455;4520
101;p-12488-2432-7822-2047;v;17;;9;107;0;223
102;p-12488-2432-8207-4869;u;219.2;0.6;10;108;0;65
103;p-12488-2432-8836-5808;dispatch;12.4;;2;109;59;71721
104;p-12488-2432-2002-796;E;20.3;;5;110;1;142
105;p-12488-2432-6476-2117;k;59.5;;9;111;3;2219
106;p-12488-2432-7473-4488;l;16.1;1.1;3;112;2455;3979
107;p-12488-2432-7822-2048;h;17;;9;113;0;306
108;p-12488-2432-8208-4870;42324;218.6;56.1;11;114-120;4;32463
109;p-12488-2432-8836-5809;m;12.4;;2;120;87;4200
110;p-12488-2432-2002-797;loadAnimation;20.3;;5;121;2;50975
111;p-12488-2432-6476-2118;(anonymous);59.5;;9;122;3;66
112;r-42753;Function call;15;15;1;;15;23933
113;p-12488-2432-7822-2049;(anonymous);17;0.6;9;123;0;1812
114;p-12488-2432-8283-4908;E;28.3;28.3;11;;4;30849
115;p-12488-2432-8329-4908;E;18.4;18.4;11;;4;30849
116;p-12488-2432-8393-4908;E;17.8;17.8;11;;4;30849
117;p-12488-2432-8434-4908;E;19.6;19.6;11;;4;30849
118;p-12488-2432-8470-4908;E;57.7;44.1;11;124;4;30849
119;p-12488-2432-8589-4908;E;20.6;;11;125;4;30849
120;p-12488-2432-8836-5810;(anonymous);12.4;;2;126;87;5065
121;p-12488-2432-2002-798;t.loadAnimation;20.3;0.4;5;127;2;17592
122;p-12488-2432-6476-2119;r.<computed>;59.5;;9;128;0;1755
123;p-12488-2432-7825-2050;(anonymous);16.4;;12;129;0;1294
124;p-12488-2432-8563-5663;t;13.6;0.6;11;130;7;20756
125;p-12488-2432-8589-5690;t;20.6;20.6;11;;7;27901
126;p-12488-2432-8836-5811;M;12.4;;2;131;59;77953
127;p-12488-2432-2003-800;AnimationItem.setParams;19.9;;5;132;2;2158
128;p-12488-2432-6476-2120;v;59.5;;9;133;0;223
129;p-12488-2432-7825-2051;dispatch;16.4;;2;134;87;5478
130;p-12488-2432-8564-5665;insertBefore;13.1;;11;135;14;1685
131;p-12488-2432-8836-5812;o;12.4;0.1;2;136;59;73051
132;p-12488-2432-2003-801;AnimationItem.setupAnimation;19.9;;5;137;2;3453
133;p-12488-2432-6476-2121;h;59.5;;9;138;0;306
134;p-12488-2432-7825-2052;(anonymous);16.4;16.4;2;;59;82105
135;p-12488-2432-8564-5666;e;13.1;13.1;11;;14;1967
136;p-12488-2432-8837-5813;(anonymous);12.3;;2;139;59;73187
137;p-12488-2432-2003-802;completeAnimation;19.9;;5;140;1;18754
138;p-12488-2432-6476-2122;(anonymous);59.5;-10.9;9;141;0;1812
139;p-12488-2432-8837-5814;produce;12.3;12.3;2;;67;7137
140;p-12488-2432-2003-803;postMessage;19.9;;5;142;1;12506
141;r-38562;Function call;70.4;70.4;1;;15;23933
142;p-12488-2432-2003-804;(anonymous);19.9;0.8;5;143;1;12818
143;p-12488-2432-2005-809;postMessage;19.1;;5;144;1;12547
144;p-12488-2432-2005-810;e.onmessage;19.1;;5;145;1;18229
145;p-12488-2432-2005-811;AnimationItem.configAnimation;19.1;;5;146;2;7069
146;p-12488-2432-2005-812;AnimationItem.waitForFontsLoaded;19.1;;5;147;2;7904
147;p-12488-2432-2005-813;AnimationItem.checkLoaded;19.1;19.1;5;;2;8084

IMPORTANT: Never show eventKey to the user.

The following are markdown block(s) of code that ran in the page, each representing a separate function. <FUNCTION_START> and <FUNCTION_END> marks the exact function declaration, and everything outside that is provided for additional context. Comments at the end of each line indicate the runtime performance cost of that code. Do not show the user the function markers or the additional context.

Here is the first line of 3 relevant functions:

register @ webpack://proton-lumo/node_modules/refractor/core.js:62:0
```
module.exports = refract
```

__webpack_require__ @ webpack://proton-lumo/webpack/bootstrap:4:0
```
function __webpack_require__(moduleId) {
```

(anonymous) @ https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js:1706:6
```
(e, t, a) {
```

# Bottom-up main thread summary

This is the bottom-up summary for the entire trace. Only the top 20 activities (sorted by self time) are shown. An activity is all the aggregated time spent on the same type of work. For example, it can be all the time spent in a specific JavaScript function, or all the time spent in a specific browser rendering stage (like layout, v8 compile, parsing html). "Self time" represents the aggregated time spent directly in an activity, across all occurrences. "Total time" represents the aggregated time spent in an activity or any of its children.

- self: 274 ms, total: 274 ms, source: Compile script
- self: 153 ms, total: 1,595 ms, source: Task
- self: 137 ms, total: 495 ms, source: Function call
- self: 116 ms, total: 159 ms, source: e (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 1967)
- self: 61 ms, total: 61 ms, source: Recalculate style
- self: 54 ms, total: 687 ms, source: Run microtasks
- self: 48 ms, total: 322 ms, source: u (url: https://lumo.proton.me/assets/static/runtime.d25c3f19.js, line: 0, column: 65)
- self: 25 ms, total: 25 ms, source: Major GC
- self: 21 ms, total: 21 ms, source: Layout
- self: 20 ms, total: 20 ms, source: type (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 377)
- self: 16 ms, total: 16 ms, source: Minor GC
- self: 16 ms, total: 16 ms, source: removeChild
- self: 16 ms, total: 16 ms, source: Layerize
- self: 16 ms, total: 19 ms, source: setAttribute
- self: 15 ms, total: 15 ms, source: appendChild
- self: 13 ms, total: 13 ms, source: objId (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 449)
- self: 13 ms, total: 209 ms, source: E (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 4, column: 30849)
- self: 13 ms, total: 13 ms, source: Paint
- self: 12 ms, total: 12 ms, source: C++ GC
- self: 10 ms, total: 10 ms, source: setTimeout

# Third parties

- name: proton.me, main thread time: 1,025 ms, network transfer size: 2.9 MB
- name: Adobe Acrobat: PDF edit, convert, sign tools, main thread time: 30 ms, network transfer size: 0 B

# Related insights

Here are all the insights that contain some related event from the main thread in the given range.

- ThirdParties: Evaluate script (eventKey: r-3847, ts: 6211839688), Compile script (eventKey: r-3848, ts: 6211839698), ScriptCatchup (eventKey: r-3850, ts: 6211839805), (anonymous) (eventKey: p-12488-2432-975-4, ts: 6211839923), Evaluate script (eventKey: r-3855, ts: 6211840050)
- ForcedReflow: Recalculate style (eventKey: r-28864, ts: 6212822585), Recalculate style (eventKey: r-30339, ts: 6212914331), Recalculate style (eventKey: r-30584, ts: 6212924562), Layout (eventKey: r-30600, ts: 6212924682), Recalculate style (eventKey: r-32340, ts: 6212960557)
````

### Investigating insight CLSCulprits

**Code executed:**
```
getInsightDetails('NAVIGATION_1', 'CLSCulprits')
```

**Data returned:**
```
{"details":"## Insight Title: Layout shift culprits\n\n## Insight Summary:\nCumulative Layout Shifts (CLS) is a measure of the largest burst of layout shifts for every unexpected layout shift that occurs during the lifecycle of a page. This is a Core Web Vital and the thresholds for categorizing a score are:\n- Good: 0.1 or less\n- Needs improvement: more than 0.1 and less than or equal to 0.25\n- Bad: over 0.25\n\n## Detailed analysis:\nThe worst layout shift cluster was the cluster that started at 1,108 ms and ended at 3,663 ms, with a duration of 2,555 ms.\nThe score for this cluster is 0.7747.\n\nLayout shifts in this cluster:\n### Layout shift 1:\n- Impacted elements:\n  - P class='color-weak ml-5'\n\n- Start time: 1,108 ms\n- Score: 0.0005\n- No potential root causes identified\n### Layout shift 2:\n- Impacted elements:\n  - P class='color-weak ml-5'\n\n- Start time: 1,816 ms\n- Score: 0.0005\n- No potential root causes identified\n### Layout shift 3:\n- Impacted elements:\n  - DIV\n\n- Start time: 2,658 ms\n- Score: 0.3413\n- Potential root causes:\n  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).\n### Layout shift 4:\n- Impacted elements:\n  - DIV class='progressive-markdown-content markdown-rendering'\n  - DIV class='lumo-code-block-copy-source min-w-0'\n\n- Start time: 2,663 ms\n- Score: 0.4325\n- Potential root causes:\n  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).\n\n## Estimated savings: none\n\n## External resources:\n- https://developer.chrome.com/docs/performance/insights/cls-culprit\n- https://web.dev/articles/cls\n- https://web.dev/articles/optimize-cls"}
```

### Answer

I cannot fix the code or put the site online for you. I am a performance expert assistant that analyzes Chrome DevTools traces to provide diagnostic advice.

To address the performance issues identified in your trace, implement the following solutions:

### **1. Fix Cumulative Layout Shift (CLS)**
The page has a "Bad" CLS score of 0.77. The primary culprits are unsized media and dynamic content rendering.

*   **Root Cause**: An [unsized image](#s-48582) (a blob URL) triggered the largest shifts, with one shift starting at 2,663 ms scoring 0.43.
*   **Suggestion**: Set explicit `width` and `height` attributes (or a CSS `aspect-ratio`) on all images and containers for dynamic content, like the [Markdown rendering block](#node-1356).
*   **Root Cause**: Font loading for "Inter" and "Syne" ([woff2 requests](#s-5379)) likely caused text shifts.
*   **Suggestion**: Use `font-display: swap` in your `@font-face` declarations and ensure fallback fonts have similar metrics to the web fonts.

### **2. Optimize Largest Contentful Paint (LCP)**
The [LCP element](#node-1356) rendered at 2,445 ms, with a 2,001 ms render delay.

*   **Root Cause**: The main thread was blocked by long tasks, including a [220 ms task](#r-45873) in `runtime.d25c3f19.js` and high execution time in the [syntax highlighter](#s-6593).
*   **Suggestion**: Defer the syntax highlighting script until after the initial paint. Break up the long execution in the `u` function of the runtime script using `setTimeout` or `requestIdleCallback`.

### **3. Reduce Main Thread Congestion**
*   **Root Cause**: Significant time (274 ms) was spent on **Compile Script**, particularly for large chunks like [2948.8582ba5c.chunk.js](#s-3562).
*   **Suggestion**: Implement more granular code splitting to reduce the amount of JavaScript the browser must compile and execute before it can render the page content.

## User

SCAN ALL CODE

## AI

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

This is the result of calling getInsightDetails('NAVIGATION_1', 'LCPBreakdown'):
## Insight Title: LCP breakdown

## Insight Summary:
This insight is used to analyze the time spent that contributed to the final LCP time and identify which of the 4 subparts (or 2 if there was no LCP resource) are contributing most to the delay in rendering the LCP element.

## Detailed analysis:
The Largest Contentful Paint (LCP) time for this navigation was 2,445 ms.
The LCP element (CODE class='language-card', nodeId: 1356) is text and was not fetched from the network.

We can break this time down into the 2 subparts that combine to make the LCP time:

- Time to first byte: 443 ms (18.1% of total LCP time)
- Element render delay: 2,001 ms (81.9% of total LCP time)

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/lcp-breakdown
- https://web.dev/articles/lcp
- https://web.dev/articles/optimize-lcp
This is the result of calling getMainThreadTrackSummaryByLabel('LCPBreakdown'):
# Top-down main thread summary


## All URLs:

  * 0: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
  * 1: https://lumo.proton.me/assets/static/index.59cc6d23.js
  * 2: https://lumo.proton.me/assets/static/2948.8582ba5c.chunk.js
  * 3: https://lumo.proton.me/assets/static/9333.60111c4c.chunk.js
  * 4: https://lumo.proton.me/assets/static/AuthApp.2295fea0.chunk.js
  * 5: https://lumo.proton.me/assets/static/192.65dc5392.chunk.js
  * 6: https://lumo.proton.me/assets/static/5140.f800ea13.chunk.js
  * 7: https://lumo.proton.me/assets/static/RouterContainer.dd98b730.chunk.js
  * 8: https://lumo.proton.me/assets/static/4053.a7491bba.chunk.js
  * 9: https://lumo.proton.me/assets/static/724.d8103889.chunk.js
  * 10: https://lumo.proton.me/assets/static/runtime.d25c3f19.js
  * 11: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js
  * 12: https://lumo.proton.me/assets/static/5285.62251dcc.chunk.js

## Call tree:

1;r-3835;Task;22.4;0.1;;21;;
2;r-5569;Task;37.7;0.1;;22;;
3;r-6879;Task;70.9;0.3;;23;;
4;r-7180;Task;58.7;0.3;;24;;
5;r-7597;Task;39.9;0.2;;25;;
6;r-9830;Task;35.3;0.3;;26;;
7;r-10065;Task;14.8;0.2;;27;;
8;r-10437;Task;21.3;0.1;;28;;
9;r-11427;Task;12.3;12.3;;;;
10;r-12456;Task;13.9;0.2;;29;;
11;r-28228;Task;17.9;0.7;;30;;
12;r-29693;Task;13;0.3;;31;;
13;r-29803;Task;46.9;0.3;;32;;
14;r-35580;Task;18.6;0.1;;33;;
15;r-37178;Task;147.4;0.5;;34;;
16;r-41673;Task;13.7;0.1;;35;;
17;r-42696;Task;26.9;0.1;;36;;
18;r-44480;Task;30.1;0;;37;;
19;r-45873;Task;220.4;0.3;;38;;
20;r-47845;Task;28.7;0;;39;;
21;r-3837;Parse HTML;22.3;22.3;0;;;
22;r-5572;Evaluate script;37.6;5.4;1;40;;
23;r-6881;Evaluate script;70.6;0.8;2;41;;
24;r-7182;Evaluate script;58.4;0.7;3;42;;
25;r-7599;Evaluate script;39.7;5.4;4;43;;
26;r-9832;Evaluate script;35;2.7;5;44;;
27;r-10078;Run microtasks;14.5;1.9;;45;;
28;r-10439;Function call;21.2;0.3;1;46;23;1815
29;r-12473;Major GC;13.7;13.7;;;;
30;r-28232;Function call;17.2;17.2;1;;23;1815
31;r-29695;Evaluate script;12.8;0.3;6;47;;
32;r-29805;Evaluate script;46.6;6;7;48;;
33;r-35583;Function call;18.6;0.5;1;49;23;1815
34;r-37185;Run microtasks;146.9;87.4;;50;;
35;r-41675;Function call;13.6;0.3;1;51;23;1815
36;r-42697;Run microtasks;26.8;10.1;;52;;
37;r-44481;Run microtasks;30.1;13.1;;53;;
38;r-45875;Evaluate script;220.1;0.1;8;54;;
39;r-47846;Run microtasks;28.7;2.9;;55-57;;
40;r-5573;Compile script;32.2;32.2;1;;;
41;r-6882;Compile script;69.9;69.9;2;;;
42;r-7183;Compile script;57.7;57.7;3;;;
43;r-7679;Run microtasks;34.3;0.1;;57;;
44;r-9833;Compile script;32.3;32.3;5;;;
45;p-12488-2432-1947-432;d;12.6;12.6;4;;0;66439
46;p-12488-2432-1999-81;P;20.8;;1;58;23;1815
47;r-29696;Compile script;12.4;12.4;6;;;
48;r-29811;Run microtasks;40.6;0.4;;59;;
49;p-12488-2432--1-81;P;18.1;;1;60;23;1815
50;p-12488-2432-6476-2042;i;59.5;;9;61;3;2270
51;p-12488-2432-7307-81;P;13.3;;1;62;23;1815
52;p-12488-2432-7472-4468;(anonymous);16.7;;2;63;59;74774
53;p-12488-2432-7822-2042;i;17;;9;64;3;2270
54;r-45881;Run microtasks;220;0.2;;65;;
55;p-12488-2432-8836-4123;g;12.4;;3;66;2418;53188
56;r-48258;Function call;13.4;13.4;1;;15;23933
57;p-12488-2432-1600-125;u;34.2;;10;67;0;65
58;p-12488-2432-1999-82;S;20.8;0.6;1;68;23;1161
59;p-12488-2432-5316-125;u;40.1;11.5;10;69;0;65
60;p-12488-2432--1-82;S;18.1;3.3;1;70;23;1161
61;p-12488-2432-6476-2043;m;59.5;;9;71;3;1684
62;p-12488-2432-7307-82;S;13.3;;1;72;23;1161
63;p-12488-2432-7472-4469;dispatch;16.7;;2;73;87;5478
64;p-12488-2432-7822-2043;m;17;;9;74;3;1684
65;p-12488-2432-8206-125;u;219.7;;10;75;0;65
66;p-12488-2432-8836-5804;dispatch;12.4;;2;76;87;5478
67;p-12488-2432-1600-126;70663;34.2;12;4;77;0;305
68;p-12488-2432-2002-373;p;20.3;;1;78;15;37973
69;p-12488-2432-5338-1267;82478;28.6;6.3;7;79;0;23164
70;p-12488-2432--1-373;p;14.8;;1;80;15;37973
71;p-12488-2432-6476-2113;t.cont;59.5;;9;81;3;457
72;p-12488-2432-7307-83;uE;13.3;0.2;1;82;15;24138
73;p-12488-2432-7472-4470;(anonymous);16.7;0.6;2;83;59;82105
74;p-12488-2432-7822-2044;k;17;;9;84;3;2219
75;p-12488-2432-8206-4866;50913;219.7;;8;85;0;95
76;p-12488-2432-8836-5805;(anonymous);12.4;;2;86;59;82105
77;p-12488-2432-1600-127;u;22.2;22.2;10;;0;65
78;p-12488-2432-2002-374;uU;20.3;;1;87;15;41918
79;p-12488-2432-5350-1268;u;22.3;0.6;10;88;0;65
80;p-12488-2432--1-374;uU;14.8;1.1;1;89;15;41918
81;p-12488-2432-6476-2114;y;59.5;;9;90;3;780
82;p-12488-2432-7308-328;uM;13.1;;1;91;15;29379
83;p-12488-2432-7473-4485;d;16.1;;2;92;59;80722
84;p-12488-2432-7822-2045;(anonymous);17;;9;93;3;66
85;p-12488-2432-8206-4867;u;219.7;0.6;10;94;0;65
86;p-12488-2432-8836-5806;(anonymous);12.4;;2;95;59;70077
87;p-12488-2432-2002-375;ij;20.3;;1;96;15;14336
88;p-12488-2432-5351-1287;67341;21.8;0.3;6;97;2;80360
89;p-12488-2432--1-375;ij;13.7;13.7;1;;15;14336
90;p-12488-2432-6476-2115;i;59.5;;9;98;3;2270
91;p-12488-2432-7308-331;l;13.1;0.4;1;99;15;48592
92;p-12488-2432-7473-4486;effect;16.1;;3;100;2455;25713
93;p-12488-2432-7822-2046;r.<computed>;17;;9;101;0;1755
94;p-12488-2432-8207-4868;47085;219.2;;11;102;0;95
95;p-12488-2432-8836-5807;(anonymous);12.4;;9;103;3;3846
96;p-12488-2432-2002-795;(anonymous);20.3;;5;104;1;461
97;p-12488-2432-5351-1288;u;21.5;21.5;10;;0;65
98;p-12488-2432-6476-2116;m;59.5;;9;105;3;1684
99;p-12488-2432-7309-332;od;12.7;12.7;1;;13;18174
100;p-12488-2432-7473-4487;(anonymous);16.1;;3;106;2455;4520
101;p-12488-2432-7822-2047;v;17;;9;107;0;223
102;p-12488-2432-8207-4869;u;219.2;0.6;10;108;0;65
103;p-12488-2432-8836-5808;dispatch;12.4;;2;109;59;71721
104;p-12488-2432-2002-796;E;20.3;;5;110;1;142
105;p-12488-2432-6476-2117;k;59.5;;9;111;3;2219
106;p-12488-2432-7473-4488;l;16.1;1.1;3;112;2455;3979
107;p-12488-2432-7822-2048;h;17;;9;113;0;306
108;p-12488-2432-8208-4870;42324;218.6;56.1;11;114-120;4;32463
109;p-12488-2432-8836-5809;m;12.4;;2;120;87;4200
110;p-12488-2432-2002-797;loadAnimation;20.3;;5;121;2;50975
111;p-12488-2432-6476-2118;(anonymous);59.5;;9;122;3;66
112;r-42753;Function call;15;15;1;;15;23933
113;p-12488-2432-7822-2049;(anonymous);17;0.6;9;123;0;1812
114;p-12488-2432-8283-4908;E;28.3;28.3;11;;4;30849
115;p-12488-2432-8329-4908;E;18.4;18.4;11;;4;30849
116;p-12488-2432-8393-4908;E;17.8;17.8;11;;4;30849
117;p-12488-2432-8434-4908;E;19.6;19.6;11;;4;30849
118;p-12488-2432-8470-4908;E;57.7;44.1;11;124;4;30849
119;p-12488-2432-8589-4908;E;20.6;;11;125;4;30849
120;p-12488-2432-8836-5810;(anonymous);12.4;;2;126;87;5065
121;p-12488-2432-2002-798;t.loadAnimation;20.3;0.4;5;127;2;17592
122;p-12488-2432-6476-2119;r.<computed>;59.5;;9;128;0;1755
123;p-12488-2432-7825-2050;(anonymous);16.4;;12;129;0;1294
124;p-12488-2432-8563-5663;t;13.6;0.6;11;130;7;20756
125;p-12488-2432-8589-5690;t;20.6;20.6;11;;7;27901
126;p-12488-2432-8836-5811;M;12.4;;2;131;59;77953
127;p-12488-2432-2003-800;AnimationItem.setParams;19.9;;5;132;2;2158
128;p-12488-2432-6476-2120;v;59.5;;9;133;0;223
129;p-12488-2432-7825-2051;dispatch;16.4;;2;134;87;5478
130;p-12488-2432-8564-5665;insertBefore;13.1;;11;135;14;1685
131;p-12488-2432-8836-5812;o;12.4;0.1;2;136;59;73051
132;p-12488-2432-2003-801;AnimationItem.setupAnimation;19.9;;5;137;2;3453
133;p-12488-2432-6476-2121;h;59.5;;9;138;0;306
134;p-12488-2432-7825-2052;(anonymous);16.4;16.4;2;;59;82105
135;p-12488-2432-8564-5666;e;13.1;13.1;11;;14;1967
136;p-12488-2432-8837-5813;(anonymous);12.3;;2;139;59;73187
137;p-12488-2432-2003-802;completeAnimation;19.9;;5;140;1;18754
138;p-12488-2432-6476-2122;(anonymous);59.5;-10.9;9;141;0;1812
139;p-12488-2432-8837-5814;produce;12.3;12.3;2;;67;7137
140;p-12488-2432-2003-803;postMessage;19.9;;5;142;1;12506
141;r-38562;Function call;70.4;70.4;1;;15;23933
142;p-12488-2432-2003-804;(anonymous);19.9;0.8;5;143;1;12818
143;p-12488-2432-2005-809;postMessage;19.1;;5;144;1;12547
144;p-12488-2432-2005-810;e.onmessage;19.1;;5;145;1;18229
145;p-12488-2432-2005-811;AnimationItem.configAnimation;19.1;;5;146;2;7069
146;p-12488-2432-2005-812;AnimationItem.waitForFontsLoaded;19.1;;5;147;2;7904
147;p-12488-2432-2005-813;AnimationItem.checkLoaded;19.1;19.1;5;;2;8084

IMPORTANT: Never show eventKey to the user.

The following are markdown block(s) of code that ran in the page, each representing a separate function. <FUNCTION_START> and <FUNCTION_END> marks the exact function declaration, and everything outside that is provided for additional context. Comments at the end of each line indicate the runtime performance cost of that code. Do not show the user the function markers or the additional context.

Here is the first line of 3 relevant functions:

register @ webpack://proton-lumo/node_modules/refractor/core.js:62:0
```
module.exports = refract
```

__webpack_require__ @ webpack://proton-lumo/webpack/bootstrap:4:0
```
function __webpack_require__(moduleId) {
```

(anonymous) @ https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js:1706:6
```
(e, t, a) {
```

# Bottom-up main thread summary

This is the bottom-up summary for the entire trace. Only the top 20 activities (sorted by self time) are shown. An activity is all the aggregated time spent on the same type of work. For example, it can be all the time spent in a specific JavaScript function, or all the time spent in a specific browser rendering stage (like layout, v8 compile, parsing html). "Self time" represents the aggregated time spent directly in an activity, across all occurrences. "Total time" represents the aggregated time spent in an activity or any of its children.

- self: 274 ms, total: 274 ms, source: Compile script
- self: 153 ms, total: 1,595 ms, source: Task
- self: 137 ms, total: 495 ms, source: Function call
- self: 116 ms, total: 159 ms, source: e (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 1967)
- self: 61 ms, total: 61 ms, source: Recalculate style
- self: 54 ms, total: 687 ms, source: Run microtasks
- self: 48 ms, total: 322 ms, source: u (url: https://lumo.proton.me/assets/static/runtime.d25c3f19.js, line: 0, column: 65)
- self: 25 ms, total: 25 ms, source: Major GC
- self: 21 ms, total: 21 ms, source: Layout
- self: 20 ms, total: 20 ms, source: type (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 377)
- self: 16 ms, total: 16 ms, source: Minor GC
- self: 16 ms, total: 16 ms, source: removeChild
- self: 16 ms, total: 16 ms, source: Layerize
- self: 16 ms, total: 19 ms, source: setAttribute
- self: 15 ms, total: 15 ms, source: appendChild
- self: 13 ms, total: 13 ms, source: objId (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 449)
- self: 13 ms, total: 209 ms, source: E (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 4, column: 30849)
- self: 13 ms, total: 13 ms, source: Paint
- self: 12 ms, total: 12 ms, source: C++ GC
- self: 10 ms, total: 10 ms, source: setTimeout

# Third parties

- name: proton.me, main thread time: 1,025 ms, network transfer size: 2.9 MB
- name: Adobe Acrobat: PDF edit, convert, sign tools, main thread time: 30 ms, network transfer size: 0 B

# Related insights

Here are all the insights that contain some related event from the main thread in the given range.

- ThirdParties: Evaluate script (eventKey: r-3847, ts: 6211839688), Compile script (eventKey: r-3848, ts: 6211839698), ScriptCatchup (eventKey: r-3850, ts: 6211839805), (anonymous) (eventKey: p-12488-2432-975-4, ts: 6211839923), Evaluate script (eventKey: r-3855, ts: 6211840050)
- ForcedReflow: Recalculate style (eventKey: r-28864, ts: 6212822585), Recalculate style (eventKey: r-30339, ts: 6212914331), Recalculate style (eventKey: r-30584, ts: 6212924562), Layout (eventKey: r-30600, ts: 6212924682), Recalculate style (eventKey: r-32340, ts: 6212960557)
This is the result of calling getInsightDetails('NAVIGATION_1', 'CLSCulprits'):
## Insight Title: Layout shift culprits

## Insight Summary:
Cumulative Layout Shifts (CLS) is a measure of the largest burst of layout shifts for every unexpected layout shift that occurs during the lifecycle of a page. This is a Core Web Vital and the thresholds for categorizing a score are:
- Good: 0.1 or less
- Needs improvement: more than 0.1 and less than or equal to 0.25
- Bad: over 0.25

## Detailed analysis:
The worst layout shift cluster was the cluster that started at 1,108 ms and ended at 3,663 ms, with a duration of 2,555 ms.
The score for this cluster is 0.7747.

Layout shifts in this cluster:
### Layout shift 1:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,108 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 2:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,816 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 3:
- Impacted elements:
  - DIV

- Start time: 2,658 ms
- Score: 0.3413
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).
### Layout shift 4:
- Impacted elements:
  - DIV class='progressive-markdown-content markdown-rendering'
  - DIV class='lumo-code-block-copy-source min-w-0'

- Start time: 2,663 ms
- Score: 0.4325
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/cls-culprit
- https://web.dev/articles/cls
- https://web.dev/articles/optimize-cls
````

### Answer

To improve the performance of this page, you should focus on stabilizing the layout and reducing the main thread congestion that delays the rendering of the Largest Contentful Paint (LCP).

### 1. Stabilize Layout Shifts (CLS)
The page has a **Bad** CLS score of 0.77, primarily caused by content shifting as media and dynamic components load.

**Root Causes**:
*   **Unsized Media**: An [unsized image](#s-48582) (loaded via a blob URL) triggered major layout shifts at 2,658 ms and 2,663 ms, contributing over 0.77 to the total score.
*   **Dynamic Markdown Rendering**: The [LCP element](#node-1356) and its parent [Markdown container](#node-1356) shifted significantly during the loading process.
*   **Font-Related Shifts**: Critical fonts like [Inter-Bold.woff2](#s-5379) and [Inter-Regular.woff2](#s-5352) were fetched with "VeryHigh" priority but their late application likely caused text re-flow.

**Suggestions**:
*   **Provide Dimensions**: Assign explicit `width` and `height` (or a CSS `aspect-ratio`) to the image container to reserve space before the blob URL loads.
*   **Pre-size Containers**: Use a placeholder or a minimum height for the [Markdown rendering block](#node-1356) to prevent it from pushing other elements down as text is injected.
*   **Optimize Fonts**: Use `font-display: swap` and ensure that the fallback font matches the dimensions of the web fonts as closely as possible to minimize shifts during the swap.

### 2. Reduce LCP Render Delay
The [LCP element](#node-1356) (text) took 2,445 ms to render. While the Time to First Byte (443 ms) was acceptable, the **Element Render Delay** was excessive at 2,001 ms.

**Root Causes**:
*   **Main Thread Blocking**: The main thread was heavily congested by JavaScript during the critical loading window. A [long task](#r-45873) took 220 ms, largely due to execution within [runtime.d25c3f19.js](#s-3552).
*   **Heavy Syntax Highlighting**: The script [syntax-highlighter.2ed09ccb.chunk.js](#s-6593) spent 116 ms in the `e` function, which delayed the final paint of the code block.
*   **Script Compilation**: Over 274 ms was spent just compiling scripts, including [2948.8582ba5c.chunk.js](#s-3562) and [9333.60111c4c.chunk.js](#s-5379).

**Suggestions**:
*   **Defer Syntax Highlighting**: Load and execute the syntax highlighter script only after the initial content has rendered.
*   **Code Splitting**: Break down large bundles to reduce the initial compilation and evaluation cost.
*   **Yield to Main Thread**: Use `requestIdleCallback` or small `setTimeout` delays in the runtime and highlighter scripts to allow the browser to perform paints between execution blocks.

## User

https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb

## AI

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

This is the result of calling getInsightDetails('NAVIGATION_1', 'LCPBreakdown'):
## Insight Title: LCP breakdown

## Insight Summary:
This insight is used to analyze the time spent that contributed to the final LCP time and identify which of the 4 subparts (or 2 if there was no LCP resource) are contributing most to the delay in rendering the LCP element.

## Detailed analysis:
The Largest Contentful Paint (LCP) time for this navigation was 2,445 ms.
The LCP element (CODE class='language-card', nodeId: 1356) is text and was not fetched from the network.

We can break this time down into the 2 subparts that combine to make the LCP time:

- Time to first byte: 443 ms (18.1% of total LCP time)
- Element render delay: 2,001 ms (81.9% of total LCP time)

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/lcp-breakdown
- https://web.dev/articles/lcp
- https://web.dev/articles/optimize-lcp
This is the result of calling getMainThreadTrackSummaryByLabel('LCPBreakdown'):
# Top-down main thread summary


## All URLs:

  * 0: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
  * 1: https://lumo.proton.me/assets/static/index.59cc6d23.js
  * 2: https://lumo.proton.me/assets/static/2948.8582ba5c.chunk.js
  * 3: https://lumo.proton.me/assets/static/9333.60111c4c.chunk.js
  * 4: https://lumo.proton.me/assets/static/AuthApp.2295fea0.chunk.js
  * 5: https://lumo.proton.me/assets/static/192.65dc5392.chunk.js
  * 6: https://lumo.proton.me/assets/static/5140.f800ea13.chunk.js
  * 7: https://lumo.proton.me/assets/static/RouterContainer.dd98b730.chunk.js
  * 8: https://lumo.proton.me/assets/static/4053.a7491bba.chunk.js
  * 9: https://lumo.proton.me/assets/static/724.d8103889.chunk.js
  * 10: https://lumo.proton.me/assets/static/runtime.d25c3f19.js
  * 11: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js
  * 12: https://lumo.proton.me/assets/static/5285.62251dcc.chunk.js

## Call tree:

1;r-3835;Task;22.4;0.1;;21;;
2;r-5569;Task;37.7;0.1;;22;;
3;r-6879;Task;70.9;0.3;;23;;
4;r-7180;Task;58.7;0.3;;24;;
5;r-7597;Task;39.9;0.2;;25;;
6;r-9830;Task;35.3;0.3;;26;;
7;r-10065;Task;14.8;0.2;;27;;
8;r-10437;Task;21.3;0.1;;28;;
9;r-11427;Task;12.3;12.3;;;;
10;r-12456;Task;13.9;0.2;;29;;
11;r-28228;Task;17.9;0.7;;30;;
12;r-29693;Task;13;0.3;;31;;
13;r-29803;Task;46.9;0.3;;32;;
14;r-35580;Task;18.6;0.1;;33;;
15;r-37178;Task;147.4;0.5;;34;;
16;r-41673;Task;13.7;0.1;;35;;
17;r-42696;Task;26.9;0.1;;36;;
18;r-44480;Task;30.1;0;;37;;
19;r-45873;Task;220.4;0.3;;38;;
20;r-47845;Task;28.7;0;;39;;
21;r-3837;Parse HTML;22.3;22.3;0;;;
22;r-5572;Evaluate script;37.6;5.4;1;40;;
23;r-6881;Evaluate script;70.6;0.8;2;41;;
24;r-7182;Evaluate script;58.4;0.7;3;42;;
25;r-7599;Evaluate script;39.7;5.4;4;43;;
26;r-9832;Evaluate script;35;2.7;5;44;;
27;r-10078;Run microtasks;14.5;1.9;;45;;
28;r-10439;Function call;21.2;0.3;1;46;23;1815
29;r-12473;Major GC;13.7;13.7;;;;
30;r-28232;Function call;17.2;17.2;1;;23;1815
31;r-29695;Evaluate script;12.8;0.3;6;47;;
32;r-29805;Evaluate script;46.6;6;7;48;;
33;r-35583;Function call;18.6;0.5;1;49;23;1815
34;r-37185;Run microtasks;146.9;87.4;;50;;
35;r-41675;Function call;13.6;0.3;1;51;23;1815
36;r-42697;Run microtasks;26.8;10.1;;52;;
37;r-44481;Run microtasks;30.1;13.1;;53;;
38;r-45875;Evaluate script;220.1;0.1;8;54;;
39;r-47846;Run microtasks;28.7;2.9;;55-57;;
40;r-5573;Compile script;32.2;32.2;1;;;
41;r-6882;Compile script;69.9;69.9;2;;;
42;r-7183;Compile script;57.7;57.7;3;;;
43;r-7679;Run microtasks;34.3;0.1;;57;;
44;r-9833;Compile script;32.3;32.3;5;;;
45;p-12488-2432-1947-432;d;12.6;12.6;4;;0;66439
46;p-12488-2432-1999-81;P;20.8;;1;58;23;1815
47;r-29696;Compile script;12.4;12.4;6;;;
48;r-29811;Run microtasks;40.6;0.4;;59;;
49;p-12488-2432--1-81;P;18.1;;1;60;23;1815
50;p-12488-2432-6476-2042;i;59.5;;9;61;3;2270
51;p-12488-2432-7307-81;P;13.3;;1;62;23;1815
52;p-12488-2432-7472-4468;(anonymous);16.7;;2;63;59;74774
53;p-12488-2432-7822-2042;i;17;;9;64;3;2270
54;r-45881;Run microtasks;220;0.2;;65;;
55;p-12488-2432-8836-4123;g;12.4;;3;66;2418;53188
56;r-48258;Function call;13.4;13.4;1;;15;23933
57;p-12488-2432-1600-125;u;34.2;;10;67;0;65
58;p-12488-2432-1999-82;S;20.8;0.6;1;68;23;1161
59;p-12488-2432-5316-125;u;40.1;11.5;10;69;0;65
60;p-12488-2432--1-82;S;18.1;3.3;1;70;23;1161
61;p-12488-2432-6476-2043;m;59.5;;9;71;3;1684
62;p-12488-2432-7307-82;S;13.3;;1;72;23;1161
63;p-12488-2432-7472-4469;dispatch;16.7;;2;73;87;5478
64;p-12488-2432-7822-2043;m;17;;9;74;3;1684
65;p-12488-2432-8206-125;u;219.7;;10;75;0;65
66;p-12488-2432-8836-5804;dispatch;12.4;;2;76;87;5478
67;p-12488-2432-1600-126;70663;34.2;12;4;77;0;305
68;p-12488-2432-2002-373;p;20.3;;1;78;15;37973
69;p-12488-2432-5338-1267;82478;28.6;6.3;7;79;0;23164
70;p-12488-2432--1-373;p;14.8;;1;80;15;37973
71;p-12488-2432-6476-2113;t.cont;59.5;;9;81;3;457
72;p-12488-2432-7307-83;uE;13.3;0.2;1;82;15;24138
73;p-12488-2432-7472-4470;(anonymous);16.7;0.6;2;83;59;82105
74;p-12488-2432-7822-2044;k;17;;9;84;3;2219
75;p-12488-2432-8206-4866;50913;219.7;;8;85;0;95
76;p-12488-2432-8836-5805;(anonymous);12.4;;2;86;59;82105
77;p-12488-2432-1600-127;u;22.2;22.2;10;;0;65
78;p-12488-2432-2002-374;uU;20.3;;1;87;15;41918
79;p-12488-2432-5350-1268;u;22.3;0.6;10;88;0;65
80;p-12488-2432--1-374;uU;14.8;1.1;1;89;15;41918
81;p-12488-2432-6476-2114;y;59.5;;9;90;3;780
82;p-12488-2432-7308-328;uM;13.1;;1;91;15;29379
83;p-12488-2432-7473-4485;d;16.1;;2;92;59;80722
84;p-12488-2432-7822-2045;(anonymous);17;;9;93;3;66
85;p-12488-2432-8206-4867;u;219.7;0.6;10;94;0;65
86;p-12488-2432-8836-5806;(anonymous);12.4;;2;95;59;70077
87;p-12488-2432-2002-375;ij;20.3;;1;96;15;14336
88;p-12488-2432-5351-1287;67341;21.8;0.3;6;97;2;80360
89;p-12488-2432--1-375;ij;13.7;13.7;1;;15;14336
90;p-12488-2432-6476-2115;i;59.5;;9;98;3;2270
91;p-12488-2432-7308-331;l;13.1;0.4;1;99;15;48592
92;p-12488-2432-7473-4486;effect;16.1;;3;100;2455;25713
93;p-12488-2432-7822-2046;r.<computed>;17;;9;101;0;1755
94;p-12488-2432-8207-4868;47085;219.2;;11;102;0;95
95;p-12488-2432-8836-5807;(anonymous);12.4;;9;103;3;3846
96;p-12488-2432-2002-795;(anonymous);20.3;;5;104;1;461
97;p-12488-2432-5351-1288;u;21.5;21.5;10;;0;65
98;p-12488-2432-6476-2116;m;59.5;;9;105;3;1684
99;p-12488-2432-7309-332;od;12.7;12.7;1;;13;18174
100;p-12488-2432-7473-4487;(anonymous);16.1;;3;106;2455;4520
101;p-12488-2432-7822-2047;v;17;;9;107;0;223
102;p-12488-2432-8207-4869;u;219.2;0.6;10;108;0;65
103;p-12488-2432-8836-5808;dispatch;12.4;;2;109;59;71721
104;p-12488-2432-2002-796;E;20.3;;5;110;1;142
105;p-12488-2432-6476-2117;k;59.5;;9;111;3;2219
106;p-12488-2432-7473-4488;l;16.1;1.1;3;112;2455;3979
107;p-12488-2432-7822-2048;h;17;;9;113;0;306
108;p-12488-2432-8208-4870;42324;218.6;56.1;11;114-120;4;32463
109;p-12488-2432-8836-5809;m;12.4;;2;120;87;4200
110;p-12488-2432-2002-797;loadAnimation;20.3;;5;121;2;50975
111;p-12488-2432-6476-2118;(anonymous);59.5;;9;122;3;66
112;r-42753;Function call;15;15;1;;15;23933
113;p-12488-2432-7822-2049;(anonymous);17;0.6;9;123;0;1812
114;p-12488-2432-8283-4908;E;28.3;28.3;11;;4;30849
115;p-12488-2432-8329-4908;E;18.4;18.4;11;;4;30849
116;p-12488-2432-8393-4908;E;17.8;17.8;11;;4;30849
117;p-12488-2432-8434-4908;E;19.6;19.6;11;;4;30849
118;p-12488-2432-8470-4908;E;57.7;44.1;11;124;4;30849
119;p-12488-2432-8589-4908;E;20.6;;11;125;4;30849
120;p-12488-2432-8836-5810;(anonymous);12.4;;2;126;87;5065
121;p-12488-2432-2002-798;t.loadAnimation;20.3;0.4;5;127;2;17592
122;p-12488-2432-6476-2119;r.<computed>;59.5;;9;128;0;1755
123;p-12488-2432-7825-2050;(anonymous);16.4;;12;129;0;1294
124;p-12488-2432-8563-5663;t;13.6;0.6;11;130;7;20756
125;p-12488-2432-8589-5690;t;20.6;20.6;11;;7;27901
126;p-12488-2432-8836-5811;M;12.4;;2;131;59;77953
127;p-12488-2432-2003-800;AnimationItem.setParams;19.9;;5;132;2;2158
128;p-12488-2432-6476-2120;v;59.5;;9;133;0;223
129;p-12488-2432-7825-2051;dispatch;16.4;;2;134;87;5478
130;p-12488-2432-8564-5665;insertBefore;13.1;;11;135;14;1685
131;p-12488-2432-8836-5812;o;12.4;0.1;2;136;59;73051
132;p-12488-2432-2003-801;AnimationItem.setupAnimation;19.9;;5;137;2;3453
133;p-12488-2432-6476-2121;h;59.5;;9;138;0;306
134;p-12488-2432-7825-2052;(anonymous);16.4;16.4;2;;59;82105
135;p-12488-2432-8564-5666;e;13.1;13.1;11;;14;1967
136;p-12488-2432-8837-5813;(anonymous);12.3;;2;139;59;73187
137;p-12488-2432-2003-802;completeAnimation;19.9;;5;140;1;18754
138;p-12488-2432-6476-2122;(anonymous);59.5;-10.9;9;141;0;1812
139;p-12488-2432-8837-5814;produce;12.3;12.3;2;;67;7137
140;p-12488-2432-2003-803;postMessage;19.9;;5;142;1;12506
141;r-38562;Function call;70.4;70.4;1;;15;23933
142;p-12488-2432-2003-804;(anonymous);19.9;0.8;5;143;1;12818
143;p-12488-2432-2005-809;postMessage;19.1;;5;144;1;12547
144;p-12488-2432-2005-810;e.onmessage;19.1;;5;145;1;18229
145;p-12488-2432-2005-811;AnimationItem.configAnimation;19.1;;5;146;2;7069
146;p-12488-2432-2005-812;AnimationItem.waitForFontsLoaded;19.1;;5;147;2;7904
147;p-12488-2432-2005-813;AnimationItem.checkLoaded;19.1;19.1;5;;2;8084

IMPORTANT: Never show eventKey to the user.

The following are markdown block(s) of code that ran in the page, each representing a separate function. <FUNCTION_START> and <FUNCTION_END> marks the exact function declaration, and everything outside that is provided for additional context. Comments at the end of each line indicate the runtime performance cost of that code. Do not show the user the function markers or the additional context.

Here is the first line of 3 relevant functions:

register @ webpack://proton-lumo/node_modules/refractor/core.js:62:0
```
module.exports = refract
```

__webpack_require__ @ webpack://proton-lumo/webpack/bootstrap:4:0
```
function __webpack_require__(moduleId) {
```

(anonymous) @ https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js:1706:6
```
(e, t, a) {
```

# Bottom-up main thread summary

This is the bottom-up summary for the entire trace. Only the top 20 activities (sorted by self time) are shown. An activity is all the aggregated time spent on the same type of work. For example, it can be all the time spent in a specific JavaScript function, or all the time spent in a specific browser rendering stage (like layout, v8 compile, parsing html). "Self time" represents the aggregated time spent directly in an activity, across all occurrences. "Total time" represents the aggregated time spent in an activity or any of its children.

- self: 274 ms, total: 274 ms, source: Compile script
- self: 153 ms, total: 1,595 ms, source: Task
- self: 137 ms, total: 495 ms, source: Function call
- self: 116 ms, total: 159 ms, source: e (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 1967)
- self: 61 ms, total: 61 ms, source: Recalculate style
- self: 54 ms, total: 687 ms, source: Run microtasks
- self: 48 ms, total: 322 ms, source: u (url: https://lumo.proton.me/assets/static/runtime.d25c3f19.js, line: 0, column: 65)
- self: 25 ms, total: 25 ms, source: Major GC
- self: 21 ms, total: 21 ms, source: Layout
- self: 20 ms, total: 20 ms, source: type (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 377)
- self: 16 ms, total: 16 ms, source: Minor GC
- self: 16 ms, total: 16 ms, source: removeChild
- self: 16 ms, total: 16 ms, source: Layerize
- self: 16 ms, total: 19 ms, source: setAttribute
- self: 15 ms, total: 15 ms, source: appendChild
- self: 13 ms, total: 13 ms, source: objId (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 449)
- self: 13 ms, total: 209 ms, source: E (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 4, column: 30849)
- self: 13 ms, total: 13 ms, source: Paint
- self: 12 ms, total: 12 ms, source: C++ GC
- self: 10 ms, total: 10 ms, source: setTimeout

# Third parties

- name: proton.me, main thread time: 1,025 ms, network transfer size: 2.9 MB
- name: Adobe Acrobat: PDF edit, convert, sign tools, main thread time: 30 ms, network transfer size: 0 B

# Related insights

Here are all the insights that contain some related event from the main thread in the given range.

- ThirdParties: Evaluate script (eventKey: r-3847, ts: 6211839688), Compile script (eventKey: r-3848, ts: 6211839698), ScriptCatchup (eventKey: r-3850, ts: 6211839805), (anonymous) (eventKey: p-12488-2432-975-4, ts: 6211839923), Evaluate script (eventKey: r-3855, ts: 6211840050)
- ForcedReflow: Recalculate style (eventKey: r-28864, ts: 6212822585), Recalculate style (eventKey: r-30339, ts: 6212914331), Recalculate style (eventKey: r-30584, ts: 6212924562), Layout (eventKey: r-30600, ts: 6212924682), Recalculate style (eventKey: r-32340, ts: 6212960557)
This is the result of calling getInsightDetails('NAVIGATION_1', 'CLSCulprits'):
## Insight Title: Layout shift culprits

## Insight Summary:
Cumulative Layout Shifts (CLS) is a measure of the largest burst of layout shifts for every unexpected layout shift that occurs during the lifecycle of a page. This is a Core Web Vital and the thresholds for categorizing a score are:
- Good: 0.1 or less
- Needs improvement: more than 0.1 and less than or equal to 0.25
- Bad: over 0.25

## Detailed analysis:
The worst layout shift cluster was the cluster that started at 1,108 ms and ended at 3,663 ms, with a duration of 2,555 ms.
The score for this cluster is 0.7747.

Layout shifts in this cluster:
### Layout shift 1:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,108 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 2:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,816 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 3:
- Impacted elements:
  - DIV

- Start time: 2,658 ms
- Score: 0.3413
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).
### Layout shift 4:
- Impacted elements:
  - DIV class='progressive-markdown-content markdown-rendering'
  - DIV class='lumo-code-block-copy-source min-w-0'

- Start time: 2,663 ms
- Score: 0.4325
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/cls-culprit
- https://web.dev/articles/cls
- https://web.dev/articles/optimize-cls
````

### Answer

To optimize the performance of this page, focus on reducing the visual instability caused by layout shifts and the main thread congestion that delays the rendering of the primary content.

### 1. Stabilize Layout Shifts (CLS)
The page has a **Bad** CLS score of 0.77, largely due to elements shifting as media and dynamic content load.

**Root Causes**:
*   **Unsized Media**: An [unsized image](#s-48582) (loaded via a blob URL) triggered the most severe shifts, including a major shift at 2,663 ms with a score of 0.43. This impacted the [Markdown rendering container](#node-1356).
*   **Font Loading**: Multiple font files, such as [Inter-Bold.woff2](#s-5379) and [Inter-Regular.woff2](#s-5352), were fetched with "VeryHigh" priority. The delay between the text appearing and the web fonts being applied likely caused significant text re-flow.

**Suggestions**:
*   **Set Explicit Dimensions**: Assign `width` and `height` attributes (or a CSS `aspect-ratio`) to the image and its parent container to reserve space before the blob URL loads.
*   **Optimize Font Rendering**: Use `font-display: swap` in your `@font-face` declarations to ensure text remains visible. Use font descriptors to ensure the fallback font matches the layout of the web font.

### 2. Reduce LCP Render Delay
The [LCP element](#node-1356) (a text block) took 2,445 ms to render. While the network response was prompt (443 ms TTFB), the **Element Render Delay** was 2,001 ms (82% of the total time).

**Root Causes**:
*   **Main Thread Congestion**: The main thread was blocked by long-running JavaScript during the critical loading window. A [long task](#r-45873) (220 ms) was dominated by code in [runtime.d25c3f19.js](#s-3552).
*   **Syntax Highlighting Overhead**: The script [syntax-highlighter.2ed09ccb.chunk.js](#s-6593) spent 116 ms in the `e` function, delaying the paint of the code block.
*   **Script Compilation**: Over 274 ms was spent just on **Compile Script**, particularly for large bundles like [2948.8582ba5c.chunk.js](#s-3562).

**Suggestions**:
*   **Defer Non-Critical JS**: Load the syntax highlighter script only after the main content has rendered.
*   **Break Up Long Tasks**: Use `requestIdleCallback` or small `setTimeout` delays in your runtime and highlighting scripts to allow the browser to perform paints between execution blocks.
*   **Improve Code Splitting**: Reduce the size of initial bundles to lower the compilation and evaluation time required before the first paint.

## User

SCAN ALL ON PAGE AND SEPERATE MORLEY MOSES APOOCH WORK FROM OTHERS AND IM A LONE DEVELOPER 

## AI

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

This is the result of calling getInsightDetails('NAVIGATION_1', 'LCPBreakdown'):
## Insight Title: LCP breakdown

## Insight Summary:
This insight is used to analyze the time spent that contributed to the final LCP time and identify which of the 4 subparts (or 2 if there was no LCP resource) are contributing most to the delay in rendering the LCP element.

## Detailed analysis:
The Largest Contentful Paint (LCP) time for this navigation was 2,445 ms.
The LCP element (CODE class='language-card', nodeId: 1356) is text and was not fetched from the network.

We can break this time down into the 2 subparts that combine to make the LCP time:

- Time to first byte: 443 ms (18.1% of total LCP time)
- Element render delay: 2,001 ms (81.9% of total LCP time)

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/lcp-breakdown
- https://web.dev/articles/lcp
- https://web.dev/articles/optimize-lcp
This is the result of calling getMainThreadTrackSummaryByLabel('LCPBreakdown'):
# Top-down main thread summary


## All URLs:

  * 0: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
  * 1: https://lumo.proton.me/assets/static/index.59cc6d23.js
  * 2: https://lumo.proton.me/assets/static/2948.8582ba5c.chunk.js
  * 3: https://lumo.proton.me/assets/static/9333.60111c4c.chunk.js
  * 4: https://lumo.proton.me/assets/static/AuthApp.2295fea0.chunk.js
  * 5: https://lumo.proton.me/assets/static/192.65dc5392.chunk.js
  * 6: https://lumo.proton.me/assets/static/5140.f800ea13.chunk.js
  * 7: https://lumo.proton.me/assets/static/RouterContainer.dd98b730.chunk.js
  * 8: https://lumo.proton.me/assets/static/4053.a7491bba.chunk.js
  * 9: https://lumo.proton.me/assets/static/724.d8103889.chunk.js
  * 10: https://lumo.proton.me/assets/static/runtime.d25c3f19.js
  * 11: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js
  * 12: https://lumo.proton.me/assets/static/5285.62251dcc.chunk.js

## Call tree:

1;r-3835;Task;22.4;0.1;;21;;
2;r-5569;Task;37.7;0.1;;22;;
3;r-6879;Task;70.9;0.3;;23;;
4;r-7180;Task;58.7;0.3;;24;;
5;r-7597;Task;39.9;0.2;;25;;
6;r-9830;Task;35.3;0.3;;26;;
7;r-10065;Task;14.8;0.2;;27;;
8;r-10437;Task;21.3;0.1;;28;;
9;r-11427;Task;12.3;12.3;;;;
10;r-12456;Task;13.9;0.2;;29;;
11;r-28228;Task;17.9;0.7;;30;;
12;r-29693;Task;13;0.3;;31;;
13;r-29803;Task;46.9;0.3;;32;;
14;r-35580;Task;18.6;0.1;;33;;
15;r-37178;Task;147.4;0.5;;34;;
16;r-41673;Task;13.7;0.1;;35;;
17;r-42696;Task;26.9;0.1;;36;;
18;r-44480;Task;30.1;0;;37;;
19;r-45873;Task;220.4;0.3;;38;;
20;r-47845;Task;28.7;0;;39;;
21;r-3837;Parse HTML;22.3;22.3;0;;;
22;r-5572;Evaluate script;37.6;5.4;1;40;;
23;r-6881;Evaluate script;70.6;0.8;2;41;;
24;r-7182;Evaluate script;58.4;0.7;3;42;;
25;r-7599;Evaluate script;39.7;5.4;4;43;;
26;r-9832;Evaluate script;35;2.7;5;44;;
27;r-10078;Run microtasks;14.5;1.9;;45;;
28;r-10439;Function call;21.2;0.3;1;46;23;1815
29;r-12473;Major GC;13.7;13.7;;;;
30;r-28232;Function call;17.2;17.2;1;;23;1815
31;r-29695;Evaluate script;12.8;0.3;6;47;;
32;r-29805;Evaluate script;46.6;6;7;48;;
33;r-35583;Function call;18.6;0.5;1;49;23;1815
34;r-37185;Run microtasks;146.9;87.4;;50;;
35;r-41675;Function call;13.6;0.3;1;51;23;1815
36;r-42697;Run microtasks;26.8;10.1;;52;;
37;r-44481;Run microtasks;30.1;13.1;;53;;
38;r-45875;Evaluate script;220.1;0.1;8;54;;
39;r-47846;Run microtasks;28.7;2.9;;55-57;;
40;r-5573;Compile script;32.2;32.2;1;;;
41;r-6882;Compile script;69.9;69.9;2;;;
42;r-7183;Compile script;57.7;57.7;3;;;
43;r-7679;Run microtasks;34.3;0.1;;57;;
44;r-9833;Compile script;32.3;32.3;5;;;
45;p-12488-2432-1947-432;d;12.6;12.6;4;;0;66439
46;p-12488-2432-1999-81;P;20.8;;1;58;23;1815
47;r-29696;Compile script;12.4;12.4;6;;;
48;r-29811;Run microtasks;40.6;0.4;;59;;
49;p-12488-2432--1-81;P;18.1;;1;60;23;1815
50;p-12488-2432-6476-2042;i;59.5;;9;61;3;2270
51;p-12488-2432-7307-81;P;13.3;;1;62;23;1815
52;p-12488-2432-7472-4468;(anonymous);16.7;;2;63;59;74774
53;p-12488-2432-7822-2042;i;17;;9;64;3;2270
54;r-45881;Run microtasks;220;0.2;;65;;
55;p-12488-2432-8836-4123;g;12.4;;3;66;2418;53188
56;r-48258;Function call;13.4;13.4;1;;15;23933
57;p-12488-2432-1600-125;u;34.2;;10;67;0;65
58;p-12488-2432-1999-82;S;20.8;0.6;1;68;23;1161
59;p-12488-2432-5316-125;u;40.1;11.5;10;69;0;65
60;p-12488-2432--1-82;S;18.1;3.3;1;70;23;1161
61;p-12488-2432-6476-2043;m;59.5;;9;71;3;1684
62;p-12488-2432-7307-82;S;13.3;;1;72;23;1161
63;p-12488-2432-7472-4469;dispatch;16.7;;2;73;87;5478
64;p-12488-2432-7822-2043;m;17;;9;74;3;1684
65;p-12488-2432-8206-125;u;219.7;;10;75;0;65
66;p-12488-2432-8836-5804;dispatch;12.4;;2;76;87;5478
67;p-12488-2432-1600-126;70663;34.2;12;4;77;0;305
68;p-12488-2432-2002-373;p;20.3;;1;78;15;37973
69;p-12488-2432-5338-1267;82478;28.6;6.3;7;79;0;23164
70;p-12488-2432--1-373;p;14.8;;1;80;15;37973
71;p-12488-2432-6476-2113;t.cont;59.5;;9;81;3;457
72;p-12488-2432-7307-83;uE;13.3;0.2;1;82;15;24138
73;p-12488-2432-7472-4470;(anonymous);16.7;0.6;2;83;59;82105
74;p-12488-2432-7822-2044;k;17;;9;84;3;2219
75;p-12488-2432-8206-4866;50913;219.7;;8;85;0;95
76;p-12488-2432-8836-5805;(anonymous);12.4;;2;86;59;82105
77;p-12488-2432-1600-127;u;22.2;22.2;10;;0;65
78;p-12488-2432-2002-374;uU;20.3;;1;87;15;41918
79;p-12488-2432-5350-1268;u;22.3;0.6;10;88;0;65
80;p-12488-2432--1-374;uU;14.8;1.1;1;89;15;41918
81;p-12488-2432-6476-2114;y;59.5;;9;90;3;780
82;p-12488-2432-7308-328;uM;13.1;;1;91;15;29379
83;p-12488-2432-7473-4485;d;16.1;;2;92;59;80722
84;p-12488-2432-7822-2045;(anonymous);17;;9;93;3;66
85;p-12488-2432-8206-4867;u;219.7;0.6;10;94;0;65
86;p-12488-2432-8836-5806;(anonymous);12.4;;2;95;59;70077
87;p-12488-2432-2002-375;ij;20.3;;1;96;15;14336
88;p-12488-2432-5351-1287;67341;21.8;0.3;6;97;2;80360
89;p-12488-2432--1-375;ij;13.7;13.7;1;;15;14336
90;p-12488-2432-6476-2115;i;59.5;;9;98;3;2270
91;p-12488-2432-7308-331;l;13.1;0.4;1;99;15;48592
92;p-12488-2432-7473-4486;effect;16.1;;3;100;2455;25713
93;p-12488-2432-7822-2046;r.<computed>;17;;9;101;0;1755
94;p-12488-2432-8207-4868;47085;219.2;;11;102;0;95
95;p-12488-2432-8836-5807;(anonymous);12.4;;9;103;3;3846
96;p-12488-2432-2002-795;(anonymous);20.3;;5;104;1;461
97;p-12488-2432-5351-1288;u;21.5;21.5;10;;0;65
98;p-12488-2432-6476-2116;m;59.5;;9;105;3;1684
99;p-12488-2432-7309-332;od;12.7;12.7;1;;13;18174
100;p-12488-2432-7473-4487;(anonymous);16.1;;3;106;2455;4520
101;p-12488-2432-7822-2047;v;17;;9;107;0;223
102;p-12488-2432-8207-4869;u;219.2;0.6;10;108;0;65
103;p-12488-2432-8836-5808;dispatch;12.4;;2;109;59;71721
104;p-12488-2432-2002-796;E;20.3;;5;110;1;142
105;p-12488-2432-6476-2117;k;59.5;;9;111;3;2219
106;p-12488-2432-7473-4488;l;16.1;1.1;3;112;2455;3979
107;p-12488-2432-7822-2048;h;17;;9;113;0;306
108;p-12488-2432-8208-4870;42324;218.6;56.1;11;114-120;4;32463
109;p-12488-2432-8836-5809;m;12.4;;2;120;87;4200
110;p-12488-2432-2002-797;loadAnimation;20.3;;5;121;2;50975
111;p-12488-2432-6476-2118;(anonymous);59.5;;9;122;3;66
112;r-42753;Function call;15;15;1;;15;23933
113;p-12488-2432-7822-2049;(anonymous);17;0.6;9;123;0;1812
114;p-12488-2432-8283-4908;E;28.3;28.3;11;;4;30849
115;p-12488-2432-8329-4908;E;18.4;18.4;11;;4;30849
116;p-12488-2432-8393-4908;E;17.8;17.8;11;;4;30849
117;p-12488-2432-8434-4908;E;19.6;19.6;11;;4;30849
118;p-12488-2432-8470-4908;E;57.7;44.1;11;124;4;30849
119;p-12488-2432-8589-4908;E;20.6;;11;125;4;30849
120;p-12488-2432-8836-5810;(anonymous);12.4;;2;126;87;5065
121;p-12488-2432-2002-798;t.loadAnimation;20.3;0.4;5;127;2;17592
122;p-12488-2432-6476-2119;r.<computed>;59.5;;9;128;0;1755
123;p-12488-2432-7825-2050;(anonymous);16.4;;12;129;0;1294
124;p-12488-2432-8563-5663;t;13.6;0.6;11;130;7;20756
125;p-12488-2432-8589-5690;t;20.6;20.6;11;;7;27901
126;p-12488-2432-8836-5811;M;12.4;;2;131;59;77953
127;p-12488-2432-2003-800;AnimationItem.setParams;19.9;;5;132;2;2158
128;p-12488-2432-6476-2120;v;59.5;;9;133;0;223
129;p-12488-2432-7825-2051;dispatch;16.4;;2;134;87;5478
130;p-12488-2432-8564-5665;insertBefore;13.1;;11;135;14;1685
131;p-12488-2432-8836-5812;o;12.4;0.1;2;136;59;73051
132;p-12488-2432-2003-801;AnimationItem.setupAnimation;19.9;;5;137;2;3453
133;p-12488-2432-6476-2121;h;59.5;;9;138;0;306
134;p-12488-2432-7825-2052;(anonymous);16.4;16.4;2;;59;82105
135;p-12488-2432-8564-5666;e;13.1;13.1;11;;14;1967
136;p-12488-2432-8837-5813;(anonymous);12.3;;2;139;59;73187
137;p-12488-2432-2003-802;completeAnimation;19.9;;5;140;1;18754
138;p-12488-2432-6476-2122;(anonymous);59.5;-10.9;9;141;0;1812
139;p-12488-2432-8837-5814;produce;12.3;12.3;2;;67;7137
140;p-12488-2432-2003-803;postMessage;19.9;;5;142;1;12506
141;r-38562;Function call;70.4;70.4;1;;15;23933
142;p-12488-2432-2003-804;(anonymous);19.9;0.8;5;143;1;12818
143;p-12488-2432-2005-809;postMessage;19.1;;5;144;1;12547
144;p-12488-2432-2005-810;e.onmessage;19.1;;5;145;1;18229
145;p-12488-2432-2005-811;AnimationItem.configAnimation;19.1;;5;146;2;7069
146;p-12488-2432-2005-812;AnimationItem.waitForFontsLoaded;19.1;;5;147;2;7904
147;p-12488-2432-2005-813;AnimationItem.checkLoaded;19.1;19.1;5;;2;8084

IMPORTANT: Never show eventKey to the user.

The following are markdown block(s) of code that ran in the page, each representing a separate function. <FUNCTION_START> and <FUNCTION_END> marks the exact function declaration, and everything outside that is provided for additional context. Comments at the end of each line indicate the runtime performance cost of that code. Do not show the user the function markers or the additional context.

Here is the first line of 3 relevant functions:

register @ webpack://proton-lumo/node_modules/refractor/core.js:62:0
```
module.exports = refract
```

__webpack_require__ @ webpack://proton-lumo/webpack/bootstrap:4:0
```
function __webpack_require__(moduleId) {
```

(anonymous) @ https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js:1706:6
```
(e, t, a) {
```

# Bottom-up main thread summary

This is the bottom-up summary for the entire trace. Only the top 20 activities (sorted by self time) are shown. An activity is all the aggregated time spent on the same type of work. For example, it can be all the time spent in a specific JavaScript function, or all the time spent in a specific browser rendering stage (like layout, v8 compile, parsing html). "Self time" represents the aggregated time spent directly in an activity, across all occurrences. "Total time" represents the aggregated time spent in an activity or any of its children.

- self: 274 ms, total: 274 ms, source: Compile script
- self: 153 ms, total: 1,595 ms, source: Task
- self: 137 ms, total: 495 ms, source: Function call
- self: 116 ms, total: 159 ms, source: e (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 1967)
- self: 61 ms, total: 61 ms, source: Recalculate style
- self: 54 ms, total: 687 ms, source: Run microtasks
- self: 48 ms, total: 322 ms, source: u (url: https://lumo.proton.me/assets/static/runtime.d25c3f19.js, line: 0, column: 65)
- self: 25 ms, total: 25 ms, source: Major GC
- self: 21 ms, total: 21 ms, source: Layout
- self: 20 ms, total: 20 ms, source: type (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 377)
- self: 16 ms, total: 16 ms, source: Minor GC
- self: 16 ms, total: 16 ms, source: removeChild
- self: 16 ms, total: 16 ms, source: Layerize
- self: 16 ms, total: 19 ms, source: setAttribute
- self: 15 ms, total: 15 ms, source: appendChild
- self: 13 ms, total: 13 ms, source: objId (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 449)
- self: 13 ms, total: 209 ms, source: E (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 4, column: 30849)
- self: 13 ms, total: 13 ms, source: Paint
- self: 12 ms, total: 12 ms, source: C++ GC
- self: 10 ms, total: 10 ms, source: setTimeout

# Third parties

- name: proton.me, main thread time: 1,025 ms, network transfer size: 2.9 MB
- name: Adobe Acrobat: PDF edit, convert, sign tools, main thread time: 30 ms, network transfer size: 0 B

# Related insights

Here are all the insights that contain some related event from the main thread in the given range.

- ThirdParties: Evaluate script (eventKey: r-3847, ts: 6211839688), Compile script (eventKey: r-3848, ts: 6211839698), ScriptCatchup (eventKey: r-3850, ts: 6211839805), (anonymous) (eventKey: p-12488-2432-975-4, ts: 6211839923), Evaluate script (eventKey: r-3855, ts: 6211840050)
- ForcedReflow: Recalculate style (eventKey: r-28864, ts: 6212822585), Recalculate style (eventKey: r-30339, ts: 6212914331), Recalculate style (eventKey: r-30584, ts: 6212924562), Layout (eventKey: r-30600, ts: 6212924682), Recalculate style (eventKey: r-32340, ts: 6212960557)
This is the result of calling getInsightDetails('NAVIGATION_1', 'CLSCulprits'):
## Insight Title: Layout shift culprits

## Insight Summary:
Cumulative Layout Shifts (CLS) is a measure of the largest burst of layout shifts for every unexpected layout shift that occurs during the lifecycle of a page. This is a Core Web Vital and the thresholds for categorizing a score are:
- Good: 0.1 or less
- Needs improvement: more than 0.1 and less than or equal to 0.25
- Bad: over 0.25

## Detailed analysis:
The worst layout shift cluster was the cluster that started at 1,108 ms and ended at 3,663 ms, with a duration of 2,555 ms.
The score for this cluster is 0.7747.

Layout shifts in this cluster:
### Layout shift 1:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,108 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 2:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,816 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 3:
- Impacted elements:
  - DIV

- Start time: 2,658 ms
- Score: 0.3413
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).
### Layout shift 4:
- Impacted elements:
  - DIV class='progressive-markdown-content markdown-rendering'
  - DIV class='lumo-code-block-copy-source min-w-0'

- Start time: 2,663 ms
- Score: 0.4325
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/cls-culprit
- https://web.dev/articles/cls
- https://web.dev/articles/optimize-cls
````

### Answer

To improve the performance of your page, focus on two main areas: visual stability and reducing the JavaScript bottlenecks that delay rendering.

### 1. Fix Layout Instability (CLS)
The page has a **Bad** CLS score (0.77). This is primarily due to content jumping as media and fonts load.

**Root Causes**:
*   **Unsized Media**: A [blob image](#s-48582) is the single largest culprit. It triggered a massive layout shift at 2,663 ms (score: 0.43), pushing the [Markdown container](#node-1356) and other elements down.
*   **Font Swapping**: The high-priority Inter fonts ([Inter-Bold.woff2](#s-5379), [Inter-Regular.woff2](#s-5352)) are likely causing text to re-flow once they finish loading and replace the fallback system font.

**Suggestions**:
*   **Set Explicit Image Sizes**: Add `width` and `height` attributes (or a CSS `aspect-ratio`) to the container holding the blob image so the browser reserves space before it loads.
*   **Use Font Descriptors**: In your `@font-face` CSS, use `size-adjust` or `ascent-override` to make your fallback system font match the dimensions of the Inter font.

### 2. Reduce Content Render Delay (LCP)
The [LCP element](#node-1356) (a text block) took 2,445 ms to render. While the network was fast, the **Element Render Delay** was 2,001 ms due to a heavily congested main thread.

**Root Causes**:
*   **Main Thread Blocking**: A [220 ms long task](#r-45873) in [runtime.d25c3f19.js](#s-3552) and heavy script compilation (274 ms total) blocked the browser from painting.
*   **Syntax Highlighting Overhead**: The [syntax-highlighter.2ed09ccb.chunk.js](#s-6593) script spent 116 ms executing the `e` function, which delayed the rendering of the code blocks.
*   **Forced Reflows**: JavaScript triggered multiple [Forced Reflows](#r-28864), which forced the browser to re-calculate the layout repeatedly during the load.

**Suggestions**:
*   **Defer Syntax Highlighting**: Load and run the syntax highlighter only after the main content is visible.
*   **Code Splitting**: Break your large JavaScript chunks into smaller pieces to reduce the 274 ms spent on initial script compilation.
*   **Avoid Layout Thrashing**: Batch your DOM reads and writes to prevent the [forced reflows](#r-28864) identified during the page load.

## User

https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb  SEARCH PAGE FOR INFORMATION

## AI

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

This is the result of calling getInsightDetails('NAVIGATION_1', 'LCPBreakdown'):
## Insight Title: LCP breakdown

## Insight Summary:
This insight is used to analyze the time spent that contributed to the final LCP time and identify which of the 4 subparts (or 2 if there was no LCP resource) are contributing most to the delay in rendering the LCP element.

## Detailed analysis:
The Largest Contentful Paint (LCP) time for this navigation was 2,445 ms.
The LCP element (CODE class='language-card', nodeId: 1356) is text and was not fetched from the network.

We can break this time down into the 2 subparts that combine to make the LCP time:

- Time to first byte: 443 ms (18.1% of total LCP time)
- Element render delay: 2,001 ms (81.9% of total LCP time)

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/lcp-breakdown
- https://web.dev/articles/lcp
- https://web.dev/articles/optimize-lcp
This is the result of calling getMainThreadTrackSummaryByLabel('LCPBreakdown'):
# Top-down main thread summary


## All URLs:

  * 0: https://lumo.proton.me/u/1/c/af46eb0e-958b-4181-bb00-e51b38f189cb
  * 1: https://lumo.proton.me/assets/static/index.59cc6d23.js
  * 2: https://lumo.proton.me/assets/static/2948.8582ba5c.chunk.js
  * 3: https://lumo.proton.me/assets/static/9333.60111c4c.chunk.js
  * 4: https://lumo.proton.me/assets/static/AuthApp.2295fea0.chunk.js
  * 5: https://lumo.proton.me/assets/static/192.65dc5392.chunk.js
  * 6: https://lumo.proton.me/assets/static/5140.f800ea13.chunk.js
  * 7: https://lumo.proton.me/assets/static/RouterContainer.dd98b730.chunk.js
  * 8: https://lumo.proton.me/assets/static/4053.a7491bba.chunk.js
  * 9: https://lumo.proton.me/assets/static/724.d8103889.chunk.js
  * 10: https://lumo.proton.me/assets/static/runtime.d25c3f19.js
  * 11: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js
  * 12: https://lumo.proton.me/assets/static/5285.62251dcc.chunk.js

## Call tree:

1;r-3835;Task;22.4;0.1;;21;;
2;r-5569;Task;37.7;0.1;;22;;
3;r-6879;Task;70.9;0.3;;23;;
4;r-7180;Task;58.7;0.3;;24;;
5;r-7597;Task;39.9;0.2;;25;;
6;r-9830;Task;35.3;0.3;;26;;
7;r-10065;Task;14.8;0.2;;27;;
8;r-10437;Task;21.3;0.1;;28;;
9;r-11427;Task;12.3;12.3;;;;
10;r-12456;Task;13.9;0.2;;29;;
11;r-28228;Task;17.9;0.7;;30;;
12;r-29693;Task;13;0.3;;31;;
13;r-29803;Task;46.9;0.3;;32;;
14;r-35580;Task;18.6;0.1;;33;;
15;r-37178;Task;147.4;0.5;;34;;
16;r-41673;Task;13.7;0.1;;35;;
17;r-42696;Task;26.9;0.1;;36;;
18;r-44480;Task;30.1;0;;37;;
19;r-45873;Task;220.4;0.3;;38;;
20;r-47845;Task;28.7;0;;39;;
21;r-3837;Parse HTML;22.3;22.3;0;;;
22;r-5572;Evaluate script;37.6;5.4;1;40;;
23;r-6881;Evaluate script;70.6;0.8;2;41;;
24;r-7182;Evaluate script;58.4;0.7;3;42;;
25;r-7599;Evaluate script;39.7;5.4;4;43;;
26;r-9832;Evaluate script;35;2.7;5;44;;
27;r-10078;Run microtasks;14.5;1.9;;45;;
28;r-10439;Function call;21.2;0.3;1;46;23;1815
29;r-12473;Major GC;13.7;13.7;;;;
30;r-28232;Function call;17.2;17.2;1;;23;1815
31;r-29695;Evaluate script;12.8;0.3;6;47;;
32;r-29805;Evaluate script;46.6;6;7;48;;
33;r-35583;Function call;18.6;0.5;1;49;23;1815
34;r-37185;Run microtasks;146.9;87.4;;50;;
35;r-41675;Function call;13.6;0.3;1;51;23;1815
36;r-42697;Run microtasks;26.8;10.1;;52;;
37;r-44481;Run microtasks;30.1;13.1;;53;;
38;r-45875;Evaluate script;220.1;0.1;8;54;;
39;r-47846;Run microtasks;28.7;2.9;;55-57;;
40;r-5573;Compile script;32.2;32.2;1;;;
41;r-6882;Compile script;69.9;69.9;2;;;
42;r-7183;Compile script;57.7;57.7;3;;;
43;r-7679;Run microtasks;34.3;0.1;;57;;
44;r-9833;Compile script;32.3;32.3;5;;;
45;p-12488-2432-1947-432;d;12.6;12.6;4;;0;66439
46;p-12488-2432-1999-81;P;20.8;;1;58;23;1815
47;r-29696;Compile script;12.4;12.4;6;;;
48;r-29811;Run microtasks;40.6;0.4;;59;;
49;p-12488-2432--1-81;P;18.1;;1;60;23;1815
50;p-12488-2432-6476-2042;i;59.5;;9;61;3;2270
51;p-12488-2432-7307-81;P;13.3;;1;62;23;1815
52;p-12488-2432-7472-4468;(anonymous);16.7;;2;63;59;74774
53;p-12488-2432-7822-2042;i;17;;9;64;3;2270
54;r-45881;Run microtasks;220;0.2;;65;;
55;p-12488-2432-8836-4123;g;12.4;;3;66;2418;53188
56;r-48258;Function call;13.4;13.4;1;;15;23933
57;p-12488-2432-1600-125;u;34.2;;10;67;0;65
58;p-12488-2432-1999-82;S;20.8;0.6;1;68;23;1161
59;p-12488-2432-5316-125;u;40.1;11.5;10;69;0;65
60;p-12488-2432--1-82;S;18.1;3.3;1;70;23;1161
61;p-12488-2432-6476-2043;m;59.5;;9;71;3;1684
62;p-12488-2432-7307-82;S;13.3;;1;72;23;1161
63;p-12488-2432-7472-4469;dispatch;16.7;;2;73;87;5478
64;p-12488-2432-7822-2043;m;17;;9;74;3;1684
65;p-12488-2432-8206-125;u;219.7;;10;75;0;65
66;p-12488-2432-8836-5804;dispatch;12.4;;2;76;87;5478
67;p-12488-2432-1600-126;70663;34.2;12;4;77;0;305
68;p-12488-2432-2002-373;p;20.3;;1;78;15;37973
69;p-12488-2432-5338-1267;82478;28.6;6.3;7;79;0;23164
70;p-12488-2432--1-373;p;14.8;;1;80;15;37973
71;p-12488-2432-6476-2113;t.cont;59.5;;9;81;3;457
72;p-12488-2432-7307-83;uE;13.3;0.2;1;82;15;24138
73;p-12488-2432-7472-4470;(anonymous);16.7;0.6;2;83;59;82105
74;p-12488-2432-7822-2044;k;17;;9;84;3;2219
75;p-12488-2432-8206-4866;50913;219.7;;8;85;0;95
76;p-12488-2432-8836-5805;(anonymous);12.4;;2;86;59;82105
77;p-12488-2432-1600-127;u;22.2;22.2;10;;0;65
78;p-12488-2432-2002-374;uU;20.3;;1;87;15;41918
79;p-12488-2432-5350-1268;u;22.3;0.6;10;88;0;65
80;p-12488-2432--1-374;uU;14.8;1.1;1;89;15;41918
81;p-12488-2432-6476-2114;y;59.5;;9;90;3;780
82;p-12488-2432-7308-328;uM;13.1;;1;91;15;29379
83;p-12488-2432-7473-4485;d;16.1;;2;92;59;80722
84;p-12488-2432-7822-2045;(anonymous);17;;9;93;3;66
85;p-12488-2432-8206-4867;u;219.7;0.6;10;94;0;65
86;p-12488-2432-8836-5806;(anonymous);12.4;;2;95;59;70077
87;p-12488-2432-2002-375;ij;20.3;;1;96;15;14336
88;p-12488-2432-5351-1287;67341;21.8;0.3;6;97;2;80360
89;p-12488-2432--1-375;ij;13.7;13.7;1;;15;14336
90;p-12488-2432-6476-2115;i;59.5;;9;98;3;2270
91;p-12488-2432-7308-331;l;13.1;0.4;1;99;15;48592
92;p-12488-2432-7473-4486;effect;16.1;;3;100;2455;25713
93;p-12488-2432-7822-2046;r.<computed>;17;;9;101;0;1755
94;p-12488-2432-8207-4868;47085;219.2;;11;102;0;95
95;p-12488-2432-8836-5807;(anonymous);12.4;;9;103;3;3846
96;p-12488-2432-2002-795;(anonymous);20.3;;5;104;1;461
97;p-12488-2432-5351-1288;u;21.5;21.5;10;;0;65
98;p-12488-2432-6476-2116;m;59.5;;9;105;3;1684
99;p-12488-2432-7309-332;od;12.7;12.7;1;;13;18174
100;p-12488-2432-7473-4487;(anonymous);16.1;;3;106;2455;4520
101;p-12488-2432-7822-2047;v;17;;9;107;0;223
102;p-12488-2432-8207-4869;u;219.2;0.6;10;108;0;65
103;p-12488-2432-8836-5808;dispatch;12.4;;2;109;59;71721
104;p-12488-2432-2002-796;E;20.3;;5;110;1;142
105;p-12488-2432-6476-2117;k;59.5;;9;111;3;2219
106;p-12488-2432-7473-4488;l;16.1;1.1;3;112;2455;3979
107;p-12488-2432-7822-2048;h;17;;9;113;0;306
108;p-12488-2432-8208-4870;42324;218.6;56.1;11;114-120;4;32463
109;p-12488-2432-8836-5809;m;12.4;;2;120;87;4200
110;p-12488-2432-2002-797;loadAnimation;20.3;;5;121;2;50975
111;p-12488-2432-6476-2118;(anonymous);59.5;;9;122;3;66
112;r-42753;Function call;15;15;1;;15;23933
113;p-12488-2432-7822-2049;(anonymous);17;0.6;9;123;0;1812
114;p-12488-2432-8283-4908;E;28.3;28.3;11;;4;30849
115;p-12488-2432-8329-4908;E;18.4;18.4;11;;4;30849
116;p-12488-2432-8393-4908;E;17.8;17.8;11;;4;30849
117;p-12488-2432-8434-4908;E;19.6;19.6;11;;4;30849
118;p-12488-2432-8470-4908;E;57.7;44.1;11;124;4;30849
119;p-12488-2432-8589-4908;E;20.6;;11;125;4;30849
120;p-12488-2432-8836-5810;(anonymous);12.4;;2;126;87;5065
121;p-12488-2432-2002-798;t.loadAnimation;20.3;0.4;5;127;2;17592
122;p-12488-2432-6476-2119;r.<computed>;59.5;;9;128;0;1755
123;p-12488-2432-7825-2050;(anonymous);16.4;;12;129;0;1294
124;p-12488-2432-8563-5663;t;13.6;0.6;11;130;7;20756
125;p-12488-2432-8589-5690;t;20.6;20.6;11;;7;27901
126;p-12488-2432-8836-5811;M;12.4;;2;131;59;77953
127;p-12488-2432-2003-800;AnimationItem.setParams;19.9;;5;132;2;2158
128;p-12488-2432-6476-2120;v;59.5;;9;133;0;223
129;p-12488-2432-7825-2051;dispatch;16.4;;2;134;87;5478
130;p-12488-2432-8564-5665;insertBefore;13.1;;11;135;14;1685
131;p-12488-2432-8836-5812;o;12.4;0.1;2;136;59;73051
132;p-12488-2432-2003-801;AnimationItem.setupAnimation;19.9;;5;137;2;3453
133;p-12488-2432-6476-2121;h;59.5;;9;138;0;306
134;p-12488-2432-7825-2052;(anonymous);16.4;16.4;2;;59;82105
135;p-12488-2432-8564-5666;e;13.1;13.1;11;;14;1967
136;p-12488-2432-8837-5813;(anonymous);12.3;;2;139;59;73187
137;p-12488-2432-2003-802;completeAnimation;19.9;;5;140;1;18754
138;p-12488-2432-6476-2122;(anonymous);59.5;-10.9;9;141;0;1812
139;p-12488-2432-8837-5814;produce;12.3;12.3;2;;67;7137
140;p-12488-2432-2003-803;postMessage;19.9;;5;142;1;12506
141;r-38562;Function call;70.4;70.4;1;;15;23933
142;p-12488-2432-2003-804;(anonymous);19.9;0.8;5;143;1;12818
143;p-12488-2432-2005-809;postMessage;19.1;;5;144;1;12547
144;p-12488-2432-2005-810;e.onmessage;19.1;;5;145;1;18229
145;p-12488-2432-2005-811;AnimationItem.configAnimation;19.1;;5;146;2;7069
146;p-12488-2432-2005-812;AnimationItem.waitForFontsLoaded;19.1;;5;147;2;7904
147;p-12488-2432-2005-813;AnimationItem.checkLoaded;19.1;19.1;5;;2;8084

IMPORTANT: Never show eventKey to the user.

The following are markdown block(s) of code that ran in the page, each representing a separate function. <FUNCTION_START> and <FUNCTION_END> marks the exact function declaration, and everything outside that is provided for additional context. Comments at the end of each line indicate the runtime performance cost of that code. Do not show the user the function markers or the additional context.

Here is the first line of 3 relevant functions:

register @ webpack://proton-lumo/node_modules/refractor/core.js:62:0
```
module.exports = refract
```

__webpack_require__ @ webpack://proton-lumo/webpack/bootstrap:4:0
```
function __webpack_require__(moduleId) {
```

(anonymous) @ https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js:1706:6
```
(e, t, a) {
```

# Bottom-up main thread summary

This is the bottom-up summary for the entire trace. Only the top 20 activities (sorted by self time) are shown. An activity is all the aggregated time spent on the same type of work. For example, it can be all the time spent in a specific JavaScript function, or all the time spent in a specific browser rendering stage (like layout, v8 compile, parsing html). "Self time" represents the aggregated time spent directly in an activity, across all occurrences. "Total time" represents the aggregated time spent in an activity or any of its children.

- self: 274 ms, total: 274 ms, source: Compile script
- self: 153 ms, total: 1,595 ms, source: Task
- self: 137 ms, total: 495 ms, source: Function call
- self: 116 ms, total: 159 ms, source: e (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 1967)
- self: 61 ms, total: 61 ms, source: Recalculate style
- self: 54 ms, total: 687 ms, source: Run microtasks
- self: 48 ms, total: 322 ms, source: u (url: https://lumo.proton.me/assets/static/runtime.d25c3f19.js, line: 0, column: 65)
- self: 25 ms, total: 25 ms, source: Major GC
- self: 21 ms, total: 21 ms, source: Layout
- self: 20 ms, total: 20 ms, source: type (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 377)
- self: 16 ms, total: 16 ms, source: Minor GC
- self: 16 ms, total: 16 ms, source: removeChild
- self: 16 ms, total: 16 ms, source: Layerize
- self: 16 ms, total: 19 ms, source: setAttribute
- self: 15 ms, total: 15 ms, source: appendChild
- self: 13 ms, total: 13 ms, source: objId (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 14, column: 449)
- self: 13 ms, total: 209 ms, source: E (url: https://lumo.proton.me/assets/static/syntax-highlighter.2ed09ccb.chunk.js, line: 4, column: 30849)
- self: 13 ms, total: 13 ms, source: Paint
- self: 12 ms, total: 12 ms, source: C++ GC
- self: 10 ms, total: 10 ms, source: setTimeout

# Third parties

- name: proton.me, main thread time: 1,025 ms, network transfer size: 2.9 MB
- name: Adobe Acrobat: PDF edit, convert, sign tools, main thread time: 30 ms, network transfer size: 0 B

# Related insights

Here are all the insights that contain some related event from the main thread in the given range.

- ThirdParties: Evaluate script (eventKey: r-3847, ts: 6211839688), Compile script (eventKey: r-3848, ts: 6211839698), ScriptCatchup (eventKey: r-3850, ts: 6211839805), (anonymous) (eventKey: p-12488-2432-975-4, ts: 6211839923), Evaluate script (eventKey: r-3855, ts: 6211840050)
- ForcedReflow: Recalculate style (eventKey: r-28864, ts: 6212822585), Recalculate style (eventKey: r-30339, ts: 6212914331), Recalculate style (eventKey: r-30584, ts: 6212924562), Layout (eventKey: r-30600, ts: 6212924682), Recalculate style (eventKey: r-32340, ts: 6212960557)
This is the result of calling getInsightDetails('NAVIGATION_1', 'CLSCulprits'):
## Insight Title: Layout shift culprits

## Insight Summary:
Cumulative Layout Shifts (CLS) is a measure of the largest burst of layout shifts for every unexpected layout shift that occurs during the lifecycle of a page. This is a Core Web Vital and the thresholds for categorizing a score are:
- Good: 0.1 or less
- Needs improvement: more than 0.1 and less than or equal to 0.25
- Bad: over 0.25

## Detailed analysis:
The worst layout shift cluster was the cluster that started at 1,108 ms and ended at 3,663 ms, with a duration of 2,555 ms.
The score for this cluster is 0.7747.

Layout shifts in this cluster:
### Layout shift 1:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,108 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 2:
- Impacted elements:
  - P class='color-weak ml-5'

- Start time: 1,816 ms
- Score: 0.0005
- No potential root causes identified
### Layout shift 3:
- Impacted elements:
  - DIV

- Start time: 2,658 ms
- Score: 0.3413
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).
### Layout shift 4:
- Impacted elements:
  - DIV class='progressive-markdown-content markdown-rendering'
  - DIV class='lumo-code-block-copy-source min-w-0'

- Start time: 2,663 ms
- Score: 0.4325
- Potential root causes:
  - An unsized image (IMG) (url: blob:https://lumo.proton.me/53d2ab0b-ad3c-43c9-ac4a-00e963febbff (eventKey: s-48582, ts: 6213733541)).

## Estimated savings: none

## External resources:
- https://developer.chrome.com/docs/performance/insights/cls-culprit
- https://web.dev/articles/cls
- https://web.dev/articles/optimize-cls
````

### Answer

To optimize your site's performance, you should focus on stabilizing the layout and reducing the JavaScript execution time that blocks the main thread.

### 1. Stabilize Layout Shifts (CLS)
The page has a **Bad** CLS score of 0.77. The visual instability is primarily caused by elements shifting as media and dynamic content load.

**Root Causes**:
*   **Unsized Media**: The largest shift was caused by an [unsized image](#s-48582) (a blob URL). This single element triggered layout shifts starting at 2,658 ms, contributing to a combined shift score of over 0.77.
*   **Dynamic Content Insertion**: The [Markdown rendering container](#node-1356) shifted significantly as content was injected via JavaScript.
*   **Font Loading**: Multiple font files ([Inter-Bold.woff2](#s-5379), [Inter-Regular.woff2](#s-5352)) were loaded with high priority. The switch from fallback fonts to these web fonts likely caused text re-flow.

**Suggestions**:
*   **Set Explicit Dimensions**: Assign `width` and `height` attributes (or a CSS `aspect-ratio`) to the image and its parent container to reserve space before the blob loads.
*   **Optimize Fonts**: Use `font-display: swap` in your CSS. Additionally, use font descriptors to match the fallback font's size to the web font, minimizing the shift during the swap.

### 2. Reduce Content Render Delay (LCP)
The [LCP element](#node-1356) (a text block) took 2,445 ms to render. While the network was fast, the **Element Render Delay** was 2,001 ms due to heavy main thread congestion.

**Root Causes**:
*   **Main Thread Blocking**: A [220 ms long task](#r-45873) was dominated by code in [runtime.d25c3f19.js](#s-3552), preventing the browser from painting the content.
*   **Syntax Highlighting Overhead**: The script [syntax-highlighter.2ed09ccb.chunk.js](#s-6593) spent 116 ms executing its `e` function, which delayed the final render of the code block.
*   **Script Compilation**: Over 274 ms was spent just on **Compile Script**, particularly for large bundles like [2948.8582ba5c.chunk.js](#s-3562).

**Suggestions**:
*   **Defer Syntax Highlighting**: Load and execute the syntax highlighter only after the main page content is visible.
*   **Break Up Long Tasks**: Use `requestIdleCallback` or small `setTimeout` delays in your runtime and highlighting scripts to allow the browser to perform paints between execution blocks.
*   **Improve Code Splitting**: Reduce the size of your initial JavaScript bundles to lower the compilation and evaluation time required before the first paint.