import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'
import { store } from '@store'

const storeAdapter = {
    setItem: (key: any, value: any)=>{
        store.set(key as string, value)
    },
    getItem: async (key: string)=>{
        return await store.get(key) as string | null
    },
    removeItem: (key: string) => { store.delete(key) }
}

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>('https://ydnavdfgmssujficffym.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkbmF2ZGZnbXNzdWpmaWNmZnltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4MzA4MjEsImV4cCI6MjAwMTQwNjgyMX0.EkJWofPZqhc-Q9ez_pQUddpyKwk6tHW9Z78fInFf7Z4', {
    auth: {
        storage: storeAdapter,
    },
})
