"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Veiculo {
  modelo: string;
  placa: string;
  ano: number;
  cor: string;
  quilometragem: number;
  combustivel: string;
}

const API = process.env.NEXT_PUBLIC_BACKEND_ADRESS

const getVeiculos = async () => {
  try {

    const response = await axios.get<Veiculo[]>(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/veiculos/`); // Tipagem explícita da resposta


    console.log('Dados retornados pela API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter veículos:', error);
    throw error;
  }
};

const HomePage = () => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]); // Tipagem do estado

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const veiculosData = await getVeiculos(); // Aqui a função já retorna o array tipado
        setVeiculos(veiculosData);
      } catch (error) {
        console.error('Erro ao obter veículos:', error);
      }
    };

    fetchVeiculos();
  }, []);

  return (
    <div>
      <h1>Lista de Veículos</h1>
      <ul>
        {veiculos.map((veiculo) => (
          <li key={veiculo.placa}>
            {veiculo.modelo} - 
            {veiculo.placa} - 
            {veiculo.ano} - 
            {veiculo.cor} -
            {veiculo.quilometragem} KM - 
            {veiculo.combustivel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
