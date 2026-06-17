import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { loginStyles } from "./style";

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    setErro("");
    setErroEmail("");
    setErroSenha("");

    // Validações
    if (!email.trim()) {
      setErro("Por favor, insira seu email");
      return;
    }

    if (!validarEmail(email)) {
      setErroEmail("O email digitado não é válido");
      setErro("O email digitado não é válido");
      return;
    }

    if (!senha.trim()) {
      setErro("Por favor, insira sua senha");
      return;
    }

    if (senha.length < 6) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres");
      setErro("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setLoading(true);

    // Simular chamada de API
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      if (typeof onLogin === "function") {
        onLogin();
      }
    }, 1500);
  };

  const handleCadastro = () => {
    // navigation.navigate('Cadastro'); // Implemente a tela de cadastro
    Alert.alert("Cadastro", "Funcionalidade em desenvolvimento");
  };

  return (
    <View style={loginStyles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={loginStyles.logo}
        resizeMode="contain"
      />

      <View style={loginStyles.formContainer}>
        <Text style={loginStyles.loginText}>Fazer Login</Text>
        <Text style={loginStyles.label}>Email</Text>
        <TextInput
          style={loginStyles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (text.trim() && !validarEmail(text)) {
              setErroEmail("O email digitado não é válido");
            } else {
              setErroEmail("");
            }
            setErro("");
          }}
          editable={!loading}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={loginStyles.label}>Senha</Text>
        <TextInput
          style={loginStyles.input}
          placeholder="Sua senha"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            if (text.trim() && text.length < 6) {
              setErroSenha("A senha deve ter pelo menos 6 caracteres");
            } else {
              setErroSenha("");
            }
            setErro("");
          }}
          secureTextEntry
          editable={!loading}
        />

        {erro ? <Text style={loginStyles.erro}>{erro}</Text> : null}
        {erroEmail ? <Text style={loginStyles.erro}>{erroEmail}</Text> : null}
        {erroSenha ? <Text style={loginStyles.erro}>{erroSenha}</Text> : null}

        <TouchableOpacity
          style={[
            loginStyles.botaoLogin,
            loading && loginStyles.botaoDesabilitado,
          ]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={loginStyles.textoBotao}>
            {loading ? "Carregando..." : "Entrar"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={loginStyles.botaoCadastro}
          onPress={handleCadastro}
          disabled={loading}
        >
          <Text style={loginStyles.textoBotaoCadastro}>
            Não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
