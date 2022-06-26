<template>

  <nav class="navbar navbar-light nv " style="background-color: #2272b3a8;">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/about">Автосервис РФ</router-link>
    <router-link class="navbar-brand" to="/">Домой</router-link>
    <router-link class="navbar-brand" to="/items">Список доступных запчастей</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Список
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Двигателя</a></li>
            <li><a class="dropdown-item" href="#">Подвески</a></li>
            <li><a class="dropdown-item" href="#">Ходовой</a></li>
            <li><a class="dropdown-item" href="#">АКПП и CVT</a></li>
            <li><a class="dropdown-item" href="#">Тормозной системы</a></li>

            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">мойка / химчистка / детейлинг</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Номер детали" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Найти</button>
      </form>
    </div>
  </div>
</nav>

</template>

<script>
export default {

}
</script>

<style scoped>

.nv {
  margin-left: 50px;
  max-width: 1600px;
}
  

</style>
