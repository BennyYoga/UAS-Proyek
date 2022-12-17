<template>
    <div class="row my-3">
        <button class="btn light btn-tosca m-auto pb-1 text-start ps-3 fs-6" type="button" @click="speak()"
            style="width:90%">
            <img class="my-auto" src="../assets/play.svg" alt=""> Dengarkan...
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            speakData: {
                synth: window.speechSynthesis,
                validation: false,
            },
        };
    },
    props: ['articleData'],
    methods: {
        speak() {
            if (this.speakData.synth.speaking) {
                console.error("speechSynthesis.speaking");
                this.speakData.synth.cancel();
                return;
            }

            if (this.articleData.isi_artikel !== "") {
                this.speakData.validation = false;
                const data =
                    "Judul : " +
                    this.articleData.judul_artikel +
                    "\n\n\n" +
                    "Deskripsi : " +
                    this.articleData.deskripsi_artikel +
                    "\n\n\n" +
                    "Isi : " +
                    this.articleData.isi_artikel;
                let sInstance = new SpeechSynthesisUtterance(data);
                sInstance.lang = "id-ID";
                sInstance.pitch = "1.0";
                this.speakData.synth.speak(sInstance);
            } else {
                this.speakData.validation = true;
            }
        },
    },
}
</script>

<style scoped>
.btn {
    padding: 3px 2px;
    border-radius: 15px;
    font-size: 12px;
}

.btn-tosca {
    background: #309C9F;
    border-color: #309C9F;
    color: white;
}

.btn-tosca:active {
    border-color: #309C9F;
}

.btn-tosca:hover {
    color: black;
    border-color: black;
    background: white;
}
</style>
