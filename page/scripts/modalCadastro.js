function openModal() {
    document.getElementById("taskModal").style.display = "flex";
    document.getElementById("modalTitle").innerText = "Nova Tarefa";
    document.getElementById("taskForm").reset();
    document.getElementById("task-id").value = "";
  }

  function closeModal() {
    document.getElementById("taskModal").style.display = "none";
  }

  function editTask(id, name, time, frequency, duration) {
    document.getElementById("taskModal").style.display = "flex";
    document.getElementById("modalTitle").innerText = "Editar Tarefa";
  
    document.getElementById("task-id").value = id;
    document.getElementById("task-name").value = name;
    document.getElementById("task-time").value = time;
    document.getElementById("task-frequency").value = frequency;
    document.getElementById("task-duration").value = duration;
  }

  document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const taskId = document.getElementById("task-id").value;
    const taskName = document.getElementById("task-name").value;
    const taskTime = document.getElementById("task-time").value;
    const taskFrequency = document.getElementById("task-frequency").value;
    const taskDuration = document.getElementById("task-duration").value;
    
    const name = document.getElementById("name")

    closeModal()});