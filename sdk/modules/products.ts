// import { BaseModule } from "./base";

// export class Products extends BaseModule {
//   async list(limit: number = 10) {
//     const query = `
//       query Products($limit: Int) {
//         products(limit: $limit) {
//           id
//           name
//           price
//         }
//       }
//     `;
//     return this.client.request(query);
//   }

//   async get(id: string) {
//     const query = `
//       query Product($id: ID!) {
//         product(id: $id) {
//           id
//           name
//           description
//           price
//         }
//       }
//     `;
//     return this.client.request();
//   }
// }
