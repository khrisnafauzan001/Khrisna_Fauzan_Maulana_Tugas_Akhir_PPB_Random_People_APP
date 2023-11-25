import { View, Text, Image } from "react-native";

const GenreCard = ({ dataLN }) => {
    const imageUrl = dataLN.avatar || "https://avatars.githubusercontent.com/u/116475964?v=4";
    const OriTitle = dataLN.name || "Light Novel Title";

    let title = OriTitle;
    const maxlength = 35;
    if (title.length > maxlength) {
        title = title.substring(0, maxlength) + "...";
    }


    return (
        <View
            style={{
                
                marginHorizontal: 15,
                borderRadius: 20,
                alignItems: "center",
                marginRight: 20,
                flexDirection: "row",
                marginVertical: 5,
                backgroundColor: 'rgba(53, 174, 208, 0.8)',
                alignSelf: "flex-start"
            }}
        >
            <Image
                source={{ uri: imageUrl }}
                style={{
                    width: 150,
                    borderRadius: 20,
                    height: 210,

                }}
            />
            <Text
                style={{
                    paddingHorizontal:3,
                    fontSize: 25,
                    fontWeight: "450"

                }}
            >
                {title}
            </Text>
        </View>
    );
};

export default GenreCard;
