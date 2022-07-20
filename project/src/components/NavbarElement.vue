<template>

  <nav class="navbar navbar-light nv " style="background-color: #2272b3a8;">
  <div class="container-fluid">
    <router-link class="navbar-brand nv1" to="/about">Автосервис РФ</router-link>
    <router-link class="navbar-brand nv1" to="/">Домой</router-link>
    <router-link class="navbar-brand nv1" to="/items">Топ двигателей</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ремонт
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
  margin-left: 200px;
  margin-right: 200px;
  max-width: 1600px;
}

.nv1 {
  font-size: 20px;
}

@media (min-width: 635px) and (max-width: 1000px){

  .nv1 {
  font-size: 15px;
  }
}
@media (min-width: 300px) and (max-width: 634px){
  .nv1 {
  visibility: hidden;
  }
}

</style>
