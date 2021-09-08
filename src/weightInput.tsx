import React,{Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import InputModal from "./inputModal/inputModal";
import BaseColor from "./styles/colors"

export default class WeightInput extends Component<any,any>{
    constructor(props){
        super(props)
        this.state = {
            mornningReading:"",
            eveningReading:"",
            nightReading:"",
            isModalVisible:false
        }
    }

    openInputModal=()=>{
        this.setState({
            isModalVisible:!this.state.isModalVisible
        })
    }


    render(){
        return(
            <View 
            style ={styles.constainer}
            >               
                <View style ={{flexDirection:"row",  }}>
                <TouchableHighlight
                touchSoundDisabled={true}
                underlayColor={BaseColor.blackOpacity}
                style ={{backgroundColor:BaseColor.blackOpacity2, height:hp("20%"), width:wp("40%"),marginLeft:wp("5%"),padding:wp("5%"), borderBottomRightRadius:wp("10%"), borderTopLeftRadius:wp("5%"), alignSelf:"center"}}
                onPress={()=> this.openInputModal()}
                >
                    <Text style ={{fontSize:20,marginTop:hp("5%"), alignSelf:"center"}}>Enter Weight</Text>
                </TouchableHighlight>
                <TouchableOpacity
                style ={{backgroundColor:BaseColor.blackOpacity2, height:hp("20%"),width:wp("40%"), marginRight:wp("5%"),padding:wp("5%"),borderBottomLeftRadius:wp("10%"), borderTopRightRadius:wp("5%"), }}
                onPress={()=> this.openInputModal()}
                >
                    <Text style ={{fontSize:20,marginTop:hp("5%"), alignSelf:"center"}}>progess</Text>
                </TouchableOpacity>
                </View>
                <View style ={{flexDirection:"row"}}>
                <TouchableOpacity
                style ={{backgroundColor:BaseColor.blackOpacity2, height:hp("20%"),width:wp("40%"), marginLeft:wp("5%"),padding:wp("5%"), borderTopRightRadius:wp("10%"), borderBottomLeftRadius:wp("5%")}}
                onPress={()=> this.openInputModal()}
                >
                    <Text style ={{fontSize:20,marginTop:hp("5%"), alignSelf:"center"}}>Watch History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style ={{backgroundColor:BaseColor.blackOpacity2, height:hp("20%"),width:wp("40%"), marginRight:wp("5%"),padding:wp("5%"), borderTopLeftRadius:wp("10%"), borderBottomRightRadius:wp("5%")}}
                onPress={()=> this.openInputModal()}
                >
                    <Text style ={{fontSize:20,marginTop:hp("5%"), alignSelf:"center"}}>More...</Text>
                </TouchableOpacity>
                </View>
                <InputModal isModalVisible= {this.state.isModalVisible} {...this.props}/>

               
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor: "#7B39DD" ,
        height: hp("100%"),
        justifyContent:"center",
        alignItems:"center",
    },
    textInputStyle : {
        borderWidth:1,
        borderRadius:wp("1.25%"),
        marginLeft:wp("2%")

    }
})