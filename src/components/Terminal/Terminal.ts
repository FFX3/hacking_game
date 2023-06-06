import type { User } from '@supabase/supabase-js'
import { lotus } from './macros/lotus'
import type { Terminal as XTerminal } from 'xterm'
import { createBashEmulator } from './emulator'

export type Terminal = {
    xterm: XTerminal,
    buffer: string,
    prompt: () => void
}

export const createTerminal = async (terminalEl: HTMLElement, user: User): Promise<Terminal> => {
    const xterm = (await import("xterm"))
    const xtermInstance = new xterm.Terminal({
        allowTransparency: true,
        cursorBlink: true,
        theme: {
            background: 'rgba(0, 0, 0, 0)'
        }
    })

    const getNewBufferPrefix = async () => {
        let path = await emulator.bash.getDir()
        if(path.startsWith('/home/user')){
            path = path.replace('/home/user', '~')
        }
        return `${user?.id.split('-')[0]}@lotus-os:${path} $ `
    }

    xtermInstance.open(terminalEl)

    const emulator = await createBashEmulator()

    const bufferHistory = {
        history: [''] as string[],
        index: 0,
    }

    const getBuffer = () => {
        return bufferHistory.history[bufferHistory.index]
    }

    const setBuffer = (buffer: string) => {
        bufferHistory.history[bufferHistory.index] = buffer
    }

    xtermInstance.onKey(async ({key, domEvent}) => {
        let buffer = getBuffer()
        console.log(bufferHistory)
        if(domEvent.key === 'Enter'){
            execute()
        } else if(domEvent.key === 'Backspace') {
            if(buffer.length > 0) {
                setBuffer(buffer.slice(0, buffer.length - 1))
                xtermInstance.write("\b \b")
            }
        } else if(domEvent.key === 'ArrowUp') {
            domEvent.stopPropagation()
            if(bufferHistory.index - 1 > 0){
                --bufferHistory.index
                for(let c=0; c<100; c++){
                    xtermInstance.write("\b \b")
                }
                xtermInstance.write(await getNewBufferPrefix())
                xtermInstance.write(getBuffer())
            }
        } else if(domEvent.key === 'ArrowDown') {
            domEvent.stopPropagation()
            if(bufferHistory.index + 2 < bufferHistory.history.length){
                ++bufferHistory.index
                for(let c=0; c<100; c++){
                    xtermInstance.write("\b \b")
                }
                xtermInstance.write(await getNewBufferPrefix())
                xtermInstance.write(getBuffer())
            }
            // implement
        } else if(domEvent.key === 'Tab') {
            // implement command completion
        } else {
            setBuffer(buffer + key)
            xtermInstance.write(key)
        }
    })

    const execute = async () => {
        const buffer = getBuffer()
        console.log(`prompted: ${buffer}`)
        if(buffer.trim() === ''){
            // do nothing
        } else if(buffer == 'clear'){
            console.log('clearing console')
            xtermInstance.reset()
        } else {
            let result
            try {
                result = await emulator.bash.run(buffer)
            } catch (e) {
                result = e
            }
            console.log(result)
            xtermInstance.writeln('')
            xtermInstance.writeln(result)
        }
        prompt()
    }

    const prompt = async () => {
        xtermInstance.write(await getNewBufferPrefix())
        const buffer = getBuffer()
        if(buffer.trim()) {
            bufferHistory.history.push(getBuffer())
            ++bufferHistory.index
        }
        setBuffer('')
    }

    const terminal = {
        xterm: xtermInstance,
        buffer: '',
        emulator,
        prompt,
        execute
    }

    lotus(terminal)

    return terminal
}

