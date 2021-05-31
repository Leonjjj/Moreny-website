<template>
  <Layout class-prefix="layout">
    <NumberPads :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <Notes
        fieldName="备注"
        placeholder="请在这里输入"
        @update:value="onUpdateNotes"
      />
    </div>

    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
    {{ recordList }}
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";

import NumberPads from "@/components/Money/NumberPads.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import store from "../store/index2";

@Component({
  components: { Tags, Notes, Types, NumberPads },
})
export default class Money extends Vue {
  tags = store.tagList;
  recordList = store.recordList;

  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.note {
  padding: 12px 0;
}
</style>

