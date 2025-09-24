import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="sobre-nos-container">
        <h1 class="page-title">Sobre nós</h1>

        <p>
          Somos uma biblioteca digital gratuita, criada para aproximar você da leitura,
          da cultura e do conhecimento, esteja onde estiver. Nosso objetivo é facilitar o acesso,
          sempre com qualidade, diversidade e serviços pensados para todos os perfis de leitor.
        </p>

        <div class="section-box">
          <h2>O que oferecemos</h2>
          <ul>
            <li>Acesso gratuito a milhares de livros digitais;</li>
            <li>Seleção de audiolivros, e‑books e conteúdos multimídia;</li>
            <li>Programação cultural: eventos, clubes de leitura e oficinas;</li>
            <li>Recursos de acessibilidade para tornar a leitura mais inclusiva;</li>
            <li>Aplicativo e plataforma responsiva para uso em qualquer dispositivo;</li>
            <li>Serviços de busca inteligente e histórico de leitura personalizado;</li>
            <li>Conteúdos atualizados continuamente com curadoria especializada.</li>
          </ul>
        </div>

        <div class="section-box">
          <h2>Por que escolher nossa biblioteca</h2>
          <p>
            Porque acreditamos que o livro e a leitura transformam. Aqui, você encontra um espaço seguro e acolhedor, 
            com conteúdo de confiança, ferramentas facilitadoras e uma comunidade que valoriza aprendizagem e trocas culturais.
          </p>
        </div>

        <div class="section-box">
          <h2>Como participar</h2>
          <p>
            Basta criar sua conta gratuitamente, explorar nossos acervos, participar das nossas atividades culturais
            e aproveitar todos os recursos que preparamos para tornar sua experiência literária mais rica.
          </p>
        </div>

        <div class="section-box">
          <h2>Contato</h2>
          <p>
            Email: contato&#64;bibliotecamais.com.br <br>
            Telefone: (21) 2018-9029 <br>
            Endereço: R. Santa Luzia, 735 - 2º andar - Centro, Rio de Janeiro - RJ, 20030-041
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sobre-nos-container {
      padding: 40px 0;
      font-family: Arial, sans-serif;
      color: #333;
      line-height: 1.6;
    }

    .page-title {
      font-size: 32px;
      margin-bottom: 25px;
      color: #4a2c82;
      text-align: left; /* 👈 Alinhamento à esquerda */
    }

    .section-box {
      background-color: #fdf1e3;
      border-left: 8px solid #d97a0f;
      padding: 20px;
      margin-top: 30px;
      border-radius: 4px;
    }

    .section-box h2 {
      color: #d97a0f;
      margin-top: 0;
      font-size: 22px;
    }

    .section-box p,
    .section-box ul {
      font-size: 16px;
      margin-top: 10px;
    }

    ul {
      list-style-type: disc;
      margin-left: 20px;
    }

    ul li {
      margin-bottom: 6px;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 28px;
      }

      .section-box {
        padding: 16px;
      }

      .section-box h2 {
        font-size: 20px;
      }
    }
  `]
})
export class SobreNosComponent {}
