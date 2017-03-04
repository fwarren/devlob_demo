<template>
    <div class="row">
        <div class="col-md-6 col-md-offest3">
            <div class="panel panel-defautl">
                <div class="panel-body">
                    <div class="forms-group">
                        <input v-model="email" class="form-control" type="email" placeholder="Email">
                    </div>

                    <div class="forms-group">
                        <input v-model="password" class="form-control" type="password" placeholder="Password">
                    </div>

                   <button @click="login" class="btn btn-success pull-right">Login</button>
               </div>
           <div>
        <div>
    <div>
</template>


<script>
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login () {
                var data = {
                    client_id: 2,
                    client_secret: '52EmEDJnzb4t6TW1DDwl8PAf8JWo28UKA8fC4EoG',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password

                }
                axios.post('/oauth/token', data).then(response => 
                    console.log(response)
                )
            }
        }
    }
</script>

<style>

</style>

