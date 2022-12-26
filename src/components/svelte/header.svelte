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

<header class=" w-screen h-screen">
    <div class=" text-4xl text-white text-center pt-40 grid-cols-3 flex flex-row justify-center gap-6">
      <div class=" hidden sm:block">
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
      </div>
        <p class="w-96 sm:w-screen">Hello ✌️. The name's Ranger. </p>
    <div class=" hidden sm:block">
        <LottiePlayer
        src="https://assets10.lottiefiles.com/packages/lf20_g2r05fgw.json"
        autoplay="{true}"
        loop="{true}"
        controls="{false}"
        renderer="svg"
        background="transparent"
        height="{350}"
        width="{350}"
        controlsLayout="{controlsLayout}"
      />
    </div>
    </div>
    <div class="flex justify-center">
    <button class=" w-32 h-12 bg-transparent rounded-lg text-white font-semibold text-center mt-8 animate-bounce">
        Click to learn more
    </button>
    </div>
</header>