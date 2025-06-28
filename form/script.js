document.addEventListener('DOMContentLoaded', () => {
    const formContent = document.getElementById('form-content');
    const thankYouScreen = document.getElementById('thank-you-screen');
    let currentQuestionIndex = 0;
    const answers = {}; // Objeto para armazenar as respostas

    const questions = [
        {
            type: 'text',
            name: 'nome',
            question: 'Qual é o seu nome?',
            placeholder: 'Digite seu nome completo'
        },
        {
            type: 'textarea',
            name: 'experiencia_formularios',
            question: 'Descreva sua experiência com formulários online.',
            placeholder: 'Conte-nos um pouco sobre sua experiência...'
        },
        {
            type: 'radio',
            name: 'cor_favorita',
            question: 'Qual sua cor favorita?',
            options: ['Azul', 'Verde', 'Vermelho', 'Amarelo', 'Roxo']
        },
        {
            type: 'checkbox',
            name: 'ferramentas_comunicacao',
            question: 'Quais ferramentas você usa para comunicação? (Selecione uma ou mais)',
            options: ['E-mail', 'Slack', 'WhatsApp', 'Zoom', 'Google Meet']
        }
    ];

    // Função para renderizar uma pergunta
    function renderQuestion(index) {
        formContent.innerHTML = ''; // Limpa o conteúdo anterior

        if (index >= questions.length) {
            submitForm();
            return;
        }

        const q = questions[index];
        const questionSlide = document.createElement('div');
        questionSlide.classList.add('question-slide');
        questionSlide.classList.add('fade-animate'); // Adiciona a animação de fade-in
        
        // Pequeno atraso para a transição de entrada
        setTimeout(() => {
            questionSlide.classList.add('active');
        }, 10); 

        let inputHtml = '';
        let buttonHtml = '';

        switch (q.type) {
            case 'text':
                inputHtml = `
                    <input type="text" id="${q.name}" name="${q.name}" placeholder="${q.placeholder}" required>
                    <button type="button" class="btn" onclick="nextQuestion()">Próximo</button>
                `;
                break;
            case 'textarea':
                inputHtml = `
                    <textarea id="${q.name}" name="${q.name}" placeholder="${q.placeholder}" required></textarea>
                    <button type="button" class="btn" onclick="nextQuestion()">Próximo</button>
                `;
                break;
            case 'radio':
                inputHtml = `<div class="options-group">`;
                q.options.forEach(option => {
                    const id = `${q.name}-${option.toLowerCase().replace(/\s/g, '-')}`;
                    inputHtml += `
                        <div class="option-item">
                            <input type="radio" id="${id}" name="${q.name}" value="${option}">
                            <label for="${id}">${option}</label>
                        </div>
                    `;
                });
                inputHtml += `</div>`;
                // Não há botão "Próximo" para rádio, avança automaticamente
                break;
            case 'checkbox':
                inputHtml = `<div class="options-group">`;
                q.options.forEach(option => {
                    const id = `${q.name}-${option.toLowerCase().replace(/\s/g, '-')}`;
                    inputHtml += `
                        <div class="option-item">
                            <input type="checkbox" id="${id}" name="${q.name}" value="${option}">
                            <label for="${id}">${option}</label>
                        </div>
                    `;
                });
                inputHtml += `</div>
                    <button type="button" class="btn" onclick="nextQuestion()">Próximo</button>
                `;
                break;
        }

        questionSlide.innerHTML = `
            <div class="question-content">
                <h1>${q.question}</h1>
                ${inputHtml}
            </div>
        `;
        formContent.appendChild(questionSlide);

        // Adiciona listeners após a renderização
        if (q.type === 'text') {
            const input = document.getElementById(q.name);
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Previne o comportamento padrão do Enter (ex: submeter formulário)
                    nextQuestion();
                }
            });
            input.focus();
        } else if (q.type === 'textarea') {
            document.getElementById(q.name).focus();
        } else if (q.type === 'radio' || q.type === 'checkbox') {
            // Adiciona listener de clique para toda a área do option-item
            document.querySelectorAll('.option-item').forEach(item => {
                item.addEventListener('click', () => {
                    const input = item.querySelector('input');
                    if (input) {
                        // Se for checkbox, inverte o estado
                        if (q.type === 'checkbox') {
                            input.checked = !input.checked;
                        } else { // Se for radio, apenas marca
                            input.checked = true;
                        }
                        // Dispara o evento change para que o JS possa reagir (especialmente para rádio)
                        const changeEvent = new Event('change');
                        input.dispatchEvent(changeEvent);
                    }
                });
            });

            // Listener para avançar automaticamente no rádio
            if (q.type === 'radio') {
                document.querySelectorAll(`input[name="${q.name}"]`).forEach(radioInput => {
                    radioInput.addEventListener('change', () => {
                        setTimeout(() => { // Pequeno atraso para a seleção ser visível
                            nextQuestion();
                        }, 100); // Reduzido para 100ms
                    });
                });
            }
        }
    }

    // Função para avançar para a próxima pergunta
    window.nextQuestion = function() {
        const q = questions[currentQuestionIndex];
        let value;

        if (q.type === 'text' || q.type === 'textarea') {
            const input = document.getElementById(q.name);
            value = input.value.trim();
            if (!value) {
                alert('Por favor, preencha este campo.');
                input.focus();
                return;
            }
        } else if (q.type === 'radio') {
            const selectedRadio = document.querySelector(`input[name="${q.name}"]:checked`);
            if (!selectedRadio) {
                alert('Por favor, selecione uma opção.');
                return;
            }
            value = selectedRadio.value;
        } else if (q.type === 'checkbox') {
            const selectedCheckboxes = Array.from(document.querySelectorAll(`input[name="${q.name}"]:checked`))
                                            .map(cb => cb.value);
            if (selectedCheckboxes.length === 0) {
                alert('Por favor, selecione pelo menos uma opção.');
                return;
            }
            value = selectedCheckboxes;
        }

        answers[q.name] = value; // Armazena a resposta

        // Esconde a pergunta atual com transição
        const currentSlide = document.querySelector('.question-slide.active');
        if (currentSlide) {
            currentSlide.classList.remove('active');
            // Adiciona a classe para iniciar a transição de saída
            currentSlide.style.transform = 'translateY(-100%)'; 
            currentSlide.style.opacity = '0';
            // Esconde completamente após a transição
            setTimeout(() => {
                currentSlide.classList.add('hidden');
            }, 300); // Tempo da transição CSS (0.3s)
        }

        currentQuestionIndex++;
        // Pequeno atraso para a transição de saída antes de renderizar a próxima
        setTimeout(() => {
            renderQuestion(currentQuestionIndex);
        }, 300); // Tempo da transição CSS (0.3s)
    };

    // Função para enviar o formulário
    function submitForm() {
        console.log('Respostas coletadas:', answers);

        // Esconde o conteúdo do formulário e mostra a tela de agradecimento
        formContent.classList.remove('active');
        formContent.classList.add('hidden');
        
        thankYouScreen.classList.remove('hidden');
        thankYouScreen.classList.add('fade-animate'); // Adiciona animação de fade-in
        setTimeout(() => {
            thankYouScreen.classList.add('active');
        }, 10); // Pequeno atraso para a transição de entrada

        // Envia os dados para o webhook do Bubble.io
        fetch('https://licit-31755.bubbleapps.io/version-test/api/1.1/wf/devform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(answers ) // Envia o objeto answers como JSON
        })
        .then(response => {
            if (!response.ok) {
                // Se a resposta não for OK, tenta ler o erro do Bubble
                return response.json().then(err => { throw new Error(err.message || `HTTP error! status: ${response.status}`); });
            }
            // O Bubble pode retornar um JSON vazio ou um status 200 sem corpo
            return response.headers.get('content-type')?.includes('application/json') ? response.json() : response.text();
        })
        .then(data => {
            console.log('Sucesso ao enviar para Bubble:', data);
            // Você pode adicionar uma mensagem de sucesso mais específica aqui se quiser
        })
        .catch(error => {
            console.error('Erro ao enviar para Bubble:', error);
            alert('Ocorreu um erro ao enviar suas respostas. Por favor, tente novamente. Detalhes: ' + error.message);
        });
    }

    // Inicia o formulário carregando a primeira pergunta
    renderQuestion(currentQuestionIndex);
});
