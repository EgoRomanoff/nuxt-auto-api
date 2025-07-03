export default defineNuxtPlugin((_nuxtApp) => {
    const { isServer } = useProcess();
    // const config = useRuntimeConfig();

    const api = $fetch.create({
        baseURL: '/',
        retry: false,

        async onRequest(ctx) {
            // const { request, options } = ctx;

            // options.headers = {
            //     ...Object.fromEntries(options.headers),
            //     ...(requestId && requestId),
            //     // @ts-ignore
            //     'x-domain-id': String(domainId.value),
            //     ...(sessionId.value ? { 'x-session-id': sessionId.value } : {}),
            // };

            if (isServer) {
                // let path = withQuery(
                //     joinURL(options.baseURL ?? '', request as string),
                //     {
                //         ...(options.query && options.query),
                //     },
                // );

                // if (options.method === 'POST' && options.body) {
                //     const hash = await sha256(JSON.stringify(options.body));
                //     path = withQuery(path, {
                //         body: hash,
                //     });
                // }

                // _nuxtApp.$metricsState.requests[path] = {
                //     start: Date.now(),
                //     end: Date.now(),
                // };

                // globalThis?.__timing__?.logStart(path); // TODO: https://github.com/unjs/nitro/issues/651
                // startTime(path);
            }
        },

        async onResponse(ctx) {
            // console.log('[ON RESPONSE]');
            // console.log(ctx.options.headers);
            // console.log('[ON RESPONSE END]');

            if (isServer) {
                // console.log(ctx.options.body);

                // const { request, options } = ctx;
                // let path = request as string;
                //
                // if (options.method === 'POST' && options.body) {
                //     const hash = await sha256(options.body as string);
                //
                //     path = withQuery(path, {
                //         body: hash,
                //     });
                // }

                // if (nuxtApp.$metricsState.requests[path]) {
                //     nuxtApp.$metricsState.requests[path].end = Date.now();
                // }

                // globalThis?.__timing__?.logEnd(path); // TODO: https://github.com/unjs/nitro/issues/651
                // endTime(path);
            }
        },
    });

    return {
        provide: {
            api,
        },
    };
});