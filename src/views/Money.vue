<template>
  <Layout class-prefix="layout">
    <NumberPads :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />
    <div class="notes">
      <Notes
        fieldName="备注"
        placeholder="请在这里输入"
        @update:value="onUpdateNotes"
      />
    </div>

    <Tags @update:value="onUpdateTags" />
    {{ recordList }}
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";

import NumberPads from "@/components/Money/NumberPads.vue";

import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { Tabs, Tags, Notes, NumberPads },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>
<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.note {
  padding: 12px 0;
}
</style>

