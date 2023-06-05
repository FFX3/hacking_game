import { store } from '@store'
// @ts-ignore
import bashEmulator from 'bash-emulator'

export const createBashEmulator = async (stateKey = 'bashEmulator') => {
    const state = JSON.parse(await store.get(stateKey) ?? '{}')
    const bash = bashEmulator(state)

    const saveSate = async () => {
        return await store.set(stateKey, bash.state)
    }
    
    const emulator = {
        bash,
        saveSate
    }

    return emulator
}