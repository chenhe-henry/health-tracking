<template>
  <div>
    <img :src="flag" :alt="countryName" />
    <h1>This page is for {{ countryName }}</h1>
  </div>
</template>

<script>
export default { props: ["countryName", "flag"] };
</script>

<style lang="scss" scoped></style>
