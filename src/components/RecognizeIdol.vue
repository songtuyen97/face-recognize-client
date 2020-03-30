<template>
  <div class="container">
      <div class="sidebar">
          <div class="sidebar__content">
              <div class="sidebar__content__img__container">
                  <img src="https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt="Image idol" 
                    class="sidebar__content__img"
                  >
              </div>
              <div class="sidebar__content__info__container">
                  <p class="sidebar__content__nickname">Song tuyen</p>
                  <p class="sidebar__content__email">Songtuyen@gmail.com</p>
                  <p class="sidebar__content__age">23</p>
              </div>
          </div>
      </div>
      <div class="content">
          <div class="content__image__container" :class="{'animation__image': imageUploadingStatus}">
                <img v-if="imgUrl" :src="imgUrl" alt="" class="content__image">
          </div>
          
          <div class="content__upload-button__container">
              <label class="content__upload-button" for="uploadfile">
                  <!-- <img v-if="imageUploadingStatus" src="https://i.ya-webdesign.com/images/loading-gif-png-5.gif" alt="" width="100%" height="100%"> -->
                  <span v-if="imageUploadingStatus">Loading...</span>
                  <span v-else >Upload</span>
              </label>
              <input id="uploadfile" type="file" class="display-none" @change="uploadFile">
          </div>
          <div v-if="showLoadingGif" class="content__loading_contianer">
              <img src="https://cdn.dribbble.com/users/225707/screenshots/2958729/attachments/648705/straight-loader.gif" alt="" width="100%" height="100%"
              >
          </div>
          <div v-else class="content__info_container">
              <span>{{info.length ? info[0].label : null}}</span>
          </div>

      </div>
      <div class="footer">
          <p class="footer__designed">designed by ST</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            imageUploadingStatus: false,
            imgUrl: null,
            info: [],
        }
    },
    computed: {
        showLoadingGif() {
            if(this.imageUploadingStatus && this.info.length === 0) {
                return true;
            }
            return false;
        }
    },
    methods: {
        uploadFile(event) {
            console.log(event.target.files);
            this.imageUploadingStatus = true;

            this.imgUrl = URL.createObjectURL(event.target.files[0])

            // call api
            let formData = new FormData();
            formData.append('images', event.target.files[0]);
            axios.post('http://localhost:3000', formData, {headers: null})
            .then(resolve=> {
                this.info.push(resolve.data);
                console.log(this.info[0].label);
            })
            .catch(reject=> {
                console.log(reject);
            })
        }
    }
}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}
.display-none {
    display: none;
}
.sidebar {
    float: left;
    width: 30%;
    /* background-color: black; */
    height: 95vh;
}
.content {
    float: left;
    width: 70%;
    /* background-color: red; */
    height: 95vh
}
.footer {
    clear: both;
    position: relative;
    /* background-color: blue; */
    height: 5vh;
    /* align-items: center;
    justify-content: center; */
    /* padding: auto 100px; */
}
.footer__designed {
    font-size: 12px;
    font-style: initial;
    color: black
}
@media all and (max-width: 765px) {
    .sidebar {
        float: none;
        display: block;
        width: 100%;
        height: 20vh;
        padding: 5%;
        box-sizing: border-box;
    }
    .content {
        float: none;
        display: block;
        width: 100%;
        height: 75vh;
    }
    .sidebar__content {
        background-color: rgb(238, 238, 238);
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .sidebar__content__img__container {
        position: relative;
        /* box-sizing: content-box; */
    }
    .sidebar__content__img {
        position: absolute;
        left: 0;
        top: 7vh;
        margin-left: 20px;
        margin-top: -35px;
        border-radius: 40px;
        height: 70px;
        width: 70px;
    }
    .sidebar__content__info__container {
        /* vertical-align: middle; */
        position: relative;
    }
    .sidebar__content__nickname {
        position: absolute;
        top: 3vh;
        left: 40%;
        font-weight: 800;
        font-size: 20px;
    }
    .sidebar__content__email {
        position: absolute;
        top: 7vh;
        left: 50%;
        font-size: 12px;
    }
    .sidebar__content__age {
        position: absolute;
        top: 10vh;
        left: 40%;
        font-size: 12px;
        background-color: green;
        padding: 5px;
        border-radius: 30px;
        color: white
    }
    /* content */
    .content__image__container {
        height: 20vh;
        width: 20vh;
        margin: 0 auto;
        border: 2px solid #e8e8e8;
        border-radius: 10px;
    }
    .animation__image {
        position: relative;
        animation-name: image--anima;
        animation-duration: 4s;
        animation-fill-mode: both;
    }
    .content__image {
        height: 20vh;
        width: 20vh;
        border: 2px solid #e8e8e8;
        border-radius: 10px;
    }

    .content__upload-button__container {
        /* margin-top: 20px; */
        background-color: aqua;
        width: 30%;
        padding: 10px;
        margin: 20px auto;
        border-radius: 10px;
        box-shadow: 1px 1px 8px black;
    }

    .content__upload-button {
        padding: 5px;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
    }
    @keyframes image--anima {
        0%   {left:0px; top:0px;}
        100%  {left:0px; top:100px;}
    }

    .animation__zoom-in-out {
        position: relative;
        animation-name: image--zoom--anima;
        animation-duration: 4s;
        animation-delay: 4s;
        /* animation-fill-mode: both; */
    }
    @keyframes image--zoom--anima {
        0%   {transform: scale(0.1);}
        100%  {transform: scale(2);}
    }

    .content__info_container {
        padding: 30px;
    }
}
</style>