
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

import {FixedAssetIdentType} from '../accounting/FixedAssetIdent.js';


const FixedAssetIdentTypeType = new GraphQLObjectType({
  name: 'FixedAssetIdentTypeType',
  description: 'Type for FixedAssetIdentType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString},
    fixedAssetIdents: {
      type: new GraphQLList(FixedAssetIdentType),
      args : {fixedAssetIdentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetIdentType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetIdents/find?fixedAssetIdentTypeId=${fixedAssetIdentType.fixedAssetIdentTypeId}`)
    }
  })
});

export {FixedAssetIdentTypeType};
    




const FixedAssetIdentTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetIdentTypeInputType',
  description: 'input type for FixedAssetIdentType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetIdentTypeInputType};
    