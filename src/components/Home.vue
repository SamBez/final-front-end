<template>
    <v-container>
        <v-row>
                <div class="pa-3 blue--text">
                    <h2> Latest Events</h2>
                </div>
        </v-row>
        <v-row>
            <v-col>     
                <v-card class="pa-3" max-height="800" max-width="350">
                    <div class="pa-3">
                        <h3>Title</h3>
                    </div>
                    <div>
                        <v-img 
                        src="../assets/notice1.jpg" 
                        alt=""
                         height="250"
                        max-width="350"
                        ></v-img>
                    </div>
                    <div class="ma-2">
                     Lorem ipsum dolor sit amet consectetur, 
                     adipisicing elit. Cum inventore ducimus
                      debitis omnis aliquid repudiandae voluptates, 
                     </div>
                    
                    <v-btn outlined class="ml-4 my-4 blue--text" target="_blank">
                        <span>more info</span>
                    </v-btn>
                </v-card>
            </v-col>
            <v-col>     
                <v-card class="pa-3" height="520" max-width="320">

                    <div  class="pa-3"><h3>Title</h3></div>
                 
                    <div>
                        <v-img 
                        src="../assets/notice2.jpg" 
                        alt=""
                         height="250"
                            max-width="350"
                        ></v-img>
                    </div>
                    <div class="ma-2">
                     Lorem ipsum dolor sit amet consectetur, 
                     adipisicing elit. Cum inventore ducimus
                      debitis omnis aliquid repudiandae voluptates, 
                    </div>
                    <v-btn outlined class="ml-4 my-4 blue--text" target="_blank">
                        <span>more info</span>
                    </v-btn>
                </v-card>
            </v-col>
             <v-col>     
                <v-card class="pa-3" height="520" max-width="320">
                    <div class="pa-3"><h3>Title</h3></div>
                     <div>
                        <v-img 
                        src="../assets/notice1.jpg" 
                        alt=""
                         height="250"
                            max-width="350"
                        ></v-img>
                    </div>
                    <div outlined class="ma-2">
                     Lorem ipsum dolor sit amet consectetur, 
                     adipisicing elit. Cum inventore ducimus
                      debitis omnis aliquid repudiandae voluptates, 
                    </div>
                    <v-btn outlined class=" ml-4 my-4 blue--text" target="_blank">
                        <span>more info</span>
                    </v-btn>
                </v-card>
            </v-col>
            <v-col>
                <v-row class="mt-16">
                </v-row>
                 <v-row class="mt-16">
                </v-row>
                <v-row class="mt-16">
                <v-btn elevation="0" plain class="mt-16" color="blue" >
                 <v-icon x-large class="fa fa-angle-right"></v-icon>
                </v-btn>
                </v-row>
            </v-col>
             
        </v-row>
    </v-container>
</template>
<script>
export default {
    name:'Home'
}
</script>