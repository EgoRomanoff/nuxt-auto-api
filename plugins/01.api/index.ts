import { API, HttpClient } from "./model/api";

export default defineNuxtPlugin({
    name: 'api',
    order: 1,
    async setup (_) {
        const { isServer } = useProcess();

        const apiFetcher = $fetch.create({
            retry: false,

            async onRequest(ctx) {
                const { request, options } = ctx;

                const headers = new Headers(options.headers);
                headers.set('x-session-id', 'test-session-id');

                options.headers = headers;

                if (isServer) {

                }
            },

            async onResponse(ctx) {
                if (isServer) {

                }
            },
        });

        const client = new HttpClient({
            // baseUrl: 'https://jsonplaceholder.typicode.com',
            customFetch: apiFetcher,
        });
        const api = new API(client);

        return {
            provide: {
                api,
            },
        };
    }
});