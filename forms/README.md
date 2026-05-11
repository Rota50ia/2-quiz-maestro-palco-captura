# Formulários MAESTRO PALCO — DISC Musical

Sistema completo de captação segmentada por personalidade DISC para músicos profissionais.

## 🎯 Conceito

Cada personalidade DISC recebe uma experiência personalizada:
- **Design visual** específico com cores neurológicas
- **Copy direcionada** para motivações específicas
- **Tracking diferenciado** para análise de conversão
- **Integração ActiveCampaign** com automações segmentadas

## 📁 Estrutura dos Formulários

```
forms/
├── alto-d-conquistador.html    # ALTO D — Vermelho executivo
├── alto-i-conectado.html       # ALTO I — Laranja inspirador
├── alto-s-construtor.html      # ALTO S — Amarelo estável
└── alto-c-estrategista.html    # ALTO C — Azul analítico
```

## 🎨 Design System

### Cores por Personalidade

| Tipo | Cor Principal | Neurotransmissor | Valor Percebido |
|------|---------------|------------------|-----------------|
| **D** | `#DC2626` Vermelho | Adrenalina/Testosterona | R$ 25,00 |
| **I** | `#EA580C` Laranja | Dopamina/Oxitocina | R$ 22,00 |
| **S** | `#FACC15` Amarelo | Serotonina | R$ 28,00 |
| **C** | `#3B82F6` Azul | Dopamina/Competência | R$ 30,00 |

### Componentes Visuais

- **Container:** Glassmorphism escuro com border gradient
- **Typography:** Montserrat (display) + Inter (body)
- **Forms:** Override completo do ActiveCampaign com brand premium
- **Buttons:** Gradients com hover effects e shadows
- **Icons:** Específicos por personalidade (⚡ 🎵 🏗️ 🎯)

## 🔗 Integrações ActiveCampaign

### IDs dos Formulários

```html
<!-- ALTO D -->
<div class="_form_3"></div>
<script src="https://edilsomdil79386.activehosted.com/f/embed.php?id=3"></script>

<!-- ALTO I -->
<div class="_form_5"></div>
<script src="https://edilsomdil79386.activehosted.com/f/embed.php?id=5"></script>

<!-- ALTO S -->
<div class="_form_7"></div>
<script src="https://edilsomdil79386.activehosted.com/f/embed.php?id=7"></script>

<!-- ALTO C -->
<div class="_form_9"></div>
<script src="https://edilsomdil79386.activehosted.com/f/embed.php?id=9"></script>
```

## 📊 Tracking e Analytics

### Facebook Pixel

Cada formulário envia eventos específicos:

```javascript
// Exemplo ALTO D
fbq('track', 'ViewContent', {
  content_name: 'ALTO D - Conquistador Musical',
  personality_type: 'D',
  neurotransmitter: 'adrenaline_testosterone',
  value: 25.00,
  currency: 'BRL'
});
```

### Google Analytics

Events customizados por personalidade:

```javascript
gtag("event", "page_view", {
  page_title: "MAESTRO PALCO - ALTO D Conquistador",
  personality_type: "D",
  neurotransmitter_focus: "adrenaline_testosterone",
  content_value: 25.00
});
```

## 🚀 Como Usar

### 1. Deploy Individual
Cada arquivo é uma página standalone:
```
https://quiz-maestro-palco.rota50ia.com/alto-d
https://quiz-maestro-palco.rota50ia.com/alto-i
https://quiz-maestro-palco.rota50ia.com/alto-s
https://quiz-maestro-palco.rota50ia.com/alto-c
```

### 2. Redirect do Quiz
Após resultado DISC, redirecionar para o form correspondente:

```javascript
// Exemplo de redirect
function redirectToForm(result) {
  const urls = {
    'D': '/alto-d',
    'I': '/alto-i', 
    'S': '/alto-s',
    'C': '/alto-c'
  };
  window.location.href = urls[result];
}
```

## 📱 Responsividade

- **Mobile-first:** Design otimizado para mobile
- **Breakpoints:** 640px para ajustes de layout
- **Touch-friendly:** Botões e campos adequados para touch

## ⚡ Performance

- **CSS inline:** Elimina requests extras
- **Fonts preload:** Google Fonts otimizadas
- **Scripts otimizados:** ActiveCampaign + tracking
- **Images:** SVG icons quando possível

## 🔧 Customização

### Modificar Cores
Alterar CSS custom properties:
```css
:root {
  --d-primary: #DC2626;  /* Nova cor ALTO D */
  --d-glow: rgba(220, 38, 38, 0.25);
}
```

### Modificar Copy
Textos principais nos elementos:
- `.form-title` — Título principal
- `.form-subtitle` — Descrição
- `.personality-features li` — Lista de benefícios

### Modificar Tracking
IDs nos scripts:
- Facebook Pixel: `294131638634570`
- Google Analytics: `G-SXXB0S0NPL`
- Google Ads: `AW-CONVERSION_ID`

## 📈 Métricas Importantes

### Conversão por Personalidade
- **ALTO D:** Foco em resultados rápidos e dominância
- **ALTO I:** Foco em conexão e inspiração
- **ALTO S:** Foco em estabilidade e colaboração  
- **ALTO C:** Foco em precisão e excelência técnica

### KPIs Tracking
- View Content por tipo
- Lead Generation por personalidade
- Form Completion Rate
- Neurotransmitter engagement

---

## 🚀 Próximos Passos

1. **A/B Testing:** Testar variations de copy por personalidade
2. **Automations:** Configurar sequences específicas no ActiveCampaign
3. **Landing Pages:** Criar pages de thank you personalizadas
4. **Analytics:** Dashboard consolidado de conversões DISC

---

*Desenvolvido para MAESTRO PALCO — Sistema de posicionamento musical por personalidade DISC*