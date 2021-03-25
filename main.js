// Rifare l'esercizio della todo list come fatto assieme in classe.
// Bonus
// Modificare un elemento della lista, ricordandosi di
//aggiornare il title di quello giusto
var app = new Vue(
  {
    el: "#root",
    data: {
      esempio: "",
      // cosi funziona con gli array
      // lists: [
      //   "prova",
      //   "esperimento",
      //   "tentativo",
      // ],
      lists: [
        {
          listItem: "prova",
        },
        {
          listItem: "esperimento",
        },
        {
          listItem: "tentativo",
        },
      ]
    },
    methods: {
      add: function () {
        let objey = {
          listItem: this.esempio,
        }
        this.lists.push(objey);
        this.esempio = ""
        // this.lists.push(this.esempio);
        // console.log(this.esempio);
        // console.log(this.lists);
      },
      done: function (pollice) {
        console.log(this.lists[pollice]);
      },
      edit: function () {

      }
    },
    // created: function () {
    // },
    // mounted: {
    //
    // }
  }
);
