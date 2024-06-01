<template>
    <div class="cardView">
        <h1>{{ card.name }}</h1>
        <img :src="card.image" :alt="card.name">
        <p>{{ card.status }} - {{ card.species }}</p>
        <p>Last known location: {{ card.location.name }}</p>
    </div>
    <RouterLink to="/" class="back-button">Back to character list</RouterLink>
</template>

<script>
import { fetchCharacter } from '../helpers/fetchApi';

export default {
    name: 'CharacterCardView',
    data() {
        return {
            card: {}
        }
    },
    async created() {
        const id = this.$route.params.id;
        const data = await fetchCharacter(id);
        this.card = data;
        console.log(data);
    }
};
</script>

<style scoped>
.cardView {
    flex-grow: 1;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.back-button {
    margin-block: 20px;
}

.back-button:before {
    content: "⬅️";
    margin-right: 5px;
}
</style>