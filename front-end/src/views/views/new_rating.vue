<template>
  <div id="new_ratingt">
    <h1>New Rating</h1>
    <form>
      Title <input v-model="new_name"/> <br>
      Author <input v-model="new_author"/> <br>
      Rating:
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
      <button v-on:click="add({Title: new_name, Author: new_author, Rating: newR + '/10'})"> Submit </button>
    </form>
    <div class="footer">
      <p><a href="https://github.com/Temmues/Creative_project_3"> Git </a></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
methods:
{
  async add(review)
  {
    try {
      await axios.post('/api/book_data', {
          title: review.title,
          author: review.author,
          rating: review.rating,
      });
      this.$root.$data.books.push(review);
      var node = document.createElement("H1");
      node.innerHTML = "New review added!";
      document.getElementById("new_ratingt").appendChild(node);
    } catch (error) {
      console.log(error);
    }
  }
}

}
</script>
<style scoped>
#new_ratingt
{
  text-align: center;
  padding: 15px;
  color: black;
  font-size: 24px;
  font-family: 'Courier Prime', monospace;
}
</style>
