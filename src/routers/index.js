
import { createRouter,createWebHistory } from 'vue-router'

// import CreateArticle from "@/components/CreateArticle.vue"
import EditArtikel from "@/page/EditArticle.vue"
import ProfileKontributor from "@/page/ArticlePage.vue"
import PreviewArtikel from "@/page/PreviewPage.vue"
import LandingPage from "@/page/LandingPage.vue"
import EditProfilePage from "@/page/EditProfilePage.vue"
// import login from "@/page/login.vue"


const routes = [
    // {
    //     name: 'ArticlePage',
    //     path: '/',
    //     component: ArticlePage
    // },
    // {
    //     name: 'EditArticle',
    //     path: 'studio/artikel/edit',
    //     component: Edit,
    // },
    // {
    //     name: 'EditArticlePage',
    //     path: 'studio/artikel/edit/:id',
    //     component: Edit,
    //     props: true
    // },
    // {
    //     name: 'PreviewPage',
    //     path: '/edit/preview/',
    //     component: PreviewPage,
    //     props: true
    // },
    // {
    //     name: 'edit-article',
    //     path: '/article/edit/:id',
    //     component: EditArticle
    // }


    //Kontributor dan Pembaca

    {
        name: 'LandingPage',
        path: '/',
        component: LandingPage,
    },
    {
        name: 'Beranda',
        path: '/Artikel',
        // component: Beranda,
    },
    {
        name: 'IsiArtikel',
        path: '/Artikel/:id',
        // component: IsiArtikel,
        props: true
        
    },
    {
        name: 'ArtikelKontributor',
        path: '/Artikel/Kontributpr/:id_kontributor',
        // component: ArtikelKontributor,
        props: true
    },
    {
        name: 'ProfileKontributor',
        path: '/User',
        component: ProfileKontributor,
    },
    {
        name: 'EditProfilePage',
        path: '/Profile/Edit',
        component: EditProfilePage,
    },


    //Kontributor
    {
        name: 'BuatArtikel',
        path: '/Studio/Artikel/Buat',
        component: EditArtikel,
    },
    {
        name: 'EditArtikel',
        path: '/Studio/Artikel/edit/:id',
        component: EditArtikel,
        props: true
    },
    {
        name: 'PreviewArtikel',
        path: '/Studio/Artikel/Preview',
        component: PreviewArtikel,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router
