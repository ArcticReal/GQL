
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SupplierProductType} from '../product/SupplierProductType.js';


const SupplierPrefOrderType = new GraphQLObjectType({
  name: 'SupplierPrefOrderType',
  description: 'Type for SupplierPrefOrder in product',

  fields: () => ({
    description: {type: GraphQLString},
    supplierPrefOrderId: {type: GraphQLString},
    supplierProduct: {
      type: new GraphQLList(SupplierProductType),
      args : {supplierPrefOrderId: {type: GraphQLString}},
      resolve: (supplierPrefOrder, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?supplierPrefOrderId=${supplierPrefOrder.supplierPrefOrderId}`)
    }
  })
});

export {SupplierPrefOrderType};
    