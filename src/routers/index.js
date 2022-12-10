
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
import axios from 'axios'
// import NotFoundPage from "@/page/PageNotFound.vue"

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
        path: '/Profile',
        component: ProfileKontributor,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('token-front') == null) {
                return next({
                    name: 'Login'
                })
            }
            next()
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



    {
        name: 'Login',
        path: '/Login',
        component: Login,
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
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('token-front') == null) {
                return next({
                    name: 'Login'
                })
            }
            else {
                let data = "";
                axios
                    .get("http://localhost:4000/user/payload/" + localStorage.getItem('token-front'))
                    .then((response) => {
                        data = response.data.role;
                    })
                if (data != 'Admin') {
                    return next({
                        name: 'NotFoundPage'
                    })
                }
            }
            next()
        }
    },
    {
        name: 'ListArtikelPublishPage',
        path: '/admin/artikel/accept',
        component: ListArtikelPublishPage,
    },
    {
        name: 'ListArtikelTolakPage',
        path: '/admin/artikel/deny',
        component: ListArtikelTolakPage,
    },
    {
        name: 'TolakArtikelPage',
        path: '/admin/tolak/:id_artikel',
        component: TolakArtikelPage,
    },
    {
        name: 'EditorMenungguReviewPage',
        path: '/admin/review',
        component: EditorMenungguReviewPage,
    },


    //admin
    {
        name: 'ListEditorPage',
        path: '/admin/editor',
        component: ListEditorPage,
    },
    {
        name: 'AkunPenggunaPage',
        path: '/admin/pengguna',
        component: AkunPenggunaPage,
    },
    {
        name: 'BuatAkunEditorPage',
        path: '/admin/editor/create',
        component: BuatAkunEditorPage,
    },
    {
        name: 'ListKategoriPage',
        path: '/admin/kategori',
        component: ListKategoriPage,
    },
    {
        name: 'BuatKategoriPage',
        path: '/admin/kategori/create',
        component: BuatKategoriPage,
    },
    {
        name: 'EditKategoriPage',
        path: '/admin/kategori/edit',
        component: EditKategoriPage,
    },
    {
        name: 'ListPersyaratanPage',
        path: '/admin/persyaratan',
        component: ListPersyaratanPage,
    },
    {
        name: 'BuatPersyaratanPage',
        path: '/admin/persyaratan/create',
        component: BuatPersyaratanPage,
    },
    {
        name: 'EditPersyaratanPage',
        path: '/admin/persyaratan/edit',
        component: EditPersyaratanPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
