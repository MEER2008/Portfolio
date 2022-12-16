<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
let controlsLayout = [
'previousFrame',
'playpause',
'stop',
'nextFrame',
'progress',
'frame',
'loop',
'spacer',
'background',
'snapshot',
'zoom',
'info',
];
</script>

<LottiePlayer
src="https://assets7.lottiefiles.com/packages/lf20_3rwasyjy.json"
autoplay="{true}"
loop="{true}"
controls="{false}"
renderer="svg"
background="transparent"
height="{350}"
width="{350}"
controlsLayout="{controlsLayout}"
/>