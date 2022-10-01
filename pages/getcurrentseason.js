import Head from "next/head"

export default function getCurrentSeason({ data }) {
    return (
        <div>
            <Head>
                <title>Current Season</title>
            </Head>
            <h1 className="m-10 text-5xl font-mono font-bold">Current Season</h1>
            <div class="grid grid-cols-2 gap-3">
                {
                    data.anime.map((anime) => {
                        return (
                            <div class="h-96 flex justify-center">
                                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                                    <img class="object-cover h-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={anime.image_url} alt="" />
                                    <div class="p-6 flex flex-col justify-start">
                                        <h5 class="text-gray-900 text-xl font-medium mb-2">{anime.title}</h5>
                                        <p class="text-gray-700 text-base mb-4">
                                            {anime.synopsis}
                                        </p>
                                        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4e27e569a2msh2f815e192cb3dccp143b29jsn2b89fc527643',
            'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
        }
    };

    // Fetch data from external API
    const res = await fetch('https://jikan1.p.rapidapi.com/season/2022/fall', options)
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } }
}