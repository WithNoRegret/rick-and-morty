<template>
  <div id="app">
    <header class="header">
      <h1>Rick and Morty Characters</h1>
    </header>
    <main class="main">
      <FiltersComponent @search="handleSearch" />
      <CharacterCardList :cards="cards" />
    </main>
  </div>
</template>

<script>
import CharacterCardList from './components/CharacterCardList.vue';
import FiltersComponent from './components/FiltersComponent.vue';
import { fetchApi } from './helpers/fetchApi';

export default {
  name: 'App',
  components: {
    CharacterCardList,
    FiltersComponent
  },
  data() {
    return {
      cards: []
    };
  },
  mounted() {
    this.handleSearch({ name: '', status: '' });
  },
  methods: {
    async handleSearch(filters) {
      try {
        const data = await fetchApi(filters);
        this.cards = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>