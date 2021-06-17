<template>
  <el-select v-model="selectedClimate" placeholder="Filter by climate" clearable>
      <el-option
        v-for="(item, index) in filterOptions"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
      </el-option>
    </el-select>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./component.js" />
