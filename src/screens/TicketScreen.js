import React, {Component} from 'react';
import { Text,
         View, ImageBackground,
         TouchableOpacity, CameraRoll, Dimensions, Button, StyleSheet, Platform
} from 'react-native';
import { captureScreen } from "react-native-view-shot";
import tixImage from '../images/stub.png';
import moment from 'moment';



const { width: WIDTH } = Dimensions.get('window')


export default class TicketScreen extends React.Component{

    static navigationOptions = {
        title: 'Ticket',
        header: null,

    };


    constructor(props) {
        super(props);
        this.state = {
            OriginName:props.navigation.getParam('OriginName', '???'),
            DestinationName:props.navigation.state.params.DestinationName,
            OriginID:props.navigation.state.params.OriginID,
            DestinationID:props.navigation.state.params.DestinationID,
            // FlightDate:props.navigation.state.params.FlightDate,
            MonthSelected:props.navigation.state.params.MonthSelected,
            DaySelected:props.navigation.state.params.DaySelected,
            FlightTime:props.navigation.state.params.FlightTime,
            imageURI : 'https://reactnativecode.com/wp-content/uploads/2018/02/ticket.jpg',


        }
    }

    captureScreenFunction=()=>{

            captureScreen({
            format: "jpg",
            quality: 0.8
            })
            .then(
            uri => this.setState({ imageURI : uri }), console.log("something happened"),
            error => console.error("Oops, Something Went Wrong", error)
            );

        }


    render() {

        const {navigate} = this.props.navigation;
        return(
            <ImageBackground style={{flex: 1}}
                                source={tixImage}
                                resizeMode="contain"
                                >
                        {/* <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}> */}

                        <Text style={styles.FromData}>{this.state.OriginName}({this.state.OriginID})</Text>
                        <Text style={styles.ToData}>{this.state.DestinationName}({this.state.DestinationID})</Text>
                        <Text style={styles.TimeData}>{moment(this.state.FlightTime).format("h:mm A")}</Text>
                        {/* <Text style={styles.DateData}>{moment(this.state.FlightDate).format("MMMM DD")} </Text> */}
                        <Text style={styles.DateData}>{this.state.MonthSelected}  {this.state.DaySelected}</Text>
                        <Button title="Capture Device Screenshot" onPress={this.captureScreenFunction} />
                        {/* </ViewShot> */}
                        </ImageBackground>



        );

    }
}
const styles = StyleSheet.create({
    FromData: {
        marginTop: 137,
        marginLeft: 91,
        fontSize: 19,
        color: "black",
    },
    ToData: {
        marginTop:5,
        marginLeft: 91,
        fontSize: 19,
        color: "black",

    },
    TimeData: {
        marginTop: 158,
        marginLeft: 180,
        fontSize: 20,
        color: 'black',
    },
    DateData: {
        fontFamily: 'Thonburi',
        marginTop: 28,
        marginLeft: 35,
        fontSize: 20,
        color: "black",
        fontWeight: "bold",

    },

});