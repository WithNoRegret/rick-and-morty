<template>
    <div class="card-list">
        <div v-for="card in cards" :key="card.id">
            <CharacterCard :card="card" />
        </div>
    </div>
</template>

<script>
import CharacterCard from './CharacterCard.vue';

export default {
    name: 'CardList',
    components: {
        CharacterCard
    },
    props: {
        cards: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
}
</style>