<template>
    <section class="about-section">
        <div class="heading">
            <span>about us</span>
            <h3>good quality dishes</h3>
        </div>

        <div class="row">
            <div class="about-content">
                <img src="../assets/images/pizzachef.png" alt="" style="height: 70%">
                <div class="about-content-text">
                    <p>Our Pizza Shop Was Founded By Pham Duc Nguyen and Nguyen Phuc Thinh In 2022 In Vietnam.
                    Thanks To The Support Of Our Customers, Our Brand Has Been Popularized Globally In Most Markets In The World Especially In Vietnam.
                    The Products That We Deliver To Customers Are Always The Best Quality Anh Most Special Products.</p>
                    <p>The Pizza Shop Will Not Serve In-Store, Only Serve Online. So Customers Who Want To Enjoy Then Need To Order.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="about-article">
                <h3>food brings people together</h3>
            </div>
        </div>

        <div class="row gallery">
            <div class="wrapper">
                <img src="../assets/images/pizza/blackpizza.jpg" alt="">
                <img src="../assets/images/pizza/Chicago-Pizza.jpg" alt="">
                <img src="../assets/images/pizza/Neapolitan-Pizza.jpg" alt="">
                <img src="../assets/images/pizza/Sicilian-Pizza.jpg" alt="">
                <img src="../assets/images/pizza/New-York-Style-Pizza.jpg" alt="">
                <img src="../assets/images/dessert/chocolate.jpg" alt="">
                <img src="../assets/images/side/salad.jpg" alt="">
                <img src="../assets/images/side/soup.jpg" alt="">
                <img src="../assets/images/dessert/blackicecream.jpg" alt="">
                <img src="../assets/images/drink/drink-6.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.about-section {
    padding: 2rem 9%;
}

.about-section .about-content {
    display: flex;
    width: 100%;

}

.about-section .about-content img {
    background-color: rgb(249, 249, 249);
}

.about-section .about-content .about-content-text {
    font-size: 16px;
    padding-left: 50px;
}

.about-section .about-article {
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    background-color: #27ae60;
    width: 100%;
}

.about-section .about-article h3 {
    font-family: 'Satisfy', cursive;
    font-size: 32px;
    color: white;
}


.about-section .gallery {
    overflow: hidden;
    padding: 100px;
}

.about-section .gallery .wrapper {
    position: relative;
    flex-grow: 1;
    margin: auto;
    max-width: 1200px;
    max-height: 1200px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
    justify-items: center;
    align-items: center;
}

.about-section .gallery .wrapper img {
    z-index: 1;
    grid-column: span 2;
    max-width: 100%;
    margin-bottom: -52%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transform: scale(1);
    transition: all .25s;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
    grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
    z-index: 2;
    transform: scale(2);
}

@media (max-width: 768px) {
    .about-section .about-content img {
        width: 250px;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2.5);
    }
}

@media (max-width: 576px) {
    .about-section .about-content img {
        width: inherit;
    }

    .about-section .about-content {
        display: block;
    }

    .about-section .about-content .about-content-text {
        padding-left: 0px;
    }

    .about-section .gallery {
        padding: 50px 0px;
    }

    .about-section .gallery .wrapper img {
        max-width: 100%;

    }

    .about-section .gallery .wrapper {
        grid-gap: 2vmin;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2);
    }

}
</style>