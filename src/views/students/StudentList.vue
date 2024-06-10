<template lang="">

    <h1>Listado de estudiantes</h1>
    <router-link :to="{name: 'StudentCreate'}">Crear</router-link>
    <ul>
        <li v-for="student in students" :key="student.id">
            <router-link :to="{ name: 'StudentDetails', params: {id: student.id}}">
                {{student.name}}
            </router-link>
            -
            <button @click="deleteStudent(student.id)" class="btn btn-danger mb-2 btn-sm">
                Eliminar
            </button>
        </li>
    </ul>

    <!-- Pagination -->
    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        {{page}}
</template>
<script>
export default {
    data() {
        return {
            students: [],
            pagination_links: {}
        }
    },
    created() {
        this.getStudent();
    },
    computed:{
        page(){
            return this.$route.query.page ?? 1;
        }
    },
    methods: {
        getStudent() {
            this.axios.get('http://localhost:8000/api/students?page='+this.page)
                .then(response => {
                    let res = response.data;
                    this.students = res.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteStudent(id) {
            this.axios.delete('http://localhost:8000/api/students/' + id)
                .then(() => {
                    alert('Estudiante eliminado');
                    this.students = this.students.filter(student => student.id != id);
                })
        }
    }
}
</script>
<style lang="">
    
</style>