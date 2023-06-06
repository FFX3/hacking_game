<script lang="ts">
	import type { User } from '@supabase/supabase-js';
	import { onMount } from 'svelte/internal';
    import 'xterm/css/xterm.css'
	import { supabase } from '@database'
	import { createTerminal } from './Terminal';
    let user: User | null
    let terminalEl: HTMLElement | null
    onMount(async () => {
        user = (await supabase.auth.getUser()).data.user
        if(terminalEl && user){
            const terminal = createTerminal(terminalEl, user)
        }
    })
</script>

    <div class="p-5 bg-surface-900 opacity-80 card w-min">
        <div class="" bind:this={terminalEl}></div>
    </div>