// produtos.js
// Lista com 20 produtos adaptados para Moçambique - preços em Metical (MT)
const produtosData = [
    { id: 1, nome: "Smartphone Techno Spark 10C", preco: 8990, descricao: "128GB, 8GB RAM, câmara 50MP, bateria 5000mAh, dual SIM. Ideal para o dia a dia.", icone: "📱", categoria: "Eletrônicos" },
    { id: 2, nome: "Fone Bluetooth JBL Tune", preco: 2450, descricao: "Som premium, 40h de bateria, carregamento rápido, confortável para uso prolongado.", icone: "🎧", categoria: "Eletrônicos" },
    { id: 3, nome: "Relógio Smartwatch Pro", preco: 3850, descricao: "Monitor cardíaco, GPS, notificações, resistente à água. Perfeito para desporto.", icone: "⌚", categoria: "Acessórios" },
    { id: 4, nome: "Notebook HP 15", preco: 38990, descricao: "Intel Core i5, 8GB RAM, SSD 256GB, Windows 11. Para trabalho e estudos.", icone: "💻", categoria: "Informática" },
    { id: 5, nome: "Ténis Desportivo", preco: 1890, descricao: "Amortecido, respirável, solado antiderrapante. Cores variadas. Tamanhos 36-44.", icone: "👟", categoria: "Moda" },
    { id: 6, nome: "Camisa Social", preco: 1250, descricao: "Algodão premium, gola estruturada, ideal para trabalho e eventos. Cor azul marinho e branco.", icone: "👕", categoria: "Moda" },
    { id: 7, nome: "Capulana Estampada", preco: 890, descricao: "Tecido tradicional moçambicano, estampas vibrantes, 100% algodão. Perfeita para presente.", icone: "🧣", categoria: "Moda" },
    { id: 8, nome: "Smart TV 43'' 4K", preco: 22990, descricao: "Android TV, Wi-Fi, Netflix integrado, 3 HDMI. Garantia 1 ano.", icone: "📺", categoria: "Eletrônicos" },
    { id: 9, nome: "Mochila Executiva", preco: 1650, descricao: "Couro ecológico, compartimento para notebook até 15.6'', vários bolsos.", icone: "🎒", categoria: "Acessórios" },
    { id: 10, nome: "Teclado e Mouse Sem Fio", preco: 1290, descricao: "Kit ergonômico, teclas silenciosas, alcance 10m. Conexão estável.", icone: "⌨️", categoria: "Informática" },
    { id: 11, nome: "Cadeira de Escritório", preco: 5990, descricao: "Ergonômica, reclinável, rodízios, assento estofado. Perfeita para home office.", icone: "🪑", categoria: "Casa" },
    { id: 12, nome: "Perfume Masculino", preco: 2890, descricao: "Fragrância amadeirada, longa duração, 100ml. Ideal para ocasiões especiais.", icone: "🧴", categoria: "Beleza" },
    { id: 13, nome: "Tablet Samsung A8", preco: 12990, descricao: "64GB, tela 10.5'', caneta inclusa, perfeito para estudos e entretenimento.", icone: "📲", categoria: "Eletrônicos" },
    { id: 14, nome: "Bolsa Feminina", preco: 1750, descricao: "Couro legítimo, detalhes dourados, alça ajustável. Elegante e funcional.", icone: "👜", categoria: "Moda" },
    { id: 15, nome: "Fogão 4 Bocas", preco: 7890, descricao: "Fogão Electrolux, forno amplo, acendimento automático. Entrega em todo Moçambique.", icone: "🍳", categoria: "Casa" },
    { id: 16, nome: "Caixa de Som Bluetooth", preco: 2150, descricao: "Potente, resistente à água, 12h de reprodução. Leve para qualquer lugar.", icone: "🔊", categoria: "Eletrônicos" },
    { id: 17, nome: "Óculos de Sol", preco: 890, descricao: "Proteção UV400, armação em metal, lentes polarizadas. Estilo e proteção.", icone: "🕶️", categoria: "Acessórios" },
    { id: 18, nome: "Ventilador de Teto", preco: 3990, descricao: "3 velocidades, silencioso, design moderno. Instalação incluída em Maputo.", icone: "🌀", categoria: "Casa" },
    { id: 19, nome: "Calça Jeans Skinny", preco: 1390, descricao: "Azul marinho, elastano confortável, lavagem premium. Tamanhos do 38 ao 48.", icone: "👖", categoria: "Moda" },
    { id: 20, nome: "Power Bank 20000mAh", preco: 1290, descricao: "Carregamento rápido, duas entradas USB, compatível com todos os telemóveis.", icone: "🔋", categoria: "Eletrônicos" }
];

// Apenas as categorias que você pediu: Eletrônicos e Informática para os filtros rápidos
const categoriasBusca = ["Eletrônicos", "Informática"];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { produtosData, categoriasBusca };
}