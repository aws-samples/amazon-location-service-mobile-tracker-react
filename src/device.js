import * as FileSystem from 'expo-file-system';
//Amplify
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import config from './aws-exports'
import { createDevice, updateDevice, updateLocation } from './graphql/mutations';
import { getDevice } from './graphql/queries'

Amplify.configure(config)

export default class Device{
    constructor(){
        this.fileName = `${FileSystem.documentDirectory}app.json`;
        this.id = "0";
        this.trackerName = "";
        
    }

    async read() {
        try{
            const { exists } = await FileSystem.getInfoAsync(this.fileName);
            if (!exists) await this.write({id:"0"});
            if (exists) {
                let data = await FileSystem.readAsStringAsync(this.fileName); 
                return (data !== null && data !== "") ? JSON.parse(data) : null;
            }
        } 
        catch (err) {
            console.log(err);
        }        
    }

    async write(content){
        await FileSystem.writeAsStringAsync(this.fileName, JSON.stringify(content));
    }



    async register(name,trackerName){
        console.log(`id==${this.id}`)
        console.log(typeof this.id);
        if(this.id == "0"){
            console.log('create');
            await this.create(name, trackerName);
        } else {
            console.log(`update`);
            await this.update(this.id, name, trackerName);
        }
    }

    async create(name,trackerName){
        let resp = await API.graphql(graphqlOperation(createDevice, {input: {name, trackerName}}));
        console.log(`create ${resp}`);
        this.id = resp.data.createDevice.id.toString();
        await this.write({id: this.id});
    }

    async update(id, name, trackerName){
        console.log(`id: ${id}, name: ${name}, tracker: ${trackerName}`);
        let resp = await API.graphql(graphqlOperation(updateDevice, {input: {id, name, trackerName}}));
    }

    async init(){
        let data = await this.read();
        if(data !== null){
            this.id = data.id.toString();
            if(this.id !== "0"){
                let resp = await API.graphql(graphqlOperation(getDevice, {id: this.id}));
                this.trackerName = resp.data.getDevice.trackerName;
                return (resp !== null && resp !== undefined) ? resp.data.getDevice : null;
            } else {
                return null;
            }
        } else {
            await this.write({id: "0"});
        }
        
    }

    async setLocation(lat, lon){
        return await API.graphql(graphqlOperation(updateLocation, { trackerName: this.trackerName, deviceId: this.id, Latitude: lat, Longitude: lon }));
    }

    
}