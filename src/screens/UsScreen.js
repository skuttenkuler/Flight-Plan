import React from 'react';
import { StyleSheet, Text, Picker,
             View, Dimensions, TouchableOpacity
            } from 'react-native';
import ModalSelector from"react-native-modal-selector";
const { width: WIDTH } = Dimensions.get("window")
import TicketScreen from"./TicketScreen";
import DateTimePicker from "react-native-modal-datetime-picker";
import { NavigationEvents } from 'react-navigation';
import moment from 'moment';



let index = 0;
              //City not airport
        const data = [
            {key:index++, section: true, label:"Alabama"},
              {key:index++, label:"Birmingham", code:"BHM"},
              {key:index++, label:"Dothan", code:"DHN"},
              {key:index++, label:"Huntsville", code:"HSV"},
              {key:index++, label:"Mobile", code:"MOB"},
              {key:index++, label:"Montgomery", code:"MGM"},
            {key:index++, section: true, label:"Alaska"},
              {key:index++, label:"Anchorage", code:"ANC"},
              {key:index++, label:"Fairbanks", code:"FAI"},
              {key:index++, label:"Juneau", code:"JNU"},
            {key:index++, section: true, label:"Arizona"},
              {key:index++, label:"Flagstaff", code:"FLG"},
              {key:index++, label:"Phoenix ", code:"PHX"},
              {key:index++, label:"Tucson", code:"TUS"},
              {key:index++, label:"Yuma", code:"YUM"},
            {key:index++, section: true, label:"Arkansas"},
              {key:index++, label:"Fayetteville", code:"FYV"},
              {key:index++, label:"Little Rock ", code:"LIT"},
              {key:index++, label:"Arkansas", code:"XNA"},
            {key:index++, section: true, label:"California"},
              {key:index++, label:"Burbank", code:"BUR"},
              {key:index++, label:"Fresno", code:"FAT"},
              {key:index++, label:"Long Beach", code:"LGB"},
              {key:index++, label:"Los Angeles", code:"LAX"},
              {key:index++, label:"Oakland", code:"OAK"},
              {key:index++, label:"Ontario", code:"ONT"},
              {key:index++, label:"Palm Springs", code:"PSP"},
              {key:index++, label:"Sacramento", code:"SMF"},
              {key:index++, label:"San Diego", code:"SAN"},
              {key:index++, label:"San Francisco", code:"SFO"},
              {key:index++, label:"San Jose", code:"SJC"},
              {key:index++, label:"Santa Ana", code:"SNA"},
            {key:index++, section: true, label:"Colorado"},
              {key:index++, label:"Aspen", code:"ASE"},
              {key:index++, label:"Colorado Springs", code:"COS"},
              {key:index++, label:"Denver", code:"DEN"},
              {key:index++, label:"Grand Junction", code:"GJT"},
              {key:index++, label:"Pueblo", code:"PUB"},
            {key:index++, section: true, label:"Conneticut"},
              {key:index++, label:"Hartford", code:"BDL"},
              {key:index++, label:"New Haven", code:"HVN"},
            {key:index++, section: true, label:"DC"},
              {key:index++, label:"Dulles", code:"IAD"},
              {key:index++, label:"Washington", code:"DCA"},
            {key:index++, section: true, label:"Florida"},
              {key:index++, label:"Daytona Beach", code:"DAB"},
              {key:index++, label:"Fort Lauderdale", code:"FLL"},
              {key:index++, label:"Fort Meyers", code:"RSW"},
              {key:index++, label:"Jacksonville", code:"JAX"},
              {key:index++, label:"Key West", code:"EYW"},
              {key:index++, label:"Miami", code:"MIA"},
              {key:index++, label:"Orlando", code:"MCO"},
              {key:index++, label:"Pensacola", code:"PNS"},
              {key:index++, label:"St. Petersburg", code:"PIE"},
              {key:index++, label:"Sarasota", code:"SRQ"},
              {key:index++, label:"Tampa", code:"TPA"},
              {key:index++, label:"Palm Beach", code:"PBI"},
              {key:index++, label:"Panama City", code:"PFN"},
            {key:index++, section: true, label:"Georgia"},
              {key:index++, label:"Atlanta", code:"ATL"},
              {key:index++, label:"Augusta", code:"AGS"},
              {key:index++, label:"Savannah", code:"SAV"},
            {key:index++, section: true, label:"Hawaii"},
              {key:index++, label:"Hilo", code:"ITO"},
              {key:index++, label:"Honolulu", code:"HNL"},
              {key:index++, label:"Kahului", code:"OGG"},
              {key:index++, label:"Kailua", code:"KOA"},
              {key:index++, label:"Lihue", code:"LIH"},
            {key:index++, section: true, label:"Idaho"},
              {key:index++, label:"Boise", code:"BOI"},
            {key:index++, section: true, label:"Illanois"},
              {key:index++, label:"Chicago", code:"MDW"},
              {key:index++, label:"Chicago", code:"ORD"},
              {key:index++, label:"Moline", code:"MLI"},
              {key:index++, label:"Peoria", code:"PIA"},
            {key:index++, section: true, label:"Indiana"},
              {key:index++, label:"Evansville", code:"EVV"},
              {key:index++, label:"Fort Wayne", code:"FWA"},
              {key:index++, label:"Indianapolis", code:"IND"},
            {key:index++, section: true, label:"Louisiana"},
              {key:index++, label:"Baton Rouge", code:"BTR"},
              {key:index++, label:"New Orleans", code:"MSY"},
              {key:index++, label:"Shreveport", code:"SHV"},
            {key:index++, section: true, label:"Maine"},
              {key:index++, label:"Augusta", code:"AUG"},
              {key:index++, label:"Bangor", code:"BGR"},
              {key:index++, label:"Portland", code:"PWM"},
            {key:index++, section: true, label:"Maryland"},
              {key:index++, label:"Baltimore", code:"BWI"},
            {key:index++, section: true, label:"Massachusetts"},
              {key:index++, label:"Boston", code:"BOS"},
              {key:index++, label:"Hyannis", code:"HYA"},
              {key:index++, label:"Nantucket", code:"ACK"},
              {key:index++, label:"Worcester", code:"ORH"},
            {key:index++, section: true, label:"Mexico"},
              {key:index++, label:"Cancún", code:"CUN"},
            {key:index++, section: true, label:"Michigan"},
              {key:index++, label:"Battlecreek", code:"BTL"},
              {key:index++, label:"Detroit", code:"DET"},
              {key:index++, label:"Flint", code:"FNT"},
              {key:index++, label:"Grand Rapids", code:"GRR"},
              {key:index++, label:"Kalamazoo", code:"AZO"},
              {key:index++, label:"Lansing", code:"LAN"},
              {key:index++, label:"Saginaw", code:"MBS"},
            {key:index++, section: true, label:"Minnesota"},
              {key:index++, label:"Duluth", code:"DHL"},
              {key:index++, label:"Minneapolis", code:"MSP"},
              {key:index++, label:"Rochester", code:"RST"},
            {key:index++, section: true, label:"Mississippi"},
              {key:index++, label:"Gulfport", code:"GPT"},
              {key:index++, label:"Jackson", code:"JAN"},
            {key:index++, section: true, label:"Missouri"},
              {key:index++, label:"Kansas City", code:"MCI"},
              {key:index++, label:"St Louis", code:"STL"},
              {key:index++, label:"Springfield", code:"SGF"},
            {key:index++, section: true, label:"Montana"},
              {key:index++, label:"Billings", code:"BIL"},
            {key:index++, section: true, label:"Nebraska"},
              {key:index++, label:"Lincoln", code:"LNK"},
              {key:index++, label:"Omaha", code:"OMA"},
            {key:index++, section: true, label:"Nevada"},
              {key:index++, label:"Las Vegas", code:"LAS"},
              {key:index++, label:"Reno-Tahoe", code:"RNO"},
            {key:index++, section: true, label:"New Hampshire"},
              {key:index++, label:"Manchester", code:"MHT"},
            {key:index++, section: true, label:"New Jersey"},
              {key:index++, label:"Atlantic", code:"ACY"},
              {key:index++, label:"Newark", code:"EWR"},
              {key:index++, label:"Trenton", code:"TTN"},
            {key:index++, section: true, label:"New Mexico"},
              {key:index++, label:"Albuquerque", code:"ABQ"},
              {key:index++, label:"Alamogordo", code:"ALM"},
            {key:index++, section: true, label:"New York"},
              {key:index++, label:"Albany", code:"ALB"},
              {key:index++, label:"Buffalo", code:"BUF"},
              {key:index++, label:"Islip", code:"ISP"},
              {key:index++, label:"New York", code:"JFK"},
              {key:index++, label:"New York", code:"LGA"},
              {key:index++, label:"Newburgh", code:"SWF"},
              {key:index++, label:"Rochester", code:"ROC"},
              {key:index++, label:"Syracuse", code:"SYR"},
              {key:index++, label:"Westchester", code:"HPN"},
            {key:index++, section: true, label:"North Carolina"},
              {key:index++, label:"Asheville", code:"AVL"},
              {key:index++, label:"Charlotte", code:"CLT"},
              {key:index++, label:"Fayetteville", code:"FAY"},
              {key:index++, label:"Greensboro", code:"GSO"},
              {key:index++, label:"Raleigh", code:"RDU"},
              {key:index++, label:"Winston-Salem", code:"INT"},
            {key:index++, section: true, label:"North Dakota"},
              {key:index++, label:"Bismark", code:"BIS"},
              {key:index++, label:"Fargo", code:"FAR"},
            {key:index++, section: true, label:"Ohio"},
              {key:index++, label:"Akron", code:"CAK"},
              {key:index++, label:"Cincinnati", code:"CVG"},
              {key:index++, label:"Cleveland", code:"CLE"},
              {key:index++, label:"Columbus", code:"CMH"},
              {key:index++, label:"Dayton", code:"DAY"},
              {key:index++, label:"Toledo", code:"TOL"},
            {key:index++, section: true, label:"Oklahoma"},
              {key:index++, label:"Oklahoma City", code:"OKC"},
              {key:index++, label:"Tulsa", code:"TUL"},
            {key:index++, section: true, label:"Oregon"},
              {key:index++, label:"Eugene", code:"EUG"},
              {key:index++, label:"Portland", code:"PDX"},
              {key:index++, label:"Portland", code:"HIO"},
              {key:index++, label:"Salem", code:"SLE"},
            {key:index++, section: true, label:"Pennsylvania"},
              {key:index++, label:"Allentown", code:"ABE"},
              {key:index++, label:"Erie", code:"ERI"},
              {key:index++, label:"Harrisburg", code:"MDT"},
              {key:index++, label:"Philadelphia", code:"PHL"},
              {key:index++, label:"Pittsburgh", code:"PIT"},
              {key:index++, label:"Scranton", code:"AVP"},
            {key:index++, section: true, label:"Rhode Island"},
              {key:index++, label:"Providence", code:"PVD"},
            {key:index++, section: true, label:"South Carolina"},
              {key:index++, label:"Charleston", code:"CHS"},
              {key:index++, label:"Columbia", code:"CAE"},
              {key:index++, label:"Greenville", code:"GSP"},
              {key:index++, label:"Myrtle Beach", code:"MYR"},
            {key:index++, section: true, label:"South Dakota"},
              {key:index++, label:"Pierre", code:"PIR"},
              {key:index++, label:"Rapid City", code:"RAP"},
              {key:index++, label:"Sioux Falls", code:"FSD"},
            {key:index++, section: true, label:"Tennessee"},
              {key:index++, label:"Bristol", code:"TRI"},
              {key:index++, label:"Chattanooga", code:"CHA"},
              {key:index++, label:"Knoxville", code:"TYS"},
              {key:index++, label:"Memphis", code:"MEM"},
              {key:index++, label:"Nashville", code:"BNA"},
            {key:index++, section: true, label:"Texas"},
              {key:index++, label:"Amarillo", code:"AMA"},
              {key:index++, label:"Austin", code:"AUS"},
              {key:index++, label:"Corpus Christi", code:"CRP"},
              {key:index++, label:"Dallas", code:"DAL"},
              {key:index++, label:"Fort Worth", code:"DFW"},
              {key:index++, label:"El Paso", code:"ELP"},
              {key:index++, label:"Houston", code:"HOU"},
              {key:index++, label:"Houston", code:"IAH"},
              {key:index++, label:"Lubbock", code:"LBB"},
              {key:index++, label:"Midland", code:"MAF"},
              {key:index++, label:"San Antonio", code:"SAT"},
            {key:index++, section: true, label:"Utah"},
              {key:index++, label:"Salt Lake", code:"SLC"},
            {key:index++, section: true, label:"Vermont"},
              {key:index++, label:"Burlington", code:"BTV"},
              {key:index++, label:"Montpelier", code:"MPV"},
              {key:index++, label:"Rutland", code:"RUT"},
            {key:index++, section: true, label:"Virginia"},
              {key:index++, label:"Dulles", code:"IAD"},
              {key:index++, label:"Newport", code:"PHF"},
              {key:index++, label:"Norfolk", code:"ORF"},
              {key:index++, label:"Richmond", code:"RIC"},
              {key:index++, label:"Roanoke", code:"ROA"},
            {key:index++, section: true, label:"Washington"},
              {key:index++, label:"Pasco", code:"PSC"},
              {key:index++, label:"Seattle", code:"SEA"},
              {key:index++, label:"Spokane", code:"GEG"},
            {key:index++, section: true, label:"West Virginia"},
              {key:index++, label:"Charleston", code:"CRW"},
              {key:index++, label:"Clarksburg", code:"CKB"},
              {key:index++, label:"Huntington", code:"HTS"},
            {key:index++, section: true, label:"Wisconsin"},
              {key:index++, label:"Green Bay", code:"GRG"},
              {key:index++, label:"Madison", code:"MSN"},
              {key:index++, label:"Milwaukee", code:"MKE"},
            {key:index++, section: true, label:"Wyoming"},
              {key:index++, label:"Casper", code:"CPR"},
              {key:index++, label:"Cheyenne", code:"CYS"},
              {key:index++, label:"Jackson Hole", code:"JAC"},
              {key:index++, label:"Rock Springs", code:"RKS"},


        ];
        const Months = [
          {key: 1, label:"January"},
          {key: 2, label:"Febuary"},
          {key: 3, label:"March"},
          {key: 4, label:"April"},
          {key: 5, label:"May"},
          {key: 6, label:"June"},
          {key: 7, label:"July"},
          {key: 8, label:"August"},
          {key: 9, label:"September"},
          {key: 10, label:"October"},
          {key: 11, label:"November"},
          {key: 12, label:"December"},
        ];
        const Days = [
          {key: 1, label:"1"},
          {key: 2, label:"2"},
          {key: 3, label:"3"},
          {key: 4, label:"4"},
          {key: 5, label:"5"},
          {key: 6, label:"6"},
          {key: 7, label:"7"},
          {key: 8, label:"8"},
          {key: 9, label:"9"},
          {key: 10, label:"10"},
          {key: 11, label:"11"},
          {key: 12, label:"12"},
          {key: 13, label:"13"},
          {key: 14, label:"14"},
          {key: 15, label:"15"},
          {key: 16, label:"16"},
          {key: 17, label:"17"},
          {key: 18, label:"18"},
          {key: 19, label:"19"},
          {key: 20, label:"20"},
          {key: 21, label:"21"},
          {key: 22, label:"22"},
          {key: 23, label:"23"},
          {key: 24, label:"24"},
          {key: 25, label:"25"},
          {key: 26, label:"26"},
          {key: 27, label:"27"},
          {key: 28, label:"28"},
          {key: 29, label:"29"},
          {key: 30, label:"30"},
          {key: 31, label:"31"},

        ];


  export default class UsScreen extends React.Component{
    static navigationOptions = {
        title:"US",

    };
    constructor(props) {
        super(props);

        this.state =  {date:""},
                      {isVisible: false},
                      {selectedDate: "",
                      };

    }
    handlePicker = time => {
      this.setState({ isVisible: false,
                      selectedDate: time.toString() });
    };
    showPicker = () => {
      this.setState({ isVisible: true });
    };

    hidePicker = () => {
      this.setState({ isVisible: false});
    };



    render(){


        const {navigate} = this.props.navigation;
        const { isVisible, selectedDate} = this.state;
        return(

            <View style={{flex:2, backgroundColor:"black", justifyContent:"space-around", padding:50}}>
                <ModalSelector
                    style={styles.Selector}
                    data={data}
                    initValue="ORIGIN"
                    onChange={(option)=>{ this.setState({OriginValue:option.label, OrginCode:option.code})}}
                    >
                </ModalSelector>
                <ModalSelector
                    style={styles.Selector}
                    data={data}
                    initValue="DESTINATION"
                    onChange={(option)=>{ this.setState({DestinationValue:option.label, DestinationCode: option.code})}}

                    >
                </ModalSelector>

                <ModalSelector
                    style={styles.MonthSelector}
                    data={Months}
                    initValue="Month"
                    onChange={(option)=>{ this.setState({MonthValue:option.label})}}
                    >
                </ModalSelector>
                <ModalSelector
                    style={styles.DaySelector}
                    data={Days}
                    initValue="Day"
                    onChange={(option)=>{ this.setState({DayValue:option.label})}}
                    >
                </ModalSelector>
                <TouchableOpacity style={styles.Departure} onPress={this.showPicker}>
                  <Text style={styles.DepartureText}>Departure Time</Text>
                </TouchableOpacity>


                <DateTimePicker
                  isVisible={this.state.isVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode="time"
                  format="hh:mm a"
                  time={this.state.time}
                  is24Hour={false}
                  onChange={(time)=>{this.setState({time: time})}}/>

                <Text style={styles.Time}> Time:{moment(selectedDate).format("h:mm a")}</Text>

                {/* <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="MM/DD/YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 80,
                      },
                      dateInput: {
                        marginLeft: 116,
                        color:"white"
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                  /> */}


                <TouchableOpacity style={styles.Selector}
                        title="Book"
                        onPress={(event) => navigate("Ticket", {screen: TicketScreen,
                                                                OriginName: this.state.OriginValue,
                                                                DestinationName: this.state.DestinationValue,
                                                                OriginID: this.state.OrginCode,
                                                                DestinationID: this.state.DestinationCode,
                                                                // FlightDate: this.state.date,
                                                                MonthSelected: this.state.MonthValue,
                                                                DaySelected: this.state.DayValue,
                                                                FlightTime: this.state.selectedDate
                                                                })

                        }>
                        <Text style={styles.ButtonText}>Book Flight</Text>
                </TouchableOpacity>

            </View>

        );
    }
}
const styles = StyleSheet.create({

    Time:{
      color:"white",
      textAlign:'center',
      fontSize: 30
    },
    ButtonText: {
      color:"black",
      textAlign:"center",
      fontSize: 30
    },
    Selector:{
        backgroundColor:'#0FCEF5',
        opacity: 0.7,

    },
    MonthSelector:{
      backgroundColor:'#0FCEF5',
      opacity: 0.7,

    },
    DaySelector:{
      backgroundColor:'#0FCEF5',
      opacity: 0.7,


    },
    Departure: {
        backgroundColor: '#0FCEF5',
        height: 40,
        opacity: 0.7,
        textAlign: 'center'

    },
    DepartureText:{
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 8,
    }

});






