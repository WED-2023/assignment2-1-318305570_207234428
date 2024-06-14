(()=>{"use strict";var e={7599:(e,t,a)=>{a.d(t,{Z:()=>b});var r=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},s=[],n=a(6835),i=a(8534),o=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])])])},l=[];const c={data:function(){return{}},props:{recipe:{type:Object,required:!0}}},u=c;var p=a(1001),m=(0,p.Z)(u,o,l,!1,null,"801832ee",null);const d=m.exports;var h=a(4293);const g={name:"RecipePreviewList",components:{RecipePreview:d},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},watch:{$props:{handler:function(){this.updateRecipes()},deep:!0}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,i.Z)((0,n.Z)().mark((function t(){var a,r,s;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=3,r=(0,h.j)(a),s=r.data.recipes,e.recipes=s}catch(n){console.error("Error fetching recipes:",n)}case 1:case"end":return t.stop()}}),t)})))()}}},f=g;var v=(0,p.Z)(f,r,s,!1,null,"a86701de",null);const b=v.exports},932:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login_container"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login ")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},s=[],n=a(6835),i=a(8534),o=(a(7658),a(379)),l=a(9239);const c={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:o.C1},password:{required:o.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],a=t.$dirty,r=t.$error;return a?!r:null},Login:function(){var e=this;return(0,i.Z)((0,n.Z)().mark((function t(){var a;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=!0,(0,l.sD)({username:e.form.username,password:e.form.password},a),console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/")}catch(r){console.log(r.response),e.form.submitError=r.response.data.message}case 1:case"end":return t.stop()}}),t)})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=c;var p=a(1001),m=(0,p.Z)(u,r,s,!1,null,"9e2c9ff4",null);const d=m.exports},4358:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var r=a(144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand-lg bg-dark"},[e._m(0),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo01"}},[t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"main"}}},[e._v("Home")]),t("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0 align-items-center"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"search"}}},[e._v("Search")])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[e._v("About")])],1),e.$root.store.username?e._e():t("li",{staticClass:"nav-item"},[e._v(" Hello Guest: "),t("router-link",{staticClass:"nav-link d-inline",attrs:{to:{name:"register"}}},[e._v("Register")])],1),e.$root.store.username?e._e():t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[e._v("Login")])],1),e.$root.store.username?t("li",{staticClass:"nav-item"},[t("b-dropdown",{attrs:{text:"Personal"}},[t("b-dropdown-item",{attrs:{href:"#"}},[e._v("Favorites")]),t("b-dropdown-item",{attrs:{href:"#"}},[e._v("My Recipes")]),t("b-dropdown-item",{attrs:{href:"#"}},[e._v("My Family's Recipes")])],1)],1):e._e(),e.$root.store.username?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"newRecipe"}}},[e._v("New Recipe")])],1):e._e(),e.$root.store.username?t("li",{staticClass:"nav-item"},[e._v(" "+e._s(e.$root.store.username)+": ")]):e._e(),e.$root.store.username?t("li",{staticClass:"nav-item"},[t("button",{staticClass:"btn btn-link nav-link",on:{click:e.Logout}},[e._v("Logout")])]):e._e()]),e._m(1)],1)]),t("router-view")],1)},n=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e._self._c;return t("form",{staticClass:"form-inline my-2 my-lg-0"},[t("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),t("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[e._v("Search")])])}],i=(a(7658),a(1642)),o=a(7379);const l={name:"App",components:{BDropdown:i.R,BDropdownItem:o.E},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},c=l;var u=a(1001),p=(0,u.Z)(c,s,n,!1,null,null,null);const m=p.exports;var d=a(1939),h=a.n(d),g=a(9669),f=a.n(g),v=(a(8783),a(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[t("div",{staticClass:"column-left"},[t("RecipePreviewList",{key:e.randomRecipesKey,attrs:{title:"Explore this recipes"}}),t("b-button",{staticClass:"new-recipes-button",attrs:{variant:"primary"},on:{click:e.refreshRandomRecipes}},[e._v("New Random Recipes")])],1),t("div",{staticClass:"column-right"},[e.$root.store.username?t("div",[t("RecipePreviewList",{attrs:{title:"Last Viewed Recipes",recipes:e.lastViewedRecipes}})],1):t("div",[t("LoginPage")],1)])])}),b=[],w=a(6835),y=a(8534),k=a(7599),C=a(932);const _={components:{RecipePreviewList:k.Z,LoginPage:C["default"]},data:function(){return{randomRecipesKey:0,lastViewedRecipes:[]}},mounted:function(){this.fetchLastViewedRecipes()},methods:{refreshRandomRecipes:function(){this.randomRecipesKey+=1},fetchLastViewedRecipes:function(){var e=this;return(0,y.Z)((0,w.Z)().mark((function t(){var a;return(0,w.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://your-api-endpoint.com/last-viewed-recipes");case 3:return a=t.sent,t.next=6,a.json();case 6:e.lastViewedRecipes=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error("Error fetching last viewed recipes:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},S=_;var L=(0,u.Z)(S,v,b,!1,null,"ca358b3a",null);const P=L.exports;var x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},T=[],$={},I=(0,u.Z)($,x,T,!1,null,null,null);const R=I.exports;var j=[{path:"/",name:"main",component:P},{path:"/register",name:"register",component:function(){return a.e(738).then(a.bind(a,1738))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(a.bind(a,932))}},{path:"/search",name:"search",component:function(){return a.e(900).then(a.bind(a,9900))}},{path:"/recipes",name:"recipe",component:function(){return a.e(662).then(a.bind(a,4662))}},{path:"/about",name:"about",component:function(){return a.e(737).then(a.bind(a,7737))}},{path:"/newRecipe",name:"newRecipe",component:function(){return a.e(135).then(a.bind(a,9135))}},{path:"*",name:"notFound",component:R}];const O=j;var D=a(8345),E=a(8620),N=(a(7024),a(9301)),Z=a(7563),B=a(5053),F=a(1869),A=a(8672),G=a(5962),M=a(8348),q=a(4063),U=a(4167),z=a(8824);r["default"].use(D.ZP);var V=new D.ZP({routes:O});[N.E,Z.w6,B.g,F.SY,A.xL,G.u3,M.v5,q.F,U.m$,z.A6].forEach((function(e){return r["default"].use(e)})),r["default"].use(E.ZP),f().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),f().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(h(),f()),r["default"].config.productionTip=!1;var K={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(K),new r["default"]({router:V,data:function(){return{store:K}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(m)}}).$mount("#app")},9239:(e,t,a)=>{function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"A user is already logged in",success:!1}}};return{status:200,response:{data:{message:"login succeeded",success:!0}}}}function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"Username taken",success:!1}}};return{status:200,response:{data:{message:"user created",success:!0}}}}a.d(t,{Ge:()=>s,sD:()=>r})},4293:(e,t,a)=>{a.d(t,{i:()=>o,j:()=>n});a(2707),a(7042),a(9826),a(1539);const r=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}'),s=JSON.parse('[{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."},{"id":808,"image":"https://assets.bonappetit.com/photos/62f1aa15af9bae430097bdf5/1:1/w_1920,c_limit/0808-raw-tomato-pasta-lede.jpg","title":"Grated Tomato and Miso-Butter Pasta","readyInMinutes":25,"aggregateLikes":50,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"It turns out that the best no-cook pasta sauce…is a little bit cooked. There’s a reason classic marinara takes an hour on the stove, or tomato paste (itself a long-cooked and deeply concentrated tomato product) is such a beloved sauce ingredient—tomatoes are simply better when their bright, acidic sweetness hangs out in a hot pan for a while. But peak summer tomatoes are close to perfect straight from the farmers market, and the last thing I want to do on a hot evening is spend hours stirring a bubbling pot of sauce. So to get the best of both worlds, we’re making a deeply savory tomato pasta that’s extremely fast and almost no-cook.</a>."},{"id":521,"image":"https://assets.bonappetit.com/photos/6079b9105799229a8ef965a4/1:1/w_1920,c_limit/0521-Yasmin-Khan-Sour-Cherry-Cheesecake.jpg","title":"Sour Cherry Cheesecake","readyInMinutes":50,"aggregateLikes":72,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"In her cookbook, Ripe Figs: Recipes and Stories from Turkey, Greece, and Cyprus, author Yasmin Khan celebrates the sharp, tangy cherry—a prized fruit in Turkey—by pairing it with a cake of baked yogurt and cream cheese. She uses frozen sour cherries for this recipe (they’re pitted, which saves time), but you can use fresh ones when they’re in season. To avoid a cracked cheesecake, don’t overwork the cream cheese mixture; be sure to line the baking pan; bake it slowly (if you know your oven runs hot, you can drop the temperature 25 degrees); and let the cheesecake cool gradually.</a>."}]');function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=s.sort((function(){return.5-Math.random()})),a=t.slice(0,e);return{data:{recipes:a}}}function i(e){return r.find((function(t){return t.id===e}))}function o(e){var t=i(e);return t?{data:{recipe:t}}:{status:404,data:null}}}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,s,n)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,s,n]=e[u],o=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(o=!1,n<i&&(i=n));if(o){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{135:"f1b006e2",662:"41040ae1",737:"239d49f6",738:"94fdf747",900:"7142027c"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{662:"3066abc5",738:"7193f2b4",900:"9fe641e0"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";a.l=(r,s,n,i)=>{if(e[r])e[r].push(s);else{var o,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+n){o=p;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+n),o.src=r),e[r]=[s];var m=(t,a)=>{o.onerror=o.onload=null,clearTimeout(d);var s=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((e=>e(a))),t)return t(a)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,r,s)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=o,n.parentNode&&n.parentNode.removeChild(n),s(l)}};return n.onerror=n.onload=i,n.href=t,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var s=a[r],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){s=i[r],n=s.getAttribute("data-href");if(n===e||n===t)return s}},r=r=>new Promise(((s,n)=>{var i=a.miniCssF(r),o=a.p+i;if(t(i,o))return s();e(r,o,null,s,n)})),s={143:0};a.f.miniCss=(e,t)=>{var a={662:1,738:1,900:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=r(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var n=new Promise(((a,r)=>s=e[t]=[a,r]));r.push(s[2]=n);var i=a.p+a.u(t),o=new Error,l=r=>{if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,s[1](o)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,[i,o,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var u=l(a)}for(t&&t(r);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[998],(()=>a(4358)));r=a.O(r)})();
//# sourceMappingURL=app.c257f6a2.js.map