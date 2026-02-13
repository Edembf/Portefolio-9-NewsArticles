import {View,Text,ScrollView,TouchableOpacity,Image,StyleSheet,} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux"; // Redux hooks
import { toggleFavorite } from "../redux/favoritesSlice"; // Redux action
import Categories from "../components/categories";

export default function ArticleDetailScreen(props) {
  const article = props.route.params; // Article passed from previous screen

  const dispatch = useDispatch();
  const favoriteArticles = useSelector(
    (state) => state.favorites.favoriteArticles
  );
  const isFavourite = favoriteArticles?.some(
    (favArticle) => favArticle.idArticle === article.idArticle
  ); // Check by idArticle

  const navigation = useNavigation();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(article)); // Dispatch the article to favorites
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Article Image */}
      <View style={styles.imageContainer} testID="imageContainer">
         <Image
          source={{ uri: article.thumbnail }}
          style={styles.articleImage}
        />         
      </View>

      {/* Back Button and Favorite Button */}
           <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={{ color: "#000000" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={[
            styles.favoriteButton,
            {
              backgroundColor: "white",
            },
          ]}
        >
          <Text>{isFavourite ? "♥" : "♡"}</Text>
        </TouchableOpacity>
      </View>       

      {/* Article Description */}
  
        <View style={styles.contentContainer}>
          {/* Title and Category */}
        
          <View
            style={styles.articleDetailsContainer}
            testID="articleDetailsContainer"
          >
            <Text style={styles.articleTitle} testID="articleTitle">
         
             {article.title}
              
              </Text>
            <Text style={styles.articleCategory} testID="articleCategory">
              {article.category}
                         
              </Text>
          </View>

          {/* Description */}
          <View
            
            style={styles.sectionContainer}
            testID="sectionContainer"
          >
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{article.description}</Text>
          
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  articleImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: hp(1),
  },
  topButtonsContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp(4),
  },
  backButton: {
    padding: 10,
    borderRadius: 50,
    marginLeft: wp(5),
    backgroundColor: "white",
  },
  favoriteButton: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: wp(5),
  },

  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(4),
  },
  articleDetailsContainer: {
    marginBottom: hp(2),
    alignItems:'center',

  },
  articleTitle: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#454545", // text-neutral-700
  },
  articleCategory: {
    fontSize: hp(2),
    fontWeight: "500",
    color: "#ed6d83", // text-neutral-500
    padding:10,
  },
  sectionContainer: {
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: "#4B5563", // text-neutral-700
    padding:10,
  },
  descriptionText: {
    fontSize: hp(1.8),
    color: "#4B5563", // text-neutral-700
    textAlign: "justify",
    lineHeight: hp(2.5),
  },
  articleCard: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
    marginBottom: hp(2),
    overflow: "hidden",
    width: wp(90),
    
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: wp(2),
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#f44336",
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: 5,
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: hp(2),
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addButton: {
    backgroundColor: "#4F75FF",
    padding: wp(0.7),
    alignItems: "center",
    borderRadius: 5,
    width: wp(45),
    alignSelf: 'flex-end',
    marginBottom: hp(2),
  },
});
