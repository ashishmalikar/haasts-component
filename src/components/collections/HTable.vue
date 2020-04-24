<template>
  <div class="table container">
    <table class="hds-table">
      <thead>
        <tr>
          <template v-for="col in cols">
            <th :key="col"> {{col.label}} </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="row in data">
          <tr :key="row">
            <td> {{row['Column 1']}} </td>
            <td> {{row['Column 2']}} </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'HTable',
  data () {
    return {
      cols: [
        {label: 'Column 1'},
        {label: 'Column 2'},
        {label: 'Column 3'}
      ],
      data: [
        {'Column 1': 'Ashish', 'Column 2': 'Malikar'},
        {'Column 1': 'Ashish', 'Column 2': 'Malikar'},
        {'Column 1': 'Ashish', 'Column 2': 'Malikar'},
        {'Column 1': 'Ashish', 'Column 2': 'Malikar'},
        {'Column 1': 'Ashish', 'Column 2': 'Malikar'},
        {'Column 1': 'Ashish', 'Column 2': 'Malikar'},
        {'Column 1': 'Ashish', 'Column 2': 'Malikar'},
      ]
    }
  }
}
</script>
<style scoped>
.hds-table {
  /* background: blue; */
}
</style>