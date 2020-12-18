<template>
  <div>
    <div id="top">
      <h1> Ratings (Ave rating: {{r_avg}})</h1>
    </div>
    <div class="review_list" v-for="book in books" :key="book.name">
      <div class="display">
        <div id="left">
          <h2> {{ book.Title }}</h2>
          <h2>Author: {{book.Author}}</h2>
          <h2>Rating: {{book.Rating}} </h2>
        </div>
        <div class="search">
            <form class="pure-form">
                Edit Rating:
              <select id="n_rating" v-model="newR">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <button v-on:click="book.Rating = newR + '/10'"> Submit </button>
            </form>
        </div>
      </div>
    </div>
    <div class="footer">
      <p><a href="https://github.com/Temmues/Creative_project_3"> Git </a></p>
    </div>
  </div>
</template>


<script>
export default{
computed:
  {
    books()
    {
      return this.$root.$data.books;
    },
    r_avg: function ()
    {
      let books = this.$root.$data.books;
      var total = 0;
      books.forEach(function (item)
      {
          var num = item.Rating.substr(0, item.Rating.indexOf('/'));
          total += parseInt(num);
      });
      var r_avg = total/books.length;
      return r_avg;
    }
  }
}
</script>


<style>
#top
{
  display: flex;
}
.display
{
  margin: 5px;
  color: black;
  font-size: 24px;
  font-family: 'Courier Prime', monospace;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #CC1228;
}

.search
{
  display: flex;
  padding: 10px;
}

#left h2
{
  text-align: left;
  padding: 10px;
}

#right
{
  padding: 10px;
  margin: 20px;
}

</style>
