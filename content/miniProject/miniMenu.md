---
title: mini sideMenu
description: 'this is a simple mobile menu with hover animation. I also add dark mode to it so it can toggle between. I add the code below so feel free to use it.'
image : 'card-hover-001.webp'
---

# Mini sideMenu
<img src="/component/card-hover-001.webp"/>
Hope you find it useful and Enjoy to use it.
<P class="angry">Lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nobis nostrum. Alias voluptatem deserunt, voluptas delectus ipsa soluta. Cupiditate libero laudantium amet ducimus dignissimos ullam magni quisquam ratione eaque dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nobis nostrum. Alias voluptatem deserunt, voluptas delectus ipsa soluta. Cupiditate libero laudantium amet ducimus dignissimos ullam magni quisquam ratione eaque dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nobis nostrum. Alias voluptatem deserunt, voluptas delectus ipsa soluta. Cupiditate libero laudantium amet ducimus dignissimos ullam magni quisquam ratione eaque dolores!</p>

### Html
```html
<div
      class="dark-go flex justify-start w-16 mb-7 text-amber-500 p-2 bg-white rounded-full"
      @click="DarkMode()"
    >
      <fa class="fa m-auto" :icon="Toggle" />
    </div>
    <nav class="navigation">
      <ul id="mini_nav"  >
        <li >
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Home" /> </span>
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Code" /> </span>
            <span class="title">Mini Prohect</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="User" /></span>
            <span class="title">About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Rocket" /></span>
            <span class="title">Premume Project</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Cog" /></span>
            <span class="title">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
```

### scss
``` scss
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600;700&display=swap");
nav {
  font-family: "Oswald", sans-serif;
}

.dark-go {
  font-size: 20px;
}
.dark-go.dark-mode {
  background: black;
  color: #4fdde7;
}
```


# I Hope You Enjoyed the code 
