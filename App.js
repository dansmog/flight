import React, {PureComponent} from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

import Colors from './colors';

class App extends PureComponent {
  render() {
    const tripListItem = () => {
      return (
        <View style={styles.tripListItemStyles}>
          <View style={styles.tripPlaneIcon}>
            {/* <View style={styles.currentFlight}>

            </View> */}
             <View style={styles.nextFlight}>
              <View style={styles.nextFlighIconCon}>
                <Icon name="plane" type="SimpleLineIcons" style={styles.nextFlightIcon}/>
              </View>
            </View>
            <View style={styles.tripProgress}/>
            <View style={styles.nextFlight}>
              <View style={styles.nextFlighIconCon}>
                <Icon name="plane" type="SimpleLineIcons" style={styles.nextFlightIcon}/>
              </View>
            </View>
          </View>
          <View style={styles.tripDetailsCon}>
            <View style={[styles.borderBttm, styles.list]}>
              <View>
                <Text style={styles.tripListItemHeader}>
                  San Fransisco Trip
                </Text>
                <Text style={styles.tripListItemText}>
                  Thu. Aug 4 - Sat. Aug 6, 2019
                </Text>
              </View>
              <View>
                <Icon
                  name="ios-arrow-forward"
                  type="Ionicons"
                  style={styles.tripListItemIcon}
                />
              </View>
            </View>
            <View style={styles.list}>
              <View>
                <Text style={styles.tripListItemHeader}>
                  San Fransisco Trip
                </Text>
                <Text style={styles.tripListItemText}>
                  Thu. Aug 4 - Sat. Aug 6, 2019
                </Text>
              </View>
              <View>
                <Icon
                  name="ios-arrow-forward"
                  type="Ionicons"
                  style={styles.tripListItemIcon}
                />
              </View>
            </View>
          </View>
        </View>
      );
    };

    return (
      <Container>
        <Header androidStatusBarColor={Colors.mainBg} style={styles.appHeader}>
          <Left>
            <Button transparent>
              <Icon name="menu" type="Entypo" style={styles.leftIconSize} />
            </Button>
          </Left>
          <Body>
            <Title>Trips</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="dots-three-vertical" type="Entypo" />
            </Button>
          </Right>
        </Header>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {tripListItem()}
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.mainBg,
    flex: 1,
  },
  appHeader: {
    backgroundColor: Colors.mainBg,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.borderColor,
  },
  leftIconSize: {
    fontSize: 30,
  },
  tripListItemStyles: {
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.borderColor,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tripListItemHeader: {
    fontSize: 24,
    color: Colors.white,
  },
  tripListItemText: {
    fontSize: 12,
    color: Colors.white,
  },
  tripListItemIcon: {
    color: Colors.white,
    fontSize: 30,
  },
  borderBttm: {
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: .2
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingRight: 20
  },
  tripPlaneIcon: {
    flex: 0.5,
    position:"relative",
    justifyContent: 'space-around',
    height:200
  },
  tripProgress: {
    height:100,
    width:4,
    backgroundColor: Colors.flightIconCase,
    left:20,
  },
  tripDetailsCon: {
    flex: 2
  },
  nextFlighIconCon: {
    backgroundColor: Colors.flightIconCase,
    width: 50,
    height:50,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextFlightIcon: {
    color: Colors.white,
    fontSize: 20
  }
});

export default App;
