<script lang="ts">
    let currentMessage = ''
    let textarea: HTMLTextAreaElement
</script>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
	<button class="input-group-shim">+</button>
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0 resize-none"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
        bind:this={textarea}
        on:input={() => {
            if(textarea) {
                textarea.style.height = textarea.scrollHeight + 'px'
                if(!currentMessage) {
                    textarea.style.height = 'unset'
                }
            }
        }}
	/>
	<button class="variant-filled-primary">Send</button>
</div>
					