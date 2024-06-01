<template>
    <div class="filters-container">
        <form @submit.prevent="search" class="filter-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="status">Status:</label>
                <select id="status" v-model="status" class="form-control">
                    <option value="">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <button type="submit" class="btn">Поиск</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FiltersComponent',
    data() {
        return {
            name: '',
            status: ''
        };
    },
    methods: {
        search() {
            this.$emit('search', { name: this.name, status: this.status });
        }
    }
}
</script>

<style scoped>
.filters-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.filter-form {
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;

}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
}

.form-control {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}
</style>