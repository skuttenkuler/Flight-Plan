# Flight Plan
 React Native App to generate mock airline ticket.


# Visual

![Alt text](./src/images/FlightPlan.gif?raw=true "Preview")


# Technologies
* [React Native](https://reactnative.dev/)
* [Android Studio](https://developer.android.com/studio)
* CSS





# Code Snippets
    Domestic flight page selecting data and passing to ticket page.

```JSX
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

                <TouchableOpacity style={styles.Selector}
                        title="Book"
                        onPress={(event) => navigate("Ticket", {screen: TicketScreen,
                            OriginName:this.state.OriginValue,
                            DestinationName:this.stateDestinationValue,
                            OriginID: this.state.OrginCode,
                            DestinationID:this.state.DestinationCode,
                            // FlightDate: this.state.date,
                            MonthSelected:this.state.MonthValue,
                            DaySelected: this.state.DayValue,
                            FlightTime:this.state.selectedDate
                            })

                        }>
                        <Text style={styles.ButtonText}>Book Flight</Text>
                </TouchableOpacity>

```
Ticket page that catches selected ticket data
```JSX


    constructor(props) {
        super(props);
        this.state = {
            OriginName:props.navigation.getParam('OriginName', '???'),
            DestinationName:props.navigation.state.params.DestinationName,
            OriginID:props.navigation.state.params.OriginID,
            DestinationID:props.navigation.state.params.DestinationID,
            MonthSelected:props.navigation.state.params.MonthSelected,
            DaySelected:props.navigation.state.params.DaySelected,
            FlightTime:props.navigation.state.params.FlightTime,
           

        }
    }

```

    

# Author
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)