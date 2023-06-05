
<script lang="ts">
	//for skeleton UI
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { supabase } from '@database';
    import type { User } from "@supabase/supabase-js"

    let user: User | null

    onMount(async() => {
        const isUserValid = false
        try {
            const { data: { user: _user } } = await supabase.auth.getUser()
            user = _user
        } catch (e) {
            console.error(e)
        }

        const currentLocation = window.location.pathname
        const publicRoutes = [
            '/auth/sign-in',
        ]
        console.log(currentLocation)
		console.log(!isUserValid, !publicRoutes.includes(currentLocation))
        if(!user && !publicRoutes.includes(currentLocation)){
            console.log('redirecting')
            await goto("/auth/sign-in")
        }
    })
</script>

<div class="app h-full bg-surface-500">
    <div id="gradient-background"></div>
    <slot {user} />
</div>
