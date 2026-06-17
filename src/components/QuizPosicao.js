import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
  ScrollView,
} from "react-native";

import { quizJogadoresStyles as styles } from "../style";
import quizData from "../data/quizData";

export default function QuizScreen({ onBack }) {
  const [jogadorAtual, setJogadorAtual] = useState(null);
  const [resposta, setResposta] = useState("");
  const [pontos, setPontos] = useState(0);
  const [acertou, setAcertou] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tentativas, setTentativas] = useState(0);
  const [dica1, setDica1] = useState(false);
  const [dica2, setDica2] = useState(false);
  const [dica3, setDica3] = useState(false);

  useEffect(() => {
    sortearJogador();
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
    let data = quizData;

    if (!Array.isArray(data) || data.length === 0) {
      try {
        // fallback para compatibilidade CommonJS/ESM
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const fallback = require("../data/quizData");
        data = fallback.quizData || fallback.default || data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(
          "[QuizPosicao] erro ao carregar fallback quizData:",
          error,
        );
      }
    }

    const jogador =
      Array.isArray(data) && data.length > 0
        ? data[Math.floor(Math.random() * data.length)]
        : null;

    setJogadorAtual(jogador);
    setResposta("");
    setAcertou(false);
    setMensagem("");
    setTentativas(0);
    setDica1(false);
    setDica2(false);
    setDica3(false);
  };

  const verificarResposta = () => {
    if (acertou) return;
    if (!jogadorAtual) return;

    if (!resposta.trim()) {
      Alert.alert("Atenção", "Digite uma posição.");
      return;
    }

    const respostaUsuario = normalizarTexto(resposta);
    const posicoesCorretas = normalizarTexto(jogadorAtual.posicao);

    const acertouResposta = Array.isArray(posicoesCorretas)
      ? posicoesCorretas.includes(respostaUsuario)
      : respostaUsuario === posicoesCorretas;

    if (acertouResposta) {
      setPontos((p) => p + 10);
      setAcertou(true);
      setMensagem(
        `Parabéns! ${jogadorAtual.nome} é ${jogadorAtual.posicao}. (+10 pontos)`,
      );
    } else {
      setPontos((p) => p - 1);
      setTentativas((t) => t + 1);
      setMensagem("Posição incorreta. (-1 ponto)");
    }

    setResposta("");
  };

  const getDicaType = () => {
    const raw = jogadorAtual.posicao;
    const posicoes = Array.isArray(raw) ? raw : [raw];
    const norm = posicoes.map((p) => String(p || "").toLowerCase());
    if (norm.some((p) => p.includes("goleiro"))) return "Goleiro";
    if (
      norm.some(
        (p) =>
          p.includes("zagueiro") ||
          p.includes("lateral") ||
          p.includes("defensivo"),
      )
    )
      return "Defensivo";
    if (norm.some((p) => p.includes("meia") && !p.includes("atacante")))
      return "Meia";
    return "Ofensivo";
  };

  const usarDica = () => {
    if (!jogadorAtual) return;

    if (!dica1) {
      setDica1(true);
      setPontos((p) => p - 2);
      setMensagem(`País: ${jogadorAtual.pais} (-2 pontos)`);
      return;
    }

    if (!dica2) {
      setDica2(true);
      setPontos((p) => p - 3);
      const ultimoNome = jogadorAtual.nome.split(" ").pop();
      setMensagem(
        `Primeira letra do sobrenome: ${ultimoNome.charAt(0)} (-3 pontos)`,
      );
      return;
    }

    if (!dica3) {
      setDica3(true);
      setPontos((p) => p - 5);
      setMensagem(`Tipo de jogador: ${getDicaType()} (-5 pontos)`);
      return;
    }

    Alert.alert("Dicas", "Você já utilizou todas as dicas.");
  };

  if (!jogadorAtual) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Carregando quiz de posição...</Text>
      </View>
    );
  }

  const progresso = acertou ? 100 : 0;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
        persistentScrollbar
      >
        <Text style={styles.titulo}>Qual é a posição do jogador?</Text>

        <Text style={styles.score}>Pontos: {pontos}</Text>
        <Text style={styles.tentativas}>Tentativas: {tentativas}</Text>

        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progresso}%` }]} />
        </View>

        <View style={styles.imageWrapper}>
          <Image
            source={jogadorAtual.imagem}
            resizeMode="cover"
            style={styles.image}
          />
        </View>

        <View style={styles.hintsContainer}>
          {dica1 && (
            <Text style={styles.hintText}>País: {jogadorAtual.pais}</Text>
          )}
          {dica2 && (
            <Text style={styles.hintText}>
              Sobrenome começa com:{" "}
              {jogadorAtual.nome.split(" ").pop().charAt(0)}
            </Text>
          )}
          {dica3 && <Text style={styles.hintText}>Tipo: {getDicaType()}</Text>}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite a posição"
          value={resposta}
          onChangeText={setResposta}
          onSubmitEditing={verificarResposta}
          onKeyPress={({ nativeEvent }) => nativeEvent.key === "Enter" && verificarResposta()}
          returnKeyType="done"
          blurOnSubmit
        />

        <TouchableOpacity
          style={styles.button}
          onPress={verificarResposta}
          disabled={acertou}
        >
          <Text style={styles.buttonText}>Verificar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hintButton} onPress={usarDica}>
          <Text style={styles.buttonText}>Pedir Dica</Text>
        </TouchableOpacity>

        {mensagem !== "" && <Text style={styles.mensagem}>{mensagem}</Text>}

        {acertou && (
          <TouchableOpacity style={styles.nextButton} onPress={sortearJogador}>
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
