export interface Movie {
    id: string;
    title: string;
    episodes: number;
    info_url: string;
    watch_url: string;
}

export let movies: Movie[] = [{
    id: '1',
    title: 'Shingeki no Kyojin: The Final Season',
    episodes: 16,
    info_url: 'https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season',
    watch_url: 'https://www12.9anime.to/watch/attack-on-titan-final-season.k524/ep-1'
},
{
    id: '2',
    title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
    episodes: 1,
    info_url: 'https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen',
    watch_url: 'https://demonslayer-anime.com/risshihen/streaming/'
},
{
    id: '3',
    title: 'Start-Up',
    episodes: 16,
    info_url: 'https://asianwiki.com/Start-Up_(Korean_Drama)',
    watch_url: 'https://kissasians.org/detail/start-up-2020/'
}];