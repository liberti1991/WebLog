import {v4} from "uuid"

import product1 from "../assets/images/product1.png"

import img1 from "../assets/images/product1.1.png"
import img2 from "../assets/images/product1.2.png"
import img3 from "../assets/images/product1.3.png"

import product2 from "../assets/images/product2.png"
import product3 from "../assets/images/product3.png"
import product4 from "../assets/images/product4.png"

export interface Iproducts {
    id: number,
    name: string,
    city: string,
    price: string,
    image: string,
}

const products: Iproducts[] = [
    {
        id: 1,
        name: "Empilhadeira Yale 70Vx 2014",
        city: "Curitiba",
        price: "90.000",
        image: product1,
    },
    {
        id: 2,
        name: "Empilhadeira Toyota 8fg25 2011 ",
        city: "São Paulo",
        price: "80.000",
        image: product2,
    },
    {
        id: 3,
        name: "Empilhadeira Hyster H70Ft, 2014",
        city: "São Paulo",
        price: "110.000",
        image: product3,
    },
    {
        id: 4,
        name: "Empilhadeira Hangcha CPCD25N AG2",
        city: "São Paulo",
        price: "98.950",
        image: product4,
    },
]

export interface ImenuOptions {
    id: string,
    text: string,
    url: string,
}

const menuOptions: ImenuOptions[] = [
    {id: v4(), text: "Empilhadeiras", url: "https://images.unsplash.com/photo-1601593797922-325abb0f763d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYWN0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: v4(), text: "Plataformas elevatórias", url: "https://images.unsplash.com/photo-1618628466141-7222022096ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    {id: v4(), text: "Máquinas pesadas", url: "https://images.unsplash.com/photo-1601593797922-325abb0f763d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYWN0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: v4(), text: "Veículos", url: "https://images.unsplash.com/photo-1618628466141-7222022096ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    {id: v4(), text: "Náutica", url: "https://images.unsplash.com/photo-1601593797922-325abb0f763d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYWN0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: v4(), text: "Estruturas de eventos", url: "https://images.unsplash.com/photo-1618628466141-7222022096ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    {id: v4(), text: "Equipamentos", url: "https://images.unsplash.com/photo-1601593797922-325abb0f763d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYWN0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: v4(), text: "Peças e acessórios", url: "https://images.unsplash.com/photo-1618628466141-7222022096ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    {id: v4(), text: "Ferramentas", url: "https://images.unsplash.com/photo-1601593797922-325abb0f763d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYWN0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: v4(), text: "Serviços", url: "https://images.unsplash.com/photo-1618628466141-7222022096ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    {id: v4(), text: "Créditos e financiamento", url: "https://images.unsplash.com/photo-1601593797922-325abb0f763d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYWN0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id: v4(), text: "Outros", url: "https://images.unsplash.com/photo-1618628466141-7222022096ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
]

export interface Iparceiros {
    id: number,
    title: string,
    url: string,
    city: string
}

const parceiros: Array<Iparceiros> = [
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 1, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/stara-agrofy-logo_1.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 2, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/Logomarca_Comercial_2.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 3, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/taubat_-agrofy-logo.png"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 4, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/nissan-agrofy-logo.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 5, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/stara-agrofy-logo_1.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 6, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/taubat_-agrofy-logo.png"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 7, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/nissan-agrofy-logo.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 8, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/Logomarca_Comercial_2.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 9, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/taubat_-agrofy-logo.png"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 10, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/nissan-agrofy-logo.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 11, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/stara-agrofy-logo_1.jpg"},
    {title: "Reformas E Outros...", city: "Curitiba - PR", id: 12, url: "https://brasil.agrofystatic.com/media/catalog/agroshop/taubat_-agrofy-logo.png"},
]

export { products, img1, img2, img3, menuOptions, parceiros }

