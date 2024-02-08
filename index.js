const perguntas = [
    {
      pergunta: "O que é microeconomia?",
      respostas: [
        "Estudo das interações entre países",
        "Estudo do comportamento de mercados financeiros",
        "Estudo do comportamento de agentes econômicos em nível individual",
      ],
      correta: 2
    },
    {
      pergunta: "O que é oferta na microeconomia?",
      respostas: [
        "A quantidade de dinheiro em circulação",
        "A quantidade de bens e serviços que os produtores estão dispostos a vender a um determinado preço",
        "A demanda por produtos por parte dos consumidores",
      ],
      correta: 1
    },
    {
      pergunta: "Como se define a elasticidade-preço da demanda?",
      respostas: [
        "Variação percentual na quantidade demandada dividida pela variação percentual no preço",
        "Variação percentual no preço dividida pela variação percentual na quantidade demandada",
        "Variação absoluta na quantidade demandada dividida pela variação absoluta no preço",
      ],
      correta: 1
    },
    {
      pergunta: "O que representa a curva de oferta?",
      respostas: [
        "A relação entre a quantidade ofertada e o preço, mantendo os outros fatores constantes",
        "A relação entre a quantidade demandada e o preço, mantendo os outros fatores constantes",
        "A relação entre a oferta e a demanda em um mercado específico",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o conceito de utilidade na microeconomia?",
      respostas: [
        "A quantidade de dinheiro que uma pessoa possui",
        "A satisfação ou prazer que uma pessoa obtém do consumo de bens e serviços",
        "O preço médio de mercado de um bem ou serviço",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um mercado perfeitamente competitivo?",
      respostas: [
        "Um mercado com apenas um produtor dominante",
        "Um mercado com muitos produtores, cada um oferecendo um produto único",
        "Um mercado com muitos produtores e consumidores, onde nenhum tem poder de influenciar o preço",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o custo de oportunidade?",
      respostas: [
        "O custo total de produção de um bem ou serviço",
        "O custo associado a escolher a próxima melhor alternativa ao tomar uma decisão",
        "O custo fixo de uma empresa",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um bem inferior na teoria econômica?",
      respostas: [
        "Um bem cuja demanda diminui à medida que a renda do consumidor aumenta",
        "Um bem cuja demanda aumenta à medida que a renda do consumidor aumenta",
        "Um bem cujo preço permanece constante, independentemente da oferta e demanda",
      ],
      correta: 0
    },
    {
      pergunta: "O que é a lei da oferta?",
      respostas: [
        "Quando a quantidade demandada de um bem diminui à medida que o preço aumenta",
        "Quando a quantidade demandada de um bem aumenta à medida que o preço aumenta",
        "Quando a quantidade ofertada de um bem aumenta à medida que o preço aumenta",
      ],
      correta: 2
    },
    {
      pergunta: "O que são externalidades na economia?",
      respostas: [
        "Efeitos positivos ou negativos de uma transação sobre terceiros que não estão envolvidos na transação",
        "Custos fixos associados à produção de um bem",
        "Custos que são internalizados pelas empresas",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item) 
        }
  
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }
      
  
      
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }