<template>
  <footer class="footer">
    <span>tls recruitment task - made with ❤️ by <el-link type="primary" href="https://jundymek.com">jundymek</el-link></span>
    <div class="icons">Icons made by <el-link type="info" href="https://www.freepik.com" title="Freepik">Freepik</el-link> from <el-link type="info" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</el-link></div>
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
  width: 100vw;
  display: flex;
  flex-direction: column;
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

.icons {
  font-size: 10px;
  .el-link {
    font-size: 10px;
  }
}
</style>
