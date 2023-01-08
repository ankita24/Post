import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');
  const [index, setIndex] = useState(0);

  const fetchAllPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );
      const data = await response.json();
      console.log(data);
      setPhotos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const renderItem = ({item}, index1) => {
    return (
      <View style={{padding: 20}}>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
            setImage([{url: item.url}]);
            setIndex(index1);
          }}>
          <Image
            source={{uri: item.thumbnailUrl}}
            style={{width: 90, height: 90}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
      <Modal
        visible={showModal}
        transparent={true}
        onSwipeDown={() => setShowModal(false)}>
        <ImageViewer
          imageUrls={image}
          index={index}
          onSwipeDown={() => setShowModal(false)}
          enableSwipeDown={true}
          enableImageZoom={true}
        />
      </Modal>
    </View>
  );
}
