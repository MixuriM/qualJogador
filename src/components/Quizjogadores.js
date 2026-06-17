import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

import { quizJogadoresStyles as styles } from "../style";
import quizData from "../data/quizData";

export default function QuizJogadoresScreen({ onBack }) {
  const [jogadorAtual, setJogadorAtual] = useState(null);
  const [resposta, setResposta] = useState("");
  const [pontos, setPontos] = useState(0);
  const [acertou, setAcertou] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tentativas, setTentativas] = useState(0);
  const [dica1, setDica1] = useState(false);
  const [dica2, setDica2] = useState(false);
  const [dica3, setDica3] = useState(false);

  const [zoom, setZoom] = useState(4);
  const zoomAnim = useRef(new Animated.Value(4)).current;

  useEffect(() => {
    try {
      sortearJogador();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[Quizjogadores] erro no useEffect:", err);
    }
  }, []);

  const normalizarTexto = (texto) => {
    if (texto == null) return "";
    const normalizeSingle = (t) =>
      String(t)
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (Array.isArray(texto)) return texto.map((t) => normalizeSingle(t));
    return normalizeSingle(texto);
  };

  const sortearJogador = () => {
    try {
      let data = quizData;
      if (!Array.isArray(data) || data.length === 0) {
        // tentar fallback para named export (CommonJS/ESM compat)
        try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const fallback = require("../data/quizData");
          data =
            fallback.quizData ||
            fallback.quizDataJogador ||
            fallback.default ||
            data;
          // fallback carregado
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error("[Quizjogadores] erro ao carregar fallback:", e);
        }
      }

      const jogador =
        Array.isArray(data) && data.length > 0
          ? data[Math.floor(Math.random() * data.length)]
          : null;

      if (!jogador) {
        throw new Error("Nenhum jogador disponível em quizData");
      }

      setJogadorAtual(jogador);
      // reset zoom state
      setZoom(4);
      zoomAnim.setValue(4);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[Quizjogadores] erro ao sortear:", err);
    }
    setResposta("");
    setAcertou(false);
    setMensagem("");
    setTentativas(0);
    setDica1(false);
    setDica2(false);
    setDica3(false);
  };

  const verificarResposta = () => {
    if (acertou) {
      return;
    }

    if (!resposta.trim()) {
      Alert.alert("Atenção", "Digite o nome do jogador.");
      return;
    }

    const respostaUsuario = normalizarTexto(resposta);
    const listaRespostas = jogadorAtual.respostas || [jogadorAtual.nome];

    const acertouResposta = listaRespostas.some(
      (item) => normalizarTexto(item) === respostaUsuario,
    );

    if (acertouResposta) {
      setPontos((prev) => prev + 10);
      setAcertou(true);
      setMensagem("Acertou! Você ganhou 10 pontos.");

      Animated.timing(zoomAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    } else {
      setPontos((prev) => prev - 1);
      setTentativas((prev) => prev + 1);

      const novoZoom = zoom > 1 ? zoom - 0.5 : 1;

      setZoom(novoZoom);

      Animated.timing(zoomAnim, {
        toValue: novoZoom,
        duration: 400,
        useNativeDriver: true,
      }).start();

      setMensagem("Resposta incorreta. Você perdeu 1 ponto.");
    }

    setResposta("");
  };

  const usarDica = () => {
    if (acertou) return;

    if (!dica1) {
      setDica1(true);
      setPontos((prev) => prev - 2);
      setMensagem("Dica: País do jogador revelado (-2 pontos)");
      return;
    }

    if (!dica2) {
      setDica2(true);
      setPontos((prev) => prev - 3);
      setMensagem("Dica: Posição do jogador revelada (-3 pontos)");
      return;
    }

    if (!dica3) {
      setDica3(true);
      setPontos((prev) => prev - 5);
      setMensagem("Dica: Primeira letra do nome revelada (-5 pontos)");
      return;
    }

    Alert.alert("Aviso", "Você já usou todas as dicas.");
  };

  const proximoJogador = () => {
    sortearJogador();
  };

  const progresso = Math.min(100, ((4 - zoom) / 3) * 100);

  if (!jogadorAtual) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
        persistentScrollbar
      >
        <Text style={styles.titulo}>Quem é o Craque?</Text>

        <Text style={styles.score}>Pontos: {pontos}</Text>
        <Text style={styles.tentativas}>Tentativas: {tentativas}</Text>

        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progresso}%` }]} />
        </View>

        <View style={styles.imageWrapper}>
          <Animated.Image
            source={jogadorAtual.imagem}
            resizeMode="cover"
            style={[
              styles.image,
              {
                transform: [
                  {
                    scale: zoomAnim,
                  },
                ],
              },
            ]}
          />
        </View>

        <View style={styles.hintsContainer}>
          {dica1 && (
            <Text style={styles.hintText}>País: {jogadorAtual.pais}</Text>
          )}
          {dica2 && (
            <Text style={styles.hintText}>Posição: {jogadorAtual.posicao}</Text>
          )}
          {dica3 && (
            <Text style={styles.hintText}>
              Primeira letra: {jogadorAtual.nome.charAt(0)}
            </Text>
          )}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome do jogador"
          placeholderTextColor="#999"
          value={resposta}
          onChangeText={setResposta}
          onSubmitEditing={verificarResposta}
          onKeyPress={({ nativeEvent }) =>
            nativeEvent.key === "Enter" && verificarResposta()
          }
          returnKeyType="done"
          blurOnSubmit
        />

        <TouchableOpacity style={styles.button} onPress={verificarResposta}>
          <Text style={styles.buttonText}>Verificar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hintButton} onPress={usarDica}>
          <Text style={styles.buttonText}>Pedir Dica</Text>
        </TouchableOpacity>

        {mensagem !== "" && <Text style={styles.mensagem}>{mensagem}</Text>}

        {acertou && (
          <TouchableOpacity style={styles.nextButton} onPress={proximoJogador}>
            <Text style={styles.buttonText}>Próximo Jogador</Text>
          </TouchableOpacity>
        )}

        {onBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
