import * as React from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native';
import {SearchBar,Header}from 'react-native-elements'
import db from '../config'


export default class ReadStory extends React.Component{
  constructor(){
    super()
    this.state = {
      dataSource : [],
      allStories:[],
      search: ' '
    }
  }



  update=(search)=>{
this.setState({search})
  }

  

SearchFilter(text){
const newData = this.state.allStories.filter(item=>{
const ItemData = item.title? item.title.toUpperCase(): ' '.toUpperCase()
const textData = text.toUpperCase()
return ItemData.indexOf(textData)>-1
})
}

getStories=()=>{
  try{
    var allStories = db.collection('Stories').get()
    .then(querySnapshot=>{
      querySnapshot.forEach(doc=>{
        allStories.push(doc.data())
        console.log(allStories)
      })
      this.setState({allStories})
    })
  }
  catch(error){
    console.log(error)
  }
}
componentDidMount(){
  this.getStories()
}
  render(){
    return(
      <View style = {styles.container}>
          
          <Header 
          backgroundColor = {'#00adb5'}
          centerComponent = {{
              text : 'Story Hub',
              style : { color: 'black', fontSize: 30}
          }}
          />
          
          <View style = {{height:20,width:'100%'}}>
          <SearchBar 
          
          placeholder = 'TypeHere'
          onChangeText={text=>this.SearchFilter(text)}
          //onClear = {text=>this.SearchFilter(' ')}
          value = {this.state.search}
          />
          </View>

          <FlatList 
          data = {this.state.search===" "? this.state.allStories:this.state.dataSource}
          renderItem = {({item})=>(
            <View style = {styles.itemContainer}>
              <Text>Title : {item.title}</Text>
          <Text>Author : {item.author}</Text>
              </View>
          )}
          keyExtractor = {(item,index)=>index.toString()}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  itemContainer : {
    height :80,
    width:'100%',
    borderWidth : 2,
    borderColor : 'grey',
    justifyContent:'center',
    alignSelf : 'center'
  }
})