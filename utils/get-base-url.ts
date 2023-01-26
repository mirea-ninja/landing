import process from "process";

export function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return ''
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`
    }
    // if (process.env.NODE_ENV === 'production') {
    //     return process.env.HOST
    // }
    if (process.env.NODE_ENV === 'development') {
        return process.env.HOST || 'http://localhost:3000'
    }
}