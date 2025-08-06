import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Veda Multispeciality Clinic',
        short_name: 'Veda Clinic',
        description: "Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons , orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.",
        start_url: '/',
        display: 'standalone',
        background_color: '#fe1024',
        theme_color: '#fe1024',
        icons: [
            {
                src: "icons/-48x48.png",
                sizes: "48x48",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-72x72.png",
                sizes: "72x72",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-96x96.png",
                sizes: "96x96",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-128x128.png",
                sizes: "128x128",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-144x144.png",
                sizes: "144x144",
                type: "image/png",
                purpose: 'any'
            },
            {
                src: "icons/-152x152.png",
                sizes: "152x152",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-256x256.png",
                sizes: "256x256",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-384x384.png",
                sizes: "384x384",
                type: "image/png",
                purpose: 'maskable'
            },
            {
                src: "icons/-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: 'maskable'
            }
        ],
        screenshots: [
            {
                src: 'screenshots/home.png',
                type: 'image/png',
                sizes: '540x720',
                form_factor: 'narrow'
            },
            {
                src: 'screenshots/home-desktop.png',
                type: 'image/png',
                sizes: '1280x720',
                form_factor: 'wide'
            }
        ]

    }
}