
import { createRouter, createWebHistory } from 'vue-router'

// import CreateArticle from "@/components/CreateArticle.vue"
import EditArtikel from "@/page/EditArticle.vue"
import ProfileKontributor from "@/page/ArticlePage.vue"
import PreviewArtikel from "@/page/PreviewPage.vue"
import LandingPage from "@/page/LandingPage.vue"
import EditProfilePage from "@/page/EditProfilePage.vue"
import Login from "@/page/login-page.vue"
import Register from "@/page/register-page.vue"
import BerandaEditor from "@/page/BerandaEditor.vue"
import ListEditorPage from "@/page/ListEditorPage.vue"
import AkunPenggunaPage from "@/page/AkunPenggunaPage.vue"
import BuatAkunEditorPage from "@/page/BuatAkunEditorPage.vue"
import ListKategoriPage from "@/page/ListKategoriPage.vue"
import BuatKategoriPage from "@/page/BuatKategoriPage.vue"
import EditKategoriPage from "@/page/EditKategoriPage.vue"
import ListPersyaratanPage from "@/page/ListPersyaratanPage.vue"
import ListArtikelPublishPage from "@/page/ListArtikelPublishPage.vue"
import ListArtikelTolakPage from "@/page/ListArtikelTolakPage.vue"
import TolakArtikelPage from "@/page/TolakArtikelPage.vue"
import EditorMenungguReviewPage from "@/page/EditorMenungguReviewPage.vue"
import BuatPersyaratanPage from "@/page/BuatPersyaratanPage.vue"
import EditPersyaratanPage from "@/page/EditPersyaratanPage.vue"
// import login from "@/page/login.vue"
import NotFoundPage from "@/page/PageNotFound.vue"
import Beranda from "@/page/ArticleListPage.vue"

import axios from 'axios'


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
        meta: {
            role: ""
        }
    },
    {
        name: 'Beranda',
        path: '/Artikel',
        component: Beranda,
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
        path: '/Profile',
        component: ProfileKontributor,
        meta: {
            auth: true,
            role: ['Kontributor', 'Pembaca']
        }
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
        meta: {
            auth: true,
            role: ['Kontributor']
        }
    },
    {
        name: 'EditArtikel',
        path: '/Studio/Artikel/edit/:id',
        component: EditArtikel,
        props: true,
        meta: {
            auth: true,
            role: ['Kontributor']
        }
    },
    {
        name: 'PreviewArtikel',
        path: '/Studio/Artikel/Preview',
        component: PreviewArtikel,
        meta: {
            auth: true,
            role: ['Kontributor']
        }
    },


    //Login And Register
    {
        name: 'Login',
        path: '/Login',
        component: Login,
        meta: {
            role: ""
        }
    },
    {
        name: 'Register',
        path: '/Register',
        component: Register,
    },


    // admin-editor
    {
        name: 'BerandaEditor',
        path: '/admin/dashboard',
        component: BerandaEditor,
        meta: {
            auth: true,
            role: ['Administrator']
        }
        // beforeEnter: (to, from, next) => {
        // if (localStorage.getItem('token-front') == null) {
        //     return next({
        //         name: 'Login'
        //     })
        // }
        //     else {
        // let data = "";
        // axios
        //     .get("http://localhost:4000/user/payload/" + localStorage.getItem('token-front'))
        //     .then((response) => {
        //         data = response.data.role;
        //     })
        // if (data != 'Admin') {
        //     return next({
        //         name: 'NotFoundPage'
        //     })
        // }
        //     }
        //     next()
        // }
    },
    {
        name: 'ListArtikelPublishPage',
        path: '/admin/artikel/accept',
        component: ListArtikelPublishPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'ListArtikelTolakPage',
        path: '/admin/artikel/deny',
        component: ListArtikelTolakPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'TolakArtikelPage',
        path: '/admin/tolak/:id_artikel',
        component: TolakArtikelPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'EditorMenungguReviewPage',
        path: '/admin/review',
        component: EditorMenungguReviewPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },


    //admin
    {
        name: 'ListEditorPage',
        path: '/admin/editor',
        component: ListEditorPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'AkunPenggunaPage',
        path: '/admin/pengguna',
        component: AkunPenggunaPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'BuatAkunEditorPage',
        path: '/admin/editor/create',
        component: BuatAkunEditorPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'ListKategoriPage',
        path: '/admin/kategori',
        component: ListKategoriPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'BuatKategoriPage',
        path: '/admin/kategori/create',
        component: BuatKategoriPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'EditKategoriPage',
        path: '/admin/kategori/edit',
        component: EditKategoriPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'ListPersyaratanPage',
        path: '/admin/persyaratan',
        component: ListPersyaratanPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'BuatPersyaratanPage',
        path: '/admin/persyaratan/create',
        component: BuatPersyaratanPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },
    {
        name: 'EditPersyaratanPage',
        path: '/admin/persyaratan/edit',
        component: EditPersyaratanPage,
        meta: {
            auth: true,
            role: ['Administrator']
        }
    },

    //Page Not Found
    {
        name: 'NotFoundPage',
        path: '/NotFoundPage',
        component: NotFoundPage,
        meta: {
            auth: false,
            role: ""
        }
    },
    { 
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
        meta: {
           role: ""
       } 
   },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        if (localStorage.getItem('token-front') == null) {
            return next({
                name: 'Login'
            })
        }
    }
    next()
})

router.beforeEach((to, from, next) => {
    let dataRole = "";
    axios
        .get("http://localhost:4000/user/payload/" + localStorage.getItem('token-front'))
        .then((response) => {
            dataRole = response.data.role;
            if (to.meta.role === "" || dataRole === null) {
                next()
            }
            else if (to.meta.role[0] === dataRole ||
                to.meta.role[1] === dataRole ||
                to.meta.role[2] === dataRole ||
                to.meta.role[3] === dataRole) {
                next()
            } else {
                next({
                    name: 'NotFoundPage'
                })
            }
        })
})


export default router