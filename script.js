// Ambil elemen dari HTML
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Event klik tombol Add
addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();

  // Cegah task kosong
  if (taskText === "") {
    alert("Task tidak boleh kosong!");
    return;
  }

  // Buat elemen list
  const li = document.createElement("li");
  li.textContent = taskText;

  // Buat tombol delete
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Event hapus task
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(li);
  });

  // Gabungkan ke list
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Kosongkan input
  input.value = "";
});
