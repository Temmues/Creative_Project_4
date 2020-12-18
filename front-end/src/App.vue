<template>
<div>
  <div id = "page_links">
    <router-link to="/">
    <a>Home</a>
    </router-link>
    <router-link to="/fiction_ratings">
    <a>Ratings</a>
    </router-link>
    <router-link to="/new_rating">
    <a>New-Rating</a>
    </router-link>
  </div>
  <router-view />
</div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #CC1228;
  color: white;
  text-align: center;
}

.display_box
{
  margin: 5px;
  width: 400px;
  height: 500px;
  text-align: center;
  color: black;
  font-size: 24px;
  font-family: 'Courier Prime', monospace;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #CC1228;
}

h1
{
  font-family: 'Aclonica';
  font-size: 45px;
  padding: 40px;
  text-align: center;
}

#page_links
{
  background-color: #CC1228;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Aclonica';
  font-size: 25px;
}

#page_links > a
{
  color: inherit;
  margin: 10px;
}

a:link {
  text-decoration: none;
}


.text
{
  margin: 60px;
  text-align: left;
  padding-bottom: 50px;
}

.text > p
{
  font-size: 25px;
  font-family: 'Courier Prime',sans-serif;
}
</style>
