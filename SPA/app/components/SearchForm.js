export function SearchForm(){
    const $form = document.createElement('form');
    const $input = document.createElement('input');
    
    $form.classList.add('search-form');

    $input.name = `search`;
    $input.type = `search`;
    $input.placeholder = 'Buscar...';
    $input.autocomplete = 'off';
    $input.value = localStorage.getItem('wpSearch') || "";
    $input.classList.add('input-search');
    
    document.addEventListener('submit', e => {
        e.preventDefault();
        if(!e.target.matches('.search-form')) return false;
        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = '#/search?search='+localStorage.getItem('wpSearch');
        $input.value = localStorage.getItem('wpSearch');
    });

    document.addEventListener('search', e => {
        console.log('yes')
        if(!e.target.matches('input[type="search"]')) return false;
        if(!e.target.value) localStorage.removeItem('wpSearch');
    });

    $form.appendChild($input);
    
    return $form;
}