<script >
import { LottiePlayer } from 'node_modules/@lotteries/svelte-lottie-player';
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

export let Link=string;
</script>

<LottiePlayer
src={Link}
autoplay="{true}"
loop="{true}"
controls="{false}"
renderer="svg"
background="transparent"
height="{350}"
width="{350}"
controlsLayout="{controlsLayout}"
/>