<template>
  <div class="main-wrapper">
    <loading
      :active="isLoading"
      :can-cancel="false"
      :opacity="0.5"
      background-color="#2e2a2a"
      color="#fff"
      :lock-scroll="true"
    />
    <FilterSelect
      v-if="planets && !error"
      :planets="planets"
      @filterPlanets="filterPlanets"
    />
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        v-for="planet in currentPagePlanets"
        :key="planet.name"
      >
        <Planet :planet="planet" />
      </el-col>
    </el-row>
    <Pagination
      v-if="!isLoading"
      :totalPages="totalPages"
    />
    <div class="error">{{error}}</div>
  </div>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./component.js" />
