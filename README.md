# Regressão Linear de Vendas por Produto

Este projeto demonstra como calcular a **regressão linear simples** e gerar previsões futuras para diferentes produtos utilizando **React**, **Tailwind CSS** e **Shadcn UI**.  

A aplicação exibe:  

- Cálculo da reta `y = a*x + b` para cada produto  
- Previsão de vendas para os meses 13, 14 e 15  
- Gráficos de tendência comparando valores reais e previstos  
- Tabelas detalhadas com dados reais e valores previstos  

---

## Dados utilizados

| ID | Produto        | Ano  | Mês | Trimestre | Vendas (unidades) |
|----|----------------|------|-----|-----------|-----------------|
| 1  | Tinta Acrílica | 2023 | 1   | 1         | 120             |
| 2  | Tinta Acrílica | 2023 | 2   | 1         | 150             |
| 3  | Tinta Acrílica | 2023 | 3   | 1         | 130             |
| 4  | Tinta Acrílica | 2023 | 4   | 2         | 180             |
| 5  | Tinta Acrílica | 2023 | 5   | 2         | 200             |
| 6  | Tinta Acrílica | 2023 | 6   | 2         | 210             |
| 7  | Tinta Acrílica | 2023 | 7   | 3         | 190             |
| 8  | Tinta Acrílica | 2023 | 8   | 3         | 220             |
| 9  | Tinta Acrílica | 2023 | 9   | 3         | 210             |
| 10 | Tinta Acrílica | 2023 | 10  | 4         | 250             |
| 11 | Tinta Acrílica | 2023 | 11  | 4         | 300             |
| 12 | Tinta Acrílica | 2023 | 12  | 4         | 400             |
| 13 | Tinta Esmalte  | 2023 | 1   | 1         | 80              |
| 14 | Tinta Esmalte  | 2023 | 2   | 1         | 100             |
| 15 | Tinta Esmalte  | 2023 | 3   | 1         | 90              |
| 16 | Tinta Esmalte  | 2023 | 4   | 2         | 120             |
| 17 | Tinta Esmalte  | 2023 | 5   | 2         | 130             |
| 18 | Tinta Esmalte  | 2023 | 6   | 2         | 140             |
| 19 | Tinta Esmalte  | 2023 | 7   | 3         | 150             |
| 20 | Tinta Esmalte  | 2023 | 8   | 3         | 160             |
| 21 | Tinta Esmalte  | 2023 | 9   | 3         | 170             |
| 22 | Tinta Esmalte  | 2023 | 10  | 4         | 180             |
| 23 | Tinta Esmalte  | 2023 | 11  | 4         | 190             |
| 24 | Tinta Esmalte  | 2023 | 12  | 4         | 200             |
| 25 | Tinta Látex    | 2023 | 1   | 1         | 200             |
| 26 | Tinta Látex    | 2023 | 2   | 1         | 210             |
| 27 | Tinta Látex    | 2023 | 3   | 1         | 220             |
| 28 | Tinta Látex    | 2023 | 4   | 2         | 230             |
| 29 | Tinta Látex    | 2023 | 5   | 2         | 240             |
| 30 | Tinta Látex    | 2023 | 6   | 2         | 250             |
| 31 | Tinta Látex    | 2023 | 7   | 3         | 260             |
| 32 | Tinta Látex    | 2023 | 8   | 3         | 270             |
| 33 | Tinta Látex    | 2023 | 9   | 3         | 280             |
| 34 | Tinta Látex    | 2023 | 10  | 4         | 290             |
| 35 | Tinta Látex    | 2023 | 11  | 4         | 300             |
| 36 | Tinta Látex    | 2023 | 12  | 4         | 310             |
| 37 | Tinta Spray    | 2023 | 1   | 1         | 60              |
| 38 | Tinta Spray    | 2023 | 2   | 1         | 70              |
| 39 | Tinta Spray    | 2023 | 3   | 1         | 65              |
| 40 | Tinta Spray    | 2023 | 4   | 2         | 80              |
| 41 | Tinta Spray    | 2023 | 5   | 2         | 85              |
| 42 | Tinta Spray    | 2023 | 6   | 2         | 90              |
| 43 | Tinta Spray    | 2023 | 7   | 3         | 95              |
| 44 | Tinta Spray    | 2023 | 8   | 3         | 100             |
| 45 | Tinta Spray    | 2023 | 9   | 3         | 105             |
| 46 | Tinta Spray    | 2023 | 10  | 4         | 110             |
| 47 | Tinta Spray    | 2023 | 11  | 4         | 120             |
| 48 | Tinta Spray    | 2023 | 12  | 4         | 130             |
| 49 | Tinta PVA      | 2023 | 1   | 1         | 150             |
| 50 | Tinta PVA      | 2023 | 2   | 1         | 160             |

---

## Como o código funciona

### 1. Agrupamento por produto
Os dados são separados por produto para calcular regressão linear de forma independente para cada um.

### 2. Cálculo da regressão linear
Para cada produto, calcula-se:

- **a (inclinação)** → aumento médio de vendas por mês  
- **b (intercepto)** → valor inicial da reta no mês 0  

Fórmulas:

```javascript
// Inclinação
a = (n * Σxy - Σx * Σy) / (n * Σx² - (Σx)²)

// Intercepto
b = (Σy - a * Σx) / n
