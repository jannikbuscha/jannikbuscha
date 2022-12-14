<template>
  <div class="mx-auto flex">
    <div class="w-full overflow-x-hidden">
      <main
        class="relative flex flex-col items-center justify-center w-full h-full overflow-hidden [--geist-foreground:#fff] dark:[--geist-foreground:#000] [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <span class="leftLights opacity-50 dark:opacity-100"></span>
          <span class="rightLights opacity-50 dark:opacity-100"></span>

          <div
            class="![perspective:1000px] sm:![perspective:1000px] md:![perspective:1000px] lg:![perspective:1000px] hero-bg-container">
            <div class="z-[100] absolute inset-0 [--gradient-stop-1:0px] [--gradient-stop-2:50%]" style="
                background: linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0) 0px,
                  var(--geist-foreground) 50%
                );
              "></div>
            <div style="
                transform: rotateX(75deg);
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              ">
              <div class="hero-bg-lines"></div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-wrap h-full w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-0 flex-col lg:!flex-row z-10 lg:!translate-y-0">
          <a v-for="n in 4" :key="n" class="w-[calc(100%_-_0px)] h-[304]px sm:!w-[488px] sm:h-[352px] animated-border-container">
            <i aria-hidden="true" class="animated-border"></i>
            <div
              class="relative w-full h-full max-w-full !pb-12 pt-8 md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.05)] card-bg">
              <p class="text-lg !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70">
                {{ n }}. High-performance build system for JavaScript and TypeScript
                codebases.
              </p>
            </div>
          </a>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.dark .card-bg {
  background: #000;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  box-shadow: 0 20px 48px rgb(0 0 0 / 20%);
}

.card-bg {
  background: #fff;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 3%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%);
}

.hero-bg-container {
  position: absolute;
  z-index: -6;
  overflow: hidden;
  inset: 0;
  transition: perspective 3s ease 0s;
}

.hero-bg-lines {
  --right: #4c2638;
  --left: #223b67;
  position: absolute;
  width: 200vw;
  margin-left: -50%;
  transform: translateY(0);
  background-image: linear-gradient(to right,
      var(--left) 45%,
      transparent 50%,
      var(--right) 55%);
  -webkit-mask-image: linear-gradient(90deg, #000 2px, transparent 0),
    linear-gradient(180deg, #000 2px, transparent 0);
  mask-image: linear-gradient(90deg, #000 2px, transparent 0),
    linear-gradient(180deg, #000 2px, transparent 0);
  -webkit-mask-size: 60px 60px;
  mask-size: 60px 60px;
  overflow: hidden;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: -100% 0;
  background-position-y: 100%;
  -webkit-mask-position: 50% 0;
  mask-position: 50% 0;
  animation: hero-bg-animation 60s linear infinite;
}

@media (min-width: 1024px) {
  .hero-bg-lines {
    animation-duration: 30s;
    -webkit-mask-size: 80px 80px;
    mask-size: 80px 80px;
  }
}

@keyframes hero-bg-animation {
  0% {
    transform: translateY(0)
  }

  to {
    transform: translateY(calc(50% + 28px))
  }
}

.leftLights:after,
.leftLights:before,
.rightLights:after,
.rightLights:before {
  content: "";
  position: absolute;
  pointer-events: none;
  filter: blur(125px);
  will-change: filter;
  mix-blend-mode: normal;
}

.leftLights:before {
  width: 25%;
  height: 900px;
  left: -12.5%;
  top: calc(50% - 900px / 2 + 151px);
  opacity: .2;
  background: linear-gradient(180deg, #77b8ff, rgba(42, 138, 246, .4));
  transform: rotate(-15deg);
  border-bottom-left-radius: 25% 25%;
  border-bottom-right-radius: 25% 25%;
  border-top-left-radius: 100% 100%;
  border-top-right-radius: 100% 100%;
  z-index: 200;
}

.leftLights:after {
  width: 40%;
  height: 422px;
  left: 0;
  top: calc(50% - 422px / 2 + 298px);
  opacity: .5;
  background: linear-gradient(180deg, rgba(29, 92, 162, .2), rgba(42, 138, 246, .4));
}

.rightLights:before {
  z-index: 200;
  width: 25%;
  height: 900px;
  right: -12.5%;
  top: calc(50% - 900px / 2 + 151px);
  background-image: linear-gradient(180deg, rgba(236, 151, 207, .4), #e92a67);
  transform: rotate(15deg);
  border-bottom-left-radius: 25% 25%;
  border-bottom-right-radius: 25% 25%;
  border-top-left-radius: 100% 100%;
  border-top-right-radius: 100% 100%;
  opacity: .2;
  overflow: hidden;
}

.rightLights:after {
  width: 40%;
  height: 422px;
  right: 0;
  top: calc(50% - 422px / 2 + 298px);
  opacity: .25;
  background: linear-gradient(180deg, rgba(236, 151, 207, .4), #e92a67);
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.animated-border-container {
  --border-radius: 12px;
    --border-size: 1px;
    --padding: 1px;
    --border-bg: conic-gradient(from 180deg at 50% 50%,#e92a67 0deg,#a853ba 112.5deg,#2a8af6 228.75deg,rgba(42,138,246,0) 360deg);
    position: relative;
    overflow: hidden;
    font-size: 2rem;
    padding: calc(var(--padding) + var(--border-size));
    border-radius: var(--border-radius);
    display: inline-block;
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    perspective: 1000;
    transform: translateZ(0);
}

.animated-border {
  content: "";
  position: absolute;
  top: var(--border-size);
  right: var(--border-size);
  bottom: var(--border-size);
  left: var(--border-size);
  padding: var(--border-size);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
  border-radius: calc(var(--border-radius) + var(--border-size));
}

.animated-border:before {
  content: "";
  display: block;
  background: var(--border-bg);
  box-shadow: 0 0 40px 20px --var(--border-bg);
  width: calc(100% * 1.41421356237);
  padding-bottom: calc(100% * 1.41421356237);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  z-index: -2;
  animation: border-spin-animation 5s linear infinite;
}

@keyframes border-spin-animation {
  0% {
    transform: translate(-50%, -50%) rotate(1turn)
  }

  to {
    transform: translate(-50%, -50%) rotate(0)
  }
}
</style>
