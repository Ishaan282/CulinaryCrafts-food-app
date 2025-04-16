import ChocolateCake from './recipes/ChocolateCake';
import Soup from './recipes/Soup';
import Salads from './recipes/Salads';
import Pizza from './recipes/Pizza';
import Sushi from './recipes/Sushi';
import Pastasss from './recipes/Pastasss';
import Banana from './recipes/Banana';
import Waffels from './recipes/Waffels';
import CheeseCake from './recipes/CheeseCake';

const recipeRoutes = [
  { path: "/recipe/CheeseCake", element: <CheeseCake />, key: "CheeseCake" },
  { path: "/recipe/ChocolateCake", element: <ChocolateCake />, key: "ChocolateCake" },
  { path: "/recipe/Soup", element: <Soup />, key: "Soup" },
  { path: "/recipe/Salads", element: <Salads />, key: "Salads" },
  { path: "/recipe/Pizza", element: <Pizza />, key: "Pizza" },
  { path: "/recipe/Sushi", element: <Sushi />, key: "Sushi" },
  { path: "/recipe/Pastasss", element: <Pastasss />, key: "Pastasss" },
  { path: "/recipe/Banana", element: <Banana />, key: "Banana" },
  { path: "/recipe/Waffels", element: <Waffels />, key: "Waffels" },
];

export default recipeRoutes;