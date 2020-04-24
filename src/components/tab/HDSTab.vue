<template>
    <div class="tabs-component">
        <nav role="tablist" class="hds-top-attached hds-menu">
            <div
                v-for="(tab, i) in tabs"
                :key="i"
                :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }"
                class="hds-item"
                role="presentation"
                v-show="tab.isVisible"
            >
                <a v-html="tab.header"
                   :aria-controls="tab.hash"
                   :aria-selected="tab.isActive"
                   :href="tab.hash"
                   class="tabs-component-tab-a"
                   role="tab"
                ></a>
            </div>
        </nav>
        <div class="hds-bottom-attached hds-segment">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HDSTa',
    props: {
    },
    data: () => ({
        tabs: [],
        activeTabHash: '',
        activeTabIndex: 0,
        lastActiveTabHash: '',
    }),
    computed: {
        
    },
    created() {
        this.tabs = this.$children;
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>