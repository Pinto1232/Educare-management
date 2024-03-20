import React from 'react';
import { View } from 'react-native';


interface HomeProps {
    userId: string;

  }
  
  const Home: React.FC<HomeProps> = (userId) => {
    console.log(userId);
    return (
        <View>
       
        </View>
    );
};

export default React.memo(Home);