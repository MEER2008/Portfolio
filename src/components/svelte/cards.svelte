<script>
    import Astronaut from "../Img/astronaut-ingravity.png"
    let Array = [
        {
            "Title": "Portfolio",
            "Desc": "The website you are on right now.",
            // "Img": "../Img/astronaut-ingravity.png",
            "Link": "https://rangerdevv.github.io/"
        },
        {
            "Title": "Hello",
            "Desc": "The website you are not right now.",
            // "Img": "../Img/Img.png",
            "Link": "rangerdevv.github.io"
        },
        {
            "Title": "NoMoCo",
            "Desc": "The website you destroyed.",
            // "Img": "../Img/Img.png",
            "Link": "rangerdevv.github.io"
        },
        {
            "Title": "ChoMo",
            "Desc": "The website you are on right now.",
            // "Img": "../Img/astronaut-ingravity.png",
            "Link": "https://rangerdevv.github.io/"
        },
        {
            "Title": "HeHOMAllo",
            "Desc": "The website you are not right now.",
            // "Img": "../Img/Img.png",
            "Link": "rangerdevv.github.io"
        },
        {
            "Title": "123DD",
            "Desc": "The website you destroyed.",
            // "Img": "../Img/Img.png",
            "Link": "rangerdevv.github.io"
        },
    ]
    let C1No = 0
    let C2No = 1
    let C3No = 2

    let Card1Title = Array[C1No].Title
    let Card1Desc = Array[C1No].Desc
    // let Card1Img = Array[C1No].Img
    let Card1Link = Array[C1No].Link

    let Card2Title = Array[C2No].Title
    let Card2Desc = Array[C2No].Desc
    // let Card2Img = Array[C2No].Img
    let Card2Link = Array[C2No].Link

    let Card3Title = Array[C3No].Title
    let Card3Desc = Array[C3No].Desc
    // let Card3Img = Array[C3No].Img
    let Card3Link = Array[C3No].Link

    function Prev(){
        C1No--
        Card1Title = Array[C1No].Title
        Card1Desc = Array[C1No].Desc
        // let Card1Img = Array[C1No].Img
        Card1Link = Array[C1No].Link
        C2No--
        Card2Title = Array[C2No].Title
        Card2Desc = Array[C2No].Desc
        // let Card2Img = Array[C2No].Img
        Card2Link = Array[C2No].Link
        C3No--
        Card3Title = Array[C3No].Title
        Card3Desc = Array[C3No].Desc
        // let Card3Img = Array[C3No].Img
        Card3Link = Array[C3No].Link
    }
    function Next(){
        C1No++
        Card1Title = Array[C1No].Title
        Card1Desc = Array[C1No].Desc
        // let Card1Img = Array[C1No].Img
        Card1Link = Array[C1No].Link
        C2No++
        Card2Title = Array[C2No].Title
        Card2Desc = Array[C2No].Desc
        // let Card2Img = Array[C2No].Img
        Card2Link = Array[C2No].Link
        C3No++
        Card3Title = Array[C3No].Title
        Card3Desc = Array[C3No].Desc
        // let Card3Img = Array[C3No].Img
        Card3Link = Array[C3No].Link
    }
</script>

<main class="w-screen h-screen">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 place-items-center">
        <div class="flex flex-col justify-center w-72 h-72 bg-slate-900 gap-3 outline outline-4 outline-blue-600/60 outline-offset-2 rounded-xl hover:outline-cyan-600">
            <div class="flex justify-center">
                <img src={Astronaut} alt="ProjImg" width="100px" height="100px">
            </div>
            <p class=" text-center text-sm text-white">{Card1Title}</p>
            <p class=" text-center text-sm text-white">{Card1Desc}</p>
            <a class=" text-center text-sm text-white" href={Card1Link}><button class=" w-16 h-10 bg-blue-600 rounded-lg">Link</button></a>
        </div>
        <div class="flex flex-col justify-center w-80 h-96 bg-slate-900 gap-6 outline outline-4 outline-blue-600/60 outline-offset-2 rounded-xl hover:outline-cyan-600">
            <div class="flex justify-center">
                <img src={Astronaut} alt="ProjImg" width="150px" height="150px">
            </div>
            <p class=" text-center text-xl text-white">{Card2Title}</p>
            <p class=" text-center text-xl text-white">{Card2Desc}</p>
            <a class=" text-center text-xl text-white" href={Card2Link}><button class=" w-20 h-12 bg-blue-600 rounded-lg">Link</button></a>
        </div>
        <div class="flex flex-col justify-center w-72 h-72 bg-slate-900 gap-3 outline outline-4 outline-blue-600/60 outline-offset-2 rounded-xl hover:outline-cyan-600">
            <div class="flex justify-center">
                <img src={Astronaut} alt="ProjImg" width="100px" height="100px">
            </div>
            <p class=" text-center text-sm text-white">{Card3Title}</p>
            <p class=" text-center text-sm text-white">{Card3Desc}</p>
            <a class=" text-center text-sm text-white" href={Card3Link}><button class=" w-16 h-10 bg-blue-600 rounded-lg">Link</button></a>
        </div>
    </div>
    <div class="flex justify-center flex-row gap-5 pt-5">
        <button class=" text-white text-4xl" on:click={Prev}>⇽</button>
        <button class=" text-white text-4xl" on:click={Next}>⇾</button>
    </div>
</main>