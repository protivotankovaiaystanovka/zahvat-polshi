document.querySelectorAll('.filter-header').forEach(header => {
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        const filterItem = header.parentElement;
        const wasActive = filterItem.classList.contains('active');

        // Закрываем все фильтры
        document.querySelectorAll('.filter-item').forEach(item => {
            item.classList.remove('active');
        });

        // Открываем текущий только если он был закрыт
        if (!wasActive) {
            filterItem.classList.add('active');
        }
    });
});

// Закрытие при клике вне фильтра
document.addEventListener('click', () => {
    document.querySelectorAll('.filter-item').forEach(item => {
        item.classList.remove('active');
    });
});