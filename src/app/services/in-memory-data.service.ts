import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MusicItem } from '../models/music-item.model';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    // tslint:disable-next-line:typedef
    createDb() {
        const musicGenres = [
            { id: 1, name: 'HipHop' },
            { id: 2, name: 'Rock' },
            { id: 3, name: 'Trap' },
            { id: 4, name: 'Pop' }
        ];
        const musicItems = [
            {
                id: 1,
                name: 'BLAME IT ON BABY',
                price: 12,
                madeBy: 1,
                picture: 'https://media.pitchfork.com/photos/5e9de95a2071a50008c2bd34/1:1/w_600/Blame%20It%20On%20Baby_DaBaby.jpg',
                author: 'DaBaby',
                releaseDate: '17.04.2020',
                awards: 'Grammy 2020',
                genre: 'HipHop',
                rate: 5,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_nCnatM3STUpWy0-uql6Suj56PiNp8sNiA'
            },
            {
                id: 2,
                name: 'BABY ON BABY',
                price: 10,
                madeBy: 1,
                picture: 'https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_600/Dababy_BabyOnBaby.jpg',
                author: 'DaBaby',
                releaseDate: '01.03.2019',
                awards: '/',
                genre: 'HipHop',
                rate: 5,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_l_lgVRsxYdfIIM1-RVrEKzSygQuphEsWE'
            },
            {
                id: 3,
                name: 'ASTROWORLD',
                price: 15,
                madeBy: 3,
                picture: 'https://images-na.ssl-images-amazon.com/images/I/81hMEx3kLqL._SL1200_.jpg',
                author: 'Travis Scott',
                releaseDate: '03.08.2018',
                awards: 'BET Award 2019',
                genre: 'Trap',
                rate: 5,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_m6xt1ZipEd_hALlmTOFY6S9OORu5LqPqc'
            },
            {
                id: 4,
                name: '17',
                price: 10,
                picture: 'https://media.pitchfork.com/photos/59a73b170f1e570bad6cc33f/1:1/w_600/17_xxx.jpg',
                author: 'XXXTentacion',
                releaseDate: '25.08.2017',
                awards: '/',
                genre: 'HipHop',
                rate: 5,
                madeBy: 1,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_lPZ2RMEqcRCzOqTw1ujpXxQgaM5JxJYBk'
            },
            {
                id: 5,
                name: 'AFTER HOURS',
                price: 13,
                madeBy: 4,
                picture: 'https://www.musicumpire.co.uk/wp-content/uploads/2020/04/After-Hours_The-Weeknd.jpg',
                author: 'The Weeknd',
                releaseDate: '20.03.2020',
                awards: 'Grammy 2020',
                genre: 'Pop/HipHop',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_lwaD8UXRautA8W9eWT4zZOvwf5Ktxpax8'
            },
            {
                id: 6,
                name: 'PRIORITETI',
                price: 13,
                madeBy: 3,
                picture: 'https://images.genius.com/d4518c8deb67c1ff5ca148a86b22c38e.1000x1000x1.jpg',
                author: 'Klinac',
                releaseDate: '06.01.2020',
                awards: '/',
                genre: 'HipHop/Trap',
                rate: 3,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_mZILtH0Zk54QpF0LS5qqsE95HWUQe8WX8'
            },
            {
                id: 7,
                name: 'SCORPION',
                price: 15,
                madeBy: 1,
                picture: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg',
                author: 'Drake',
                releaseDate: '29.05.2018',
                awards: '/',
                genre: 'HipHop',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_nxmoDMMD7YOXBekv9Pt-55UoMI0tKDlyU'
            },
            {
                id: 8,
                name: 'ETERNAL ATAKE',
                price: 13,
                madeBy: 3,
                picture: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Eternal_Atake_Lil_Uzi_Vert.jpg',
                author: 'Lil Uzi Vert',
                releaseDate: '06.03.2020',
                awards: '/',
                genre: 'Trap',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_mZ1EaZRbTVvWNl_LZKNSzI3hviTLYUmmM'
            },
            {
                id: 9,
                name: 'LEGENDS NEVER DIE',
                price: 15,
                madeBy: 3,
                picture: 'https://consequenceofsound.net/wp-content/uploads/2020/07/juice-wrld-legends-never-die-album-artwork-cover.jpg?quality=80',
                author: 'Juice Wrld',
                releaseDate: '10.07.2020',
                awards: '/',
                genre: 'HipHop/Trap',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_mJNb--E_-M1DREIcO8mmGsiKkgII_2eSw'
            },
            {
                id: 10,
                name: 'BAD VIBES FOREVER',
                price: 13,
                madeBy: 1,
                picture: 'https://images-na.ssl-images-amazon.com/images/I/81mXQE0tfML._SX466_.jpg',
                author: 'XXXTentacion',
                releaseDate: '06.12.2019',
                awards: '/',
                genre: 'HipHop/Rock',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_l_jXPU7octqI8qVddbzoZaWSD43_RUC8w'
            },
            {
                id: 11,
                name: 'ADHD',
                price: 11,
                madeBy: 1,
                picture: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Joyner_Lucas_-_ADHD.jpg',
                author: 'Joyner Lucas',
                releaseDate: '25.03.2020',
                awards: '/',
                genre: 'HipHop',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_kT53ojUGPiVma-YdrZHdDrUOcxwEUD37I'
            },
            {
                id: 12,
                name: 'HOLLYWOODs BLEEDING',
                price: 15,
                madeBy: 3,
                picture: 'https://upload.wikimedia.org/wikipedia/en/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png',
                author: 'Post Malone',
                releaseDate: '06.09.2019',
                awards: '/',
                genre: 'HipHop/Pop/Rock',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_mX9d9zsFckvzZEXQtDpdjnMdeZJrV9Wnc'
            },
            {
                id: 13,
                name: 'HOTEL DIABLO',
                price: 13,
                madeBy: 1,
                picture: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Machine_Gun_Kelly_-_Hotel_Diablo.png',
                author: 'Machine Gun Kelly',
                releaseDate: '05.07.2019',
                awards: '/',
                genre: 'HipHop/Rock',
                rate: 3,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_k1XhlFSND0DMJHx7oMey5IAdEUff1AAsc'
            },
            {
                id: 14,
                name: 'MUSIC TO BE MURDERED BY',
                price: 15,
                madeBy: 1,
                picture: 'https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
                author: 'Eminem',
                releaseDate: '17.01.2020',
                awards: '/',
                genre: 'HipHop',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_nyPpHefgBGBt_CgAaqT3PV6BLxh_tU59s',
            },
            {
                id: 15,
                name: 'SKINS',
                price: 15,
                madeBy: 1,
                picture: 'https://images-na.ssl-images-amazon.com/images/I/71McYDxpVLL._SL1500_.jpg',
                author: 'XXXTentacion',
                releaseDate: '07.12.2018',
                awards: '/',
                genre: 'HipHop/Rock',
                rate: 4,
                link: 'https://www.youtube.com/playlist?list=OLAK5uy_m5riLsB5iVpADmWfHmzkFNc8QGBWwBkWM'
            }

        ];
        const topRating = [
            {
                id: 1,
                name: 'DaBaby',
                picture: 'https://www.refinery29.com/images/9134010.jpg',
                album: 'Baby On Baby',
                awards: '/',
                genre: 'HipHop',
                rating: 5
            },
            {
                id: 2,
                name: 'Montana Of 300',
                picture: 'https://www.thefamouspeople.com/profiles/images/montana-of-300-2.jpg',
                album: 'Pray for the Devil',
                awards: '/',
                genre: 'HipHop',
                rating: 5
            },
            {
                id: 3,
                name: 'XXXTentacion',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: '?',
                awards: '/',
                genre: 'Trap',
                rating: 5
            },
            {
                id: 4,
                name: 'Post Malone',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: 'Hoolywoods bleeding',
                awards: '/',
                genre: 'Pop',
                rating: 4.96
            },
            {
                id: 5,
                name: 'Machine Gun Kelly',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: 'Hotel Diablo',
                awards: '/',
                genre: 'HipHop/Rock',
                rating: 4.83
            },
            {
                id: 6,
                name: 'Juice WRLD',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: 'Legends Never Die',
                awards: '/',
                genre: 'HipHop/Trap',
                rating: 4.81
            },
            {
                id: 7,
                name: 'Travis Scott',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: 'ASTROWORLD',
                awards: '/',
                genre: 'Trap',
                rating: 4.74
            },
            {
                id: 8,
                name: 'The Weeknd',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: 'After Hours',
                awards: '/',
                genre: 'Pop',
                rating: 4.70
            },
            {
                id: 9,
                name: 'Pop Smoke',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: 'Meet the Woo',
                awards: '/',
                genre: 'HipHop',
                rating: 4.69
            },
            {
                id: 10,
                name: 'Drake',
                picture: 'https://www.espreso.rs/data/images/2016/05/30/15/30599_fox_ff.jpg',
                album: 'Scorpion',
                awards: '/',
                genre: 'HipHop',
                rating: 4.20
            },

        ];
        return { musicItems, musicGenres, topRating };
    }
}

