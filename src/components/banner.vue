<template lang="pug">
    .banner
        .banner-descr
            .nav
                .nav-logo
                    a.nav-logo-brand
                        img(src="assets/images/balance_logo.svg")
                .nav-menu
                    ul.nav-menu-items
                        li.menu-item
                            P отделка
                        li.menu-item
                            P архитектура
                        li.menu-item
                            P планировки
            .text
                transition(name="fade")
                    p(v-if="currentSlide==0") {{ descrSlide[0] }}
                    p(v-else-if="currentSlide==1") {{ descrSlide[1] }}
                    p(v-else="currentSlide==2") {{ descrSlide[2] }}
            .footer
                p жк &#8226; balance м. рязанский проспект
        .banner-slider
            .banner-slider-view
                transition(name="fade")
                    img(:src="getCurrentImage")

            img.banner-slider-prev(src="assets/images/arrow-left-huge.svg")
                
            img.banner-slider-next(src="assets/images/arrow-right-huge.svg")


</template>

<script>
export default {
    data () {
        return {
            currentSlide: 0,
            descrSlide:[
                `thanks good, эпоха евроремонта, пластмассового золота и стиля «дорого-богато» закончилась.
                живи в квартирах с минималистично отделкой в прогрессивных жилых кварталах balance.
                никаких расписных обоев и дверных ручек со стразами - только однотонные стены, ламинат, керамогранит и сантехника vitra.`,
                `архитектура жилых кварталов balance максимально лаконичная. мода на украшения быстро меняется, но нас это не коснется.
                мы поставили себе задачу  построить здание, которое будет выглядеть всегда актуально, поэтому используем вечные материалы,
                кирпич, стекло, алюминий.`,
                `те, кто жил в квартирах с кухней-гостиной, ни на что другое уже не согласны. потому что большое общее пространство - кайф.
                там собирается вся семья и друзья: кто-то выбирает фильм для просмотра, кто-то вносит последние штрихи в коронное блюдо, 
                а кто-то пока проверяет  ленту Инстаграма – никто не скучает, потому что все вместе.`
            ]
        }
    },
    computed: {
        getCurrentImage() {
            if (this.currentSlide == 2 ) return 'assets/images/balance_pic_03.jpg'
            else if (this.currentSlide == 1 ) return 'assets/images/balance_pic_02.jpg'
            else return 'assets/images/balance_pic_01.jpg'
        }
    },
    methods: {

    }
}
</script>
