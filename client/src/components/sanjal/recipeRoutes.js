import React from 'react';
import { Route } from 'react-router-dom';

import ChocolateCake from './ChocolateCake';
import Soup from './Soup';
import Salads from './Salads';
import Pizza from './Pizza';
import Sushi from './Sushi';
import Pastasss from './Pastasss';
import Banana from './Banana';
import Waffels from './Waffels';
import CheeseCake from './CheeseCake';

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
];

export default recipeRoutes;