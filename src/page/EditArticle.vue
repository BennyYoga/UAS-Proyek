<template>
    <div class="background-cover">
        <center>
            <img src="@/assets/LOGO.svg" class="logo-editor">
        </center>
        <div class="background">
            <form v-on:submit.prevent="addDataArticle">
                <div class="container">
                    <div class="row pt-3">
                        <div class="col-sm-8">
                            <div class="mb-3 side-font">
                                <label for="TitleContent" class="form-label">Judul Artikel</label>
                                <input type="text" class="form-control" id="TitleContent" placeholder=""
                                    v-model="dataEditor.judul_artikel">
                            </div>
                            <!-- <input type="text" v-model="dataEditor.title" placeholder="Judul"> -->
                            <div class="document-editor">
                                <div class="document-editor__toolbar"></div>
                                <div class="document-editor__editable-container">
                                    <div class="document-editor__editable">
                                        <div id="app">
                                            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"
                                                @ready="onReady">
                                            </ckeditor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-4">
                            <div class="side-input">
                                <p class="side-font">Pilih Cover</p>
                                <div class="input-group mb-3">
                                    <input type="file" ref="file" @change="uploadFile" class="form-control"
                                        id="inputGroup-sizing-sm">
                                </div>
                                <hr>

                                <p class="side-font">Deskripsi Artikel</p>
                                <div class="form-floating">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 100px"
                                            v-model="dataEditor.deskripsi_artikel"></textarea>
                                    </div>
                                </div>
                                <hr>


                                <p class="side-font">Pilih Kategori</p>
                                <div class="input-group mb-3">
                                    <select class="form-select" id="inputGroupSelect01"
                                        v-model="dataEditor.id_kategori">
                                        <option v-for="opsi in kategoriArtikel" :key="opsi.id" value=1>
                                            {{ opsi.nama_kategori }}</option>
                                    </select>
                                </div>


                                <hr />
                                <p class="side-font">Tag</p>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here"
                                        id="floatingTextarea2" style="height: 100px" disabled></textarea>
                                </div>
                                <hr />

                                <router-link :to="{ name: 'PreviewArtikel', params: { ArticleData : `${editorData}` } }">
                                    <button type="button" class="btn btn-outline-primary">
                                        Preview
                                    </button>
                                </router-link>

                                <button type="button" class="btn btn-outline-primary" disabled>
                                    Simpan
                                </button>
                                <!-- <button class="btn btn-primary" type="submit">button Submit</button> -->

                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    Submit
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Simpan Perubahan
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Apakah Anda Ingin Menyimpan Perubahan dan menimpa perubahan anda
                                                sebelumnya??
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button class="btn btn-primary" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

export default {
    name: 'EditArticle',
    data() {
        return {
            dataSampe: "",
            kategoriArtikel: "",
            editor: DecoupledEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: `http://localhost:5000/${this.sample_id}`
                },
                ckfinder: {
                    // The URL that the images are uploaded to.
                    uploadUrl: `http://localhost:5000/artikel/draft/upload/${this.sample_id}`,
                    // Enable the XMLHttpRequest.withCredentials property.
                    withCredentials: true,
                }
            },
            dataEditor: {
                // id_artikel: null,
                // id_user: null,
                id_kategori: "",
                // id_status_artikel: null,
                // id_akses_baca: 1,
                // id_akses_komentar: 1,
                // id_tag: [
                //     1,
                //     2,
                //     3
                // ],
                cover_artikel: null,
                judul_artikel: "",
                deskripsi_artikel: "",
                isi_artikel: "",
                catatan_editor: "",
                // waktu_draft: null,
                // waktu_publish: null,
                // created_at: null,
                // updated_at: null

                data_artikel: "",
                sample_id: ""
            }
        };
    },
    mounted() {

        try {
            if (this.$route.params.id == null || this.$route.params.id == undefined || this.$route.params.id == "") {
                axios.post("http://localhost:5000/artikel/draft", this.data_artikel)
                    .then((response) => {
                        this.sample_id = response.data.data.id_artikel
                    })
            }
            else {
                this.sample_id = this.$route.params.id
            }
            axios.get("http://localhost:5000/kategori")
                .then((response) => {
                    this.kategoriArtikel = response.data.data
                })
            axios.get(`http://localhost:5000/artikel/draft/${this.sample_id}`)
                .then((response) => {
                    this.dataEditor.judul_artikel = response.data.data.judul_artikel
                    this.dataEditor.deskripsi_artikel = response.data.data.deskripsi_artikel
                    this.editorData = response.data.data.isi_artikel
                })
        }
        catch (error) {
            console.log(error.message);
        }
    },
    methods: {
        uploadFile() {
            this.dataEditor.cover_artikel = this.sample_id;
        },
        onReady(editor) {
            // Insert the toolbar before the editable area.
            editor.ui.getEditableElement().parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
            );
        },
        addDataArticle: function () {
            try {
                alert("Data Berhasil Diinputkan")
                this.dataEditor.isi_artikel = this.editorData
                const headers = { "Content-Type": "multipart/form-data" }
                axios.patch(`http://localhost:5000/artikel/draft/${this.sample_id}`, this.dataEditor, { headers })
                    .then(response => {
                        this.dataEditor = [...this.dataEditor, response.data]
                    })
                    .catch(error => {
                        if (error.response) {
                            alert(error.response.data.message)
                        }
                    })
            }
            catch (error) {
                console.log("error");
            }
        },
        makeRandomId: function () {
            // program to generate random strings
            const result = Math.random().toString(36).substring(2, 7);
            return result;
        },
        getNowDate: function () {
            let date = new Date();
            let current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            let date_time = current_date + " " + current_time;
            return date_time
        }
    }
}
</script>

<style>
.document-editor {
    border: 1px solid var(--ck-color-base-border);
    border-radius: var(--ck-border-radius);

    /* Set vertical boundaries for the document editor. */
    max-height: 700px;

    /* This element is a flex container for easier rendering. */
    display: flex;
    flex-flow: column nowrap;
}

.document-editor__toolbar {
    /* Make sure the toolbar container is always above the editable. */
    z-index: 1;

    /* Create the illusion of the toolbar floating over the editable. */
    box-shadow: 0 0 5px hsla(0, 0%, 0%, .2);

    /* Use the CKEditor CSS variables to keep the UI consistent. */
    border-bottom: 1px solid var(--ck-color-toolbar-border);
}

/* Adjust the look of the toolbar inside the container. */
.document-editor__toolbar .ck-toolbar {
    border: 0;
    border-radius: 0;
}

/* Make the editable container look like the inside of a native word processor application. */
.document-editor__editable-container {
    /* padding: calc(2 * var(--ck-spacing-large)); */
    /* background: var(--ck-color-base-foreground); */
    background-color: rgb(225, 225, 225);

    /* Make it possible to scroll the "page" of the edited content. */
    overflow-y: scroll;

}

.document-editor__editable-container .ck-editor__editable {
    /* Set the dimensions of the "page". */

    width: 15.8cm;
    min-height: 21cm;

    /* Keep the "page" off the boundaries of the container. */
    padding: 1cm 2cm 2cm;

    border: 1px hsl(0, 0%, 82.7%) solid;
    border-radius: var(--ck-border-radius);
    background: white;

    /* The "page" should cast a slight shadow (3D illusion). */
    box-shadow: 0 0 5px hsla(0, 0%, 0%, .1);

    /* Center the "page". */
    margin: 0 auto;
}

/* Set the default font for the "page" of the content. */
.document-editor .ck-content,
.document-editor .ck-heading-dropdown .ck-list .ck-button__label {
    font: 16px/1.6 "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 20px auto;
}

/* Adjust the headings dropdown to host some larger heading styles. */
.document-editor .ck-heading-dropdown .ck-list .ck-button__label {
    line-height: calc(1.7 * var(--ck-line-height-base) * var(--ck-font-size-base));
    min-width: 6em;
}

/* Scale down all heading previews because they are way too big to be presented in the UI.
Preserve the relative scale, though. */
.document-editor .ck-heading-dropdown .ck-list .ck-button:not(.ck-heading_paragraph) .ck-button__label {
    transform: scale(0.8);
    transform-origin: left;
}

/* Set the styles for "Heading 1". */
.document-editor .ck-content h2,
.document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label {
    font-size: 2.18em;
    font-weight: normal;
}

.document-editor .ck-content h2 {
    line-height: 1.37em;
    padding-top: .342em;
    margin-bottom: .142em;
}

/* Set the styles for "Heading 2". */
.document-editor .ck-content h3,
.document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label {
    font-size: 1.75em;
    font-weight: normal;
    color: hsl(203, 100%, 50%);
}

.document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label {
    color: var(--ck-color-list-button-on-text);
}

/* Set the styles for "Heading 2". */
.document-editor .ck-content h3 {
    line-height: 1.86em;
    padding-top: .171em;
    margin-bottom: .357em;
}

/* Set the styles for "Heading 3". */
.document-editor .ck-content h4,
.document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label {
    font-size: 1.31em;
    font-weight: bold;
}

.document-editor .ck-content h4 {
    line-height: 1.24em;
    padding-top: .286em;
    margin-bottom: .952em;
}

/* Set the styles for "Paragraph". */
.document-editor .ck-content p {
    font-size: 1em;
    line-height: 1.63em;
    padding-top: .5em;
    margin-bottom: 1.13em;
}

/* Make the block quoted text serif with some additional spacing. */
.document-editor .ck-content blockquote {
    font-family: Georgia, serif;
    margin-left: calc(2 * var(--ck-spacing-large));
    margin-right: calc(2 * var(--ck-spacing-large));
}

/* SiderBar--------------------------------------------------------------------------------- */
.navbar {
    height: 30px;
    width: 100%;
    background-color: #309C9F;
}

.form-control:focus {
    border-color: #ff80ff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(255, 100, 255, 0.5);
}

* {
    font-family: Arial, Helvetica, sans-serif;
}

.background-cover {
    background-color: #309C9F;
    padding-top: 10px;

}

.logo-editor {
    width: 120px;
    padding-bottom: 10px;
}

.background {
    background-color: white;
    border-radius: 50px 50px 0 0;
}


.article-page {
    background-color: #309C9F;
    margin: 0 auto;
}

.article {
    background: #E5E5E5;

}

.right-bar {
    background: #fff;
}

.button-group {
    top: 10%;
    padding: 20px;
}

.btn {
    padding: 1px 4px;
    margin: 5px;
    border-radius: 100px;
}

.card-side {
    border-radius: 0;
    border: 0 0 1px 1px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
}

.preview-pict-side {
    transform: matrix(1, 0, 0, -1, 0, 0);
}

.side-font {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #727272;
}

.floatingTextarea2 {
    border: 1px solid #727272;
    border-radius: 5px;
    width: 100%;
    height: 185px;
}

.side-input {
    width: 100%;
    margin: 0 40px;
}

.btn {
    width: 100%;
}

@media only screen and (max-width: 720px) {
    .side-input {
        width: 100%;
        margin: 0px;
    }
}
</style>