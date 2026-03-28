// script.js
// Controle com pesquisa e categorias apenas dentro da lupa

document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const productsGrid = document.getElementById('productsGrid');
    const menuHamburger = document.getElementById('menuHamburger');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchSubmit = document.getElementById('searchBtn');
    const searchCategoriesContainer = document.getElementById('searchCategoriesContainer');
    const productCountSpan = document.getElementById('productCount');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    // Modal
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalImage = document.getElementById('modalImage');
    const modalBuyBtn = document.getElementById('modalBuyBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    let allProducts = [...produtosData];
    let activeCategory = null;
    let currentSearchTerm = '';
    
    // Número WhatsApp Moçambique
    const whatsappNumber = "258841234567";
    
    // Formatar preço em Metical
    function formatPrice(value) {
        return value.toLocaleString('pt-PT') + ' MT';
    }
    
    // Abrir WhatsApp
    function openWhatsApp(productName, productPrice) {
        const message = `Olá! Vi no Clique e Compra o produto *${productName}* no valor de ${formatPrice(productPrice)}. Gostaria de mais informações e finalizar a compra. Estou em Moçambique.`;
        const encodedMsg = encodeURIComponent(message);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
        window.open(url, '_blank');
    }
    
    // Renderizar produtos com base nos filtros
    function renderProducts() {
        let filtered = [...allProducts];
        
        if (activeCategory) {
            filtered = filtered.filter(p => p.categoria === activeCategory);
        }
        
        if (currentSearchTerm.trim()) {
            const term = currentSearchTerm.toLowerCase().trim();
            filtered = filtered.filter(p => 
                p.nome.toLowerCase().includes(term) || 
                p.descricao.toLowerCase().includes(term)
            );
        }
        
        const countText = filtered.length === 1 ? '1 produto encontrado' : `${filtered.length} produtos encontrados`;
        productCountSpan.innerHTML = `<i class="fas fa-tag"></i> ${countText}`;
        
        if (activeCategory || currentSearchTerm.trim()) {
            clearFiltersBtn.style.display = 'inline-block';
        } else {
            clearFiltersBtn.style.display = 'none';
        }
        
        if (!productsGrid) return;
        productsGrid.innerHTML = '';
        
        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column:1/-1; text-align:center; padding:3rem;">
                    <i class="fas fa-search" style="font-size:3rem; color:#D4AF37;"></i>
                    <p style="margin-top:1rem; color:#4a5568;">Nenhum produto encontrado :(<br>Tente outra categoria ou termo de busca.</p>
                </div>`;
            return;
        }
        
        filtered.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            const imgDiv = document.createElement('div');
            imgDiv.className = 'product-img';
            imgDiv.style.backgroundColor = '#eef2ff';
            imgDiv.style.fontSize = '3rem';
            imgDiv.style.display = 'flex';
            imgDiv.style.alignItems = 'center';
            imgDiv.style.justifyContent = 'center';
            imgDiv.innerHTML = prod.icone || '📦';
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'product-info';
            
            const title = document.createElement('h3');
            title.className = 'product-title';
            title.textContent = prod.nome;
            
            const priceSpan = document.createElement('div');
            priceSpan.className = 'product-price';
            priceSpan.textContent = formatPrice(prod.preco);
            
            const descShort = document.createElement('p');
            descShort.className = 'product-desc';
            descShort.textContent = prod.descricao.length > 65 ? prod.descricao.substring(0, 65) + '...' : prod.descricao;
            
            const buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'card-buttons';
            
            const btnVerMais = document.createElement('button');
            btnVerMais.textContent = '🔍 Ver mais';
            btnVerMais.className = 'btn-vermais';
            btnVerMais.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(prod);
            });
            
            const btnComprar = document.createElement('button');
            btnComprar.innerHTML = '<i class="fab fa-whatsapp"></i> Comprar';
            btnComprar.className = 'btn-comprar-card';
            btnComprar.addEventListener('click', (e) => {
                e.stopPropagation();
                openWhatsApp(prod.nome, prod.preco);
            });
            
            buttonsDiv.appendChild(btnVerMais);
            buttonsDiv.appendChild(btnComprar);
            infoDiv.appendChild(title);
            infoDiv.appendChild(priceSpan);
            infoDiv.appendChild(descShort);
            infoDiv.appendChild(buttonsDiv);
            card.appendChild(imgDiv);
            card.appendChild(infoDiv);
            productsGrid.appendChild(card);
        });
    }
    
    // Abrir modal
    function openModal(product) {
        modalTitle.textContent = product.nome;
        modalPrice.textContent = formatPrice(product.preco);
        modalDesc.textContent = product.descricao;
        modalImage.innerHTML = product.icone || '🛍️';
        modalImage.style.fontSize = '3.5rem';
        
        modalBuyBtn.onclick = () => {
            openWhatsApp(product.nome, product.preco);
        };
        
        modal.classList.add('active');
    }
    
    function closeModal() {
        modal.classList.remove('active');
    }
    
    // Renderizar categorias DENTRO da área de busca (apenas Eletrônicos e Informática)
    function renderSearchCategories() {
        if (!searchCategoriesContainer) return;
        searchCategoriesContainer.innerHTML = '';
        
        categoriasBusca.forEach(cat => {
            const chip = document.createElement('div');
            chip.className = 'search-category-chip';
            if (activeCategory === cat) chip.classList.add('active');
            
            let icon = '';
            if (cat === 'Eletrônicos') icon = '<i class="fas fa-mobile-alt"></i>';
            else if (cat === 'Informática') icon = '<i class="fas fa-laptop"></i>';
            else icon = '<i class="fas fa-tag"></i>';
            
            chip.innerHTML = `${icon} ${cat}`;
            chip.addEventListener('click', () => {
                if (activeCategory === cat) {
                    activeCategory = null;
                } else {
                    activeCategory = cat;
                }
                renderProducts();
                updateCategoryChipsActive();
                // Fechar barra de busca após selecionar categoria
                searchBar.classList.remove('show');
            });
            searchCategoriesContainer.appendChild(chip);
        });
    }
    
    function updateCategoryChipsActive() {
        const chips = document.querySelectorAll('.search-category-chip');
        chips.forEach(chip => {
            const catText = chip.textContent.trim().replace(/[^a-zA-ZÀ-ÿ]/g, '');
            const activeCatClean = activeCategory ? activeCategory.replace(/[^a-zA-ZÀ-ÿ]/g, '') : '';
            if (activeCategory && catText === activeCatClean) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });
    }
    
    // Busca por texto
    function performSearch() {
        currentSearchTerm = searchInput.value;
        renderProducts();
        searchBar.classList.remove('show');
    }
    
    // Limpar filtros
    function clearFilters() {
        activeCategory = null;
        currentSearchTerm = '';
        searchInput.value = '';
        renderProducts();
        updateCategoryChipsActive();
        searchBar.classList.remove('show');
    }
    
    // Eventos de UI
    if (menuHamburger) {
        menuHamburger.addEventListener('click', () => {
            sideMenu.classList.add('open');
            overlay.classList.add('active');
        });
    }
    
    function closeSideMenu() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('active');
    }
    
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeSideMenu);
    if (overlay) overlay.addEventListener('click', closeSideMenu);
    
    // Lupa: abre/fecha barra de pesquisa
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchBar.classList.toggle('show');
            if (searchBar.classList.contains('show')) {
                searchInput.focus();
            }
        });
    }
    
    if (searchSubmit) searchSubmit.addEventListener('click', performSearch);
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
    
    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearFilters);
    
    // Modal events
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Inicialização
    renderSearchCategories();
    renderProducts();
    
    // Fechar menu ao clicar em links
    const sideLinks = document.querySelectorAll('.side-menu ul li a');
    sideLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeSideMenu();
            if (link.textContent.includes('WhatsApp')) {
                openWhatsApp('atendimento da loja', 0);
            }
        });
    });
});