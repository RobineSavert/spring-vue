<template>
    <div style="display: none;">
        <Popover :id="'popover-code'">
            <template v-slot:body>
                <a href="https://github.com/RobineSavert" target="_blank" class="flex items-center w-full h-12 px-3 rounded hover:bg-basket hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span class="ml-2 text-sm font-extrabold font-quicksand">GitHub</span>
                </a>
                <a href="https://stackshare.io/RobineSavert/my-stack" target="_blank" class="flex items-center w-full h-12 px-3 rounded hover:bg-basket hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span class="ml-2 text-sm font-extrabold font-quicksand">My stack</span>
                </a>
                <a href="https://www.behance.net/robinesavert" target="_blank" class="flex items-center w-full h-12 px-3 rounded hover:bg-basket hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span class="ml-2 text-sm font-extrabold font-quicksand">Behance</span>
                </a>
            </template>
        </Popover>

        <Popover :id="'popover-cv'">
            <template v-slot:body>
                <a href="src/assets/files/CV.pdf" target="_blank" class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-basket hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="ml-2 text-sm font-extrabold font-quicksand">Resume PDF</span>
                </a>
                <a href="src/assets/files/CV.docx" target="_blank" class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-basket hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="ml-2 text-sm font-extrabold font-quicksand">Resume DOCX</span>
                </a>
                <a href="https://www.dropbox.com/s/zvkvz7o56d6rrtd/CV-RobineSavert-EN.odt?dl=0" target="_blank" class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-basket hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="ml-2 text-sm font-extrabold font-quicksand">Resume ODT</span>
                </a>
            </template>
        </Popover>

        <Popover :id="'popover-contact'">
            <template v-slot:body>
                <div class="flex items-center w-full h-12 px-3 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="ml-2 text-sm font-quicksand font-extrabold">robine@hotmail.nl</span>
                </div>
                <div class="flex items-center w-full h-12 px-3 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="ml-2 text-sm font-quicksand font-extrabold">0031 (0)6 57 26 19 61</span>
                </div>
                <a href="https://www.linkedin.com/in/robine-s-369675114/" target="_blank" class="flex items-center w-full h-12 px-3 rounded hover:bg-basket hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span class="ml-2 text-sm font-extrabold font-quicksand">LinkedIn</span>
                </a>
            </template>
        </Popover>

        <Popover :id="'popover-strawberry1'">
           <template v-slot:title>
               Design &amp; Wireframing
           </template>
           <template v-slot:stars>
               <div class="py-3 mt-2 border-t border-pink">
                   <div class="grid grid-cols-2 gap-4">
                       <div>
                           <div class="flex flex-row items-center font-quicksand font-extrabold">
                               <p class="mr-2 font-bold">Illustrator</p>
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                           </div>
                       </div>

                       <div>
                           <div class="flex flex-row items-center font-quicksand font-extrabold">
                               <p class="mr-2">Photoshop</p>
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                           </div>
                       </div>
                       <div>
                           <div class="flex flex-row items-center font-quicksand font-extrabold">
                               <p class="mr-2">Balsamiq</p>
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                           </div>
                       </div>
                       <div>
                           <div class="flex flex-row items-center font-quicksand font-extrabold">
                               <p class="mr-2">Figma</p>
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                           </div>
                       </div>
                       <div>
                           <div class="flex flex-row items-center font-quicksand font-extrabold">
                               <p class="mr-2">XD</p>
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                               <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                           </div>
                       </div>
                       <div>
                           <div class="flex flex-row items-center font-quicksand font-extrabold">
                               <p class="mr-2">InDesign</p>
                               <span class="text-night">-</span>
                           </div>
                       </div>
                   </div>
               </div>
           </template>
           <template v-slot:body>
               <div class="flex flex-col w-full border-t border-pink justify-center text-center">
                   <p class="py-3 font-quicksand text-sm font-bold">
                       I
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                       </svg>
                       to design layouts, apps, dashboards &amp;amp; interfaces! You can also trust me with creating wireframes and optimised user flows.
                   </p>
                   <img src="../assets/img/cookie.svg" alt="tree" class="w-10 h-10 mx-auto" />
               </div>
           </template>
       </Popover>

        <Popover :id="'popover-strawberry2'">
            <template v-slot:title>
                Code
            </template>
            <template v-slot:stars>
                <div class="py-3 mt-2 border-t border-pink">
                    <div class="grid grid-cols-2 gap-4">
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">JS</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">SCSS</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">HTML</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">Vue</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">Bootstrap/Tailwind</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">Webpack</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                </div>
                </div>
            </template>
            <template v-slot:body>
                <div class="flex flex-col w-full border-t border-pink justify-center text-center">
                    <p class="py-3 font-quicksand text-sm font-bold">
                        From Vue 3 (or 2) to making custom themes for e-commerce or Wordpress, I can do it all! My strong points are architecture &amp; refactoring, but I love new projects as well. For more information, <a href="https://stackshare.io/RobineSavert/my-stack" target="_blank" class="text-night">check out my tech stack</a>.
                    </p>
                    <img src="../assets/img/cake.svg" alt="" class="w-10 h-10 mx-auto" />
                </div>
            </template>
        </Popover>

        <Popover :id="'popover-strawberry3'">
            <template v-slot:title>
                Open Source
            </template>
            <template v-slot:stars>
                <div class="py-3 mt-2 border-t border-pink">
                    <div class="grid grid-cols-2 gap-4">
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">Wordpress</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">OpenCart</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">Prestashop</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">WooCommerce</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">Custom themes</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center font-quicksand font-extrabold">
                            <p class="mr-2">Shopify</p>
                            <img src="../assets/img/star.svg" alt="star" class="w-3 h-3 mr-0.5" />
                        </div>
                    </div>
                </div>
                </div>
            </template>
            <template v-slot:body>
                <div class="flex flex-col w-full border-t border-pink justify-center text-center">
                    <p class="py-3 font-quicksand text-sm font-bold">
                        Ever since Wordpress first came out, I have been a big fan of open source projects &amp; if I am not familiar with it, I will find out how to get it done!
                    </p>
                    <img src="../assets/img/flower.svg" alt="flower" class="w-8 h-8 mx-auto" />
                </div>
            </template>
        </Popover>

        <Popover :id="'popover-book-left'">
            <template v-slot:title>
                Hi
            </template>
            <template v-slot:body>
                <div class="flex flex-col w-full border-t border-pink justify-center text-center">
                    <p class="py-3 font-quicksand text-sm font-bold">
                        My name is Robine &amp; I am a creative frontend developer!
                        <br/>
                        <br/>
                        I <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                        winter time, my daughter, working remote, tea &amp; writing beautiful code.
                        <br />
                        <br />
                        Please, click around in my world &amp; don't forget to answer my phone!
                    </p>
                    <img src="../assets/img/watermelon.svg" alt="stardust" class="w-10 h-10 mx-auto" />
                </div>
            </template>
        </Popover>

        <Popover :id="'popover-me'">
            <template v-slot:title>
                Hire Me
            </template>
            <template v-slot:body>
                <img src="../assets/img/bunting.svg" alt="stardust" class="w-40 h-30 mx-auto" />
                <p class="pt-3 font-quicksand text-sm font-extrabold text-center">
                    Yes, you clicked me!
                    <br />
                    Send me <a href="mailto:robine@hotmail.nl?subject=Let's%20chat!&body=Loved%20your%20portfolio,%20let's%20chat!" class="text-night">a message</a> today &amp; who knows, we might be meeting online soon!
                </p>
            </template>
        </Popover>

        <Popover :id="'popover-bread'">
            <template v-slot:body>
                <p class="py-3 font-quicksand text-sm font-extrabold text-center">
                    Sorry, I don't do anything, I'm just a baquette!
                </p>
            </template>
        </Popover>

    </div>
</template>
<script setup>
import Popover from "./Popover.vue";
</script>