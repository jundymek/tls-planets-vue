<template>
  <el-pagination
    :small="windowWidth < 768"
    background
    layout="prev, pager, next"
    :total="totalPages * 10"
    @next-click="$router.push({ name: 'Home', params: { id: parseInt($route.params.id) + 1 } })"
    @prev-click="$router.push({ name: 'Home', params: { id: parseInt($route.params.id) - 1 } })"
    @current-change="handleChangeCurrentPage"
    :current-page="parseInt($route.params.id)"
    hide-on-single-page
  >
  </el-pagination>
</template>
<style src="./style.scss" lang="scss"></style>
<script src="./component.js" />
