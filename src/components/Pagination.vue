<template>
    <div class="pagination">
        <button class="button" :class="{ disabled: !hasPrev }" @click="prev">
            <font-awesome-icon icon="angle-left" />
        </button>
        <button
            class="button"
            @click="gotoPage(page)"
            v-for="page in availPages"
            :key="page"
            :class="{ selected: page === currentPage }"
        >
            {{ page }}
        </button>
        <button class="button" :class="{ disabled: !hasNext }" @click="next">
            <font-awesome-icon icon="angle-right" />
        </button>
    </div>
</template>

<script>
export default {
    props: ["totalRecords", "perPage"],
    data: function() {
        return {
            currentPage: 1,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalRecords / this.perPage);
        },
        availPages() {
            return new Set(
                [
                    1,
                    this.currentPage - 1,
                    this.currentPage,
                    this.currentPage + 1,
                    this.totalPages,
                ]
                    .sort((a, b) => a - b)
                    .filter(
                        (pageNo) => pageNo <= this.totalPages && pageNo >= 1
                    )
            );
        },
        hasNext() {
            return this.currentPage < this.totalPages;
        },
        hasPrev() {
            return this.currentPage > 1;
        },
    },
    methods: {
        prev() {
            if (this.hasPrev) {
                this.currentPage--;
                this.$emit("pageChange", this.currentPage);
            }
        },
        next() {
            if (this.hasNext) {
                this.currentPage++;
                this.$emit("pageChange", this.currentPage);
            }
        },
        gotoPage(pageNo) {
            if (pageNo > 0 && pageNo <= this.totalPages) {
                this.currentPage = pageNo;
                this.$emit("pageChange", this.currentPage);
            }
        },
    },
};
</script>

<style>
.button {
    margin: 0.2rem;
    padding: 0;
    height: 2rem;
    width: 2rem;
    color: var(--TextLight);
}

.button.selected {
    background-color: var(--BackgroundSecondary);
    color: red;
    font-weight: 600;
    color: var(--TextNormal);
}

.button.disabled {
    box-shadow: none;
    cursor: not-allowed;
}
</style>
