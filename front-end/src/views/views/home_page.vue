<template>
<div class = "home_page">
  <div class="header">
    <h1>Teigen's Book Reviews</h1>
  </div>
  <div class="box">
    <div class="display_box">
      <img src='../assets/LOTR.jpg'>
    </div>
    <div class="display_box">
      <img src='../assets/Farseer.jpg'>
    </div>
    <div class="display_box">
      <img src='../assets/Mistborn.jpg'>
    </div>
  </div>
  <div class="text">
  <p> Armadillos meaning "little armoured ones" in Spanish are New World placental mammals in the order Cingulata. The Chlamyphoridae and Dasypodidae are the only surviving families in the order, which is part of the superorder Xenarthra, along with the anteaters and sloths. Nine extinct genera and 21 extant species of armadillo have been described, some of which are distinguished by the number of bands on their armour. All species are native to the Americas, where they inhabit a variety of different environments.</p>
  </div>
  <div class="footer">
    <p><a href="https://github.com/Temmues/Creative_project_3"> Git </a></p>
  </div>
</div>
</template>





<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #CC1228;
  color: white;
  text-align: center;
}

.box
{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}



.display_box > p
{
  padding-top: 25px;
  padding-bottom: 50px;
  font-family: 'Courier Prime',sans-serif;
}

img
{
  max-width: 100%;
  max-height: 100%;
}

</style>
