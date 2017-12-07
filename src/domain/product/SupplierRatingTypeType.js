
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


const SupplierRatingTypeType = new GraphQLObjectType({
  name: 'SupplierRatingTypeType',
  description: 'Type for SupplierRatingType in product',

  fields: () => ({
    supplierRatingTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    supplierProduct: {
      type: new GraphQLList(SupplierProductType),
      args : {supplierRatingTypeId: {type: GraphQLString}},
      resolve: (supplierRatingType, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?supplierRatingTypeId=${supplierRatingType.supplierRatingTypeId}`)
    }
  })
});

export {SupplierRatingTypeType};
    