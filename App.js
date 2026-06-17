import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import LoginScreen from "./src/login";
import HomeScreen from "./src/home";
import QuizJogadores from "./src/components/Quizjogadores";
import QuizSelecao from "./src/components/QuizSelecao";
import QuizPosicao from "./src/components/QuizPosicao";
import styles from "./src/style";

export default function App() {
  const [screen, setScreen] = useState("login");

  const handleLoginSuccess = () => {
    setScreen("home");
  };

  const handleLogout = () => {
    setScreen("login");
  };

  const handleBackToHome = () => {
    setScreen("home");
  };

  return (
    <View style={styles.container}>
      {screen === "login" ? (
        <LoginScreen onLogin={handleLoginSuccess} />
      ) : screen === "quiz-jogadores" ? (
        <QuizJogadores onBack={handleBackToHome} />
      ) : screen === "quiz-selecao" ? (
        <QuizSelecao onBack={handleBackToHome} />
      ) : screen === "quiz-posicao" ? (
        <QuizPosicao onBack={handleBackToHome} />
      ) : (
        <HomeScreen onLogout={handleLogout} onNavigate={setScreen} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}
