import{a as d,S as p,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="53658397-297125985b6b4c55411510f4b",y="https://pixabay.com/api/";async function h(o){try{return(await d.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error(t),t}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const{webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:i,downloads:m}=o;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${t}" alt="${a}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b>${e}</p>
        <p class="info-item"><b>Views</b>${r}</p>
        <p class="info-item"><b>Comments</b>${i}</p>
        <p class="info-item"><b>Downloads</b>${m}</p>
      </div>
    </li>
  `}function w(o){const t=o.map(L).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}function v(){l.innerHTML=""}function q(){u.classList.remove("is-hidden")}function S(){u.classList.add("is-hidden")}const f=document.querySelector(".form"),c=f.elements["search-text"];f.addEventListener("submit",async o=>{o.preventDefault();const t=c.value.trim();if(!t){n.warning({message:"Please enter a search query.",position:"topRight"});return}v(),q();try{const s=await h(t);if(s.hits.length===0){n.error({message:"No images found. Try another search.",position:"topRight"});return}w(s.hits)}catch(s){console.error(s),n.error({message:"Error fetching images.",position:"topRight"})}finally{S(),c.value=""}});
//# sourceMappingURL=index.js.map
