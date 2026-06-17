import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import { homeStyles } from "./style";

const GameCard = ({ label, onPress, imageUri }) => {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [opacityAnim] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 0.95,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      style={homeStyles.cardWrapper}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      activeOpacity={1}
    >
      <Animated.View
        style={[
          homeStyles.cardBox,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <View style={homeStyles.photoPlaceholder}>
          <Image source={imageUri} style={homeStyles.photo} />
        </View>
      </Animated.View>
      <Text style={homeStyles.cardLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ onLogout, onNavigate }) {
  return (
    <View style={homeStyles.container}>
      <ScrollView
        style={homeStyles.scrollArea}
        contentContainerStyle={homeStyles.scrollContent}
        showsVerticalScrollIndicator={true}
        indicatorStyle="white"
      >
        <Text style={homeStyles.title}>Escolha um Jogo:</Text>
        <Text style={homeStyles.cardHint}>Toque no card para iniciar</Text>

        <View style={homeStyles.cardsContainer}>
          <GameCard
            label="Adivinhar Jogador"
            imageUri={require("./images/AdivinharJogador.png")}
            onPress={() => onNavigate("quiz-jogadores")}
          />
          <GameCard
            label="Adivinhar Seleção"
            imageUri={require("./images/AdivinharSeleção.png")}
            onPress={() => onNavigate("quiz-selecao")}
          />
          <GameCard
            label="Adivinhar Posição"
            imageUri={require("./images/AdivinharPosição.png")}
            onPress={() => onNavigate("quiz-posicao")}
          />
        </View>

        <TouchableOpacity style={homeStyles.logoutButton} onPress={onLogout}>
          <Text style={homeStyles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
