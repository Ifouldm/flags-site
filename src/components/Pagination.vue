<template>
    <div class="pagination">
        <button @click="prev">Previous</button>
        <p>current: {{currentPage}} total: {{totalPages}}</p>
        <button @click="next">Next</button>
    </div>
</template>

<script>
export default {
    props: ['totalRecords', 'perPage'],
    data: function() {
        return {
            currentPage: 1,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalRecords / this.perPage);
        }
    },
    methods: {
        prev() {
            this.currentPage--;
            this.$emit('pageChange', this.currentPage);
        },
        next() {
            this.currentPage++;
            this.$emit('pageChange', this.currentPage);
        }
    }
}
</script>

<style>

</style>