// gerenciador de perguntas

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

// importando estilos e dados do quiz
import { quizSelecaoStyles as styles } from "../style";

const selecoesData = [
  {
    id: 1,
    nome: "Brasil",
    imagem: require("../images/brasil.png"),
    continente: "América do Sul",
    tituloCopas: 5,
    dica1: "Maior campeã do mundo com 5 títulos",
    dica2: "Conhecida pelo futebol criativo e alegre",
    dica3: "Pátria de lendas como Pelé e Ronaldo",
  },
  {
    id: 2,
    nome: "Argentina",
    imagem: require("../images/argentina.png"),
    continente: "América do Sul",
    tituloCopas: 3,
    dica1: "Campeã mundial em 1978, 1986 e 2022",
    dica2: "Conhecida pela defesa feroz e futebol tático",
    dica3: "Localizada na América do Sul com tango",
  },
  {
    id: 3,
    nome: "Portugal",
    imagem: require("../images/portugal.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Campeão da Eurocopa 2016",
    dica2: "Berço de Cristiano Ronaldo",
    dica3: "Nação ibérica com história de navegadores",
  },
  {
    id: 4,
    nome: "França",
    imagem: require("../images/frança.png"),
    continente: "Europa",
    tituloCopas: 2,
    dica1: "Bicampeã mundial (1998 e 2018)",
    dica2: "Conhecida pelo estilo francês e elegância",
    dica3: "Produceu jogadores como Zidane e Mbappé",
  },
  {
    id: 5,
    nome: "Alemanha",
    imagem: require("../images/alemanha.png"),
    continente: "Europa",
    tituloCopas: 4,
    dica1: "Tetracampeã mundial, uma das maiores potências",
    dica2: "Conhecida pela disciplina e técnica impecável",
    dica3: "Centro da Europa, produz grandes técnicos",
  },
  {
    id: 6,
    nome: "Espanha",
    imagem: require("../images/espanha.png"),
    continente: "Europa",
    tituloCopas: 1,
    dica1: "Campeã da Eurocopa 2008, 2012 e Copa 2010",
    dica2: "Famosa pelo tiki-taka e posse de bola",
    dica3: "Localizada na Península Ibérica",
  },
  {
    id: 7,
    nome: "Inglaterra",
    imagem: require("../images/inglaterra.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Campeã da Eurocopa 2020",
    dica2: "Criou o futebol moderno",
    dica3: "Ilha europeia com Premier League",
  },
  {
    id: 8,
    nome: "Itália",
    imagem: require("../images/italia.png"),
    continente: "Europa",
    tituloCopas: 4,
    dica1: "Tetracampeã mundial (1934, 1938, 1982, 2006)",
    dica2: "Conhecida pela defesa catenaccio",
    dica3: "Europeia mediterrânea com grande história",
  },
  {
    id: 9,
    nome: "Noruega",
    imagem: require("../images/noruega.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Nunca conquistou a Copa do Mundo",
    dica2: "País escandinavo no norte europeu",
    dica3: "Conhecida por seus fiordes e natureza",
  },
  {
    id: 10,
    nome: "Croácia",
    imagem: require("../images/croacia.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Vice-campeã mundial em 2018",
    dica2: "País dos Bálcãs com grande tradição defensiva",
    dica3: "Produziu Luka Modrić",
  },
  {
    id: 11,
    nome: "Coréia",
    imagem: require("../images/coreia.png"),
    continente: "Ásia",
    tituloCopas: 0,
    dica1: "Nação asiática com população grande",
    dica2: "Conhecida por jogadores tecnicamente bons",
    dica3: "Produzio Son Heung-min",
  },
  {
    id: 12,
    nome: "Bélgica",
    imagem: require("../images/belgica.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Geração dourada com Hazard e De Bruyne",
    dica2: "Pequeno país europeu muito forte",
    dica3: "Conhecida pela qualidade técnica",
  },
  {
    id: 13,
    nome: "Polônia",
    imagem: require("../images/polonia.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Produzio o craque Lewandowski",
    dica2: "País do leste europeu",
    dica3: "Conhecida por jogadores defensivos",
  },
  {
    id: 14,
    nome: "Egito",
    imagem: require("../images/egito.png"),
    continente: "África",
    tituloCopas: 0,
    dica1: "Localizada no norte da África",
    dica2: "Tem Mohamed Salah",
    dica3: "Conhecida pelo futebol africano de luta",
  },
  {
    id: 15,
    nome: "Holanda",
    imagem: require("../images/holanda.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Tri-vice-campeã mundial",
    dica2: "Criou o futebol total com Cruyff",
    dica3: "País europeu com grande tradição",
  },
  {
    id: 16,
    nome: "Senegal",
    imagem: require("../images/senegal.png"),
    continente: "África",
    tituloCopas: 0,
    dica1: "Campeão africano em 2022",
    dica2: "País africano com grande potencial",
    dica3: "Produzio Sadio Mané",
  },
  {
    id: 17,
    nome: "País de Gales",
    imagem: require("../images/paisdegales.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "Nação britânica com história futebolística",
    dica2: "Produzio Gareth Bale",
    dica3: "Conhecida por sua paixão pelo futebol",
  },
  {
    id: 18,
    nome: "Suécia",
    imagem: require("../images/suecia.png"),
    continente: "Europa",
    tituloCopas: 0,
    dica1: "País escandinavo europeu",
    dica2: "Produzio Zlatan Ibrahimovic",
    dica3: "Conhecida por jogadores altos e técnicos",
  },
];

export default function QuizSelecaoScreen({ onBack }) {
  const [selecaoAtual, setSelecaoAtual] = useState(null);
  const [resposta, setResposta] = useState("");
  const [pontos, setPontos] = useState(0);
  const [acertou, setAcertou] = useState(false);
  const [zoom, setZoom] = useState(4);
  const [mensagem, setMensagem] = useState("");
  const [tentativas, setTentativas] = useState(0);

  const [dica1, setDica1] = useState(false);
  const [dica2, setDica2] = useState(false);
  const [dica3, setDica3] = useState(false);

  const zoomAnim = useRef(new Animated.Value(4)).current;

  useEffect(() => {
    sortearSelecao();
  }, []);

  const normalizarTexto = (texto) => {
    if (texto == null) return "";
    return String(texto)
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const sortearSelecao = () => {
    const sorteada =
      selecoesData[Math.floor(Math.random() * selecoesData.length)];

    setSelecaoAtual(sorteada);
    setResposta("");
    setAcertou(false);
    setZoom(4);
    setMensagem("");
    setTentativas(0);

    setDica1(false);
    setDica2(false);
    setDica3(false);

    zoomAnim.setValue(4);
  };

  const verificarResposta = () => {
    if (acertou) {
      return; // já acertou, não faz mais nada
    }

    if (!resposta.trim()) {
      Alert.alert("Atenção", "Digite o nome da seleção.");
      return;
    }

    const respostaUsuario = normalizarTexto(resposta);

    const respostaCorreta = normalizarTexto(selecaoAtual.nome);

    if (respostaUsuario === respostaCorreta) {
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
    if (!dica1) {
      setDica1(true);
      setPontos((prev) => prev - 2);
      setMensagem(`Dica 1: ${selecaoAtual.dica1} (-2 pontos)`);
      return;
    }

    if (!dica2) {
      setDica2(true);
      setPontos((prev) => prev - 3);
      setMensagem(`Dica 2: ${selecaoAtual.dica2} (-3 pontos)`);
      return;
    }

    if (!dica3) {
      setDica3(true);
      setPontos((prev) => prev - 5);
      setMensagem(`Dica 3: ${selecaoAtual.dica3} (-5 pontos)`);
      return;
    }

    Alert.alert("Aviso", "Todas as dicas já foram utilizadas.");
  };

  const progresso = ((4 - zoom) / 3) * 100;

  if (!selecaoAtual) return null;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
        persistentScrollbar
      >
        <Text style={styles.titulo}>Qual é a Seleção?</Text>

        <Text style={styles.score}>Pontos: {pontos}</Text>

        <Text style={styles.tentativas}>Tentativas: {tentativas}</Text>

        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${progresso}%`,
              },
            ]}
          />
        </View>

        <View style={styles.imageWrapper}>
          <Animated.Image
            source={selecaoAtual.imagem}
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
            <Text style={styles.hintText}>Dica 1: {selecaoAtual.dica1}</Text>
          )}

          {dica2 && (
            <Text style={styles.hintText}>Dica 2: {selecaoAtual.dica2}</Text>
          )}

          {dica3 && (
            <Text style={styles.hintText}>Dica 3: {selecaoAtual.dica3}</Text>
          )}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome da seleção"
          value={resposta}
          onChangeText={setResposta}
          onSubmitEditing={verificarResposta}
          onKeyPress={({ nativeEvent }) => nativeEvent.key === "Enter" && verificarResposta()}
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
          <TouchableOpacity style={styles.nextButton} onPress={sortearSelecao}>
            <Text style={styles.buttonText}>Próxima Seleção</Text>
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
