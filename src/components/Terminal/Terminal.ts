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

    let newBufferPrefix = `${user?.id.split('-')[0]}@lotus-os:-$ `

    xtermInstance.open(terminalEl)

    const emulator = await createBashEmulator()

    const bufferHistory = {
        history: [] as string[],
        index: -1,
    }

    const getBuffer = () => {
        return bufferHistory.history[bufferHistory.index]
    }

    const setBuffer = (buffer: string) => {
        bufferHistory.history[bufferHistory.index] = buffer
    }

    xtermInstance.onKey(({key, domEvent}) => {
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
            if(bufferHistory.index - 1 > -1){
                --bufferHistory.index
                for(let c=0; c<100; c++){
                    xtermInstance.write("\b \b")
                }
                xtermInstance.write(newBufferPrefix)
                xtermInstance.write(getBuffer())
            }
        } else if(domEvent.key === 'ArrowDown') {
            domEvent.stopPropagation()
            if(bufferHistory.index + 1 < bufferHistory.history.length){
                ++bufferHistory.index
                for(let c=0; c<100; c++){
                    xtermInstance.write("\b \b")
                }
                xtermInstance.write(newBufferPrefix)
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
        xtermInstance.writeln('')
        xtermInstance.write(newBufferPrefix)
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

