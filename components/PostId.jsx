import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export default function PostId(props) {
  const [post, setPost] = useState();

  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.route.params.id}`,
    );
    const data = await response.json();
    setPost(data);
  };
  useEffect(() => {
    fetchPost();
  }, [props.route.params.id]);
  return post ? (
    <View
      style={{
        padding: 20,
        margin: 12,
      }}>
      <Text>
        <Text style={{fontWeight: 'bold'}}>User Id:</Text> {post.userId}
      </Text>
      <Text style={{marginTop: 8}}>
        <Text style={{fontWeight: 'bold'}}>Title:</Text> {post.title}
      </Text>
      <Text style={{marginTop: 8}}>
        <Text style={{fontWeight: 'bold'}}>Body:</Text> {post.body}
      </Text>
    </View>
  ) : null;
}
