 const cursosInfo = {
            ADS: {
                nome: "Análise e Desenvolvimento de Sistemas",
                descricao: "Curso voltado para desenvolvimento de software, banco de dados e infraestrutura de TI. Forma profissionais capazes de analisar, projetar, desenvolver, testar, implantar e manter sistemas computacionais.",
                duracao: "6 períodos (3 anos)",
                periodo: "Manhã, Tarde ou Noite",
                coordenador: "Prof. Dr. João Silva",
                mercado: "Alta demanda por profissionais de TI"
            },
            GE: {
                nome: "Gestão Empresarial",
                descricao: "Curso focado em administração, gestão de pessoas e processos empresariais. Desenvolve habilidades em gestão estratégica, finanças, marketing e recursos humanos.",
                duracao: "6 períodos (3 anos)",
                periodo: "Noite",
                coordenador: "Prof. Dra. Maria Santos",
                mercado: "Amplas oportunidades em diversos setores"
            },
            GPI: {
                nome: "Gestão da Produção Industrial",
                descricao: "Curso para formação de profissionais em processos industriais e gestão da produção. Abrange desde o planejamento até a controle da produção industrial.",
                duracao: "6 períodos (3 anos)",
                periodo: "Noite",
                coordenador: "Prof. Dr. Carlos Oliveira",
                mercado: "Setor industrial em constante modernização"
            },
            LOG: {
                nome: "Logística",
                descricao: "Curso voltado para gestão de cadeias logísticas, transporte e armazenagem. Prepara profissionais para otimizar fluxos de produtos, informações e recursos.",
                duracao: "6 períodos (3 anos)",
                periodo: "Noite",
                coordenador: "Prof. Dra. Ana Costa",
                mercado: "Setor em crescimento com a expansão do e-commerce"
            },
            MEC: {
                nome: "Manufatura Avançada",
                descricao: "Curso para atuação em processos de manufatura e tecnologias avançadas. Inclui conhecimentos em automação, robótica e processos de fabricação modernos.",
                duracao: "6 períodos (3 anos)",
                periodo: "Noite",
                coordenador: "Prof. Dr. Paulo Mendes",
                mercado: "Indústria 4.0 demanda profissionais especializados"
            },
            POL: {
                nome: "Polímeros",
                descricao: "Curso especializado em materiais poliméricos e processos industriais relacionados. Abrange desde a síntese de polímeros até a transformação em produtos finais.",
                duracao: "6 períodos (3 anos)",
                periodo: "Noite",
                coordenador: "Prof. Dra. Fernanda Lima",
                mercado: "Setor plástico é um dos mais importantes da economia"
            },
            PRO: {
                nome: "Processos Gerenciais",
                descricao: "Curso para formação em gestão de processos e negócios. Desenvolve competências em administração, empreendedorismo e gestão de operações.",
                duracao: "4 períodos (2 anos)",
                periodo: "Tarde ou Noite",
                coordenador: "Prof. Dr. Roberto Alves",
                mercado: "Ampla atuação em empresas de todos os portes"
            },
            RED: {
                nome: "Redes de Computadores",
                descricao: "Curso voltado para infraestrutura de redes, segurança e conectividade. Prepara profissionais para projetar, implementar e gerenciar redes de computadores.",
                duracao: "6 períodos (3 anos)",
                periodo: "Noite",
                coordenador: "Prof. Dr. André Pereira",
                mercado: "Infraestrutura de TI é crítica para todas as empresas"
            },
            SI: {
                nome: "Sistemas para Internet",
                descricao: "Curso para desenvolvimento de aplicações web e serviços online. Abrange programação front-end e back-end, UX/UI e comércio eletrônico.",
                duracao: "6 períodos (3 anos)",
                periodo: "Noite",
                coordenador: "Prof. Dra. Juliana Rodrigues",
                mercado: "Demanda crescente por aplicações web e mobile"
            }
        };

        const select = document.getElementById('cursoSelect');
        select.onchange = function () {
            const valor = select.value;
            if (!valor) return;
            const curso = cursosInfo[valor];
            const confirmar = window.confirm(`Deseja abrir informações sobre o curso "${curso.nome}"?`);
            if (confirmar) {
                // Calcular posição para centralizar a janela
                const width = 600;
                const height = 400;
                const left = (screen.width - width) / 2;
                const top = (screen.height - height) / 2;
                
                const conteudo = `
                <!DOCTYPE html>
                <html lang='pt-br'>
                <head>
                    <title>${curso.nome}</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            padding: 25px;
                            background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%);
                            color: #333;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }
                        .container {
                            max-width: 100%;
                        }
                        h1 {
                            color: #2a4d7c;
                            font-size: 1.8rem;
                            margin-bottom: 15px;
                            border-bottom: 2px solid #2a4d7c;
                            padding-bottom: 10px;
                        }
                        p {
                            font-size: 1.1rem;
                            line-height: 1.6;
                            color: #444;
                            margin-bottom: 15px;
                        }
                        .detalhes {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 15px;
                            margin: 20px 0;
                        }
                        .detalhes div {
                            background: #e9ecef;
                            padding: 12px;
                            border-radius: 8px;
                            font-size: 0.95rem;
                        }
                        .detalhes strong {
                            color: #2a4d7c;
                            display: block;
                            margin-bottom: 5px;
                        }
                        .button {
                            display: inline-block;
                            margin-top: 15px;
                            padding: 10px 20px;
                            background: #2a4d7c;
                            color: white;
                            text-decoration: none;
                            border-radius: 5px;
                            transition: background 0.3s;
                            text-align: center;
                        }
                        .button:hover {
                            background: #1a365d;
                        }
                        @media (max-width: 620px) {
                            .detalhes {
                                grid-template-columns: 1fr;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>${curso.nome}</h1>
                        <p>${curso.descricao}</p>
                        
                        <div class="detalhes">
                            <div>
                                <strong>Duração:</strong> ${curso.duracao}
                            </div>
                            <div>
                                <strong>Período:</strong> ${curso.periodo}
                            </div>
                            <div>
                                <strong>Coordenador:</strong> ${curso.coordenador}
                            </div>
                            <div>
                                <strong>Mercado de Trabalho:</strong> ${curso.mercado}
                            </div>
                        </div>
                        
                        <a href="https://www.fatecsorocaba.edu.br/curso.asp" class="button" target="_blank">Mais informações no site</a>
                    </div>
                </body>
                </html>`;
                
                // Abrir a janela centralizada
                const novaJanela = window.open('', '_blank', `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`);
                novaJanela.document.write(conteudo);
                novaJanela.document.close();
                
                // Foca na nova janela
                if (window.focus) {
                    novaJanela.focus();
                }
            } else {
                select.value = '';
            }
        };