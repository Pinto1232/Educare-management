import React from 'react';
import { View, Text } from 'react-native';

const SubComponent: React.FC = () => {
    return (
        <View>
            <Text>SubComponent works!</Text>
        </View>
    );
};

export default React.memo(SubComponent);