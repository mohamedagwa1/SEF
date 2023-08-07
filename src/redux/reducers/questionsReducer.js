import { createSlice } from '@reduxjs/toolkit'
export const questionsSlice = createSlice({
  name: 'questions',
  initialState:{
    items:[{id:"0",
    question:"",
    mark:"",
    type:"",
    image:"",
    options:[""],
    answer:""
    }]
  },
  reducers: {
    addQuestion:function(state,action){
      // state.items.push(action.payload);
      state.items.splice(action.payload.id, 0, {
      ...action.payload,
      question:"",
      mark:"",
      type:"",
      image:"",
      options:[""],
      shortanswer:""});
    },
    deleteQuestion:function(state,action){
      state.items=state.items.filter(item =>item.id !=action.payload.id)
    },
    setId:function(state,action) {
      var i=action.payload.id
      state.items[i].id=i 
    },
    setQuestion:function(state,action){
      var i=action.payload.id
      state.items[i]={
        ...state.items[i],
        ...action.payload
      }
    },
    setMark:function(state,action){
      var i=action.payload.id
      state.items[i]={
        ...state.items[i],
        ...action.payload
      }
    },
    setType:function(state,action){
      var i=action.payload.id
      state.items[i]={
        ...state.items[i],
        ...action.payload
      }
    },
    setOption:function(state,action){
      var id=action.payload.id
      var i=action.payload.i
      state.items[id].options[i]=action.payload.option
    },
    addOption:function(state,action){
      var id=action.payload.id
      var newArr=state.items[id].options
      newArr.push("")
      state.items[id]={
        ...state.items[id],
        options:newArr 
      }
    },
    delOption:function(state,action){
      var id=action.payload.id
      var i=action.payload.i
      var newArr=state.items[id].options
      if(state.items[id].options.length!=1){
      newArr.splice(i, 1)
      }else{
        newArr=[""]
      }
      state.items[id]={
        ...state.items[id],
        options:newArr 
      }
    },setShortanswer:function(state,action){
      var i=action.payload.id
      state.items[i]={
        ...state.items[i],
        ...action.payload
      }
    },


  },
})
export const {addQuestion,deleteQuestion,setId,setQuestion,setMark ,setType,setOption,addOption,delOption,setShortanswer} = questionsSlice.actions
export default questionsSlice.reducer