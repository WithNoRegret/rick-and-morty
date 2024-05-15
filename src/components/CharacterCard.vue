<template>
    <div class="card">
        <img :src="card.image" :alt="card.name" class="card-image">
        <div class="card-body">
            <h2>{{ card.name }}</h2>
            <p>{{ card.status }} - {{ card.species }}</p>
            <p>Last known location: {{ card.location.name }}</p>
            <p>Origin: {{ card.origin.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: {
        card: {
            type: Object,
            required: true
        }
    }
};
</script>

<style>
.card {
    background-color: #333;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;

    display: flex;

    height: 150px;
    max-height: 150px;
}

.card-image {
    width: 40%;
}

.card-body {
    width: 60%;
    text-align: center;
}

.card h2 {
    padding-bottom: 10px;
    font-size: 16px;
}

.card p {
    padding-bottom: 10px;
    font-size: 14px;
}
</style>