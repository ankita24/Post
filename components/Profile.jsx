import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export default function Profile(props) {
  
  return <View
      style={{
        padding: 20,
        margin: 12,
      }}>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Name</Text> Ankita Panigrahi
      </Text>
      <Text style={{marginTop: 8}}>
        <Text style={{fontWeight: 'bold'}}>Email id:</Text> riya.ankita24@gmail.com
      </Text>
      <Text style={{marginTop: 8}}>
        <Text style={{fontWeight: 'bold'}}>Designation:</Text> SE 2
      </Text>
    </View>
  
}
