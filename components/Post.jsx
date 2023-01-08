import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          borderColor: '#000',
          margin: 12,
          borderRadius: 8,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('postId', {id: item.id})}>
          <Text>
            <Text style={{fontWeight: 'bold'}}>User Id:</Text> {item.userId}
          </Text>
          <Text style={{marginTop: 8}}>
            <Text style={{fontWeight: 'bold'}}>Title:</Text> {item.title}
          </Text>
          <Text style={{marginTop: 8}}>
            <Text style={{fontWeight: 'bold'}}>Body:</Text> {item.body}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
