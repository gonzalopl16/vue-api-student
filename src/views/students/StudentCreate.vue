<template lang="">
    <div>     
        <h1>Agregar Estudiante</h1>
        <ul id="errors" v-if="errors.length > 0">
            <li v-for="(error, index) in errors" :key="index">
                {{error}}
            </li>
        </ul>
        <form @submit.prevent="saveStudent">
            <div>
                <label for="name">
                    Nombre
                </label>
                <input v-model="student.name" id="name" type="text" placeholder="Ingrese Nombre">
            </div> <br>
            <div>
                <label for="email">
                    Correo
                </label>
                <input v-model="student.email" type="text" placeholder="ingrese Correo" id="email">
            </div> <br>
            <div>
                <label for="phone">
                    Teléfono
                </label>
                <input v-model="student.phone" type="number" placeholder="ingrese Teléfono" id="phone">
            </div> <br>
            <div>
                <label for="language">Curso de programación:</label>
                <select v-model="student.language" id="language">
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
            <button type="submit" class="btn btn-secondary">Crear</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'; 
export default {
    data(){
        return{
            student: {
                name: '',
                email: '',
                phone: '',
                language: ''
            },
            errors: []
        }
    },
    methods: {
        saveStudent() {
            axios.post('http://localhost:8000/api/students/', this.student)
                .then(() => {
                    alert('Estudiante creado');
                    this.resetStudent(); 
                    this.$router.push({ name: 'StudentList' });
                    this.errors = [];
                })
                .catch(error => {
                    let errors = Object.values(error.response.data.errors).flat();
                    this.errors = errors;
                    setTimeout(() => {
                        this.errors = [];
                    }, 3000);
                });
        },
        resetStudent() {
            this.student = {
                name: '',
                email: '',
                phone: '',
                language: ''
            };
        }
    }

}
</script>
<style lang="">
    
</style>