<template>
  <div id="app">
    <header class="header">
      <h1>Rick and Morty Characters</h1>
    </header>
    <main class="main">
      <FiltersComponent @search="handleFilter" />
      <CharacterPagination :totalPages="totalPages" @page-changed="handlePagination" />
      <CharacterCardList :cards="cards" />
    </main>
  </div>
</template>

<script>
import CharacterCardList from './components/CharacterCardList.vue';
import FiltersComponent from './components/FiltersComponent.vue';
import CharacterPagination from './components/CharacterPagination.vue';
import { fetchApi } from './helpers/fetchApi';


export default {
  name: 'App',
  components: {
    CharacterCardList,
    FiltersComponent,
    CharacterPagination
  },
  data() {
    return {
      cards: [],
      name: '',
      status: '',
      page: 1,
      totalPages: 0
    };
  },
  async mounted() {
    try {
      const data = await fetchApi();
      this.cards = data.results;
      this.totalPages = data.info.pages;
    } catch (error) {
      console.error(error.message);
      this.cards = [];
    }
  },
  methods: {
    async handleFilter(filters) {
      this.name = filters.name;
      this.status = filters.status;
      this.page = 1;
      const data = await fetchApi(this.name, this.status, this.page);
      this.cards = data.results;
      this.totalPages = data.info.pages;
    },
    async handlePagination(page) {
      this.page = page;
      const data = await fetchApi(this.name, this.status, this.page);
      this.cards = data.results;
      this.totalPages = data.info.pages;
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
  align-items: stretch;
  flex-direction: column;
}
</style>