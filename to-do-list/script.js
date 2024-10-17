document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah refresh halaman

    const todoInput = document.getElementById('todo-input').value;

    if (todoInput === '') return; // Jangan tambahkan jika input kosong

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');

    // Tambahkan task dengan teks dan tombol edit/delete
    li.innerHTML = `
        <input type="text" class="task-text" value="${todoInput}" readonly />
        <div class="action-buttons">
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="save-btn" style="display: none;"><i class="fas fa-check"></i></button>
            <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
        </div>
    `;

    // Tambahkan kelas animasi saat menambahkan task
    li.classList.add('add-animation');
    todoList.appendChild(li);

    // Bersihkan input setelah menambahkan task
    document.getElementById('todo-input').value = '';

    // Fungsi untuk menghapus task
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.classList.add('remove-animation'); // Tambahkan kelas animasi saat menghapus
        // Hapus item setelah animasi selesai
        setTimeout(() => {
            li.remove();
        }, 500); // Durasi animasi sesuai dengan waktu yang ditentukan
    });

    // Fungsi untuk mengedit task
    li.querySelector('.edit-btn').addEventListener('click', function() {
        const taskInput = li.querySelector('.task-text');
        const saveBtn = li.querySelector('.save-btn');
        taskInput.removeAttribute('readonly'); // Menghilangkan readonly
        taskInput.focus(); // Fokus ke input untuk mengedit
        this.style.display = 'none'; // Sembunyikan tombol edit
        saveBtn.style.display = 'inline'; // Tampilkan tombol save
    });

    // Fungsi untuk menyimpan task setelah diedit
    li.querySelector('.save-btn').addEventListener('click', function() {
        const taskInput = li.querySelector('.task-text');
        taskInput.setAttribute('readonly', 'readonly'); // Kunci kembali input
        this.style.display = 'none'; // Sembunyikan tombol save
        li.querySelector('.edit-btn').style.display = 'inline'; // Tampilkan tombol edit kembali
    });
});
