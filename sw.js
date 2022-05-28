
//Nombre y version de la cache

const CACHE_NAME = 'programacion_movil_2';

//ficheros para agragar a la cache

var urlsToCache=[
    './',
    './css/styles.css',
    './img/pc.png',
    './img/whastsapp.png',
    './img/camara.png',
    "./img/favicon1024.png",
    "./img/favicon512.png",
    "./img/favicon256.png",
    "./img/favicon192.png",
    "./img/favicon128.png",
    "./img/favicon96.png",
    "./img/favicon64.png"
];

//eventos install
self.addEventListener('install',e =>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() => {
                self.skipWaiting();
            });
        })
        .catch(err => {
            console.log('no se ha registrado la cache',err);
        })
    );
});

//evento activate
self.addEventListener('activate', e => {
    const cacheWhitelist =[CACHE_NAME];

        e.waitUntil(
            caches.keys()
            .then(cacheNames =>{
                return Promise.all(
                    cacheNames.map(cacheName=>{
                        if (cacheWhitelist.indexOf(cacheName) ===-1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(()=>{
                self.clients.claim();
            })
            
        );
});
//evento fetch

self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                return res;
            }
            return fetch(e.request);
        })
    )
});