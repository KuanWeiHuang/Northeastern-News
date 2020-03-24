import React,{ useReducer } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Ionicons, Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
const reducer = (state, action) => {
  //action={type:'like' || 'mark' || 'imageS'}
  switch (action.type) {
    case "like":
      return { ...state, like: (state.like = state.like ? false : true) };

    case "mark":
      return { ...state, mark: (state.mark = state.mark ? false : true) };
    default:
      return state;
  }
};

const NewsDetail = ({ 
    imageSource, 
    title, 
    describe,
    linkScreen,
    navigation }) => {

    const [state, dispatch] = useReducer(reducer, {
        like: false,
        mark: false
    });

    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source = {imageSource} />
            <Text style={styles.titleStyle}>{title}</Text>
            {/* icons */}
        <View style={styles.iconBlock}>
          <View style={styles.tag}>
            <Feather name="tag" size={25} style={styles.icon} />
            <Text> News</Text>
          </View>
          {/* right three icon  */}
          <View style={styles.threeIcons}>
            <TouchableOpacity onPress={() => dispatch({ type: "like" })}>
              <View style={{ width: 25, height: 25 }}>
                {state.like ? (
                  <Entypo name="heart" size={25} color="#E22C2C" />
                ) : (
                  <Entypo name="heart-outlined" size={25} style={styles.icon} />
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch({ type: "mark" })}>
              <View style={{ width: 25, height: 25 }}>
                {state.mark ? (
                  <MaterialIcons name="bookmark" size={25} color="#FCA42D" />
                ) : (
                  <MaterialIcons
                    name="bookmark-border"
                    size={25}
                    style={styles.icon}
                  />
                )}
              </View>
            </TouchableOpacity>

            <Feather name="share" size={22} style={styles.icon} />
          </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex: 1
    },
    container: {
        alignItems: 'flex-start',
        alignSelf: 'center',
        height: 290,
        width: 340,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        marginBottom: 15
    
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#373737',
        marginTop: 12,
        marginLeft:10,
        fontFamily: 'Arial Hebrew',
        flex: 2
    },
    imageStyle: {
        height: 170,
        width: 338,
        borderRadius: 10,
        flex: 4

    },
    iconBlock: {
        flexDirection: "row",
        flex: 1,
    },
    tag: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    threeIcons: {
        flex: 1,
        left: 10,
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-evenly",
        alignSelf: 'center',
    },
    icon: {
        opacity: 0.8
    }
});

export default NewsDetail;