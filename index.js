import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
const DATA = [
{
id: '1',
title: 'Pupusas',
description: 'Ingredientes: maza de arroz o maiz , frijoles, queso , loroco.',
src:require('./src/imgs/pupusa.jpg'),
},
{
id: '2',
title: 'Empanadas',
description: 'Ingredientes: arina , azucar, leche, frijoles.',
src:require('./src/imgs/empanda.jpg'),
},
{
id: '3',
title: 'nuegados',
description: 'Ingredientes: arina, azucar, yuca, miel. ',
src:require('./src/imgs/nuegado.jpg'),

},
];
const Item = ({ title } ,{description}) => (
<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.description}>{description}</Text>
</View>

);
const App = () => {
const renderItem = ({ item }) => (
<Item title={item.title} img={item.src} description={item.description} />
);
return (
<SafeAreaView style={styles.container}>
<FlatList
data={DATA}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
</SafeAreaView>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: StatusBar.currentHeight || 0,
},
item: {
backgroundColor: '#f9c2ff',
padding: 20,
marginVertical: 8,
marginHorizontal: 16,
alignItems:'left'
},
title: {
fontSize: 32,
},
description: {
    fontSize: 25,
    },
img:{
    width:200,
    height:125,
    borderWidth:2,
    borderColor:'#d35647',
    resizeMode: 'contain',
    margin:8
    
}
});
AppRegistry.registerComponent("cars", () => App);
