
<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        @click="toggle(tag)"
        :class="{ selected: selectedTag.indexOf(tag) >= 0 }"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import TagHelper from "../../mixins/TagHelper";

@Component({})
export default class Tages extends mixins(TagHelper) {
  selectedTag: string[] = [];
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTags");
  }
  toggle(tag: string) {
    const index = this.selectedTag.indexOf(tag);
    if (index >= 0) {
      this.selectedTag.splice(index, 1);
    } else {
      this.selectedTag.push(tag);
    }
    this.$emit("update:value", this.selectedTag);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  font-size: 14px;
  padding: 16px;
  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $ba: #d9d9d9;
      background: $ba;
      $h: 24px;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($ba, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>