"use client"

import {
  Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"

import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend
} from "recharts"

export default function App() {

  // ===============================
  // BASE DE DADOS
  // ===============================
  const dados = [
    { produto: "Acrílica", mes: 1, vendas: 120 },
    { produto: "Acrílica", mes: 2, vendas: 150 },
    { produto: "Acrílica", mes: 3, vendas: 130 },
    { produto: "Acrílica", mes: 4, vendas: 180 },
    { produto: "Acrílica", mes: 5, vendas: 200 },
    { produto: "Acrílica", mes: 6, vendas: 210 },
    { produto: "Acrílica", mes: 7, vendas: 190 },
    { produto: "Acrílica", mes: 8, vendas: 220 },
    { produto: "Acrílica", mes: 9, vendas: 210 },
    { produto: "Acrílica", mes: 10, vendas: 250 },
    { produto: "Acrílica", mes: 11, vendas: 300 },
    { produto: "Acrílica", mes: 12, vendas: 400 },

    { produto: "Esmalte", mes: 1, vendas: 80 },
    { produto: "Esmalte", mes: 2, vendas: 100 },
    { produto: "Esmalte", mes: 3, vendas: 90 },
    { produto: "Esmalte", mes: 4, vendas: 120 },
    { produto: "Esmalte", mes: 5, vendas: 130 },
    { produto: "Esmalte", mes: 6, vendas: 140 },
    { produto: "Esmalte", mes: 7, vendas: 150 },
    { produto: "Esmalte", mes: 8, vendas: 160 },
    { produto: "Esmalte", mes: 9, vendas: 170 },
    { produto: "Esmalte", mes: 10, vendas: 180 },
    { produto: "Esmalte", mes: 11, vendas: 190 },
    { produto: "Esmalte", mes: 12, vendas: 200 },

    { produto: "Látex", mes: 1, vendas: 200 },
    { produto: "Látex", mes: 2, vendas: 210 },
    { produto: "Látex", mes: 3, vendas: 220 },
    { produto: "Látex", mes: 4, vendas: 230 },
    { produto: "Látex", mes: 5, vendas: 240 },
    { produto: "Látex", mes: 6, vendas: 250 },
    { produto: "Látex", mes: 7, vendas: 260 },
    { produto: "Látex", mes: 8, vendas: 270 },
    { produto: "Látex", mes: 9, vendas: 280 },
    { produto: "Látex", mes: 10, vendas: 290 },
    { produto: "Látex", mes: 11, vendas: 300 },
    { produto: "Látex", mes: 12, vendas: 310 },

    { produto: "Spray", mes: 1, vendas: 60 },
    { produto: "Spray", mes: 2, vendas: 70 },
    { produto: "Spray", mes: 3, vendas: 65 },
    { produto: "Spray", mes: 4, vendas: 80 },
    { produto: "Spray", mes: 5, vendas: 85 },
    { produto: "Spray", mes: 6, vendas: 90 },
    { produto: "Spray", mes: 7, vendas: 95 },
    { produto: "Spray", mes: 8, vendas: 100 },
    { produto: "Spray", mes: 9, vendas: 105 },
    { produto: "Spray", mes: 10, vendas: 110 },
    { produto: "Spray", mes: 11, vendas: 120 },
    { produto: "Spray", mes: 12, vendas: 130 },

    { produto: "PVA", mes: 1, vendas: 150 },
    { produto: "PVA", mes: 2, vendas: 160 },
  ];

  // ===============================
  // AGRUPAR POR PRODUTO
  // ===============================
  const produtos = [...new Set(dados.map(d => d.produto))];

  function calcularRegressao(lista) {
    const x = lista.map(d => d.mes);
    const y = lista.map(d => d.vendas);
    const n = x.length;

    let somaX = 0, somaY = 0, somaXY = 0, somaX2 = 0;

    for (let i = 0; i < n; i++) {
      somaX += x[i];
      somaY += y[i];
      somaXY += x[i] * y[i];
      somaX2 += x[i] * x[i];
    }

    const a = (n * somaXY - somaX * somaY) / (n * somaX2 - somaX * somaX);
    const b = (somaY - a * somaX) / n;

    return { a, b };
  }

  // ===============================
  // UI
  // ===============================
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#0a0118] text-white p-6">

      <h1 className="text-4xl text-purple-400 mb-8 text-center">
        📊 Regressão por Produto
      </h1>

      <div className="space-y-10 max-w-6xl mx-auto">

        {produtos.map((produto) => {

          const lista = dados.filter(d => d.produto === produto);
          const { a, b } = calcularRegressao(lista);

          // gerar dados com previsão
          const chartData = [...lista];

          for (let mes = 13; mes <= 15; mes++) {
            chartData.push({
              mes,
              vendas: null,
              previsto: Number((a * mes + b).toFixed(2))
            });
          }

          const grafico = chartData.map(d => ({
            mes: d.mes,
            real: d.vendas,
            previsto: d.vendas ?? d.previsto ?? (a * d.mes + b)
          }));

          return (
            <Card key={produto} className="bg-white/5 backdrop-blur border-purple-500/20 rounded-md text-white">

              <CardHeader>
                <CardTitle>Produto: {produto}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                {/* COEFICIENTES */}
                <div>
                  <p>a (inclinação): {a.toFixed(2)}</p>
                  <p>b (intercepto): {b.toFixed(2)}</p>
                </div>

                {/* PREVISÃO */}
                <div>
                  <p className="text-green-400">Previsão (meses 13–15):</p>
                  {[13,14,15].map(m => (
                    <p key={m}>
                      Mês {m}: {(a*m + b).toFixed(2)}
                    </p>
                  ))}
                </div>

                {/* GRÁFICO */}
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={grafico}>
                    <CartesianGrid stroke="#444" />
                    <XAxis dataKey="mes" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Legend />

                    <Line dataKey="real" stroke="#a855f7" strokeWidth={2} />
                    <Line dataKey="previsto" stroke="#22c55e" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>

                {/* TABELA */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">Mês</TableHead>
                      <TableHead className="text-white">Real</TableHead>
                      <TableHead className="text-white">Previsto</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {grafico.map((d, i) => (
                      <TableRow key={i}>
                        <TableCell>{d.mes}</TableCell>
                        <TableCell>{d.real ?? "-"}</TableCell>
                        <TableCell>{d.previsto.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </CardContent>
            </Card>
          );
        })}

      </div>
    </div>
  );
}