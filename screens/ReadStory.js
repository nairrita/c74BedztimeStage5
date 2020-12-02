import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})