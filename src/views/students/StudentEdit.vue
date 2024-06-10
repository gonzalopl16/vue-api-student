<template lang="">
    <div>
        <h1>Editar</h1>
        <form  v-if="student.content" @submit.prevent="updateStudent">
            <div>
                <label for="name">
                    Nombre:
                </label>
                <input v-model="student.content.name" id="name" type="text" placeholder="Ingrese Nombre">
            </div> <br>
            <div>
                <label for="email">
                    Correo:
                </label>
                <input v-model="student.content.email" type="text" placeholder="ingrese Correo" id="email">
            </div> <br>
            <div>
                <label for="phone">
                    Teléfono:
                </label>
                <input v-model="student.content.phone" type="number" placeholder="ingrese Teléfono" id="phone">
            </div> <br>
            <div>
                <label for="language">Curso de programación: </label>
                <select v-model="student.content.language" id="language">
                    <option selected disabled value="">Seleccione un curso</option>
                    <option value="Java">Java</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                    <option value="Ruby">Ruby</option>
                </select>
            </div>
            <br>
            <button type="submit">Actualizar</button>
        </form>
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
        },
        updateStudent(){
            this.axios.put('http://localhost:8000/api/students/'+ this.$route.params.id, this.student.content)
                .then(() => {
                    alert('Estudiante Actualizado');
                    this.$router.push({ name: 'StudentList' });
                })
                .catch(err => {
                    console.error('Error al actualizar el estudiante:', err); 
                });
        }
    }
}
</script>
<style lang="">
    
</style>