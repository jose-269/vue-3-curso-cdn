import { createRouter, createWebHashHistory } from "vue-router";

// import ListPage from "../modules/pokemon/pages/ListPage";
// import PokemonPage from "../modules/pokemon/pages/PokemonPage";

// import NoPageFound from "../modules/shared/pages/NoPageFound";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    component: () =>
    import(  /* webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layout/PokemonLayout"),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:id",
        name: "pokemon-id",
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id: Number(id) };
        },
      },
      {
          path: '',
          redirect: { name: 'pokemon-about' }
      },
    ],
  },
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [ isAuthenticatedGuard ],
    component: () => import(  /* webpackChunkName: "DragonBallLayout.vue" */ "@/modules/dbz/layout/DragonBallLayout.vue"),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(  /* webpackChunkName: "Characters.vue" */ "@/modules/dbz/pages/Characters.vue"),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import(  /* webpackChunkName: "About.vue" */ "@/modules/dbz/pages/About.vue"),
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' }
      },
    ]
  },

  {
    path: "/:pathMatch(.*)*",
    component: import(
      /* webpackChunkName: "NoPageFound" */ "@/modules/shared/pages/NoPageFound"
    ),

  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

    // Guard Global - Sincrono

    // router.beforeEach((to, from, next) => {
    //   console.log({to, from, next});

    //   const random = Math.random() * 100;
    //   if(random > 50) {
    //     console.log('autentificado');
    //     next()
    //   } else {
    //     console.log(random, 'bloqueado por el beforeEach Guard');
    //     next({name: 'pokemon-home'})
    //   }
    //   // console.log(random);
    // })

    // const canAccess = () => {
    //   return new Promise( resolve => {
    //     const random = Math.random() * 100;
    //       if(random > 50) {
    //         console.log('Autentificado - canAccess');
    //         resolve(true)
    //       } else {
    //         console.log(random, 'bloqueado por el beforeEach Guard');
    //         resolve(false)
    //       }
    //   })
    // };

    // router.beforeEach( async(to, from, next) => {
    //   const authorized = await canAccess();
    //   authorized ? next() : next({name: 'pokemon-home'})
    // })



export default router;
