<template>
    <div class="row">
        <div class="col-md-6 col-md-offest3">
            <div class="panel panel-defautl">
                <div class="panel-body">
                    <div class="forms-group">
                        <input v-model="name" class="form-control" type="text" placeholder="Name">
                    </div>

                    <div class="forms-group">
                        <input v-model="email" class="form-control" type="email" placeholder="Email">
                    </div>

                    <div class="forms-group">
                        <input v-model="password" class="form-control" type="password" placeholder="Password">
                    </div>

                   <button class="btn btn-success pull-right">Registre</button>
               </div>
           <div>
        <div>
    <div>
</template>


<script>
    export default {
        data () {
            return {
                name: '',
                email: '',
                password: ''
            }
        }
    }
</script>

<style>

</style>

