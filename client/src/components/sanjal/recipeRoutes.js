import React from 'react';
import { Route } from 'react-router-dom';

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
  <Route key="CheeseCake" path="/recipie/CheeseCake" element={<CheeseCake />} />,
  <Route key="ChocolateCake" path="/recipie/ChocolateCake" element={<ChocolateCake />} />,
  <Route key="Soup" path="/recipie/Soup" element={<Soup />} />,
  <Route key="Salads" path="/recipie/Salads" element={<Salads />} />,
  <Route key="Pizza" path="/recipie/Pizza" element={<Pizza />} />,
  <Route key="Sushi" path="/recipie/Sushi" element={<Sushi />} />,
  <Route key="Pastasss" path="/recipie/Pastasss" element={<Pastasss />} />,
  <Route key="Banana" path="/recipie/Banana" element={<Banana />} />,
  <Route key="Waffels" path="/recipie/Waffels" element={<Waffels />} />,
  // <Route key="Dodo" path="/recipie/Dodo" element={<Dodo />} />
];

export default recipeRoutes;