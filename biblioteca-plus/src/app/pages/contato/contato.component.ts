import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1 class="page-title">Contatos</h1>
      <!-- Bloco: Endereço -->
      <div class="bloco-contato">
        <button class="btn-laranja">Endereço</button>
        <div class="caixa-branca">
          R. Santa Luzia, 735 - 2º andar - Centro, Rio de Janeiro - RJ<br />
          CEP: 20030-041
        </div>
      </div>

      <!-- Bloco: Telefone -->
      <div class="bloco-contato">
        <button class="btn-laranja">Telefone</button>
        <div class="caixa-branca">
          (21) 2018-9029<br />
          WhatsApp: (21) 92018-9029
        </div>
      </div>

      <!-- Bloco: Email -->
      <div class="bloco-contato">
        <button class="btn-laranja">Email</button>
        <div class="caixa-branca">
          contato&#64;bibliotecamais.com.br<br />
          suporte&#64;bibliotecamais.com.br
        </div>
      </div>

      <!-- Bloco: Horário -->
      <div class="bloco-contato">
        <button class="btn-laranja">Horário</button>
        <div class="caixa-branca">
          Segunda a Sexta: 08h às 17h
        </div>
      </div>

      <!-- Bloco: Redes Sociais -->
      <div class="bloco-contato">
        <button class="btn-laranja">Redes Sociais</button>
        <div class="caixa-branca redes-sociais">
          <a href="#" aria-label="Instagram">
            <i class="fab fa-instagram"></i> Instagram
          </a> |
          <a href="#" aria-label="Facebook">
            <i class="fab fa-facebook"></i> Facebook
          </a> |
          <a href="#" aria-label="Twitter">
            <i class="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>

      <!-- Bloco Enviar Mensagem -->
      <div class="bloco-contato">
        <button class="btn-laranja">Mensagem</button>
        <div class="caixa-branca">
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="formulario">
            <label>
              Nome:
              <input type="text" name="nome" required ngModel />
            </label>

            <label>
              Email:
              <input type="email" name="email" required ngModel />
            </label>

            <label>
              Assunto:
              <input type="text" name="assunto" required ngModel />
            </label>

            <label>
              Mensagem:
              <textarea name="mensagem" rows="4" required ngModel></textarea>
            </label>

            <button
              type="submit"
              [disabled]="!contactForm.valid"
              class="btn-enviar"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 30px;
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .page-title {
      font-size: 32px;
      margin-bottom: 25px;
      color: #4a2c82;
      text-align: left; /* 👈 Alinhamento à esquerda */
    }

    .bloco-contato {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 2px solid #d97a0f;
      border-radius: 12px;
      padding: 16px 16px 16px 16px;
    }

    .btn-laranja {
      position: absolute;
      top: -11px; /* Botão parece cortado pela borda */
      left: 16px;
      background-color: #d97a0f;
      color: white;
      font-weight: bold;
      font-size: 14px;
      padding: 4px 16px;
      border: none;
      border-radius: 6px;
      z-index: 2;
      cursor: default;
      user-select: none;
      width: 140px; /* Tamanho fixo */
      text-align: center;
    }

    .caixa-branca {
      background-color: #fff;
      color: #333;
      margin-top: 28px;
      font-size: 14px;
    }

    .formulario {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }

    input,
    textarea {
      margin-top: 4px;
      padding: 10px;
      font-size: 14px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
      resize: vertical;
    }

    .btn-enviar {
      align-self: flex-start;
      background-color: #5c3b85;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
      transition: background-color 0.3s ease;
    }

    .btn-enviar:disabled {
      background-color: #999;
      cursor: not-allowed;
    }

    .redes-sociais a {
      color: #5c3b85;
      text-decoration: none;
      margin: 0 6px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .redes-sociais i {
      font-size: 18px;
    }

    @media (max-width: 600px) {
      .container {
        padding: 16px;
      }

      .btn-laranja {
        /* Mantém o botão do mesmo tamanho */
        width: 140px;
        position: absolute;
        top: -11px;
        left: 16px;
        text-align: center;
      }

      .caixa-branca {
        margin-top: 28px;
      }

      .btn-enviar {
        width: auto;
      }
    }
  `]
})
export class ContatoComponent {
  onSubmit() {
    alert('Mensagem enviada com sucesso!');
  }
}
