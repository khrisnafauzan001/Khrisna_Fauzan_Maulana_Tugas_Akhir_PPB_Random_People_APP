import React from "react";
import { View, Text, Image } from "react-native";

const TopCard = ({ dataLN, noRank, navigation }) => {
  const imageUrl =
    dataLN.avatar ||
    "https://avatars.githubusercontent.com/u/116475964?v=4";
  const OriTitle = dataLN.name || "Light Novel Title";

  let img = imageUrl;
  if (
    img ===
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fuser-avatar&psig=AOvVaw232euKQCbZFdpoNfbwawTx&ust=1700930270405000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMip45WJ3YIDFQAAAAAdAAAAABAE"
  ) {
    img =
      "https://qph.cf2.quoracdn.net/main-qimg-95474603dad2483fa094a55e5e893acf-lq";
  }

  let title = OriTitle;
  const maxlength = 50;
  if (title.length > maxlength) {
    title = title.substring(0, maxlength) + "...";
  }

  return (
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 4,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(106, 144, 231, 0.98)",
        paddingHorizontal: 10, 
        paddingVertical: 8, 
      }}
    >
      <Text
        style={{
          width: 35,
          fontSize: 14,
          fontWeight: "600",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {noRank}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10, 
        }}
      >
        <Image
          source={{ uri: img }}
          style={{
            width: 85,
            height: 120,
            borderRadius: 1,
            borderColor: "black",
          }}
        />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: 10, 
          }}
        >
          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              fontWeight: "600",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopCard;
