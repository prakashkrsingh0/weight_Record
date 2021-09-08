import React, {Component} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Modal from "react-native-modal";
import BaseColor from "../styles/colors";

interface InputModalProps{
    isModalVisible:boolean
}

export default class InputModal extends Component<any, InputModalProps>{
    constructor(props){
        super(props)
    }
    
    saveWight=()=>{
        console.log("ënterd weight");
    }



    render(){
        return(
            <Modal 
            style ={styles.constainer}
            isVisible={this.props.isModalVisible}
            >
               <View style ={{ width:wp("80%"), justifyContent:"center", height:hp("50%")}}>
               <TextInput
                placeholder="Enter your current weight"
                placeholderTextColor="white"
                style={styles.textInputStyle}
                keyboardType="numeric"
                />
                <TouchableOpacity
                style ={{borderRadius:wp("5%"),width:wp("30%"), height:hp("10%"), alignSelf:"center", backgroundColor:BaseColor.primaryOpacity , justifyContent:"center", alignItems:"center", marginTop:hp("2%")}}
                onPress={()=> this.saveWight()}
                >
                    <Text style ={{color:BaseColor.whiteColor}}>submit</Text>
                </TouchableOpacity>
               </View>
            </Modal>
        )
    }
} 

const styles = StyleSheet.create({
    constainer:{
        backgroundColor:BaseColor.blackOpacity2,
        width:wp("80%"),
        alignSelf:"center",
        maxHeight:hp("40%"),
        marginTop:hp("30%"),
        borderWidth:1,
        borderColor:BaseColor.blackLightOpacity,
        borderRadius:wp("5%")
    },
    textInputStyle : {
        borderWidth:1,
        borderRadius:wp("1.25%"),
        backgroundColor:BaseColor.darkPrimary2Color,
        width:wp("60%"),
        alignSelf:"center",
        justifyContent:"center"
        // marginLeft:wp("2%")

    }
})


// const mapStateToProps = ({ userDetails }) => {
//     const { weight } = userDetails;
//     return {
//         userWeight
//     };
//   };
  
//   export default connect(mapStateToProps, {
//     userWeight
//   })(InputModal);