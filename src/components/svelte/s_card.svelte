<script lang="ts">

    export let Title:string
    export let Desc:string
    export let Link:string
    export let Path:string

</script>
<div>
    <div class="flex flex-col justify-center w-80 h-96 bg-slate-900 gap-6">
        <div class="flex justify-center">
            <img src={Path} alt="ProjImg" width="150px" height="150px">
        </div>
        <p class=" text-center text-xl text-white">{Title}</p>
        <p class=" text-center text-xl text-white">{Desc}</p>
        <a class=" text-center text-xl text-white" href={Link}><button class=" w-20 h-12 bg-blue-600 rounded-lg">Link</button></a>
    </div>
</div>