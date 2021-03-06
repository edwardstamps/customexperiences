/*
 * Copyright 2018 DoubleDutch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react'
import ReactNative, {Text, View} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoadingView extends Component {

  render() {
    if (this.props.isLaunch && !this.props.logInFailed){
      return (
        <View style={s.container}>
          <Spinner textContent={"Loading..."} textStyle={{color: '#FFF'}} size={"large"}/>
        </View>
      );
    }
    else {
      return (
        null
      )
    }
  }
}

const s = ReactNative.StyleSheet.create({
  container: { 
    alignItems: "center", 
    justifyContent: "center"
  },
  errorText: {
    fontSize: 18,
    color: "#4B4B4B"
  }
})
