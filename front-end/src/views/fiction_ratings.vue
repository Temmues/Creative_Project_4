<template>
  <div>
    <div id="top">
      <h1> Number of Ratings: {{reviews.length}}</h1>
    </div>
    <div class="review_list" v-for="book in reviews" :key="book.name">
      <div class="display">
        <div id="left">
          <h2> {{ book.title }}</h2>
          <h2>Author: {{book.author}}</h2>
          <h2>Rating: {{book.rating}} </h2>
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
              <button v-on:click="book.rating = newR + '/10'"> Submit </button>
              <button v-on:click="delete_r(book)">Remove</button>
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
import axios from 'axios';
export default{

data(){
   return {
      reviews: [],
      newR: "",
   }
},
created() {
  this.getItems();
},
methods: {
async delete_r(review){
    console.log(review._id)
try {
      await axios.delete("/api/book_data/" + review._id);
      this.getItems();
      return true;
    } catch (error) {
      console.log(error);
    }
},
async getItems() {
    try {
      let response = await axios.get("/api/book_data");
      console.log(response);
      this.reviews = response.data;
      return true;
    } catch (error) {
      console.log(error);
    }
  },
},
computed:
  {
    r_avg: function ()
    {
      var total = 0;
      this.reviews.forEach(function (review)
      {
          var num = review.rating.substr(0, review.rating.indexOf('/'));
          console.log(num);
          total += parseInt(num);
      });
      if(this.reviews.length === 0)
      {
        return 0;
      }
      var r_avg = total/this.reviews.length;
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
