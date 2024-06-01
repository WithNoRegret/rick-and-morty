<template>
    <div class="pagination">
        <button class="prev" @click="toPage(currentPage - 1)" :disabled="currentPage <= 1">&#8249;</button>
        <span id="currentPage">{{ currentPage }}</span> / <span id="totalPages">{{ totalPages }}</span>
        <button class="next" @click="toPage(currentPage + 1)" :disabled="currentPage === totalPages">&#8250;</button>
    </div>
</template>

<script>
export default {
    name: 'CharacterPagination',
    methods: {
        toPage(pageNumber) {
            if (pageNumber > 0 && pageNumber <= this.totalPages) {
                this.$emit('page-changed', pageNumber);
            }
        }
    },
    props: {
        totalPages: Number,
        currentPage: Number
    },
}
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-block: 20px;
}

.pagination button {
    padding: 5px 10px;
    margin: 0 5px;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    cursor: pointer;
    color: #fff;
}

.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination button:hover {
    background-color: #0056b3;
}
</style>