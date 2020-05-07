class App extends React.Component {
  state = { 
    items: [
      {id:1, name: "Pojedynczy trening personalny", active: false},
      {id:2, name: "Plan treningowy do ćwiczenia na świeżym powietrzu", active: false},
      {id:3, name: "Domowy plan treningowy", active: false},
      {id:4, name: "Plan treningowy na siłownię", active: false},
      {id:5, name: "Plan treningowy z ciężarem własnego ciała", active: false},
      {id:6, name: "Indywidualny plan odżywiana", active: false},
      {id:7, name: "Porada psychodietetyczna", active: false},
  ],

   }
   handleChangeStatus = (id) => {
     console.log(id);
     const items = this.state.items.map(item => {
       if (id === item.id) {
         item.active = !item.active
       }
       return item
     })
 
     this.setState({
       items
     })
 
   }
 
   render() {
     return (
       <React.Fragment>
         <Header items={this.state.items} />
         <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
       </React.Fragment>
     );
   }
 }
 