// import axios from 'axios';
// import { attachTokenToHeaders } from '@/lib/utils';
//
// export async function checkMaintenanceMode(): Promise<boolean> {
//   try {
//     const response = await axios.get(`http://backend:5000/api/settings/public/maintenance`,attachTokenToHeaders());
//     console.log('Maintenance mode check:', response.data);
//
//     // La réponse est encapsulée par ResponseProvider
//     const maintenanceValue = response.data.data?.maintenance_mode || response.data.maintenance_mode;
//     return maintenanceValue === 'true';
//   } catch (error) {
//     console.error('Erreur lors de la vérification du mode maintenance:', error);
//     // En cas d'erreur, on considère que le site n'est pas en maintenance
//     return false;
//   }
// }
