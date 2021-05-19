// Descrizione:
// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.
// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
// BONUS:
// Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
// Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).

var app = new Vue({
  el: "#root",
  data: {
    // Array contenente le cose da fare
    toDoList: [
      {toDo: 'Lavare la macchina',
      completed: false},

      {toDo: 'Portare il cane dal veterinario',
      completed: false },

      {toDo: 'Pagare le bollette',
      completed: false },

      {toDo: 'Andare in palestra',
      completed: false },

      {toDo: 'Comprare la frutta',
      completed: false }
    ],
    newToDo: ' '
  },
  methods: {
    remove: function (index){
      this.toDoList.splice(index, 1);
    },
    add: function (event){
      const value = event.target.value;
      this.toDoList.push({
        toDo: value,
        completed: false
      });
    }
  }
});