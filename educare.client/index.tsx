import {AppRegistry} from 'react-native';
import App from './App';
import appConfig from './app.json';

const { name: EducareManagement } = appConfig.expo;

AppRegistry.registerComponent(EducareManagement, () => App);