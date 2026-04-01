import Tooltip from "./components/Tooltip";
import Card from "./components/Card";
import Section from "./components/Section";

export default function App() {

  const x = [1,2,3,4,5,6,7,8,9,10,11,12];
  const y = [120,150,130,180,200,210,190,220,210,250,300,400];

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

  const mediaY = somaY / n;

  let sqTotal = 0, sqRes = 0;
  const yPrev = [];

  for (let i = 0; i < n; i++) {
    const yEst = a * x[i] + b;
    yPrev.push(yEst);

    sqTotal += Math.pow(y[i] - mediaY, 2);
    sqRes += Math.pow(y[i] - yEst, 2);
  }

  const r2 = 1 - (sqRes / sqTotal);

  return (
    <div className="text-white p-6 max-w-6xl mx-auto">

      {/* HERO */}
      <div className="text-center mb-12 fade-in">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">
          📊 Regressão Linear
        </h1>
        <p className="text-gray-400">
          Aprenda como prever valores com matemática simples
        </p>
      </div>

      {/* DADOS */}
      <Section title="📥 Dados utilizados">
        <Card>
          <p className="mb-4 text-gray-300">
            <b>x</b>: meses | <b>y</b>: vendas
          </p>

          <div className="grid grid-cols-2 gap-2 text-center">
            {x.map((v, i) => (
              <div key={i} className="bg-purple-500/10 p-2 rounded">
                {v} → {y[i]}
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* CÁLCULOS */}
      <Section title="🧮 Etapas do cálculo">

        <Card>
          <h3 className="font-bold mb-2">Somatórios</h3>
          <pre className="text-green-400">
{`Σx = ${somaX}
Σy = ${somaY}
Σxy = ${somaXY}
Σx² = ${somaX2}`}
          </pre>
        </Card>

        <Card>
          <h3 className="font-bold mb-2">Equação da reta</h3>
          <pre className="text-green-400">
{`a = (n Σxy - Σx Σy) / (n Σx² - (Σx)²)
b = (Σy - a Σx) / n`}
          </pre>
        </Card>

        <Card>
          <h3 className="font-bold mb-2">Resultados</h3>

          <p>
            <Tooltip texto="Inclinação (crescimento)">
              a:
            </Tooltip> {a.toFixed(2)}
          </p>

          <p>
            <Tooltip texto="Valor inicial">
              b:
            </Tooltip> {b.toFixed(2)}
          </p>

          <p>
            <Tooltip texto="Qualidade do modelo">
              R²:
            </Tooltip> {r2.toFixed(4)}
          </p>
        </Card>
      </Section>

      {/* TABELA */}
      <Section title="📊 Comparação">

        <Card>
          <table className="w-full text-center">
            <thead>
              <tr className="text-purple-300">
                <th>Mês</th>
                <th>Real</th>
                <th>Previsto</th>
              </tr>
            </thead>
            <tbody>
              {x.map((v, i) => (
                <tr key={i} className="hover:bg-purple-500/10">
                  <td>{v}</td>
                  <td>{y[i]}</td>
                  <td>
                    <Tooltip texto="Valor estimado">
                      {yPrev[i].toFixed(2)}
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

      </Section>

    </div>
  );
}