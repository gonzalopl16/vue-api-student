<template lang="">
    <div>
        <router-link :to="{name: 'StudentEdit',params:{
            id: student.id
        }}">Editar</router-link>
        <div v-if="student.content">
            <h1>{{student.content.name}}</h1>
            <h3>Correo: {{student.content.email}}</h3>
            <h3>Teléfono: {{student.content.phone}}</h3>
            <h3>Curso: {{student.content.language}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            student: {}
        }
    },
    created(){
        this.getStudent();
    },
    methods:{
        getStudent(){
            this.axios.get('http://localhost:8000/api/students/' + this.$route.params.id)
            .then(response => {
                this.student = response.data;
            })
            .catch(error => {
                console.error(error); 
            })
        }
    }
}
</script>
<style lang="">
    
</style>