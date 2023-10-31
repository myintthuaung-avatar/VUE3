
<template>
  <v-app style="background-color:#08efef;" >
    <div class="mt-12">
    <v-card 
    class="mx-auto text-center mt-12"
    width="400">
    <template v-slot:title >
      Login
    </template>

    <v-sheet width="300" class="mx-auto">


      <v-form ref="form">
        <v-text-field
        variant="outlined"
            label="User Name" :rules="nameRules"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
          <v-text-field
        variant="outlined"
            label="Password" :rules="passwordRules"
            prepend-inner-icon="mdi-lock-open"
          ></v-text-field>
        <!-- <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select> -->
        <v-col cols="12" md="12">
          <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <router-link to="/dashboard">
            <v-btn color="success" class="mt-4"
            block
            @click="validate">
            Save
          </v-btn></router-link>
          </v-col>
         
          <v-col cols="12" sm="6" md="4">
          <v-btn
            color="error"
            class="mt-4"
            outlined
            block
            @click="reset"
          >
            Cancel
          </v-btn>
        </v-col>
      </v-row>
      </v-col>
      </v-form>
    </v-sheet>
  </v-card>
</div>
  </v-app>
</template>
  
  <script>
    export default {
      name: 'HelloWorld',
      created() {
                this.$emit("eventname", false);
            },
            data: () => ({
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    }),

    methods: {
      async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) alert('Form is valid')
      },
      reset () {
        this.$refs.form.reset()
      },
      // resetValidation () {
      //   this.$refs.form.resetValidation()
      // },
    },
  }
  </script>
  