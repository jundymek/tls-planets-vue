<template>
  <a :href="url" class="box-card-url" :title="url">
    <el-card>
      <header class="planet-header">
        <h2 class="planet-header__title" :style="{ color: styles.color }">
          {{ name }}
        </h2>
        <p class="planet-header__subtitle">{{ climate }} planet</p>
      </header>
      <div class="planet-image-wrapper" :style="{ 'border-color': styles.color }">
        <div
          class="planet-image"
          :style="{
            'background-image':
              'url(' + require(`@/assets/images/${styles.image}`) + ')',
          }"
        ></div>
      </div>
      <ul class="planet-data">
        <li
          v-for="(value, key) in {
            'Rotation period': rotationPeriod,
            Climate: climate,
            Gravity: gravity,
            Created: created,
          }"
          :key="key"
          class="text item"
        >
          {{ key }} - <span :style="{ color: styles.color }">{{ value }}</span>
        </li>
        <li class="text item">Url: <a :href="url" class="planet-data__url" :style="{ color: styles.color }">{{url}}</a></li>
      </ul>
    </el-card>
  </a>
</template>
<style src="./style.scss" lang="scss"></style>
<script src="./component.js" />
