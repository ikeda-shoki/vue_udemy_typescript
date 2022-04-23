<script setup lang="ts">
  type Props = {
    open: boolean
  }

  defineProps<Props>()
</script>

<template>
  <div class="backdrop" v-if="open"></div>
  <transition name="modal">
    <dialog open v-if="open" class="dialog">
      <slot></slot>
    </dialog>
  </transition>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.508);
}

.dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background-color: white;
  z-index: 100;
  border: none;
}

.modal-enter-active {
  animation: modal .5s ease-out;
}

.modal-leave-active {
  /* reverseを使用するとanimateionを逆向きで発火させる */
  animation: modal .3s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

</style>