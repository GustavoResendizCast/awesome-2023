// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// GET /admin/add-product
router.get('/admin/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.sendFile(path.resolve('views','add-product.html'));
});

// POST /admin/add-product
router.post('/admin/add-product', (req, res) => {
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  console.log(req.body);
  res.redirect('/');
});

// Exportando el enrutador admin
export default router;
