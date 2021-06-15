<template>
  <footer class="footer">
    <span>tls recruitment task - made with ❤️ by <el-link type="primary" href="https://jundymek.com">jundymek</el-link></span>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-color;
  padding: 10px 0;
  border-top: 1px solid $border-color;
  @media (max-width: $phone) {
    font-size: 12px;
  }

  span {
    text-align: center;
  }
}

.el-link {
  vertical-align: baseline;
}
</style>
