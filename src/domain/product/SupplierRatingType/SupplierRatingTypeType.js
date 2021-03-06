
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SupplierProductType} from '../../product/SupplierProduct/SupplierProductType.js';


const SupplierRatingTypeType = new GraphQLObjectType({
  name: 'SupplierRatingTypeType',
  description: 'Type for SupplierRatingType in product',

  fields: () => ({
    supplierRatingTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {},
      resolve: (supplierRatingType, args, {loaders}) => loaders.ofbizArray.load(`product/product/supplierProducts/find?supplierRatingTypeId=${supplierRatingType.supplierRatingTypeId}`)
    }
  })
});

export {SupplierRatingTypeType};
    