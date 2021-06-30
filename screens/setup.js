import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import Device from '../src/device';

const deviceSvc = new Device();

export default function Setup() {
    const [tracker, setTracker] = useState("");
    const [device, setDevice] = useState("");
    const [label, setLabel] = useState("Register");

    useEffect(() => {
        deviceSvc.init()
        .then((resp)=> {
            if(resp !== null){
                setTracker(resp.trackerName);
                setDevice(resp.name);
                setLabel("Update");
            }
        })
        
    }, []);

    const updateHandler = () => {
        const valid = /^[a-zA-Z0-9_\-\.]+$/;
        if(valid.test(tracker) && valid.test(device)){
            Keyboard.dismiss();
            deviceSvc.register(device, tracker);

        } else {
            Alert.alert('Validation', 'Use only letters, numbers, hyphens, or underscores with no spaces.', [
                {text: 'OK', onPress: () => console.log('validation alert closed')}
            ]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            }}>
          <View>
          <Text>Device Name: </Text>
            <TextInput 
                placeholder='e.g. ABC-123'
                onChangeText={(val) => setDevice(val)} 
                value={device} />
            <Text>Tracker Name: </Text>
            <TextInput 
                placeholder='e.g. TrackerName'
                onChangeText={(val) => setTracker(val)} 
                value={tracker} />
            <View>
                <Button title={label} onPress={updateHandler} />
            </View>
          </View>
        </TouchableWithoutFeedback>
    );
}